---
title: "text-rendering"
name: text-rendering
author: ezhkov_d
co-authors:
designers:
contributors:
summary:
  - render
  - рендер
  - кернинг
  - лигатуры
  - SVG
---

## Кратко

Свойство `text-rendering` позволяет указывать браузеру, какие оптимизации нужно производить с текстом во время рендера.

## Пример

```html
<p class="legible">I’m filling this page</p>
```

```css
.legible {
  text-rendering: optimizeLegibility;
}
```

## Как это понять

Чтобы символ шрифта мог менять свой размер в любых пределах, сохраняя при этом читаемость и гладкость, он представляет собой не растровую картинку, состоящую из пикселей, а набор математических формул, описывающих кривые и прямые, из которых состоит символ. Это позволяет браузеру отрисовывать символ любого размера.

Когда браузер «рассчитал» внешний вид символа, он должен корректно отрисовать символ в пиксельной сетке экрана монитора. Процесс заполнения пикселей после расчётов для видимой отрисовки чего угодно называется **рендеринг**.

Рендеринг текста — это процесс отрисовки символов шрифта в пиксельной сетке. При этом для обеспечения более естественного вида текста браузер может выполнять дополнительные вычисления и модификации символов: изменять **кернинг** (межсимвольное расстояние), объединять пары и даже тройки символов в **лигатуры**.

<figure>
  <img src="/assets/images/posts/text-rendering/kerning.png" width="260" height="247" alt="Пример кернинговых пар">
  <figcaption>
    Яркий пример кернинговой пары — сочетание символов <strong>AV</strong> или <strong>VA</strong>.
  </figcaption>
</figure>

<figure>
  <img src="/assets/images/posts/text-rendering/ligatures.png" width="500" height="463" alt="Пример лигатур">
  <figcaption>
    Яркий пример кернинговой пары — сочетание символов <strong>fi</strong>, <strong>fl</strong>, <strong>at</strong>.
  </figcaption>
</figure>

Не все шрифты имеют богатый набор кернинговых пар или лигатуры, поэтому употребление свойства `text-rendering` уместно не для каждого дизайна.

Рендеринг текста — сложный процесс, и браузеру приходится решать, как именно оптимизировать вывод символов: где-то скорректировать кернинг, где-то собрать символы в лигатуры, а где-то обеспечить геометрическую точность отрисовки символа. Свойство `text-rendering` указывает, что именно должен оптимизировать браузер во время рендеринга.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="ezhkov" data-slug-hash="OJRzYjL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="text-rendering">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/OJRzYjL">
  text-rendering</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

В примере показаны различные шрифты для понимания терминов **лигатура** и **кернинговая пара**.

## Как пишется

```css
/* Ключевые слова */
text-rendering: auto; /* По умолчанию */
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;

/* Глобальные значения */
text-rendering: inherit;
text-rendering: initial;
text-rendering: unset;
```

### `auto`

Значение по умолчанию. Браузер пытается самостоятельно угадать, в какой момент отрисовки важна скорость вывода символов, в какой — читаемость, а в какой — геометрическая точность.

### `optimizeSpeed`

При отрисовке текста браузер будет ставить в приоритет именно скорость отрисовки, поэтому лигатуры и кернинг будут отключены.

### `optimizeLegibility`

Используется в случае, когда важна не скорость отрисовки, а удобочитаемость текста и визуальная красота сочетаний символов. При таком значении браузер активно использует лигатуры и корректирует кернинг.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="ezhkov" data-slug-hash="abmErGG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="text-rendering 2">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/abmErGG">
  text-rendering 2</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `geometricPrecision`

Основной приоритет при рендеринге текста — геометрическая точность. В некоторых шрифтах кернинг изменяется не пропорционально изменению размера шрифта. Это может приводить к не самому лучшему внешнему виду текста. При установке `text-rendering: geometricPrecision` браузер начинает вычислять кернинг, основываясь на геометрической точности в положении символов, благодаря чему в некоторых случаях внешний вид текста может существенно улучшиться.

Когда мы масштабируем текст, браузер вычисляет итоговый размер символа, опираясь на размер шрифта и текущий масштаб, после чего запрашивает шрифт вычисленного размера у операционной системы. Иногда сочетание размера и масштаба может выдать дробное итоговое значение (например, размер шрифта 12 при масштабе 110% даст в итоге 13,2), которого просто не существует в системе. Тогда браузер округляет размер до ближайшего целого (13) и запрашивает его в системе. Это приводит к ступенчатому изменению размера шрифта.

Использование значения `geometricPrecision` позволяет избежать округления и отрисовывать текст именно такого размера, как задумано. Тут мы получаем плавное масштабирование и точность отрисовки. Но при одном условии — это должно полностью поддерживаться движком рендеринга.

## Подсказки

💡 Нужно понимать, что использование кернинга и лигатур требует от браузера дополнительных вычислений может существенно замедлить рендеринг больших объемов текста, так что использовать значение `optimizeLegibility` следует с осторожностью.
