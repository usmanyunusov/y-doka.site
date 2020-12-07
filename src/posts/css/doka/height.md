---
title: height
name: height
author: ABatickaya
co-authors:
designers:
contributors:
summary:
  - высота
  - размер
---

## Кратко

Любой HTML-элемент сам по себе по высоте равен нулю. Обычно элементы подстраиваются по высоте под то количество контента, которое лежит у него внутри. Но что делать, если дизайнер придумал иначе, или если внутри вообще ничего нет?

При помощи свойства `height` можно задать высоту любому блочному (block) или строчно-блочному (inline-block) элементу. Высоту можно задавать как в абсолютных единицах (пикселях `px`) так и в относительных (проценты, `vh` , `vmin`, `rem` и так далее).

Помимо фиксированной высоты мы можем задать минимальную высоту элемента — `min-height`. В этом случае элемент сможет растягиваться на большую высоту, если того требует контент, размещённый внутри, но никогда не сожмётся по высоте меньше, чем указано в свойстве `min-height`.

Для максимальной высоты мы пишем свойство `max-height`. И тогда элемент будет иметь возможность растягиваться по высоте до тех пор, пока не достигнет размера, указанного в свойстве `max-height`. И дальше не растянется ни на пиксель.

## Пример

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="ZPQjBW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ZPQjBW">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/ZPQjBW">
  ZPQjBW</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

```html
<div class="container">
  <div class="item"></div>
</div>
```

```css
.container {
  height: 150px; /* высота родителя */
  padding: 25px;
  background-color: #f2f2f2;
}

.item {
  height: 50px; /* высота вложенного блока */
  margin: 0 10px;
  background-color: #bada55;
}
```

Поскольку оба блока — `.container` и `.item` — пустые, в них нет контента, то без стилей их высота будет равна нулю. Мы изменили это, задав элементу `.container` высоту `150px`, а элементу `.item` высоту `50px`.

Добавим контент в элемент `.item`:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="BbjOgZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="BbjOgZ">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/BbjOgZ">
  BbjOgZ</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Из-за фиксированной высоты контент вываливается из блока. Как можно это исправить? Заменить `height` на `min-height`!

```css
.item {
  min-height: 50px; /* Меняем фиксированную высоту на минимальную */
  margin: 0 10px;
  background-color: #bada55;
}
```

Теперь, если контента внутри не будет, то высота блока будет равна `50px`, но как только появится контент — элемент растянется по высоте так, чтобы уместить в себе весь контент!

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="drXZrd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="drXZrd">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/drXZrd">
  drXZrd</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Как это понять

С английского языка **height** переводится как высота.

Свойство `height` даёт возможность менять высоту любого блока на своё усмотрение.

## Как пишется

Пишем свойство `height` для фиксированной высоты, `min-height` для минимальной высоты и `max-height` для максимальной высоты.

Для элемента можно написать только одно из них, два или все три сразу, если это нужно для решения конкретной задачи.

В качестве значения пишем число, а за ним без пробела единицу измерения: `px`, `%`, `vh`, `rem`, `em` или любую другую единицу измерения, доступную в вебе.

```css
selector {
  height: 10px;
  min-height: 100%;
  max-height: 100vh;
}
```

## Подсказки

💡Свойство высоты не наследуется.

💡По умолчанию задается значение `auto`.

Это ключевое слово бывает полезно, когда нужно _сбросить_ высоту, заданную ранее. Например, оно пригодится при доработке сайта, к исходным стилям которого нет доступа.

CSS

```css
/* Стили, до которых нет доступа */
.container {
  height: 150px; /* фиксированная высота */
}

...

/* Твои стили */
.container {
  height: auto; /* перезаписываем предыдущее значение, теперь высота подстраивается под контент */
}
```

Также оно может пригодится при адаптивной вёрстке.

💡Не задавай фиксированную высоту блокам, в которых есть контент. Если контента завтра станет больше, то блок не растянется и контент из него выпадет. Не надо так. Если без высоты никак не обойтись, то используйте `min-height`.

💡Строчные элементы не реагируют на `height`. Хочешь изменить высоту? Меняй элемент со строчного (inline) на блочный (block) или строчно-блочный (inline-block)!

💡Пишешь `height: 100%` и ничего не работает? Помни, что высота в процентах рассчитывается от высоты родителя. И сработает, только если у родителя задана эта самая высота.

Отношения родительский-дочерний элемент проще объяснить на примере.

```html
<div class="parent">
  <div class="child child-1">
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
  <div class="child"></div>
</div>
```

В примере выше элемент с классом `parent` является родительским для элементов с классом `child`. Они, в свою очередь, будут называться дочерними по отношению к элементу с классом `parent`.

Для элемента с классом `grandchild` родительским будет элемент с классом `child-1`.

Применительно к нашей ситуации элемент `grandchild` будет наследовать свою высоту от элемента `child-1`.

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠 Чаще всего не требуется задавать фиксированную высоту блокам с контентом. Можно обойтись внутренними отступами (padding).

Вернёмся к примеру, который разбирали выше. Можно совсем убрать свойство `height` и заменить его на `padding: 25px`. Теперь, если контента внутри блока нет, то внутренние отступы сверху (25 пикселей) и снизу (25 пикселей) будут растягивать элемент на 50 пикселей.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="YgWEmv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="YgWEmv">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/YgWEmv">
  YgWEmv</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Как только добавится контент, блок растянется, не произойдёт никакого выпадения контента, потому что не задана фиксированная высота. От верхнего и нижнего краёв контента до верхнего или нижнего краёв блока соответственно будут отступы в 25 пикселей.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="xBOpxX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="xBOpxX">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/xBOpxX">
  xBOpxX</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Чтобы родительский блок `.container` тоже подстраивался под размеры контента, можно:

1. Заменить фиксированную высоту на минимальную: `min-height: 150px`.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="KEMZpd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="KEMZpd">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/KEMZpd">
  KEMZpd</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

2. Убрать высоту совсем и заменить её на внутренние отступы (`padding`). Этот вариант подойдёт, если не принципиально сохранить высоту 150 пикселей

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="solarrust" data-slug-hash="Mxerae" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Mxerae">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/Mxerae">
  Mxerae</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

🛠 Но есть несколько ситуаций, в которых без высоты никак.

1. В блоке нет контента. Он декоративный. Например, квадрат. Задаём одинаковые высоту и ширину. Profit!
2. Первый экран сайта. Обычно дизайнеры хотят, чтобы первый экран всегда был по высоте не больше и не меньше высоты экрана пользователя. В этом случае поможет `height: 100vh`. Не забудь подстраховаться и задать минимальную высоту блоку. Например: `min-height: 350px`. Никогда нельзя быть уверенным, что высоты экрана пользователя достаточно для того, чтобы уместился весь важный контент.

🛠 В реальных задачах крайне редко требуется задавать высоту в относительных единицах `rem` и `em`. Эти единицы завязаны на размере шрифта. Рассчитывать высоту блока от размера текста почти никогда не требуется.

Но другие относительные единицы: `vh`, `vw`, а также `vmin` и `vmax` — будут встречаться вам гораздо чаще. Рассчитывать высоту элемента от высоты или ширины экрана пользователя бывает очень удобно.

{% include "authors/ABatickaya/author.njk" %}
