---
title: "Element.scroll/scrollTo"
name: element-scroll-scrollto
author: vindi-r
co-authors:
designers:
contributors:
summary:
---

## Кратко

Функция `scrollTo()` позволяет программно прокрутить элемент на определенное количество пикселей. Колесо мышки или два пальца на тачпаде вызывают скролл с параметрами, определенными в системе. Главное понять, как управлять скроллом и обрабатывать событие «прокручивания».

## Как пишется

Для скролла всего окна подойдет такая штука:

```js
scrollTo(x, y)
```

Тут x и y — это координаты левого верхнего угла экрана.

Для скролла внутри элемента (например в div) синтаксис немного отличается:

```js
let elem = document.querySelector("div")
elem.scrollTo(0, 100) // позиция скролла внутри elem будет на 100 пикселей по оси Y от начала элемента
```

## Как это понять

`scrollTo()` необходим в случае, когда прокрутку нужно совершить к определенным координатам на экране. В случае прокрутки относительно текущего положения следует воспользоваться `scrollBy`, а в случае прокрутки на конкретный элемент — функцией `scrollIntoView`.

## В работе

{% include "authors/vindi-r/in-work.njk" %}

🛠Прокрутка на определенные координаты полезна, когда верстка страницы или элемента одинакова. Это сложно гарантировать в реальном мире, где сайт пытается адаптироваться под разрешение экрана каждого пользователя. Но рассмотрим пример из идеальной вселенной 🔮

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="vindi-r" data-slug-hash="dLggGV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="scrollTo - В работе">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/dLggGV">
  scrollTo - В работе</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Во вселенной, где адаптивный дизайн используется везде — используют `scrollBy` или `scrollIntoView` 😎

{% include "authors/vindi-r/author.njk" %}
