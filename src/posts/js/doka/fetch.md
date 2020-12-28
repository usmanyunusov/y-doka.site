---
title: "fetch"
name: fetch
author: windrushfarer
co-authors:
designers:
contributors:
tags:
  - sprint-10
  - sprint-12
summary:
  - фетч
  - запрос
---

## Кратко

С помощью функции `fetch` можно отправлять сетевые запросы на сервер — как получать, так и отправлять данные. Метод возвращает [promise](/js/long/promise) с объектом ответа, где находится дополнительная информация (статус ответа, заголовки) и ответ на запрос.

## Как понять

Браузер предоставляет глобальный API для работы с HTTP запросами и ответами. Раньше для подобной работы использовался XMLHttpRequest, однако `fetch` более гибкая и мощная альтернативой, он понятнее и проще в использовании из-за того, что использует `Promise`.

## Как пишется

Функция `fetch` принимает два параметра:

- `url` — адрес, по которому нужно сделать запрос
- `options` (необязательный) — объект конфигурации, в котором можно настроить метод запроса, тело запроса, заголовки и многое другое

По-умолчанию вызов `fetch` делает GET запрос по указанному адресу. Базовый вызов для получения данных можно записать таким образом:

```js
fetch("http://jsonplaceholder.typicode.com/posts")
```

Результатом вызова `fetch` будет `Promise`, в котором будет содержаться специальный объект ответа `Response`. У этого объекта есть два важных для нас поля:

- `ok` — принимает состояние `true` или `false` и сообщает об успешности запроса
- `json` — метод, вызов которого, возвращает результат запроса в виде json

```js
fetch("http://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => data) // Получим ответ [{...}, {...}, {...}, ...]
```

С помощью второго аргумента `options` можно передать настройки запроса. Например, можно изменить метод и добавить тело запроса, если мы хотим не получать, а отправлять данные. Так же в запрос можно добавить заголовки в виде объекта или специального класса `Headers` .

```js
const newPost = {
  title: "foo",
  body: "bar",
  userId: 1,
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // Здесь так же могут быть GET, PUT, DELETE
  body: JSON.stringify(newPost), // Тело запроса в JSON формате
  headers: {
    // Добавляем необходимые заголовки
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data) // {title: "foo", body: "bar", userId: 1, id: 101}
  })
```

### Cookies

По-умолчанию `fetch` запросы не включают в себя cookies и потому авторизованные запросы на сервере могут не пройти. Для этого необходимо добавить в настройку поле `credentials`:

```js
fetch("https://somesite.com/admin", {
  method: "GET",
  // или 'same-origin' если можно делать такие запросы только в пределах этого домена
  credentials: "include",
})
```

### Обработка ошибок

Если ответом на запрос `fetch` была ошибка (например HTTP код 400, 404 или 500), то `Promise` не попадет в состояние _rejected_. Promise выполнится с ошибкой только если запрос не случился из-за сбоя сети или что-то помешало выполнению `fetch`.

```js
// Запрос вернет ошибку 404 Not Found
fetch("https://jsonplaceholder.typicode.com/there-is-no-such-route").catch(
  () => {
    console.log("Error occured!")
  }
) // Никогда не выполнится
```

Чтобы обработать ошибку запроса необходимо обращать внимание на поле `ok` в объекте ответа `Response` . В случае ошибки запроса оно будет равно `false`

```js
fetch("https://jsonplaceholder.typicode.com/there-is-no-such-route")
  .then((response) => {
    // Проверяем успешность запроса и выкидываем ошибку
    if (!response.ok) {
      throw new Error("Error occured!")
    }

    return response.json()
  })
  // Теперь попадём сюда т.к выбросили ошибку
  .catch((err) => {
    console.log(err)
  }) // Error: Error occured!
```

## В работе

### Отмена запроса

Иногда может возникнуть необходимость прервать запрос, например когда авторизация пользователя просрочена или пользователь самостоятельно хочет отменить запрос (отменил скачивание файла)

```js
const controller = new AbortController()

function fetchData() {
  return fetch("http://jsonplaceholder.typicode.com/posts", {
    signal: controller.signal,
  })
    .then((response) => response.json())
    .catch((e) => {
      console.log(e)
    })
}

fetchData()

// Если запрос еще не выполнился, то он будет прерван
// прерванный fetch вернет Promise с ошибкой
controller.abort()
```

Запрос не выполнится, в консоли будет ошибка `The user aborted a request` . Если заглянуть в инструменты разработчика, то там можно увидеть отмененный статус у запроса.

![пример прерванного запроса](/assets/images/posts/js/fetch/cancelled.png)

### Загрузка файла на сервер

С помощью `fetch` можно загружать файлы на сервер, например когда пользователь хочет загрузить свой аватар в профиль. Отправку файлов можно осуществлять с помощью специального объекта `FormData`. Покажем на примере обработчика отправки формы.

```html
<form id="form">
  <input type="file" id="avatar" />
  <button type="submit">Загрузить</button>
</form>
```

```js
// Находим элемент с файлом
const fileInput = document.getElementById("avatar")
const form = document.getElementById("form")

function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData()

  // Добавляем файлы из ипнута к данным
  for (let i = 0; i < fileInput.files.length; i++) {
    const file = fileInput.files[i]
    formData.append("avatar", file, file.name)
  }

  // Отправляем файлы на сервер
  fetch("https://backend.com/api/upload", {
    method: "POST",
    body: formData,
  })
}

form.addEventListener("submit", handleSubmit)
```

### Скачивание данных с результатом прогресса

Чтобы получать текущий прогресс скачивания файла или любых других данных нам понадобится использовать свойство `body` объекта `Response`, который возвращается в `Promise` после вызова `fetch`. Поле `body` является «потоком для чтения» (`Readable Stream`) — это специальный объект, который дает возможность получать информацию по частям, по мере её поступления на клиент.

Попробуем таким образом загрузить милое видео как белый котик дружит с огромным псом.

```js
fetch("https://i.imgur.com/C5QXZ7u.mp4").then(async (response) => {
  let received = 0

  // Получаем поток в переменную
  const reader = response.body.getReader()

  // Считываем сколько общую длину данных
  const contentLength = parseInt(response.headers.get("Content-Length"), 10)

  while (true) {
    // После вызова read() возвращается объект, в котором
    // done — boolean-значение о том закончилась ли информарция
    // value — массив байт, которые пришли в этот раз
    const { done, value } = await reader.read()

    if (done) {
      console.log(`Получено 100%`)
      break
    }

    received += Math.ceil(contentLength / value.length)

    console.log(`Получено ${received}%`)
  }
})
```
