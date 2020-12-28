---
title: "Событие load и DOMContentLoaded"
name: event-load-and-domcontentloaded
author: N_Lopin
co-authors:
designers:
contributors:
summary:
---

## Кратко

Если нужно запустить JavaScript код после того, как страница загрузилась, то нужно [подписаться на одно из событий](/js/doka/events/) у объекта `window`:

- `DOMContentLoaded` — событие происходит, когда браузер разобрал HTML страницу и составил [DOM дерево](/js/doka/dom/);
- `load` — событие происходит, когда загрузилась и HTML страница, и все ресурсы для ее отображения пользователю: стили, картинки и так далее.

`DOMContentLoaded` всегда происходит раньше, чем `load`. Чем больше стилей и картинок на странице, тем больше разница во времени между срабатыванием этих событий.

## Как пишется

```js
window.addEventListener("load", function () {
  console.log("load!")
})

// это событие можно слушать так же и на document
window.addEventListener("DOMContentLoaded", function () {
  console.log("dom loaded!")
})
```

## Как понять

Для того, чтобы показать пользователю страницу, браузер делает следующие шаги:

1. запрашивает HTML страницу с сервера;
2. обрабатывает полученный HTML и создает [DOM](/js/doka/dom/) для взаимодействия между JavaScript и HTML (☝️в конце этого этапа происходит событие `DOMContentLoaded`);
3. Запрашивает у сервера дополнительные файлы, встретившиеся при разборе HTML: CSS, картинки, шрифты, JS файлы;
4. Получив все данные, отображает страницу пользователю (☝️тут происходит событие `load`).

Событие `DOMContentLoaded` гарантирует, что DOM готов. Можешь искать узлы по нему и не бояться, что что-то не догрузилось.

Событие `load` дополнительно гарантирует, что все стили и картинки готовы. В этот момент размеры элементов на страницы посчитаны верно и доступны. `DOMContentLoaded` таких гарантий не даёт.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="Lopinopulos" data-slug-hash="ydYMWW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ydYMWW">
  <span>See the Pen <a href="https://codepen.io/Lopinopulos/pen/ydYMWW">
  ydYMWW</a> by Nikolai Lopin (<a href="https://codepen.io/Lopinopulos">@Lopinopulos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## В работе

{% include "authors/n_lopin/in-work.njk" %}

🛠 Чаще всего используется `DOMContentLoaded`

🛠 Основной сценарий использования `DOMContentLoaded`: инициализация интерфейса и первые обращения к серверу

🛠 Нормальной практикой считается запуск всего приложения в момент срабатывания `DOMContentLoaded`, таким образом исключается случай, когда DOM еще не догрузился, а приложение уже ищет по нему узлы.

🛠 Событие `load` используется, когда код работает со стилями и другими параметрами отображения. Такой код нужен редко, поэтому и событие используется нечасто.

{% include "authors/n_lopin/author.njk" %}
