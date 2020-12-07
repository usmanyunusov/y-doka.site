---
title: Псевдоэлементы
name: pseudoelements
author: ABatickaya
co-authors:
designers:
contributors: furtivite
summary:
  - псевдоэлемент
  - селекторы
---

## Кратко

Псевдоэлементы  —  это элементы, которых не существует в HTML-разметке. Они создаются и позиционируются исключительно при помощи CSS. Чаще всего используются для создания различных декоративных элементов, которые не имеют особого значения с точки зрения контента.

Так же псевдоэлементы приходят на помощь, когда нужно наложить поверх картинки так называемый оверлей. Но этим польза от псевдоэлеменов не заканчивается.

## Пример

Самый частый сценарий использования псевдоэлемента — наложение полупрозрачной заливки поверх картинки (оверлея). Чаще всего это требуется на первом экране, но этим способом можно наложить оверлей на любое изображение на сайте.

```html
<header class="header">
  <h1 class="header__title">Самый лучший сайт!</h1>
</header>
```

```css
.header {
  background: #999
    url("https://cdn.pixabay.com/photo/2019/05/26/03/41/background-4229527_960_720.jpg")
    no-repeat center / cover;
}

.header__title {
  color: #fff;
  font-size: 82px;
  text-transform: uppercase;
  text-align: center;
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="QRoLde" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="QRoLde">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/QRoLde">
  QRoLde</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Чтобы цвет картинки был не таким ярким и текст лучше читался наложим поверх всего `header` полупрозрачную заливку чёрного цвета.

```css
.header {
  position: relative; /* Добавляем позиционирование родителю */
  z-index: 0; /* Указываем порядок наложения */
}

