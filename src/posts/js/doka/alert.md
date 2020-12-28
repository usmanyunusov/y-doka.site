---
title: "alert()"
name: alert
author: vindi-r
co-authors:
designers:
contributors:
summary:
---

## Кратко

При помощи директивы `alert()` можно вывести на экран пользователя модальное окно с каким-нибудь текстом.

🤖Из-за того, что окно модальное — работа с интерфейсом браузера и страницами будет заблокирована. Это неудобно, плюс может восприниматься пользователем как попытка ограничивать его свободу. Модальное окно для пользователя — окно, которое блокирует работу пользователя с браузером до тех пор, пока пользователь это окно не закроет.

## Пример

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="vindi-r" data-slug-hash="qvVgoW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="alert() пример">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/qvVgoW">
  alert() пример</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

💡Это крайне быстрый вариант кода, который взаимодействует с пользователем, но окно созданное таким образом не меняется через CSS, а значит использовать его лучше только для прототипирования интерфейса. В финальном варианте веб-страницы юзать модальное окно нежелательно.

## Как пишется

`alert()` принимает только один аргумент:

```js
alert("Message")
```

В качестве строки для отображения также можно передать и переменную:

```js
var text = "Another message"
alert(text)
```

## Как это понять

`alert()` позволяет вывести любое сообщение, но необходимо помнить, что аргумент будет приведен к строке. Такое поведение не доставляет проблем, пока аргумент является примитивом или встроенным типом, имеющим правила приведения к строке.

```js
alert("Hello") // Hello
alert(100) // 100
alert(false) // false
alert([1, 10, 100]) // 1,10,100
```

Вывести окно с текстом из "сложного" значения можно — окно вылезет, но не с тем текстом, который возможно ожидается:

```js
alert({}) // [object Object]
alert({ text: "Some message" }) // [object Object]
```

💡Чтобы объяснить JavaScript, как нужно выводить объект с данными в **alert()** необходимо описать функцию объекта toString, которая отвечает за приведение к строке:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="YgEgzN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="alert() для объекта">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/YgEgzN">
  alert() для объекта</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## В работе

{% include "authors/vindi-r/in-work.njk" %}

🛠Ниже представлен пример использования alert() с самостоятельно созданным диалоговым окном:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="VRrRVy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="alert() в работе">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/VRrRVy">
  alert() в работе</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{% include "authors/vindi-r/author.njk" %}
