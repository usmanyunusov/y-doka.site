---
title: "Объект"
name: object
author: vindi-r
co-authors:
designers:
contributors:
tags:
  - sprint-4
summary:
---

## Кратко

В JavaScript кроме примитивных типов, таких как `String` или `Boolean`, существует и сложные — например, объект.

**Объект** — это набор свойств. Каждое свойство состоит из названия и значения. Название может быть только строкой, значение может быть любым.

### 🤖Зачем нужны объекты?

- Использовать их в качестве структуры хранения любых данных;
- Делать сложные программы, в которых системы объектов решают простые задачи. Ещё это называют объектно-ориентированным программированием.

## Как пишется

Базовый вариант создания объекта или «литеральная запись» выглядит так:

```js
let o = {
key1: value1,
key2: value2,
.....
keyN: valueN,
};
```

Второй способ. Подробнее о нём и объектно-ориентированном программировании в JavaScript можно будет [почитать тут]():

```js
let o = new Object({ key1: "value1", keyN: "valueN" })
```

Объект, созданный через фигурные скобки и через new Object имеет одни и те же свойства и методы.

## Как это понять

Пустой объект без свойств можно создать особо не запариваясь:

```js
let cat = {}
```

Однако, пустые объекты создаются редко. Чаще всего сразу описываются какие-то свойства:

```js
let cat = {
  name: "Simon",
  gender: "male",
  color: "brown",
  age: 2,
  adorable: true,
}
```

Также можно записать свойства уже после создания объекта:

```js
let cat = {}
cat.name = "Simon"
cat.gender = "male"
cat.color = "brown"
cat.age = 2
cat.adorable = true
```

В итоге, объект `cat` будет одинаковым в обоих случаях. Изменение свойств объекта — важная часть работы с объектами.

```js
let comment = { id: 5 }
if (showMore === true) {
  comment.create = "29-12-2019"
  comment.author = "Vasya"
}
comment.text = "Комментарий пользователя"
```

Здесь создается объект комментария. Поля даты создания и автора указываются только при определенных условиях. Сделать так логичнее, чем писать весь объект заново. Только в учебных примерах объекты состоят из небольшого количества свойств, а на практике их всегда куча.

Названия ключей обычно пишут как есть, но если они начинаются с цифры или внутри есть пробел — пишут в кавычках. Пример для закрепления.

Не надо так:

```js
let cat = {
  born data: '15-04-2015',
};
```

А так норм:

```js
let cat = {
  "born data": "15-04-2015",
}
```

Взаимодействие с такими ключами тоже отличается, для обращения к ним необходимо пользоваться квадратными скобками:

```js
let cat = {
  "born data": "15-04-2015",
}
cat["born data"] = "22-10-2019"
console.log(cat["born data"])
```

Через квадратные скобки можно обращаться к любому свойству объекта, но если возможно обращение через точку — обычно используют его, так как оно занимает меньше места в коде.

🤖Значением ключа может быть другой объект или массив:

```js
let cat = {
  kittens: ["Joe", "Zalma", "Tom"],
  favoriteToy: {
    name: "ball",
    size: "small",
  },
}
```

А также функция:

```js
let cat = {
  name: "Tom",
  playSong: function () {
    alert("mew mew")
  },
}
```

## В работе

{% include "authors/vindi-r/in-work.njk" %}

🛠Современные браузеры понимают «короткую» запись объектов. Это нужно для упрощения кода. Гораздо быстрее написать:

```js
let cat = {
  play() {
    alert("I am playing")
  },
}
```

Чем вот так:

```js
let cat = {
  play: function () {
    alert("I am playing")
  },
}
```

Также это позволяет сразу отличать тип ключа объекта — функция это или просто какое-то значение:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="vindi-r" data-slug-hash="KYXxRr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Объект в работе">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/KYXxRr">
  Объект в работе</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠Ключами объекта могут быть только строки. Можно написать в качестве ключа объекта число или что-нибудь другое, но всё будет преобразовано в строку:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="KYXxYE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Объект в работе - ключи">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/KYXxYE">
  Объект в работе - ключи</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠В случае, когда имя ключа неизвестно — по умному, «является динамическим», то обращаться к нему нужно через квадратные скобки:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="vindi-r" data-slug-hash="JVrwGg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Объект в работе - ключ динамический">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/JVrwGg">
  Объект в работе - ключ динамический</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

