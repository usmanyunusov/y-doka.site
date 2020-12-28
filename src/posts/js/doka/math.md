---
title: "Math"
name: math
author: vindi-r
co-authors:
designers:
contributors:
summary:
---

## Кратко

`Math` — это объект, хранящий в себе различные математические константы (например число π) и функции типа вычисления квадратного корня. Обычно используется для генерации случайных чисел или округления значений.

## Как пишется

Для использования констант из объекта Math достаточно просто их указать. Таких констант куча, поэтому при необходимости угареть по математике — их нужно просто забить в поиске:

```js
console.log(Math.PI) // 3.141592653589793
```

Для вызова функций из объекта Math также достаточно просто их указать:

```js
console.log(Math.abs(-118)) // 118
```

## Как это понять

Объект `Math` можно считать сборником полезных функций и значений. Чаще всего используются функции для получения случайного числа, отрисовки элементов в случайном порядке или генерации фоновой картинки.

## В работе

{% include "authors/vindi-r/in-work.njk" %}

🛠Используй `Math.random` для [генерации случайных чисел](/js/doka/math-random) в некритичных с точки зрения криптографии местах: выборе случайного элемента из массива и подобных задачах.

🛠Часть функций используется для [округления чисел](/js/doka/math-floor).

🛠Еще при работе с числами тебе пригодится явный парсинг. Например, при получении значения поля нет гарантии, что полученный результат — число. Это может быть и строка в которой записано число. А может быть и строка с числом, но пользователь случайно допустил опечатку и ввёл в качестве возраста не "22" а "22\", нажав клавишу \ находящуюся возле Enter. Такие случаи не должны рушить работу страницы.

Для таких случаев и нужен парсинг. Он бывает двух видов — `parseFloat` и `parseInt`. В зависимости от используемой функции будет или целочисленный результат или дробное число. Если парсинг не удался, то результатом будет NaN:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="YMewgy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Math в работе - parseInt, parseFloat">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/YMewgy">
  Math в работе - parseInt, parseFloat</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠Константы и математические функции чаще всего используются в рисовании или расчетах:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="OGQNgz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Math в работе - функции">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/OGQNgz">
  Math в работе - функции</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/vindi-r/author.njk" %}
