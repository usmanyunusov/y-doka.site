---
title: vertical-align
name: vertical-align
author: ABatickaya
co-authors:
designers:
contributors:
summary:
  - vertical-align
---

## Кратко

Свойство `vertical-align` выравнивает текстовые элементы по вертикали относительно друг друга.

🤖Для простого текста это не особо актуально, то вот для строчно-блочных (`inline-block`) элементов это свойство может быть очень полезным.

## Пример

Пусть у нас на странице есть три строчно-блочных элемента. Для объяснения работы свойства `vertical-align` они будут разной высоты:

HTML

```html
<div class="parent">
  <div class="element small"></div>
  <div class="element medium"></div>
  <div class="element big"></div>
</div>
```

CSS

```css
.element {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 1px solid green;
}

.medium {
  height: 150px;
}

.big {
  height: 200px;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="pBKmPP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="pBKmPP">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/pBKmPP">
  pBKmPP</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Все три блока по умолчанию выровнялись по нижней границе. Это стандартное поведение. Изменим его и выровняем элементы по верхней границе:

CSS

```css
.element {
  vertical-align: top;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="oOyRwm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="oOyRwm">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/oOyRwm">
  oOyRwm</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Как это понять

С английского языка словосочетание **vertical align** дословно переводится как вертикальное выравнивание. Что в точности совпадает с ожидаемым результатом от использования этого свойства.

## Как пишется

Значение свойства `vertical-align` чаще всего задаётся при помощи ключевого слова. Единовременно можно указать лишь одно значение.

Рассмотрим доступные значения на примере с котиком 😍:

- `baseline` — свойство по умолчанию. Выравниваемый элемент выстраивается по нижней линии текста. Если в родительском элементе нет текста, то элемент выравнивается по нижней границе.

    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="GLGaxg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GLGaxg">
      <span>See the Pen <a href="https://codepen.io/solarrust/pen/GLGaxg">
  GLGaxg</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
    </p>

- `top` — верхняя граница элемента находится на уровне верхней границы строки.

    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="NmzVzd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NmzVzd">
      <span>See the Pen <a href="https://codepen.io/solarrust/pen/NmzVzd">
  NmzVzd</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
    </p>

- `middle` — мысленно проведи две вертикальные линии: одну через центр текста, а вторую через центр котика. Текущее значение свойства сопоставляет эти линии. Таким образом элемент выравнивается по центру.

    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="eoKaKM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="eoKaKM">
      <span>See the Pen <a href="https://codepen.io/solarrust/pen/eoKaKM">
  eoKaKM</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
    </p>

- `bottom` — выравнивает нижнюю границу элемента по уровню нижней границы строки.

    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="GLGawp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GLGawp">
      <span>See the Pen <a href="https://codepen.io/solarrust/pen/GLGawp">
  GLGawp</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
    </p>

  Этот пример нужно пояснить. Кажется, что лапки кота — это нижняя часть элемента. Но нет! Взгляни на него через инструменты разработчика:

  ![Кот через инструменты разработчика](/assets/images/posts/vertical-align/Untitled.png)

- `sub` — удобное значение, если нужно создать нижний индекс. Например, в химических формулах: **H₂O**. Опускает базовую линию так, чтобы элемент опустился до уровня нижнего индекса:

      <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="XQYwQx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="XQYwQx">
        <span>See the Pen <a href="https://codepen.io/solarrust/pen/XQYwQx">

  XQYwQx</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>) on <a href="https://codepen.io">CodePen</a>.</span> </p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

- `super` — работает почти как `sub`, только поднимает базовую линию вверх.

    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="vMrwwO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="vMrwwO">
      <span>See the Pen <a href="https://codepen.io/solarrust/pen/vMrwwO">
  vMrwwO</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
    </p>

- `text-bottom` — выравнивает элемент по нижней точке текста с учётом выносных элементов.

  ![Кот выравненный по нижней точке текста, с помощью значения text-bottom](/assets/images/posts/vertical-align/Untitled-1.png)

    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="solarrust" data-slug-hash="wZXbbJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="wZXbbJ">
      <span>See the Pen <a href="https://codepen.io/solarrust/pen/wZXbbJ">
  wZXbbJ</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
    </p>

- `text-top` — верхняя часть элемента выравнивается по верхнему краю родителя:

  ![Кот выравненный по верхнему краю родителя, с помощью значения text-top](/assets/images/posts/vertical-align/Untitled-2.png)

    <p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="xezoZo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="xezoZo">
      <span>See the Pen <a href="https://codepen.io/solarrust/pen/xezoZo">
  xezoZo</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Помимо ключевых слов можно использовать числовые значения.

Если указать значение в любых доступных единицах измерения, то положительное значение сдвинет элемент вверх относительно базовой линии, а отрицательно — вниз.

Если указать числовое значение в процентах, то за 0% берётся нижняя граница текста без выносных элементов. То есть аналогично `baseline`. Процент рассчитывается от `line-height` ([line-height]()) родительского элемента.

## Подсказки

💡Свойство `vertical-align` применяется к элементам, которые нужно выровнять, а не к родительскому элементу.

💡На всякий случай: вертикально — это сверху вниз. Слева направо — это горизонтально 😉

💡Свойство очень пригождается когда нужно выровнять картинку или emoji относительно текста.

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠Свойство `vertical-align` каверзное. Многие начинающие разработчики пытаются применить его к родительскому элементу, по аналогии с `text-align`. И ничего не выходит. Просто запомни, что его нужно применять к тому элементу, который хочется выровнять.

🛠С появлением флексбоксов выравнивание по вертикали производится при помощи `align-items`. Поэтому на свойство `vertical-align` стоит обратить внимание, только если работаешь с вёрсткой на строчно-блочных элементах.

{% include "authors/ABatickaya/author.njk" %}
