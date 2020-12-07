---
title: ::before
name: before
author: ezhkov_d
co-authors:
designers:
contributors:
summary:
  - :before
  - псевдоэлемент
---

## Кратко

Когда мы в CSS приписываем `::before` к селектору, то для соответствующего элемента создаётся псевдоэлемент ([Псевдоэлементы](/posts/css/doka/pseudoelements)), который будет являться его самым первым потомком. То есть, прямо совсем самым первым, который находится ДО внутреннего содержимого.

## Пример

```css
a::before {
  content: "♥";
}
```

## Как пишется

```css
::before/* Для CSS 3 */

: before; /* Для CSS 2 */
```

💡 В CSS 3 версии ввели написание с двумя двоеточиями, чтобы отличать запись псевдоэлемента от псевдокласса. Но синтаксис с одним двоеточием также поддерживается современными браузерами.

## Как это понять

Проще всего воспринимать псевдоэлемент `::before` как дополнительный элемент в начале тега. Мы можем применить к нему любые стили.

Чаще всего псевдоэлемент используется для оформительских целей, предоставляя возможность либо добавить дополнительное содержимое перед текстом, либо выступая в роли дополнительного стилизованного блока.

По умолчанию псевдоэлемент `::before` является инлайновым.

Самый простой пример использования `::before` — добавление иконки перед важным текстом:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="ezhkov" data-slug-hash="BaKLXBv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="pseudoelement before">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/BaKLXBv">
  pseudoelement before</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Подсказки

💡 Не забывайте прописывать свойство [content](/posts/css/doka/content) для псевдоэлемента `::before`. Это самая частая ошибка, из-за которой псевдоэлемент не появляется на странице.

💡 Псевдоэлемент ведёт себя ровно так же как любой другой элемент в разметке, подчиняется тем же свойствам и законом. Просто его нет в HTML.

## В работе

{% include "authors/ezhkov_d/in-work.njk" %}

🛠 Псевдоэлемент `::before` очень часто используют для стилизации нестандартных маркеров списка:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="ezhkov" data-slug-hash="bGpgxBQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Псевдоэлемент ::before">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/bGpgxBQ">
  Псевдоэлемент ::before</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠 Пример со свойством `content`:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="furtivite" data-slug-hash="gOrKXJg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="gOrKXJg">
  <span>See the Pen <a href="https://codepen.io/furtivite/pen/gOrKXJg">
  gOrKXJg</a> by Egor (<a href="https://codepen.io/furtivite">@furtivite</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/ezhkov_d/author.njk" %}
