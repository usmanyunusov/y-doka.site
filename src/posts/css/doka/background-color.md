---
title: background-color
name: background-color
author: ABatickaya
co-authors:
designers:
contributors:
summary:
  - background-color
---

## Кратко

При помощи свойства `background-color` можно задать цвет фона элемента. Задать фоновый цвет можно любому элементу — строчному (inline), блочному (block) или строчно-блочному (inline-block).

## Пример

HTML

```html
<div class="parent">
  <p class="block">Блочный элемент с цветным фоном</p>

  <a href="#" class="link">Строчный элемент с цветным фоном</a>
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
  background-color: rgb(173, 216, 230);
}

.inline-block {
  display: inline-block;
  margin-top: 15px;
  background-color: #90ee90;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="solarrust" data-slug-hash="RdgxGW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="RdgxGW">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/RdgxGW">
  RdgxGW</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

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
	background-color: #FFFFFF; /* Белый */
	background-color: #FFFFFF80; /* Белый полупрозрачный */
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
  background-color: #f1f1f1; /* Фон для всей формы */
}

.input {
  background-color: transparent; /* Прозрачное поле ввода */
}

.submit {
  background-color: blue; /* Синий фон для кнопки */
  transition: 0.3s ease-in-out; /* Анимируем всё анимируемое */
}

.submit:hover {
  background-color: transparent; /* Прозрачный фон при наведении курсора */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="aMwqOO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="aMwqOO">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/aMwqOO">
  aMwqOO</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠Если вам нужен градиент, то `background-color` вам не подойдёт. Градиенты можно задать только при помощи `background-image`.

🛠Если нужен блок с «рваным» краем, но без пробела между строками, то для этого есть множество трюков. Один из них:

HTML

```html
<div class="parent">
  <span class="bkg"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officia
    ratione at quibusdam doloribus natus enim? Ipsum dignissimos commodi dolorum
    numquam, distinctio voluptatem repellat doloribus, corporis nobis cumque,
    blanditiis molestias.</span
  >
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
  background-color: orange;
  box-shadow: 0 6px 0 orange; /* Тень для каждой строки, перекрывающая пробел */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="solarrust" data-slug-hash="eXRVGm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="eXRVGm">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/eXRVGm">
  eXRVGm</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠С помощью полупрозрачного фонового цвета у псевдоэлемента можно создать красивый оверлэй поверх фотографий или фоновых изображений. Это круто потому что фоном можно будет ставить любую фотографию и она в большинстве случаев не будет выбиваться из дизайна.

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
  background: url("https://themysteriousworld.com/wp-content/uploads/2017/07/matterhorn-1.jpg")
    no-repeat center / cover; /* Фоновое изображение на всю ширину и высоту блока */
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
  background-color: rgba(75, 0, 130, 0.5);
  /* Оверлей поверх картинки с прозрачностью 50% */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="LaLMBE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="LaLMBE">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/LaLMBE">
  LaLMBE</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Для `.header` можно задать любую картинку фоном и поверх неё всегда будет фиолетовый оверлэй 💁‍♀️

{% include "authors/ABatickaya/author.njk" %}
