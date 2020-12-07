---
title: letter-spacing
name: letter-spacing
author: grachev
co-authors:
  - vladimir
  - ABatickaya
designers:
contributors:
summary:
  - letter-spacing
---

## Кратко

`letter-spacing` задаёт межбуквенное расстояние — интервал между символами в тексте.

## Пример

```css
/* Стандартное расстояние между символами */
letter-spacing: normal;

/* Расстояние, заданное вручную с помощью значений длины */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: 0.3px;

/* Значение, относительно другого элемента */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

## Как это понять

С помощью `letter-spacing` можно сжать или растянуть текст на веб-странице. При этом расстояние между буквами и другими символами уменьшается или увеличивается, а сами символы остаются прежнего размера.

## Как пишется

Задать межбуквенное расстояние можно в пикселях `px`, дюймах `in`, пунктах `pt` или других единицах, которые используются в CSS. Но лучше сделать это в относительных единицах — `em` или `ex`.

Значение может быть отрицательным, например, `-1px;`. В этом случае убедитесь, что текст всё ещё можно прочесть, потому что скорее всего буквы «склеятся».

Вот какие значения можно задать:

- `normal` — стандартное межбуквенное расстояние, которое задано для шрифта. Значение по умолчанию.
- `inherit` — расстояние как у родительского элемента.
- `<length>` — конкретное значение в `px`, `in`, `pt`, `em` или `ex`. Положительное значение добавляется к стандартному расстоянию между буквами, а отрицательное — вычитается из него.

## Ещё примеры

Попробуем задать расстояние между символами разными способами:

```html
<p class="normal">Стандартное расстояние normal</p>
<p class="em-wide">Чуть шире, относительно стандартного. Задаём 0.4em</p>
<p class="em-wider">Ещё шире, относительно стандартного: 1em</p>
<p class="em-tight">
  Немного сжимаем с помощью отрицательного значения -0.05em;
</p>
<p class="px-wide">Добавляем по 6px между символами</p>
```

```css
.normal {
  letter-spacing: normal;
}
.em-wide {
  letter-spacing: 0.4em;
}
.em-wider {
  letter-spacing: 1em;
}
.em-tight {
  letter-spacing: -0.05em;
}
.px-wide {
  letter-spacing: 6px;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="max-grachev" data-slug-hash="BEaZmG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="letter-spacing">
  <span>See the Pen <a href="https://codepen.io/max-grachev/pen/BEaZmG">
  letter-spacing</a> by Max Grachev (<a href="https://codepen.io/max-grachev">@max-grachev</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Подсказки

💡 Слишком большое или маленькое межбуквенное расстояние может растянуть или сжать текст так, что его будет сложно прочесть.

💡 Помни, что у каждого шрифта своё стандартное расстояние между символами. Поэтому для одного шрифта разряженный интервал может смотреться хорошо, а для другого ужасно.

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠 При вёрстке макета, нарисованного в Фотошоп, у вас могут возникнуть проблемы с `letter-spacing`. Причина в том, что в ФШ используется другая логика для расчёта межбуквенного расстояния.

![Межбуквенное расстояние в Фотошопе](/assets/images/posts/letter-spacing/letter-spacing.png)

Если попробовать задать элементу `letter-spacing: 20px`, то получишь следующий результат.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="YMgKyy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="YMgKyy">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/YMgKyy">
  YMgKyy</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Это не совсем то, что нужно. Но как тогда правильно перенести межбуквенное расстояние их ФШ в вёрстку?

Нужно использовать следующую хитрую функцию:

```
x * z / 1000 = y
```

- `z` — размер шрифта (`font-size`) в пикселях.
- `x` — значение межбуквенного расстояния из ФШ.
- `y` — результат вычисления, нужное значение для свойства `letter-spacing` в пикселях.

Подставим значения с картинки выше:

```
20 * 18 / 1000 = .36px
```

Можно также вычислить межбуквенное расстояние в `em`. Для этого используй формулу:

```
x / 1000 = y
```

Где `x` — значение межбуквенного расстояния из ФШ.

{% include "authors/vladimir/in-work.njk" %}

🛠 Свойство `letter-spacing` хорошо бы прописать для всех элементов, потому что браузеры могут делать разные расстояния между знаками: тогда текст начинает плыть. Особенно Safari, этим грешит.

То есть делаем прямо так:

`letter-spacing: .3pt` или любое нужное значение. Вообще мне нравится делать шрифт чуть шире, чем по умолчанию, как-то свободнее выглядит сайт в итоге, хотя это, конечно, на усмотрение дизайнера.

{% include "authors/grachev/author.njk" %}
