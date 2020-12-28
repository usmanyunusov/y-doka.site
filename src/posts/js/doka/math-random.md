---
title: "Math.random()"
name: math-random
author: N_Lopin
co-authors:
designers:
contributors:
summary:
---

## Кратко

Одна из самых часто используемых функции объекта `Math`. Возвращает случайное число в диапазоне от `0` до `1`, не включая `1`.

## Как пишется

```js
let value = Math.random()

console.log(value) // выведет случайное число
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="Lopinopulos" data-slug-hash="agoXBj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Math в работе - random">
  <span>See the Pen <a href="https://codepen.io/Lopinopulos/pen/agoXBj">
  Math в работе - random</a> by Nikolai Lopin (<a href="https://codepen.io/Lopinopulos">@Lopinopulos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## В работе

{% include "authors/n_lopin/in-work.njk" %}

🛠Не используй генерацию числа в критичных местах, например для ключа доступа — для этого лучше использовать [Web Cryptography API](https://www.w3.org/TR/WebCryptoAPI/). Он работает медленнее, но криптографически устойчив:

```js
window.crypto.getRandomValues(new Uint32Array(1))[0] //  вернет случайное число от 0 до 2^32
```

🛠 Используется, когда нужно сгенерировать случайное число в заданном диапазоне. Функция возвращает число от 0 до 1, но диапазон можно расширить с помощью формулы:

```js
Math.floor(Math.random() * (max - min)) + min // от минимума до максимума, не включая максимум
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="Lopinopulos" data-slug-hash="ewOxWV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Math в работе - random">
  <span>See the Pen <a href="https://codepen.io/Lopinopulos/pen/ewOxWV">
  Math в работе - random</a> by Nikolai Lopin (<a href="https://codepen.io/Lopinopulos">@Lopinopulos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠 Используется для выбора случайного элемента из массива. Например, вы хотите отобразить случайный товар дня из списка или же показать пользователю несколько элементов из его коллекции любимых песен.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="Lopinopulos" data-slug-hash="KjPJey" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Math в работе - random">
  <span>See the Pen <a href="https://codepen.io/Lopinopulos/pen/KjPJey">
  Math в работе - random</a> by Nikolai Lopin (<a href="https://codepen.io/Lopinopulos">@Lopinopulos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/n_lopin/author.njk" %}
