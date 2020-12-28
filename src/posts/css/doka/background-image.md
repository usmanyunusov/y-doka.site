---
title: "background-image"
name: background-image
author: grachev
co-authors:
designers:
contributors: skorobaeus
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

CSS

```css
body {
  background-image: url(background.png); /* Адрес фонового изображения */
  background-color: #09ff00; /* Кислый цвет фона */
}
```

{% demo "/background-image/basic", "Фоновый рисунок", 183 %}

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

HTML

```html
<div class="element">
  <h1 class="main-title">Фронтенд-блог: чиним вёрстку одной строкой</h1>
</div>
```

CSS

```css
.element {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("broken-link-to-image.png");
}

.main-title {
  width: 80%;
  margin: 0 auto;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 3rem;
}
```

{% demo "/background-image/fix", "Ошибка загрузки", 260 %}

Чиним одной строкой:

```css
.element {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("broken-link-to-image.png");
  background-color: gray;
}
```

{% demo "/background-image/fix-2", "Ошибка загрузки", 290 %}

Да, будет не так красиво, как нарисовал дизайнер, но вся информация будет доступна.

🛠 Кроме линейного градиента можно задавать радиальный — круглый — градиент. Для этого нужно написать следующее:

HTML

```html
<div class="parent">
  <div class="spread-gradient"></div>
  <div class="smooth-cirle"></div>
  <div class="sharp-cirle"></div>
</div>
```

CSS

```css
.parent {
  display: flex;
  justify-content: space-around;
  padding: 5%;
  background-color: #1a5ad7;
}

.spread-gradient,
.smooth-cirle,
.sharp-cirle {
  width: 200px;
  height: 200px;
}

.spread-gradient {
  background-image: radial-gradient(#e6e6e6, #1a5ad7);
}

.smooth-cirle {
  background-image: radial-gradient(#e6e6e6, #1a5ad7 70%);
}

.sharp-cirle {
  background-image: radial-gradient(#e6e6e6 70%, #1a5ad7 70%);
}
```

{% demo "/background-image/gradient", "Радиальные градиенты", 120 %}

{% include "authors/vladimir/in-work.njk" %}

🛠`backgroung-image` хорош тем, что при правильном сочетании с `background-size` может встроить фоновую картинку как угодно. Получается порой более гибко, чем обычный `img`, но не стоит увлекаться этим тегом: поисковик тебе за это спасибо не скажет.

Имеет смысл ставить картинку как бэкграунд только тогда, когда `img` использовать невозможно.

{% include "authors/furtivite/in-work.njk" %}

Стоит понимать разницу между `div` с фоновой картинкой и, собственно, картинкой `img`. У картинки можно указывать только один параметр размера: высоту или ширину, и браузер сам рассчитает второй. У блока с фоном надо указывать оба параметра.

Так происходит потому, что картинка `img` — это контент, под который будут подстраиваться элементы вокруг и блок-родитель, а фоновое изображение у `div` — это простой декоративный элемент.

Это важно помнить, когда вам нужно будет работать с адаптивностью.

{% include "authors/grachev/author.njk" %}
