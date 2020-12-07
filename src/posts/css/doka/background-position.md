---
title: background-position
name: background-position
author: ABatickaya
co-authors:
designers:
contributors:
summary:
  - background-position
---

## Кратко

При помощи свойства `background-position` можно управлять положением фоновой картинки внутри элемента.

Если картинка, которая установлена фоном для элемента (свойство [background-image](/posts/css/doka/background-image)) меньше, чем сам этот элемент, и если отключишь автоматическое повторение фона по горизонтали и вертикали ([background-repeat]() ), то по умолчанию фоновая картинка будет располагаться в левом верхнем углу.

## Пример

HTML

```html
<div class="element"></div>
```

CSS

```css
.element {
  height: 100vh;
  background-color: #a91517;
  background-image: url("https://l.imgt.es/resource-preview-imgs/1d9806ec-7ef9-49ea-b60c-f1c9ca956b0a%2Fbaymax.crop_316x237_0%252C26.preview.png?profile=max500x190");
  background-repeat: no-repeat;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="Ygrypa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Ygrypa">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/Ygrypa">
  Ygrypa</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Как видно в примере, маленькая картинка с персонажем располагается в левом верхнем углу. Но по логике изображения нам нужно расположить его в правом нижнем углу.

Для этого мы изменим стандартное значение свойства `background-position` на нужное нам. В данный момент пригодится значение `100% 100%` или `bottom right`. Они равнозначны.

```css
.element {
	...
	background-position: 100% 100%; /* Позиция в процентах */
	background-position: bottom right; /* Или при помощи ключевых слов */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="eXGpjg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="eXGpjg">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/eXGpjg">
  eXGpjg</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Как это понять

Слово `position` переводится с английского языка как позиция. Всё свойство дословно можно перевести как _фон-позиция_. Или по-русски позиция фона.

Свойство `background-position` позволяет управлять положением фонового изображения внутри блока.

## Как пишется

Возможные значения для свойства `background-position`:

- Проценты. Левый верхний угол считается за 0% 0%. Правый нижний — за 100% 100%. Исходя из этого можно указать значение в процентах для нужного расположения картинки. Например, для расположения картинки по центру блока указывают 50% 50%. Проценты рассчитываются от размеров родительского элемента.

  ```css
  selector {
    background-position: 100% 100%; /* Правый нижний угол */
    background-position: 50% 50%; /* Центр-центр */
    background-position: 15% 5%; /* 15% от верхнего края и 5% от левого края */
  }
  ```

- Ключевые слова. Доступны слова `center`, `bottom`, `left`, `right`. С их помощью и с помощью их комбинаций можем также расположить картинку как нам надо. Возможные значения: `center` (второе слово, если оно совпадает с первым, опускается); `left center` — по центру левой стороны; `right bottom` — ключевые слова можно указывать в любом порядке — правый нижний угол.

  ```css
  selector {
    background-position: left top; /* Левый верхний угол */
    background-position: center; /* Центр-центр 😁 */
    background-position: center bottom; /* По центру горизонтали и у нижнего края */
  }
  ```

- Пиксели или другие единицы измерения веба. Можно указать конкретное положение картинки в блоке. Первая цифра укажет положение по горизонтали, вторая — по вертикали.

  ```css
  selector {
    background-position: 10px 150px; /* 10px от левого края и 150px от верхнего края */
    background-position: 1rem; /* 1rem от левого края и по центру между верхом и низом */
    background-position: 15vw 25vh; /* 15 единиц ширины от левого края и 25 единиц высоты от верха */
  }
  ```

# Подсказки

💡Свойство положения фона не наследуется.

💡Значение по умолчанию — 0% 0% (левый верхний угол)

💡Если указано только одно значение в процентах, то второе подставляется автоматически и равняется 50%. То есть значение `100%` расположит картинку по центру левого края.

💡Если картинка занимает всё пространство блока, то `background-position` не возымеет никакого действия. Но его принято указывать чтобы в случае замены картинки новое изображение располагалось по центру блока.

💡Изменение положения фона можно анимировать при помощи свойства `transition` 🥳

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠 В работе редко требуется располагать маленькие фоновые картинки в больших блоках. Сейчас принято делать красивые фоны на всю ширину. Но для любых фонов принято указывать `background-position: center` или `background-position: 50% 50%`. В качестве подстраховки от фатальной поломки вёрстки.

🛠 Можно встретить такую запись `background-position: right 20px bottom 10px;`. В этом случае отступ будет отсчитываться не от верхнего левого угла, а от указанной при помощи ключевого слова стороны. В данном случае картинка будет расположена в 20 пикселях от правого края и в 10 пикселях от нижнего края.

🛠 Помимо перечисленных [возможных значений]() можно использовать функцию `calc()` для указания более гибкого значения.

{% include "authors/ABatickaya/author.njk" %}
