---
title: <span>
name: span
author: vladimir
co-authors:
  - ABatickaya
designers:
contributors: skorobaeus
summary:
  - тэг
  - тег
  - <span>
  - span
  - спан
---

## Кратко

С помощью тега `<span>` можно выбрать часть текста или другой информации в блоке и стилизовать её.

## Пример

```html
<p>
  Добавьте <span class="ingredient">базилик</span>,
  <span class="ingredient">арахис</span> и
  <span class="ingredient">чеснок</span> в блендер и перемешайте.
</p>
```

## Как это понять

Например, хочется, чтобы одно слово в абзаце было написано красным цветом. Помести это слово в коде в контейнер `<span>`...`</span>` и примени к нему CSS-стиль.

Этот тег очень похож на `<div>`, потому что тоже помогает сгруппировать элементы, чтобы применить к ним единый стиль. Разница лишь в том, что `<div>` собирает контент в отдельный блок, а `<span>` выделяет строчку или даже одну букву в этом блоке. Поэтому `<div>` называют блочными элементами, а `<span>` — строчным.

## Как пишется

```html
<span>...</span>
```

## Подсказки

💡 Иногда, чтобы отформатировать часть текста, можно использовать семантические элементы — это те, которые не просто являются контейнерами, а имеют своё значение, например, тег `<header>`, с помощью которого вы создаёте «шапку» своей страницы с меню и логотипом. Поэтому, если вместо `<span>` можно использовать семантический тег, например, `<address>` для выделения автора материала курсивом или `<mark>` для выделения текста жёлтым маркером, то используйте их.

## Ещё пример

```html
<p class="quote__text">
  <span class="quote__text-letter">Р</span>азумные люди приспосабливаются к
  окружающему миру. Неразумные люди приспосабливают мир к себе. Вот почему
  прогресс определяется действиями неразумных людей.
</p>
<p class="quote__author">Бернард Шоу</p>
```

```css
.quote__text-letter {
  float: left; /* Обтекание символа текстом справа */
  margin-right: 7px; /* Отступ справа */
  color: #ed6742; /* Цвет символа */
  font-family: "Roboto Slab", serif; /* Шрифт с засечками */
  font-size: 52px; /* Размер шрифта */
  line-height: 52px; /* Высота строки */
}

.quote__author {
  padding: 10px 0;
  border-top: 1px solid #ed6742; /* декоративная граница */
  font-style: italic;
  font-size: 14px;
  font-weight: 300;
}
```

{% demo "/span/show", "Буквица", 280 %}

## В работе

{% include "authors/vladimir/in-work.njk" %}

🛠 `<span>` — крутой. Считается, что `<span>` — это когда тебе уже нечего добавить к тексту и ты уже использовал древние теги `<strong>` или `<em>`, то у тебя `<span>` — это последний бро, у которого по умолчанию нет предустановленных стилей, но ты можешь его немножко пересобрать и добавить стилей, чтобы он выглядел так, как ты хочешь.

Фишка в том, что в `<span>` можно встраивать вообще всё, что угодно. Внутри `<span>` можно собирать целые блоки, списки и, по факту, он может работать не только с текстом: я такое встречал очень часто. `<span>` можно встраивать друг в друга сколько угодно раз, чего не сделаешь, например, с тегом `<p>`. Допустим, ты хочешь, чтобы текст на сайте появлялся по одной букве, то ты добавляешь каждую букву в отдельный `<span>`, делаешь задержку и отдельно уже управляешь через JavaScript или CSS. `<span>` — тег, без которого современные сайты практически не могут существовать.

{% include "authors/ABatickaya/in-work.njk" %}

🛠 Тег `span` удобен, если нужно оформить другими стилями отдельное слово или словосочетание в тексте. Этот приём очень любят дизайнеры, чтобы акцентировать внимание на какой-то информации.

Например, выделим цветом важное для нас сообщение внутри заголовка на первом экране:

HTML

```html
<header class="header">
  <h1 class="header__title">
    We are
    <span class="header__title-accent header__title-accent_color">
      the best
    </span>
    <span class="header__title-accent"> company </span>
  </h1>
</header>
```

CSS

```css
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 480px;
  background: #18191c url("background.png") no-repeat center / cover;
  z-index: 0;
  color: #ffffff;
}

.header__title {
  max-width: 500px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
  font-weight: normal;
  line-height: 30px;
  letter-spacing: 1px;
}

/* задаём стили для текста, который нужно выделить */
.header__title-accent {
  display: block; /* перенос на новую строку */
  font-size: 55px;
  line-height: 58px;
  font-weight: bold;
}

/* цветовой акцент */
.header__title-accent_color {
  color: #f498ad;
  background-color: #ed6742;
}
```

{% demo "span/company", "Цветовой акцент" %}

{% include "authors/furtivite/in-work.njk" %}

🛠 `<span>` — строковый элемент, поэтому по-умолчанию, у него нет высоты. Если нужна высота, то элементу стоит задать `display: block` или `display: inline-block`, или подумать: «А не нужен ли там `<div>`?»

{% include "authors/vladimir/author.njk" %}
