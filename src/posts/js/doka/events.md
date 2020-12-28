---
title: "События"
name: events
author: N_Lopin
co-authors:
designers:
contributors:
tags:
  - sprint-4
  - sprint-6
summary:
---

## Кратко

Чтобы приложение было интерактивным, нам нужно понимать, что пользователь совершил то или иное действие на странице. Браузер распознает действия пользователя и создает _событие_.

События — это сигналы, которые браузер посылает разработчику, а разработчик может на сигнал реагировать. По аналогии со светофором: видим зеленый свет, едем дальше 🚦

События бывают разных типов: клик, нажатие клавиши на клавиатуре, прокрутка страницы и т.д.

Происходящие события можно слушать и выполнять код, когда нужное событие происходит. Например, при клике на кнопку показывать всплывающее окно.

## Как пишется

Существует два способа слушать события:

- с помощью `on`-свойств DOM элементов
- методом `addEventListener`

### `on`-свойства DOM элементов

Большинство событий связаны с DOM элементами. Если пользователь кликнул на кнопку, то событие `click` связано с конкретным DOM элементом — кнопкой, на которой кликнул пользователь.

Каждый DOM элемент имеет большой набор свойств, которые начинаются на `on`:

- onclick
- onscroll
- onkeypress
- onmouseenter
- и так далее

Если в это свойство записать анонимную функцию, то эта функция будет вызываться каждый раз, когда браузер будет создавать событие, связанное с этим элементом. Такие функции называют функциями-обработчиками события.

```js
let button = document.getElementsByTagName("button")[0]
button.onclick = function () {
  alert("hello!")
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="y-doka" data-slug-hash="WNxbKxa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="on-свойство DOM элементов">
  <span>See the Pen <a href="https://codepen.io/y-doka/pen/WNxbKxa">
  on-свойство DOM элементов</a> by doka (<a href="https://codepen.io/y-doka">@y-doka</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Чтобы перестать обрабатывать событие, нужно записать в свойство значение `null`.

### Метод `addEventListener`

🤖Если обрабатывать события с помощью `on`-свойств, то получится добавить только одну функцию-обработчик на каждый элемент. Часто одного обработчика недостаточно. Чтобы не создавать ограничение на пустом месте, используют альтернативный метод подписки на события — метод `addEventListener`.

Метод вызывается у DOM элемента. Аргументами нужно передать тип события (справочная информация) и функцию, которую нужно выполнить:

```js
let button = document.getElementsByTagName("button")[0]
button.addEventListener("click", function () {
  alert("Frontend!")
})

// этим способом можно подписаться на одно и то же событие можно несколько раз!
button.addEventListener("click", function () {
  alert("Weekend!")
})
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="y-doka" data-slug-hash="BazyPor" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="подписка на события с помощью addEventListener">
  <span>See the Pen <a href="https://codepen.io/y-doka/pen/BazyPor">
  подписка на события с помощью addEventListener</a> by doka (<a href="https://codepen.io/y-doka">@y-doka</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Как понять

### Функция-обработчик

Функция-обработчик, или просто обработчик, — это функция, которая вызывается браузером при наступлении события.

При вызове браузер передает в обработчик объект события с помощью аргумента.

Объект события — это JavaScript объект с информацией о событии. В объекте события есть как общие свойства (тип события, время события), так и свойства, которые зависят от типа события (например, на какую кнопку нажал пользователь).

Чтобы работать с объектом события, нужно добавить параметр в объявление обработчика:

```js
// слушаем нажатие на кнопки клавиатуры
window.addEventListener("keydown", function (event) {
  // используем объект события, чтобы получить информацию о нажатой клавише
  alert("Вы нажали на кнопку: " + event.key)
})
```

Помимо объекта события, внутри функции можно использовать ключевое слово `this`. Оно позволяет получить DOM элемент, на котором сработал обработчик. Это позволяет создать обработчик один раз, но привязать ее к нескольким DOM элементам.

Например, мы объявим обработчик в виде именованной функции и повесим ее на нажатие нескольких кнопок. При клике на кнопку будем менять ее цвет:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="y-doka" data-slug-hash="xxOxeLz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="События">
  <span>See the Pen <a href="https://codepen.io/y-doka/pen/xxOxeLz">
  События</a> by doka (<a href="https://codepen.io/y-doka">@y-doka</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Всплытие событий

Рассмотрим пример. У нас есть `div` элемент, в который вложено видео. Мы подписались на события `click` как на `div`, так и на `video`. Если событие происходит на `div`, то мы меняем его цвет на случайный из списка. Если событие происходит на `video`, то мы запускаем видео. Попробуйте кликнуть на коробку:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="y-doka" data-slug-hash="PozqLOO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Всплытие событий">
  <span>See the Pen <a href="https://codepen.io/y-doka/pen/PozqLOO">
  Всплытие событий</a> by doka (<a href="https://codepen.io/y-doka">@y-doka</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🤖Обрати внимание, что событие срабатывает на обоих элементах — цвет фона меняется и запускается видео. Этому есть объяснение, оно называется _всплытие событий (event bubbling)_.

Когда пользователь совершает действие, браузер ищет самый вложенный элемент, к которому относится событие. Затем это событие передается родительскому элементу и так далее до самого корня DOM.

В нашем примере мы кликнули на `video`, это самый вложенный элемент. Браузер создал событие и мы обработали его в коде. После этого браузер передает событие родителю `video` (то есть элементу, который содержит `video`) — элементу `div`. Мы получаем его и обрабатываем. И он всплывает дальше, пока не дойдет до `body`.

Обработчики сначала срабатывают на самом вложенном элементе, затем на его родителе, затем выше и так далее, вверх по цепочке вложенности.

Кликай по блокам на демо и увидишь, как событие всплывает вверх к родителям:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="y-doka" data-slug-hash="pobvZdX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Event bubbling">
  <span>See the Pen <a href="https://codepen.io/y-doka/pen/pobvZdX">
  Event bubbling</a> by doka (<a href="https://codepen.io/y-doka">@y-doka</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Всплытие события можно остановить с помощью метода `stopPropagation` у объекта события:

```js
video.addEventListener("click", function (event) {
  event.stopPropagation()
  this.currentTime = 0
  this.play()
})
```

## В работе

{% include "authors/n_lopin/in-work.njk" %}

🛠 Всегда подписывайся на события с помощью `addEventListener`, так ты избежишь доработок, когда потребуется повесить несколько обработчиков на одно и то же событие.

🛠 Если нужно слушать все события определенного типа, вызови метод `addEventListener` у объекта `window`:

```js
// слушаем все клики на странице
window.addEventListener("click", function () {
  alert("clicked")
})
```

🛠 Если не используешь объект события в обработчике, то не указывай его в списке параметров обработчика. Вместо `function (event) {…}` напиши `function() {…}`.

🛠 Всплытие событий — важный концепт, попробуй с ним поэкспериментировать.

{% include "authors/n_lopin/author.njk" %}
