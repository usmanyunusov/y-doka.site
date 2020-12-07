---
title: width
name: width
author: ABatickaya
co-authors:
designers:
contributors:
summary:
  - ширина
  - размер
---

## Кратко

Свойство `width` отвечает за ширину элемента. С его помощью мы можем увеличивать или уменьшать ширину строчно-блочных (`inline-block`) и блочных (`block`) элементов. На строчные элементы это свойство не будет иметь никакого влияния.

Строчно-блочные (`inline-block`) элементы по умолчанию подстраиваются под ширину контента, лежащего у них внутри.

Блочные (`block`) элементы по умолчанию имеют ширину 100%. Если представить сайт как документ с текстом, то блочный элемент займёт всю строку, на которой стоит.

Кроме фиксированной ширины можно задавать элементу минимальную ширину `min-width` или максимальную ширину `max-width`.

## Пример

```html
<div class="block">Я — блочный элемент!</div>

<div class="inline-block">Я</div>
<div class="inline-block">строчно-блочный</div>
<div class="inline-block">элемент!</div>
```

```css
/* Не меняем display для .block, поскольку div уже является блочным */

.block {
  background-color: #add8e6;
}

.inline-block {
  display: inline-block;
  border: 1px solid gray;
  background-color: #90ee90;
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="eXvOVR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="eXvOVR">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/eXvOVR">
  eXvOVR</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Благодаря фонам можно увидеть, какую ширину имеет каждый из наших элементов.

Элемент с классом `.block` занял всю строку, его ширина равна 100% от ширины родителя.

Элементы с классом `.inline-block` подстроились по ширине под контент и встали в одну строку.

Напишем свойство `width` и изменим это стандартное поведение:

```css
.block {
	width: 50%; /* Ограничим ширину до половины окна */
	background-color: #add8e6;
}

.inline-block {
	width: 100%; /* Сделаем каждый элемент на всю ширину окна */
	display: inline-block;
	border: 1px solid gray;
	background-color: #90ee90;
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="solarrust" data-slug-hash="xBqKjW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="xBqKjW">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/xBqKjW">
  xBqKjW</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Как это понять

С английского языка слово **width** переводится как ширина.

Свойство `width` позволяет управлять шириной элемента согласно поставленной задаче.

## Как пишется

Для фиксированной ширины пишем свойство `width`. Для минимальной ширины — `min-width`. Для максимальной ширины — `max-width`. Эти три свойства можно указывать по отдельности, а также комбинировать для достижения нужного результата.

В качестве значения указываем число и сразу после него без пробела пишем единицу измерения. Ширину можно указывать как в относительных единицах — процентах (`%`), `vw`, `vmin` и так далее, так и в абсолютных единицах — пикселях (`px`), `rem`, `em` и любых других единицах измерения, доступных в вебе.

В данном коде все значения будут рабочими:

```css
selector {
  width: 70%;
  min-width: 320px;
  max-width: 76rem;
}
```

## Подсказки

💡По умолчанию у блочных (block) элементов ширина равна 100%. У строчно-блочных (inline-block) элементов ширина равна ширине вложенного контента.

💡Ширина в процентах рассчитывается от ширины родительского элемента. Если родительский элемент ограничен по ширине, к примеру, 450 пикселями, то у вложенного элемента ширина в 100% будет равна 450 пикселям. То есть 100% от родительского элемента. Если при этом у родителя будут также указаны внутренние отступы (`padding`), то 100% ширины для ребёнка будут равны 450px минус боковые отступы.

💡Блочный (block) элемент занимает всю строку вне зависимости от своей ширины. Оставшееся пространство займёт внешний отступ. Поэтому, ограничивая ширину блочному элементу, не ожидай, что элементы, следующие за ним, встанут с ним в одну строку. Если нужно, чтобы все элементы встали в строку, то нужно менять их с блочных (block) на строчно-блочные (inline-block).

💡Ограничив ширину блочного элемента, можно очень просто выровнять его по центру экрана. Для этого пропишем внешний отступ (`margin`) со значениями `0 auto`, где 0 отвечает за отступы сверху и снизу, а ключевое слово `auto` — за боковые отступы.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="rRyBbp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rRyBbp">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/rRyBbp">
  rRyBbp</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Именно таким образом принято выравнивать контент сайта по центру окна браузера.

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

Свойство `width`, пожалуй, самое часто встречающееся свойство в коде. В работе ты будешь манипулировать шириной очень часто.

🛠 Поскольку строчные (inline) и строчно-блочные (inline-block) элементы подстраиваются по ширине под вложенный контент, то в ситуациях, когда контента внутри нет, ширина такого элемента будет равна нулю. Но часто случается, что нам нужен декоративный элемент. В этом случае без зазрения совести задавай ширину. И не забудь про высоту ([height](/posts/css/doka/height) ).

К примеру, часто декоративные иконки верстаются при помощи фона для элементов `i` или `span`. Поскольку контента по факту в этих элементах нет, их ширина и высота будут равны 0. Пропиши `display` со значением `block` или `inline-block`, задай ширину и высоту иконки и укажи путь до фонового изображения:

```html
<div class="card">
  <i class="card__icon"></i>
  <!-- Внимание на меня! -->
  <h2 class="card__title">Заголовок карточки</h2>
  <p class="card__text">Некий текст новостной карточки</p>
</div>
```

```css
...

.card__icon {
	display: inline-block;
	width: 56px;
	height: 56px;
	background: url('https://yastatic.net/morda-logo/i/services/1/mail.svg') no-repeat center / cover;
}

...
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="Rdpwaw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Rdpwaw">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/Rdpwaw">
  Rdpwaw</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠 Часто начинающие разработчики разбивают текст заголовка или абзаца на строки при помощи тега `br` чтобы было точно, как в макете. В таких случаях стоит помнить, что сайты редко остаются неприкосновенными и чаще всего в процессе жизни сайта тексты на нём меняются многократно. Поэтому нужно писать стили так, чтобы любой текст, вставленный в блок, выглядел хорошо.

**Пример макета:**

![Пример макета](/assets/images/posts/width/width.png)

**Как не надо делать:**

```html
...
<p class="card__text">
  Get the official status of an agent <br />
  in the projectname and earn with us.
</p>
...
```

**Как можно сделать:**

Лучше задай максимальную ширину, которую должен занимать текст в элементе. Тогда любой текст будет смотреться хорошо. Ничего страшного, если перенос слов или строк не будет на 100% совпадать с макетом. Но такое решение будет дальновидным и владельцы сайта не столкнутся с проблемами при замене текстов.

```html
...
<p class="card__text">
  Get the official status of an agent in the project name and earn with us.
</p>
...
```

```css
...
.card__text {
	max-width: 65%;
	margin: 0 auto; /* Для выравнивания по центру */
}
...
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="GeWRyq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GeWRyq">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/GeWRyq">
  GeWRyq</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Теперь любой текст будет занимать не больше, чем 65% от ширины карточки 🎉

🛠 Не стоит совместно использовать и `max-width`, и `min-width` у одного элемента. Лучше просто написать `width`, будет меньше строк.

{% include "authors/ABatickaya/author.njk" %}
