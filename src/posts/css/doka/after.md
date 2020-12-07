---
title: ::after
name: after
author: ezhkov_d
co-authors:
designers:
contributors:
summary:
  - ::after
  - :after
  - псевдоэлемент
---

## Кратко

Когда мы в CSS приписываем `::after` к селектору, то для соответствующего элемента создаётся псевдоэлемент ([Псевдоэлементы]()), который будет являться его самым последним потомком. Этот потомок будет находиться ПОСЛЕ всего внутреннего содержимого.

## Пример

```css
a::after {
  content: "→";
}
```

## Как пишется

```css
::after /* Для CSS 3 */

:after /* Для CSS 2 */
```

💡В CSS 3 ввели написание с двумя двоеточиями, чтобы отличать запись псевдоэлемента от псевдокласса. Но синтаксис с одним двоеточием также поддерживается современными браузерами.

## Как это понять

Проще всего воспринимать псевдоэлемент `::after` как дополнительный элемент в конце тега. Мы можем применить к нему любые стили.

Чаще всего псевдоэлемент используется для оформительских целей, предоставляя возможность либо добавить дополнительное содержимое после текста, либо выступая в роли дополнительного стилизованного блока.

По умолчанию псевдоэлемент `::after` является инлайновым.

Самый простой пример использования `::after` вместе с [::before]() — оформление текстового содержимого:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="ezhkov" data-slug-hash="poyROao" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Псевдоэлементы ::before и ::after">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/poyROao">
  Псевдоэлементы ::before и ::after</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Подсказки

💡Не забывайте прописывать свойство [content](/posts/css/doka/content/) для псевдоэлемента `::after`. Это самая частая ошибка, из-за которой псевдоэлемент не появляется на странице.

## В работе

🛠 Псевдоэлементы [::before]() и `::after` можно использовать и для более сложной стилизации:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="ezhkov" data-slug-hash="poyROLo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Псевдоэлементы ::before и ::after 2">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/poyROLo">
  Псевдоэлементы ::before и ::after 2</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

В этом примере верхняя и нижняя линии сделаны при помощи псевдоэлементов [::before]() и `::after`. При этом сами псевдоэлементы используются как два дополнительных стилизуемых элемента внутри ссылки `<a>`. Круто, правда? В HTML пишем один тег, а по факту можем стилизовать аж три! 🤘

{% include "authors/ezhkov_d/author.njk" %}
