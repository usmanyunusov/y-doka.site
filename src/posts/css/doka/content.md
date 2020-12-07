---
title: content
name: content
author: ezhkov_d
co-authors:
designers:
contributors:
summary:
  - content
  - псевдоэлемент
---

## Кратко

Когда задано свойство `content`, то элемент заменяется на значение этого свойства. В качестве значения могут быть переданы различные типы: изображение, градиент или текст.

## Пример

```css
a::after {
  content: "👉";
  margin-right: 5px;
}
```

## Как пишется

```css
/* Изображение в качестве содержимого */
/* Может применяться к любому элементу */
content: url("http://www.example.com/test.png");

/* Все значения ниже могут применяться ТОЛЬКО к псевдоэлементам ::before и ::after */

/* Строка текста */
content: "prefix";

/* Значения счётчиков с использованием функций counter() и counters() */
content: counter(chapter_counter);
content: counters(section_counter, ".");

/* Значения HTML-атрибутов с использованием функции attr() */
content: attr(value string);

/* Ключевые слова, зависящие от языка страницы и положения в тексте */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* Использование нескольких значений одновременно.
	Исключение - ключевые слова normal и none */
content: open-quote counter(chapter_counter);

/* Ключевые слова, которые нельзя комбинировать с другими значениями */
content: normal;
content: none;

/* Глобальные значения */
content: inherit;
content: initial;
content: unset;
```

## Как это понять

Чаще всего свойство `content` применяется к псевдоэлементам [::before]() и [::after](/posts/css/doka/after/) . В зависимости от значения свойства псевдоэлемент принимает тот или иной вид:

- Если значением является просто строка, то она подставляется на место псевдоэлемента. Как правило, это до или после текстового содержимого тега.
- Есть несколько зарезервированных слов, которые также можно указывать в качестве значения. Используются они как совместно со свойством [quotes](/posts/css/doka/quotes/) , так и в автоматическом режиме:

  — `open-quote` обозначает **открывающую** кавычку цитаты для текущего языка. Например, для русского это будет открывающая «ёлочка» (`«`);

  — `close-quote` обозначает **закрывающую** кавычку цитаты для текущего языка. Например, для русского это будет закрывающая «ёлочка» (`»`);

  ### HTML

  ```html
  <blockquote>
    Вспомните, как говорили мушкетёры: <q>Один за всех, все за одного!</q>
  </blockquote>
  ```

  ### CSS

  ```css
  blockquote {
    quotes: "«" "»" "„" "”";
  }

  blockquote::before {
    content: open-quote;
  }

  blockquote::after {
    content: close-quote;
  }
  ```

  ### Результат

  ```
  «Вспомните, как говорили мушкетёры: „Один за всех, все за одного!”»
  ```

  — `no-open-quote` и `no-close-quote` используются, когда не нужно отображать кавычки, но при этом продолжать увеличивать уровень вложенности.

- Если значением является результат выполнения функций `counter()` или `counters()`, то псевдоэлемент будет содержать вычисленное значение счётчика в текущий момент. Эти функции работают совместно со свойствами `counter-reset` и `counter-increment`
- Очень интересным значением является результат выполнения функции `attr()`. С помощью неё можно вывести в псевдоэлемент значение любого атрибута тега:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="ezhkov" data-slug-hash="JjXMWGM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="content. attr()">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/JjXMWGM">
  content. attr()</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

- Ну и конечно же разработчики спецификации позаботились о нас и сделали возможность собрать сразу несколько значений в общую строку:

### HTML

```html
<p>Вы можете пройти <a href="https://google.com">по ссылке</a></p>
```

### CSS

```css
@media print {
  a[href]::after {
    content: " [" attr(href) "] ";
  }
}
```

### Результат

Вы можете пройти по ссылке [https://google.com] /_ Так выведется на печать _/

- Значением свойства `content` может быть ссылка `url(...)` на изображение. В этом случае содержимое элемента заменяется на это изображение. Нужно помнить о том, что при таком способе мы не можем управлять размером изображения.

### HTML

```html
<div class="replaced" data-alt="Mozilla logo">Mozilla</div>
```

### CSS

```css
.replaced {
  content: url("https://mdn.mozillademos.org/files/12668/MDN.svg");
}

#replaced::after {
  /* не будет отображаться, если замена элемента поддерживается */
  content: " (" attr(data-alt) ")";
}
```

### Результат

![Пример свойства content со значением url](/assets/images/posts/content/MDN.svg)

## Подсказки

💡Если мы используем `url()` в качестве значения свойства `content` для тега, то псевдоэлементов у такого тега не будет

## В работе

🛠 Свойство `content` со значением `counter()` активно применяется в случаях, когда нужно расставить автоматическую нумерацию элементов, не относящихся к спискам:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="ezhkov" data-slug-hash="JjXMNBP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="content. counter()">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/JjXMNBP">
  content. counter()</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠 ...или красиво оформить нумерованный перечень

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="ezhkov" data-slug-hash="BaKJRGw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="content. counter() 2">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/BaKJRGw">
  content. counter() 2</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/ezhkov_d/author.njk" %}
