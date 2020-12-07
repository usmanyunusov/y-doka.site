---
title: background-image
name: background-image
author: grachev
co-authors:
designers:
contributors:
summary:
  - background-image
---

## Кратко

Свойство `background-image` задаёт фоновую картинку элемента.

## Пример

```css
background-image: url("https://static.wixstatic.com/media/f1896a_b6b9266313654dd99ac0bf35ca1e6e6d~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_725,h_485,al_c,q_90,usm_0.66_1.00_0.01/f1896a_b6b9266313654dd99ac0bf35ca1e6e6d~mv2_d_3872_2592_s_4_2.jpg");
```

## Как это понять

Таких картинок можно разместить сколько угодно. Они будут накладываться друг на друга, причём сверху будет видна та, что указана в списке первой. Если она не прогрузится, то пользователь увидит следующую по порядку.

Элементу можно задать одновременно и цвет фона `background-color`, и фоновую картинку. Если картинка не прогрузится, то вместо неё пользователь увидит фоновый цвет.

## Как пишется

```css
selector {
  background-image: url("адрес-картинки");
}
```

Адрес картинки важно задать внутри `url("...");`.

Границы картинки и её расположение, относительно краёв элемента мы задаём с помощью `background-clip` и `background-origin`.

## Значения

- `url` — адрес картинки, который пишется в скобках и кавычках: `url("cat_box.png")`.
- `none` — добавьте его, чтобы фоновая картинка не появлялась.
- `inherit` — наследует параметры от родительского элемента.

## Подсказки

💡 Разные браузеры могут отображать фоновый рисунок по-разному. Например, если ты задаешь фоновую картинку внутри таблицы для одной строки целиком, то Chrome и Safari продублируют эту картинку в каждой ячейке, когда остальные растянут картинку на всю строку.

💡 С помощью `background-image` также можно сделать градиентный фон, задав разные цвета:

```css
selector {
  background-image: linear-gradient(red, yellow, green);
}
```

## Пример

Добавим на фон сразу цвет и картинку. Цветной фон появится сразу — браузер делает это моментально, потому что ничего загружать не надо. А вот картинка может грузиться какое-то время, в зависимости от скорости интернета:

HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background-image</title>
    <style>
      body {
        background-image: url(https://static.wixstatic.com/media/f1896a_b6b9266313654dd99ac0bf35ca1e6e6d~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_725,h_485,al_c,q_90,usm_0.66_1.00_0.01/f1896a_b6b9266313654dd99ac0bf35ca1e6e6d~mv2_d_3872_2592_s_4_2.jpg); /* Адрес фонового изображения */
        background-color: #09ff00; /* Кислый цвет фона */
      }
    </style>
  </head>
  <body>
    <p>...</p>
  </body>
</html>
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="max-grachev" data-slug-hash="xBzGeW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="background-image">
  <span>See the Pen <a href="https://codepen.io/max-grachev/pen/xBzGeW">
  background-image</a> by Max Grachev (<a href="https://codepen.io/max-grachev">@max-grachev</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Чтобы фоновая картинка отображалась так, как нужно, задай ей параметры с помощью других свойств:

CSS

```css
.hero-image {
  height: 500px; /* Высота блока */
  background-image: url("photographer.jpg"); /* Адрес фоновой картинки */
  background-color: #cccccc; /* Цвет фона. Будет виден, если картинка не прогрузится */
  background-position: center; /* Выравниваем по центру */
  background-repeat: no-repeat; /* Не дублируем картинку */
  background-size: cover; /* Картинка растягивается на весь размер контейнера */
}
```

Если хочется наложить одну картинку на другую, то просто перечисли их через запятую. Первое изображение в списке окажется сверху. Вторую картинку будет видно, если у первой будет прозрачный фон:

```css
background-image: url("../../media/examples/star.png"),
  url("../../media/examples/lizard.png");
```

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠 Если задаешь фоновую картинку для блока с текстом, то обязательно задавай фоновый цвет.

Почему это важно: если при загрузке страницы картинка будет долго прогружаться или вообще не загрузится, то белый текст будет совершенно не виден. Пользователь потеряет контекст и, вероятнее всего, интерес к вашей странице.

Пример ниже не пустой, но в нём не загрузилась фоновая картинка:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="rNxxGjK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rNxxGjK">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/rNxxGjK">
  rNxxGjK</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Чиним одной строкой:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="ROvXbv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ROvXbv">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/ROvXbv">
  ROvXbv</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Да, будет не так красиво, как нарисовал дизайнер, но вся информация будет доступна.

🛠 Кроме линейного градиента можно задавать радиальный — круглый — градиент. Для этого нужно написать следующее:

CSS

```css
background-image: radial-gradient(#e66465, #9198e5);
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="bJzXEV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="bJzXEV">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/bJzXEV">
  bJzXEV</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/vladimir/in-work.njk" %}

🛠`backgroung-image` хорош тем, что при правильном сочетании с `background-size` может встроить фоновую картинку как угодно. Получается порой более гибко, чем обычный `img`, но не стоит увлекаться этим тегом: поисковик тебе за это спасибо не скажет.

Имеет смысл ставить картинку как бэкграунд только тогда, когда `img` использовать невозможно.

{% include "authors/furtivite/in-work.njk" %}

Стоит понимать разницу между `div` с фоновой картинкой и, собственно, картинкой `img`. У картинки можно указывать только один параметр размера: высоту или ширину, и браузер сам рассчитает второй. У блока с фоном надо указывать оба параметра.

Так происходит потому, что картинка `img` — это контент, под который будут подстраиваться элементы вокруг и блок-родитель, а фоновое изображение у `div` — это простой декоративный элемент.

Это важно помнить, когда вам нужно будет работать с адаптивностью.

{% include "authors/grachev/author.njk" %}
