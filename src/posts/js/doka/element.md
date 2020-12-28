---
title: "Элемент"
name: element
author: N_Lopin
co-authors:
designers:
contributors:
summary:
---

## Кратко

Элемент — это кусочек HTML в [DOM дереве](/js/doka/dom/#из-чего-состоит-dom). Браузер создает DOM для взаимодействия между JavaScript и HTML. Каждый HTML тег при этом превращается в элемент DOM. Ещё такие элементы называют _узлами._

Из DOM можно получить элемент и изменить его. Браузер заметит изменения и отобразит их на странице.

## Как пишется

Например, можно поменять выравнивание у элемента `h1`:

```js
// получаем элемент из DOM
let element = document.getElementsByTagName("h1")

element.align = "center" // после выполнения этого кода h1 будет выравнивать текст по центру
element.style.color = "red" // меняем цвет шрифта на красный
```

## Как это понять

HTML элементы содержат свойства, которые можно разделить на группы:

- свойства, связанные с HTML атрибутами: id, классы, стили и так далее;
- свойства и методы связанные с обходом DOM: получение дочерних элементов, родителя, соседей;
- информация о содержимом;
- специфические свойства элемента.

Первые три группы свойств есть у всех элементов. Специфические свойства отличаются в зависимости от типа элемента. Например, у полей ввода есть свойства, которых нет у параграфов и блоков: `value`, `type` и другие.

### 💡Свойства, связанные с HTML атрибутами

Читать и записывать значения HTML атрибутов можно при помощи свойств элемента. Название обычно совпадает с названием атрибута:

- `id` — получить идентификатор элемента
- `className` — список классов в HTML атрибуте `class`

```js
let element = document.getElementsByTagName("div")[0]
console.log(element.className) // напечатать список классов в консоль
element.className = "hacked" // установить свой класс
```

- `style` — добавить стили. Стили добавляются так же с помощью свойств. Свойства обычно пишутся по аналогии с CSS стилями:

```js
let element = document.getElementsByTagName("div")[0]

element.style.backgroundColor = "beige" // css свойство background-color
element.style.color = "gray" // css свойство color
element.style.marginTop = "20px" // css свойство margin-top
```

### 💡Свойства и методы, связанные с DOM

- `children` — список дочерних элементов;
- `parentElement` — получить родительский элемент;
- `nextElementSibling` и `previousElementSibling` — получить следующий/предыдущий узел-сосед:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="Lopinopulos" data-slug-hash="rEmwoo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="DOM Element">
  <span>See the Pen <a href="https://codepen.io/Lopinopulos/pen/rEmwoo">
  DOM Element</a> by Nikolai Lopin (<a href="https://codepen.io/Lopinopulos">@Lopinopulos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

- [`getElementsByClassName`](/js/doka/getelementsbyclassname/) — поиск среди дочерних элементов по названию класса;
- [`getElementsByTagName`](/js/doka/getelementsbytagname/) — поиск среди дочерних элементов по названию тега;
- [`querySelector`](/js/doka/query-selector/) — поиск первого дочернего элемента, подходящего под CSS-селектор;
- [`querySelectorAll`](/js/doka/query-selector-all/) — поиск всех дочерних элементов подходящих под CSS-селектор;

С помощью этих свойств и методов можно перемещаться по дереву и даже обойти все его элементы, если это нужно.

### 💡Свойства с информацией о содержимом

- `innerHTML` — это свойство возвращает HTML код всего, что вложено в текущий элемент. При записи в это свойство, предыдущее содержимое будет затерто. Страница отобразит новое содержимое:

```js
let divElement = document.getElementsByTagName("div")[0]
divElement.innerHTML = "<p>I was added from JavaScript</p>" // после выполнения этого кода, на странице отобразится параграф с указанным текстом
```

- `outerHTML` — это свойство возвращает HTML код текущего элемента и всего, что в него вложено. При записи в это свойство, предыдущее содержимое будет затерто.
- `textContent` — свойство, возвращает текст всех вложенных узлов без HTML тегов.

Почувствуй разницу на демо:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="Lopinopulos" data-slug-hash="MMmvvd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="DOM Element: innerHTML, outerHTML, textContent">
  <span>See the Pen <a href="https://codepen.io/Lopinopulos/pen/MMmvvd">
  DOM Element: innerHTML, outerHTML, textContent</a> by Nikolai Lopin (<a href="https://codepen.io/Lopinopulos">@Lopinopulos</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## В работе

{% include "authors/n_lopin/in-work.njk" %}

🛠Если нужно добавить текст в элемент, то всегда используй свойство `textContent`. Другие свойства обрабатывают HTML, это может привести к дырам в безопасности.

🛠Для работы с классами элемента есть удобные методы, доступные через свойство `classList`:

- добавить класс `add`
- удалить класс `remove`

```js
let element = document.getElementsByTagName("div")[0]
element.className.add("hello")
element.className.remove("bye")
```

🛠В HTML часто используют data-атрибуты. Они используются, когда нужно передать данные через HTML. Например, когда сервер собирает стартовый HTML, он может поместить значения в data-атрибуты. Фронтендер затем может использовать их, вместо того, чтобы отправлять запрос на сервер. Название таких атрибутов начинаются с префикса `data-`. Для доступа к ним из JavaScript используется свойство `dataset`:

```js
let element = document.getElementsByTagName("div")[0]
console.log(element.dataset.columns) // получить значение атрибута data-columns тега div
element.dataset.columns = 99 // изменить значение
```

🛠У элементов очень много свойств. Если хочешь что-то получить из элемента, то скорее всего уже есть свойство, которое хранит эти данные.

🛠Если нужно удалить элемент и все вложенные в него, то сохрани элемент в переменную и вызови метод `removeChild` его родителя 😎

```js
let element = document.querySelector("#some-element") // <-- удаляемый элемент
element.parentNode.removeChild(element)
```

{% include "authors/n_lopin/author.njk" %}
