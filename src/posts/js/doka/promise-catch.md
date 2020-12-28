---
title: "Promise. Метод catch"
name: promise-catch
author: N_Lopin
co-authors:
designers:
contributors:
summary:
  - промис
  - кэтч катч кеч
---

Эта статья связана с понятием [Promise](/js/long/promise)

## Кратко

Метод `catch` используют для обработки ошибки при выполнении асинхронной операции.

Метод _принимает_ один аргумент:

- `onReject` — функция-колбэк, которая будет вызвана при переходе промиса в состояние «ошибка» `rejected`. Функция имеет один параметр, в который передается информация об ошибке

_Возвращает_ промис.

## Как пишется

```js
// getPasswords() — асинхронная функция, которая возвращает промис
getPasswords()
  .then(function (result) {
    // выполнится, если операция успешна
  })
  .catch(function (err) {
    // колбэк выполнится, если getPassword завершится ошибкой
    alert(err.message)
  })
```

## Как понять

`catch` выполняет переданный ему колбэк когда асинхронная операция:

- вызывает функцию `reject` внутри промиса

```js
const rejectInSecond = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error("время истекло"))
  }, 1000)
})

rejectInSecond.catch(function (err) {
  console.error(err.message) // напечатает в консоль «время истекло»
})
```

- выбрасывает ошибку с помощью `throw`

```js
const throwInSecond = new Promise(function (resolve, reject) {
  setTimeout(function () {
    throw new Error("время истекло")
  }, 1000)
})

throwInSecond.catch(function (err) {
  console.error(err.message) // напечатает в консоль «время истекло»
})
```

- 🔧 Техническая деталь

  Под капотом `catch` содержит вызов `then`, где первый колбэк установлен в `undefine`:

  `catch(onReject)` → `then(undefined, onReject)`

## В работе

🛠 Всегда завершайте свои цепочки промисов вызовом метода `catch`. Если в одной из операций в цепочке произойдет ошибка, и она не будет обработана, то JavaScript выведет сообщение `Uncaught (in promise) Error` в консоль разработчика и перестанет работать на всей странице.