При вводе несуществующего ключа пример вернёт undefined. Такое значение имеют все несуществующие поля в объекте. Удобно, что по этому признаку можно определить отсутствие ключа — нужно просто сравнивать все значения с undefined.

🛠Но если мы специально задали ключу значение undefined, то такая проверка не подойдет. Пример ниже показывает как лучше проверять наличие ключа в объекте:

Данный пример повторяет код выше, но с учетом проверки на undefined:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="vindi-r" data-slug-hash="yrzGqw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Объект в работе - проверка ключа">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/yrzGqw">
  Объект в работе - проверка ключа</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠Хранения значений для работы с объектом недостаточно. Как их получать, если количество ключей объекта неизвестно?

Для получения всех ключей объекта используется Object.keys(). Данная конструкция позволяет узнать названия всех ключей. Удобно когда нужно получить список ключей, и уже потом производить с ним какие-то операции.

В случае если нужно провести операцию используя и ключ и значение, по каждому элементу объекта можно пройтись циклом for. Выглядит это так:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="MREPZj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Объект в работе - итерирование">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/MREPZj">
  Объект в работе - итерирование</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠Ненужные свойства в объекте можно удалить через delete.

Это пригодится, если свойство больше не нужно. Например нам больше не нужно знать возраст кота 😸

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="vindi-r" data-slug-hash="jRGJja" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Объект в работе - удаление">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/jRGJja">
  Объект в работе - удаление</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠Копирование объектов в отличие от копирования примитивов делается так:

```js
let a = "value of a"
let b = a
console.log(a, " -> ", b) // value of a  ->  value of a
a = "changed value"
console.log(a, " -> ", b) // changed value  ->  value of a
```

Значение а было скопировано в b. Переменные тут независимы друг от друга, поэтому изменив а, мы затронем только эту переменную.

Сделать копию объекта так же просто, как и копию строки не получится:

```js
let a = { keyA: "value A" }
let b = a
console.log(a, b) // {keyA: "value A"} {keyA: "value A"}
b.keyB = "value B"
console.log(a, b) // {keyA: "value A", keyB: "value B"} {keyA: "value A", keyB: "value B"}
```

В переменной хранится не содержимое объекта, а адрес на содержимое в памяти компьютера, называемое ссылкой на объект.

🤖Когда мы делаем `b = a` в переменную b кладется ссылка на объект, на который ссылается переменная а. Поэтому изменяя ключи переменной b на самом деле изменяется и ключи переменной а, так как они указывают на одно и то же место в памяти.

Для копирования простых объектов можно использовать spread operator. Но если в копируемом объекте есть вложенные объекты — их нужно копировать отдельно, иначе они в новом объекте будут ссылаться на то же место в памяти, что и исходные.

```js
let simpleObject = { id: 1, value: "one value" }
let secondObj = { ...simpleObject }
simpleObject.value = "changedValue"
secondObj.id = 10
console.log(simpleObject) // {id: 1, value: "changedValue"}
console.log(secondObj) // {id: 10, value: "one value"}
```

Копирование объекта только по первичным ключам называется поверхностным. Если алгоритм проходит и по вложенным объектам, то такое копирование уже называют глубоким.

🤖Копирование сложных объектов можно реализовать по-разному. Обычно используют сторонние библиотеки, например [lodash](https://lodash.com/), где уже учтены все нюансы.

🛠Сравнивать объекты между собой тоже нужно зная нюансы. Оно отличается от сравнения строк.

```js
let a = { id: 1, value: "text" }
let b = { id: 1, value: "text" }
console.log(a === b) // false
```

🤖Операции над объектами на самом деле происходят над ссылками. Так как a и b ссылаются на объекты в разных участках памяти — они считаются не равными друг другу.

Если объекты равны, значит они ссылаются на один и тот же участок в памяти.

```js
let a = { id: 10, value: "some text" }
let b = a
console.log(a === b) // true
```

Что не допустить ошибку, нужно всегда сравнивать содержимое объектов.

🤖Если в объекте есть вложенные объекты, обычно сравнивают определенные поля (например поле id). Ведь если у двух объектов одинаковый id, то можно предположить, что они отражают одну и ту же сущность. Это не работает во всех случаях, поэтому часто используют библиотеки или пишут свой рекурсивный алгоритм сравнения.

Пример алгоритма сравнения, достаточный для базовых вариантов объектов:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="PgJvBV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Объект в работе - глубокое сравнение">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/PgJvBV">
  Объект в работе - глубокое сравнение</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/vindi-r/author.njk" %}