.header:before {
  content: ""; /* Обязательное свойство для псевдоэлементов :before / :after */
  display: block;
  position: absolute; /* Позиционируем относительно родителя */
  top: 0;
  left: 0;
  /* Растягиваем на всю ширину и высоту */
  width: 100%;
  height: 100%;
  background-color: rgba(0 0 0 / 0.5); /* Задаём полупрозрачный чёрный фон */
  z-index: -1; /* Убираем под текст */
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="vwPBpa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="vwPBpa">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/vwPBpa">
  vwPBpa</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Не трогая HTML-разметку, мы добавили ещё один элемент в декоративных целях. Разметка осталась чистой. Псевдоэлементов легко управлять, добавлять или удалять его по необходимости, даже если нет доступа к HTML.

## Как это понять

Определение приставки «псевдо» в словаре: «...Приставка, означающая ложность, ненастоящесть следующего за ней».

Из этого определения можно понять, что псевдоэлементы не существуют на самом деле. Это порождение CSS, которое можно изменять / удалять / добавлять, не трогая реальную HTML-разметку.

### Как пишется

Существует несколько пседовэлементов. Рассмотрим каждый из них.

### `:before` / `:after`

Два самых часто встречающихся псевдоэлемента. Они очень похожи между собой. Единственная разница заключается в том, что [`:before`](/posts/css/doka/before) располагается по-умолчанию перед элементом, для которого задаётся. А [`:after`](/posts/css/doka/after) в свою очередь располагается после элемента, для которого создаётся. Эта разница отражена в названии: слово **before** переводится с английского как «до» или «перед»; слово **after** переводится как «после».

Для обоих элементов обязательным является свойство [`content`](/posts/css/doka/content). С его помощью можно вставить какое-нибудь слово до или после текста.

Создадим текстовый элемент с именем пользователя.

```html
<span class="username">Гордон</span>
```

Поприветствуем пользователя и скажем ему комплемент:

```css
.username:before {
  content: "Привет, ";
}

.username:after {
  content: ", ты отлично выглядишь!";
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="solarrust" data-slug-hash="OYqJrb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="OYqJrb">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/OYqJrb">
  OYqJrb</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Как видно в примере, текст из свойства `content` псевдоэлемента `before` встал перед именем пользователя, а из псевдоэлемента `after` — после.

Эта пара псевдоэлементов по-умолчанию являются строчными. Но это легко изменить при помощи стилей.

Подчеркнём декоративной линией текст.

```css
.username {
  display: inline-block; /* Чтобы линия была по ширине текста */
}

.username:before {
  content: "Привет, ";
}

.username:after {
  content: "";
  display: block; /* Делаем псевдоэлемент блочным */
  width: 100%;
  height: 2px;
  background-color: red;
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="solarrust" data-slug-hash="PvLoMW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="PvLoMW">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/PvLoMW">
  PvLoMW</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### `:first-letter`

При помощи этого псевдоэлемента можно выбрать первую букву в строке или абзаце текста. Это позволяет создать так называемую _буквицу —_ большую декоративную букву в начале текста*.*

```html
<p class="text">Прекрасное, следовательно, представляет собой символизм...</p>
```

```css
.text:first-letter {
  font-size: 64px; /* Увеличиваем размер первой буквы */
  color: red; /* и красим в красный цвет */
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="dErPEW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="dErPEW">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/dErPEW">
  dErPEW</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### `:first-line`

Этот псевдоэлемент выбирает первую строку текста. Обрати внимание, что он сработает только для блочных элементов. Со строчными этот трюк не пройдёт.

Например, можно сделать «красную строку» как учили в школе =)

```html
<p class="text">
  Героическое готично представляет собой персональный эдипов...
</p>
```

```css
.text:first-line {
  color: red;
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="RmdPVJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="RmdPVJ">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/RmdPVJ">
  RmdPVJ</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### `::selection`

**Важно**: данный псевдоэлемент нужно писать именно с двумя двоеточиями.

С помощью псевдоэлемента `::selection` можно управлять стилем текста, который пользователь выделяет при помощи мыши.

![Внешний вид псевдоэлемента ::selection](/assets/images/posts/pseudoelements/selection.png)

Текст на сайте [Smashing Magazine](https://www.smashingmagazine.com/) выделяется красным цветом. Использование псевдоэлемента `::selection` позволяет выдержать стиль оформления во всём, вплоть до такой мелочи, как выделение текста.

Целесообразнее всего задавать этот псевдоэлемент не какому-то отдельному блоку, а всей странице целиком.

```css
::selection {
  background-color: rgba(255 219 77 / 0.5);
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="ZNPONj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ZNPONj">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/ZNPONj">
  ZNPONj</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Если выделить текст в этом примере, то станет видно, что фон выделения будет полупрозрачного жёлтого цвета.

### `::placeholder`

Этот псевдоэлемент так же должен писаться с двумя двоеточиями.

Этот псевдоэлемент позволяет стилизовать текст, выводимый в поле ввода текста (`input`) в виде подсказки.

Текст подсказки задаётся при помощи атрибута `placeholder` у тега `input`.

```html
<input type="email" placeholder="test@example.com" />
```

![Внешний вид псевдоэлемента ::placeholder](/assets/images/posts/pseudoelements/placeholder.png)

По-умолчанию цвет текста подсказки серый. Но иногда по дизайну требуется другой цвет.

Используйте псевдоэлемент `::placeholder` и задайте нужные стили для подсказки. Можно изменить всё в плоть до шрифта. При этом стили текста, который будет вводить пользователь, не будут затронуты.

```css
input::placeholder {
  color: rgba(255 0 0 / 0.4);
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="solarrust" data-slug-hash="PvLGNp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="PvLGNp">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/PvLGNp">
  PvLGNp</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Подсказки

💡Обязательно проверяй поддержку псевдоэлемента в нужных браузерах. Для этого можно использовать сайт [https://caniuse.com/](https://caniuse.com/)

💡У свойства `content` есть несколько полезных трюков. Например, с помощью data-атрибута у тега (которому можно задать значение при помощи JavaScript) и значения `attr(data-атрибут)` вывести, например, количество непрочитанных сообщений на лейбле. Или количество товаров в корзине. Такой способ будет «дешевле» в том плане, что реальная HTML-разметка не изменяется.

💡В качестве значения свойства `content` можно задавать символы юникод. Например, можно вставить символ копирайта при помощи записи `content: "&#169;"`

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠 Очень интересный и полезный трюк — задавать кастомный счётчик спискам. Бывает необходимость добавить скобки после цифры вместо стандартной точки.

```html
<ol class="list">
  <li class="list__item">Определение</li>
  <li class="list__item">Свойства</li>
  <li class="list__item">Списки в языках программирования</li>
  <li class="list__item">См. также</li>
  <li class="list__item">Примечания</li>
</ol>
```

Для создания кастомного счётчика первым делом нужно сбросить стандартные маркеры списка:

```css
.list {
  list-style-type: none;
}
```

Теперь придумай и пропиши имя нового счётчика. Имя счётчика будет использоваться дальше.

```css
.list {
  list-style-type: none;
  counter-reset: new-counter;
}
```

Говорим браузеру, что считать нужно именно пункты списка:

```css
.list__item {
  counter-increment: new-counter;
}
```

Теперь для каждого пункта списка прописываем псевдоэлемент `:before` и запускаем кастомный счётчик, дополняя его нужными символами. В текущем случае в кавычках добавляем круглую скобку и пробел:

```css
.list__item:before {
  content: counter(new-counter) ") ";
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="LoaRrN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="LoaRrN">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/LoaRrN">
  LoaRrN</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Подобным образом можно менять стили маркеров так, как заблагорассудится.

🛠 Псевдоэлементы — лучшее, что придумали в CSS 😆 Но с ними жить и верстать гораздо проще. Удели время и поищи интересные трюки и фишки, которые можно сделать при помощи пседоэлементов.

Эти маленькие друзья верстальщика могут удивить тебя своей могущественностью.

Их возможности заслуживают отдельной статьи. Например, такой, которую написал Крис Койер: [https://css-tricks.com/pseudo-element-roundup/](https://css-tricks.com/pseudo-element-roundup/)

{% include "authors/ABatickaya/author.njk" %}
