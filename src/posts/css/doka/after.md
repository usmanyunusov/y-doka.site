---
title: "::after"
name: after
author: ezhkov_d
co-authors:
designers:
contributors: skorobaeus
summary:
  - ::after
  - :after
  - псевдоэлемент
---

## Кратко

Когда мы в CSS приписываем `::after` к селектору, то для соответствующего элемента создаётся псевдоэлемент ([Псевдоэлементы](/css/doka/pseudoelements/)), который будет являться его самым последним потомком. Этот потомок будет находиться ПОСЛЕ всего внутреннего содержимого.

## Пример

```css
a::after {
  content: "→";
}
```

## Как пишется

```css
::after/* Для CSS 3 */

: after; /* Для CSS 2 */
```

💡В CSS 3 ввели написание с двумя двоеточиями, чтобы отличать запись псевдоэлемента от псевдокласса. Но синтаксис с одним двоеточием также поддерживается современными браузерами.

## Как это понять

Проще всего воспринимать псевдоэлемент `::after` как дополнительный элемент в конце тега. Мы можем применить к нему любые стили.

Чаще всего псевдоэлемент используется для оформительских целей, предоставляя возможность либо добавить дополнительное содержимое после текста, либо выступая в роли дополнительного стилизованного блока.

По умолчанию псевдоэлемент `::after` является инлайновым.

Самый простой пример использования `::after` вместе с [::before](/css/doka/before/) — оформление текстового содержимого:

HTML

```html
<article>
  <h1>
    «Все берут в горсть и нюхают: ааа… гру-шовка!»: вспоминаем, как писали об
    <span class="accent">ароматах</span> классики
  </h1>
  <p>«Все кидаются в лопухи, в крапиву...»</p>
  <p>«Лето Господне», Иван Шмелев</p>
</article>
```

CSS

```css
.accent::before,
.accent::after {
  content: "🌸";
  vertical-align: middle;
  font-size: 0.6em;
}

.accent::before {
  margin-right: 0.1em;
}

.accent::after {
  margin-left: 0.1em;
}
```

{% demo "/after/word", "Выделение слова в предложении", 540 %}

## Подсказки

💡Не забывайте прописывать свойство [content](/css/doka/content/) для псевдоэлемента `::after`. Это самая частая ошибка, из-за которой псевдоэлемент не появляется на странице.

## В работе

🛠 Псевдоэлементы [::before](/css/doka/before/) и `::after` можно использовать и для более сложной стилизации:

HTML

```html
<a href="#" class="link">choose me</a>
```

CSS

```css
.link {
  position: relative;
}

.link::before,
.link::after {
  content: "";
  height: 8px;
  width: 8px;
  position: absolute;
  transition: all 0.6s;
}

.link::before {
  top: -3px;
  left: -3px;
  border-top: 6px solid #000000;
  border-left: 6px solid #000000;
}

.link::after {
  bottom: -3px;
  right: -3px;
  border-bottom: 6px solid #000000;
  border-right: 6px solid #000000;
}

.link:hover::before,
.link:hover::after {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
```

{% demo "/after/link", "Стилизация", 155 %}

В этом примере рамки применены к псевдоэлементам [::before](/posts/css/doka/before/) и `::after`. При этом сами псевдоэлементы используются как два дополнительных стилизуемых элемента внутри ссылки `<a>`. Круто, правда? В HTML пишем один тег, а по факту можем стилизовать аж три! 🤘

{% include "authors/ezhkov_d/author.njk" %}
