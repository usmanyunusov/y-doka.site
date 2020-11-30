---
title: <legend>
name: legend
author: vladimir
co-authors:
  - ABatickaya
designers:
contributors: skorobaeus
summary:
  - legend
  - <legend>
  - тэг
  - тег
  - fieldset
  - форма
---

## Кратко

Добавляет заголовок в `<fieldset>`, который по умолчанию оформляется брузером как текст, органично вписанный в рамку (стиль оформления зависит от браузера и операционной системы).

## Пример

```html
<fieldset>
  <legend>Заголовок для группы контролов</legend>
  …
</fieldset>
```

## Как это понять

`<fieldset>` позволяет описать содержимое `<fieldset>`, но семантически он не является «представителем» h1-h6-заголовков, хотя выполняет схожую функцию, только без здния иерархии, а лишь характеризуя контент внутри «своей» группы — как `<label>` для соответствующего контрола.

## Как пишется

**Важно**, чтобы `<legend>` был первым дочерним элементом внутри `<fieldset>`.

## Атрибуты

У `<legend>` нет никаких «своих» атрибутов, ему доступны все *глобальные атрибуты*. Но для выравнивания текста по краю или по центру не стилизовать без атрибута `align` (CSS-свойство `text-align` работать не будет, даже если задать `display: block`):

```html
<fieldset>
  <legend align="center">Заголовок для группы контролов</legend>
  …
</fieldset>
```

## Подсказки

За счёт особой формы «обтекания» рамкой текста, это можно использовать для характерной стилизации блока и заголовка:

<p class="codepen" data-height="347" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="BaLybry" data-preview="true" style="height: 347px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="&amp;lt;legend&amp;gt;">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/BaLybry">
  &lt;legend&gt;</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
