---
title: "for()"
name: for
author: vindi-r
co-authors:
designers:
contributors:
summary:
  - итерация
  - обход
  - пробежать
  - cycle
  - iteration
  - фор
---

## Кратко

Управляющая конструкция, которая создает [цикл](/js/doka/loop/) .

## Как пишется

Описание цикла в коде выглядит так:

```js
for (инициализация; условие; завершающая операция) { ... тело цикла ...}
```

1. Инициализация — в этой части задается начальное значение счетчика цикла.

2. Условие — тут задается условие по которому выполняется цикл. Если условие ложно, работа цикла прекращается и тело цикла не выполняется.

3. Завершающая операция — в этой части задается выражение, которое будет исполнено после выполнения тела цикла. Обычно здесь содержится выражение изменения счетчика.

4. Тело цикла — это блок операций, которые будут выполнены в случае если условие истинно.

```js
for (let count = 5; count > 0; count--) {
  console.log(count)
}

// напечатает 5, 4, 3, 2, 1
```

## Пример

Создание разноцветных квадратов через цикл for:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="bJejME" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="for Кратко">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/bJejME">
  for Кратко</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Как это понять

Рассмотрим пример:

```js
for (let i = 0; i < 5; i++) {
  console.log("Счетчик равен: " + i)
}
```

Что произойдет при запуске этого кода?

1. Один раз выполнится инициализация.

2. Потом создастся переменная `i` и ей присвоится значение 0, `let i=0`. Эта переменная доступна только пока работает цикл, так как мы ее объявили через `let`. Переменные созданные через `let` доступны только в рамках блока, где они созданы. В нашем случае блок — это тело цикла и шаги инициализации, условия и итоговой операции.

3. Идет проверка условия `i<5`. Значение переменной в текущий момент времени это 0, а 0 меньше 5, значит условие истинно.

4. Так как условие истинно, выполняется тело цикла: `console.log("Счетчик равен: "+i);`

В консоль будет выведено `"Счетчик равен: 0"`

5. После выполнения тела цикла идет завершающая операция `i++` после которой значение переменной `i` увеличивается и становится равным 1.

Последующие шаги повторения цикла уже не включают в себя инициализацию. Сразу идет проверка условия `i<5` : 1 меньше 5, поэтому условие истинно.

Выполняется тело цикла. В консоль будет выведено `"Счетчик равен: 1"`

6. Выполняется завершающая операция `i++`. Переменная i становится равной 2

Пропустим описание шагов, когда переменная равна 2, 3 и 4, перейдем к этапу когда переменная i станет равной 5.

😴

7. Проверка условия `i<5`. 5 < 5 и условие ложно. Выполнения тела цикла не происходит, как и завершающей операции.

На этом работа цикла заканчивается. Далее программа переходит к следующей за циклом инструкции.

## В работе

{% include "authors/vindi-r/in-work.njk" %}

🛠Необязательно начинать счетчик с нуля. Он может быть равным любому значению. Отсчет с нуля делается для удобства восприятия и облегчения дальнейшего обслуживания кода. Условие проверки так же может быть любым, важно чтобы результат проверки был true или false:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="WWxaPV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="for в работе">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/WWxaPV">
  for в работе</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Завершающая операция может быть не только i++ или i--, а абсолютно любой:

```js
for (let i = 0; i < 10; i = i + 2) {
  console.log(i)
}
// Результат работы цикла
// 0
// 2
// 4
// 6
// 8
```

🛠При необходимости произвести операции не над всеми данными, а только над частью.

Например при выборке каждого N элемента:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="ROReQM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="for в работе">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/ROReQM">
  for в работе</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠Через циклы удобно вставлять данные, например в таблицы или списки:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="vindi-r" data-slug-hash="gyMQYq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="for в работе">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/gyMQYq">
  for в работе</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

🛠Важно следить за условиями и завершающими операциями, чтобы не попасть в бесконечный цикл. Если попасть в бесконечное исполнение, то страница «зависнет». Браузеры умеют определять такие страницы, но для пользователя это крайне неприятная штука:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="vindi-r" data-slug-hash="axZQLY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="for в работе, битый цикл">
  <span>See the Pen <a href="https://codepen.io/vindi-r/pen/axZQLY">
  for в работе, битый цикл</a> by vindi-r (<a href="https://codepen.io/vindi-r">@vindi-r</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

🛠Хотя для поиска элемента в массиве существуют встроенные функции, но если нет понимания как работают и что представляют из себя «функции высшего порядка» — можно воспользоваться циклом for:

```js
let arr = [1, 2, 5, -3, 15, 20, 13, -3, -5, -10, 22, 14]
// Задача — найти все отрицательные элементы
let found = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    found.push(arr[i])
  }
}
console.log(found)
```

{% include "authors/vindi-r/author.njk" %}
