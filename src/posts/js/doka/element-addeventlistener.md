---
title: "Element.addEventListener()"
name: element-addeventlistener
author: vindi-r
co-authors:
designers:
contributors:
summary:
---

## Кратко

Добавляет элементу реакцию на определенное действие, например на движение мышки или нажатие клавиши.

## Пример

```js
let clickHandler = function (event) {
  console.log("произошло событие", event.type)
}
let elem = document.querySelector("button")
elem.addEventListener("click", clickHandler)
```

## Как это понять

Синтаксис выше означает примерно следующее: «Браузер, найди элемент button и по клику на него запускай функцию clickHandler».

При вызове функции в нее передается специальный объект (в примере выше — event), который у разных типов событий разный. Например у событий нажатия клавиши есть код клавиши, а у событий перемещения мыши — координаты.

Функция может быть объявлена ранее, а может быть и анонимной:

```js
function handleClickFunction(e) {
  alert("Именованая функция")
}
let elem = document.querySelector("button")

// Добавление функции handleClickFunction как обработчика события click
elem.addEventListener("click", handleClickFunction)

// Добавление анонимной функции как обработчика события click
elem.addEventListener("click", function (e) {
  alert("Анонимная функция")
})
```

🤖Заранее созданные функции обычно используют, когда функция содержит в себе много кода или к ней нужно ссылаться несколько раз.

Анонимные функции удобно использовать при быстрой разработке или когда обработчик создается в одном единственном месте и выносить его в отдельную именованную функцию — дольше чем писать код самой этой функции.

## Как пишется

У объекта event есть специальные методы, такие как preventDefault() и stopPropagation(). Остальные методы практически не используются:

- preventDefault позволяет заблокировать стандартное поведение браузера. Например, по клику на ссылке — заблокировать переход по этой ссылке;
- stopPropagation позволяет остановить всплытие события по DOM дереву.

## В работе

{% include "authors/vindi-r/in-work.njk" %}

🛠Базовая обработка событий клавиатуры:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="yrreWz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="addEventListener - в работе">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/yrreWz">
  addEventListener - в работе</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠Обработка событий мыши:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="mggrdz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="addEventListener - в работе">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/mggrdz">
  addEventListener - в работе</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/vindi-r/author.njk" %}
