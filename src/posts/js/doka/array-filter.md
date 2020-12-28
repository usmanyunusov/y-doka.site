---
title: "Array.filter"
name: array-filter
author: windrushfarer
co-authors:
designers:
contributors: skorobaeus
summary:
---

## Кратко

Метод массива `filter` позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции. Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет.

## Пример

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenOnly = nums.filter(function (n) {
  const remainder = n % 2

  return remainder === 0
}) // результат [2, 4, 6, 8, 10]

const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"]

// ['Java', 'JavaScript', 'Julia']
const jLanguages = languages.filter(function (language) {
  return language.startsWith("J")
})
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="Windrushfarer" data-slug-hash="yLOpeNO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="yLOpeNO">
  <span>See the Pen <a href="https://codepen.io/Windrushfarer/pen/yLOpeNO">
  yLOpeNO</a> by Egor Ogarkov (<a href="https://codepen.io/Windrushfarer">@Windrushfarer</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Интерактивный пример:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="Windrushfarer" data-slug-hash="VwaQqOV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Filter">
  <span>See the Pen <a href="https://codepen.io/Windrushfarer/pen/VwaQqOV">
  Filter</a> by Egor Ogarkov (<a href="https://codepen.io/Windrushfarer">@Windrushfarer</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Как пишется

Аналогично методу `forEach`, методу `filter` необходимо передать аргументом функцию. Главным отличие — функция должна возвращать boolean, т.е результатом должен быть `true` или `false`. Такие функции называют _предикатами._

```js
// Это предикат, т.к возвращает результат сравнения, который является boolean
function isPositive(num) {
  return num > 0
}

// Это предикат, т.к метод includes у строки возвращает boolean
function hasChar(str, char) {
  return str.includes(char)
}

// Это не предикат, т.к функция возвращает число, даже несмотря на то, что
// любое число в JavaScript (кроме 0) может быть приведено к true
function sum(a, b) {
  return a + b
}
```

От результата выполнения функции зависит, попадет ли элемент в итоговый массив:

- `true` — элемент попадет в итоговый массив
- `false` — не попадет в итоговый массив

```js
function predicate(num) {
  if (num >= 5) {
    return true
  }

  return false
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Передаем предикат
nums.filter(predicate) // [5, 6, 7, 8, 9, 10]

// Либо делаем короче и просто возвращаем результат сравнения
nums.filter((num) => num >= 5) // [5, 6, 7, 8, 9, 10]
```

Функция, которую мы передаем в метод `filter` , принимает три параметра:

- `item` — элемент массива в текущей итерации
- `index` — индекс текущего элемента
- `arr` — сам массив, который мы перебираем

```js
const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"]

languages.filter(function (item, index, arr) {
  console.log("Текущий элемент " + item)
  сonsole.log("Индекс " + index)
  сonsole.log("Массив " + arr)

  return index >= 3
})
```

💡 В новом массиве отфильтрованные элементы будут находиться в том же порядке, в котором они были в исходном массиве.

💡 `filter` возвращает **новый** массив, при этом исходный массив **никак не изменится**.

💡 Из-за того, что JavaScript имеет динамическую типизацию, то нам ничего не мешает возвращать какое угодно значение из функции. В этом случае JavaScript сам определит его _истинность_. Стоит помнить что значения `0`, `undefined`, `null` и пустая строка `''` считаются ложными и равны `false`.

Truthy и falsy: [Преобразование типов](/js/long/typecasting/).

```js
const goods = [
  {
    name: "AirPods",
    description: "Классные беспроводные наушники",
  },
  {
    name: "MacBook Pro",
    description: "Ноутбук на все случаи жизни",
  },
  {
    name: "iPhone",
    description: "",
  },
  {
    name: "Дошик",
  },
]

// Просто возвращаем значения описания
const withDescription = goods.filter(function () {
  return item.description
})
// Получим массив с AirPods и MacBook Pro
```

Для хорошей читаемости и понимания кода лучше всегда явно возвращать boolean-значение из функции-предиката.

💡В JavaScript функция, в которой нет явного возвращаемого значения (т.е нет `return`) все-равно возвращает `undefined`. Потому если забыть вернуть результат в функции в методе `filter`, то в результате получим пустой массив, т.к отфильтруются все элементы.

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filtered = nums.filter(function (num) {
  // Забыли вернуть результат
  num >= 5
}) // получим [], потому что undefined считается как false
```

## Как это понять

Метод `filter` позволяет получить новый массив с отфильтрованными значениями на основании данных исходного. Несмотря на то, что то же самое можно сделать, используя обычный цикл `for` или `while` , метод `filter` позволяет сделать это проще.

Если решать такую задачу без `filter`, то выйдет так:

```js
const nums = [1, 2, 3, 4, 5, 6]
const odds = []

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    odds.push(num)
  }
}

console.log(odds) // [1, 3, 5]
```

`filter` позволит сильно сократить код и сделать его понятнее:

```js
const nums = [1, 2, 3, 4, 5, 6]

const odds = nums.filter(function (num) {
  return nums % 2 !== 0
})
console.log(odds) // [1, 3, 5]
```

## В работе

🛠 Так как `filter` возвращает массив, то у полученного массива мы можем продолжать по цепочке вызывать другие методы массива

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = nums.filter(num => num >= 5).map(...).reduce(...)
```

🛠 В `filter` в качестве функции можно передать конструктор `Boolean` . Таким образом можно легко и быстро отфильтровать все элементы, которые при приведении к boolean будут равны `false`

```js
const num = 3

const elements = [0, "", "one", "two", num === 3 && "three", null].filter(
  Boolean
) // ['one', 'two', 'three']
```

{% include "authors/windrushfarer/author.njk" %}
