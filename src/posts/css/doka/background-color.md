---
title: "background-color"
name: background-color
author: ABatickaya
co-authors:
designers:
contributors: skorobaeus
summary:
  - background-color
---

## Кратко

При помощи свойства `background-color` можно задать цвет фона элемента. Задать фоновый цвет можно любому элементу — строчному (inline), блочному (block) или строчно-блочному (inline-block).

## Пример

HTML

```html
<div class="parent">
  <p class="block">Розовый — цвет, образующийся ...</p>

  <span class="inline">Жёлтый — самый лёгкий и яркий цвет...</span>

  <div class="inline-block">Зелёный цвет...</div>
</div>
```

CSS

```css
.parent {
  line-height: 1.5;
}

.block {
  background-color: pink;
}

.inline {
  background-color: rgb(255, 216, 41);
}

.inline-block {
  display: inline-block;
  margin-top: 15px;
  background-color: #49a16c;
}
```

{% demo "/background-color/types", "Фоновый цвет у элементов разных типов", 410 %}

В примере выше показаны блоки всех трёх типов отображения. С фоном для блочных и строчно-блочных элементов проблем не возникает, а вот у строчных элементов видны проблемы.

Если высота строки (`line-height`) у строчного элемента будет больше 1, то между строками будут пробелы.

Но в заливке фона строчных элементов есть и преимущества! На последней строке фон заканчивается ровно там, где заканчивается текст. Иногда по дизайну требуется именно такой эффект — [вот как его достичь]().

Помимо этой особенности в CSS-коде видно, что в качестве значения для `background-color` можно использовать разные обозначения цветов: HEX-код, [ключевое слово](https://www.w3.org/wiki/CSS/Properties/color/keywords) или `rgb()`, `rgba()`.

# Как это понять

Слово **color** переводится с английского как цвет. Дословно всё свойство можно перевести как фон-цвет. Говоря человеческим языком — цвет фона.

Свойство `background-color` меняет цвет фона любого элемента.

# Как пишется

Для нужного селектора указываем свойства `background-color` и после двоеточия указываем цвет фона в любом доступном для веба формате.

```css
selector {
  background-color: black; /* Чёрный */
  background-color: #ffffff; /* Белый */
  background-color: #ffffff80; /* Белый полупрозрачный */
  background-color: rgb(255, 255, 0); /* Жёлтый */
  background-color: rgb(255 255 0 / 0.5); /* Жёлтый полупрозрачный */
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный чёрный */
  background-color: rgba(0 0 0 / 0.5); /* Полупрозрачный чёрный v.2 */
}
```

Помимо цвета можно задать прозрачный фон при помощи ключевого слова `transparent`.

Это бывает полезно для изменения цвета при наведении курсора.

## Подсказки

💡 Свойство фона не наследуется.

💡 Значение по умолчанию — прозрачный фон: `transparent`

💡 Фон нельзя задать частично. Блок заливается указанным цветом полностью.

💡 В качестве значения можно указать только один цвет.

💡 Изменение цвета фона можно анимировать при помощи свойства `transition` 🥳

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠Если нужна красивая кнопка (`button`), то не забудь \*сбросить\* фон: укажи для `background-color: transparent`. Или тот цвет фона, который нужен по дизайну. По умолчанию у всех кнопок серый фон с приветом из девяностых.

🛠Аналогичным способом можно сделать красивые прозрачные поля ввода (`input`) в формах.

HTML

```html
<form class="form">
  <label>
    Email:
    <input class="input" type="text" placeholder="Введите ваш email" />
  </label>
  <button class="submit">Подписаться</button>
</form>
```

CSS

```css
.form {
  background-color: #ffd829; /* Фон для всей формы */
}

.input {
  background-color: transparent; /* Прозрачное поле ввода */
}

.submit {
  background-color: black; /* Чёрный фон для кнопки */
  transition: 0.3s ease-in-out; /* Анимируем всё анимируемое */
}

.submit:hover {
  background-color: transparent; /* Прозрачный фон при наведении курсора */
}
```

{% demo "/background-color/form", "Форма", 130 %}

🛠Если вам нужен градиент, то `background-color` вам не подойдёт. Градиенты можно задать только при помощи `background-image`.

🛠Если нужен блок с «рваным» краем, но без пробела между строками, то для этого есть множество трюков. Один из них:

HTML

```html
<div class="parent">
  Чем отличается маркер от текстовыделителя?
  <span class="bkg">
    Текстовыделительные маркеры заправляются флуоресцентными полупрозрачными
    чернилами. Они не покрывают поверхность бумаги плотным слоем, не
    пропускающим свет, как это делают обычные маркеры на водной или спиртовой
    основе.
  </span>
</div>
```

CSS

```css
.parent {
  padding: 25px;
}

.bkg {
  font-size: 16px;
  line-height: 1.5;
  background-color: #ffd829;
  box-shadow: 0 6px 0 #ffd829; /* Тень для каждой строки, перекрывающая пробел */
}
```

{% demo "/background-color/shadow", "Блок с рваным краем, но без пробела", 120 %}

🛠С помощью полупрозрачного фонового цвета у псевдоэлемента можно создать красивый оверлей поверх фотографий или фоновых изображений. Это круто, потому что фоном можно будет ставить любую фотографию и она в большинстве случаев не будет выбиваться из дизайна.

HTML

```html
<header class="header">
  <h1 class="title">The best site all ower the world!</h1>
</header>
```

CSS

```css
.header {
  position: relative; /* Чтобы псевдоэлемент считал своё положение от этого блока */
  z-index: 0;
  background: url("background.png") no-repeat center / cover; /* Фоновое изображение на всю ширину и высоту блока */
}

.header:before {
  content: "";
  position: absolute;
  z-index: -1;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 79, 130, 0.5);
  /* Оверлей поверх картинки с прозрачностью 50% */
}
```

{% demo "/background-color/veil", "Цветная вуаль поверх блока", 570 %}

Для `.header` можно задать любую картинку фоном и поверх неё всегда будет голубой оверлей 💁‍♀️

{% include "authors/ABatickaya/author.njk" %}
