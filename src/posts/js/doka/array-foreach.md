---
title: "Array.forEach"
name: array-foreach
author: windrushfarer
co-authors:
designers:
contributors:
summary:
---

## Кратко

Метод массива `forEach` позволяет применить колбэк-функцию ко всем элементам массива. Можно использовать вместо классического цикла `for` и в отличие от него `forEach` выглядит более читабельным и понятным.

## Пример

```js
const numbers = [1, 2, 3, 4]

numbers.forEach((num) => {
  const square = num * num
  console.log("Квадрат числа равен: " + square)
})

// выведет:
// Квадрат числа равен: 1
// Квадрат числа равен: 4
// Квадрат числа равен: 9
// Квадрат числа равен: 16
```

Интерактивный пример:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="Windrushfarer" data-slug-hash="bGpYdqa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="forEach">
  <span>See the Pen <a href="https://codepen.io/Windrushfarer/pen/bGpYdqa">
  forEach</a> by Egor Ogarkov (<a href="https://codepen.io/Windrushfarer">@Windrushfarer</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Совсем любопытные могут заглянуть в исходники, чтобы посмотреть как `forEach` активно используется в коде этого примера.

## Как пишется

Для того чтобы использовать `forEach` понадобится колбэк-функция, которую необходимо передавать в метод. Функцию можно объявить заранее:

```js
function sliceFruit(fruit) {
  console.log("Разрезаю " + fruit + "!")
}

const fruites = ["🍎", "🍊", "🍋", "🍓", "🥝"]

fruites.forEach(sliceFruit)
```

Или создать ее прямо в месте вызова:

```js
const food = ["🍔", "🍟", "🍦"]

food.forEach((item) => {
  console.log("Мам, купи " + item + "!")
})
```

Важно знать какие параметры принимает колбэк. Всего их три:

- `item` — элемент массива в текущей итерации
- `index` — индекс текущего элемента
- `arr` — сам массив, который мы перебираем

Вернемся к примеру с едой:

```js
const food = ["🍔", "🍟", "🍦"]

food.forEach((item, index, arr) => {
  console.log("Текущий элемент " + item)
  сonsole.log("Его индекс " + index)
  сonsole.log("Исходный массив " + arr)
})

// выведет:
// Текущий элемент 🍔
// Его индекс 0
// Исходный массив ['🍔', '🍟', '🍦']
// Текущий элемент 🍟
// Его индекс 1
// Исходный массив ['🍔', '🍟', '🍦']
// Текущий элемент 🍦
// Его индекс 2
// Исходный массив ['🍔', '🍟', '🍦']
```

## Как это понимать

Метод `forEach` можно использовать когда вам необходимо совершить одну и ту же операцию над всеми элементами массива.

Хотя в JavaScript уже есть возможность делать тоже самое используя цикл `for` , метод `forEach` — это отличная альтернатива с рядом преимуществ:

- Использование метода `forEach` является _декларативным_ способом обозначить нашу операцию. С точки зрения читабельности кода это больше приближено к естественному языку и лаконично
- Позволяет удобно получать элемент в текущей итерации, без необходимости всякий раз обращаться к массиву по индексу

Однако вместе с этим мы получаем и несколько недостатков:

- В `forEach` не будут работать `return`, `break` и `continue` , а следовательно мы никак не можем прервать или пропустить итерацию. Потому если для решения задачи необходимо воспользоваться каким-либо из этих операторов, то придется использовать обычный цикл `for`
- `forEach` обрабатывает элементы массива в прямом порядке, т.е мы не можем пройти по массиву с конца

💡Метод `forEach` автоматически встроен в любой массив.

```js
// Сработает
const empty = []
const someNums = [1, 2, 3]

console.log(empty.forEach) // выведет функцию
console.log(someNums.forEach) // и здесь тоже

const obj = {}
console.log(obj.forEach) // выведет undefined потому что у объектов нет такого метода
```

## В работе

🛠 Имена аргументов в функции-колбэке можно давать любые какие будут лучше для читаемости кода

🛠 Три параметра в функции-колбэке позволяют проводить дополнительные проверки. Например, последний ли это элемент массива:

```js
const nums = [1, 2, 3, 4, 5]

nums.forEach((num, index, arr) => {
  // Добавим к первому числу 9
  if (index === 0) {
    num = num + 9
  }
  // а последнее умножим на 2
  else if (index === arr.length - 1) {
    num = num * 2
  }
  console.log(num)
})

// выведет:
// 10
// 2
// 3
// 4
// 10
```

---

{% include "authors/windrushfarer/author.njk" %}
