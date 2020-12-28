---
title: "includes"
name: includes
author: N_Lopin
co-authors:
designers:
contributors:
summary:
---

## Кратко

Этот метод определен у [массивов](/js/doka/arrays/) и [строк](/js/doka/string/).

Для _массивов_: проверяет, есть ли искомый элемент в массиве.

Для _строк_: проверяет, есть ли искомая подстрока в строке.

Возвращает `true`, если искомый элемент нашелся и `false` — если нет 😎

## Пример

Метод принимает один аргумент — значение, которое нужно проверить.

Массив:

```js
const dead = ["Joffrey", "Ned Stark", "Night king"]
const isJonDead = dead.includes("Jon Snow")
console.log(isJonDead) // напечатает false

const isJoffreyDead = dead.includes("Joffrey")
console.log(isJoffreyDead) // напечатает true
```

Строка:

```js
const text =
  "Посмотри, ведь это рядом наша панда. Мы бежим с тобой как-будто от гепарда."

console.log(text.includes("панда")) // true

console.log(text.includes("Обезьяна")) // false

// поиск идет с учетом регистра
console.log(text.includes("Панда")) // false
```

## В работе

{% include "authors/n_lopin/in-work.njk" %}

🛠Используй метод, когда нужно убедиться в том, что объект находится в массиве. Например, чтобы не добавить одно и то же значение дважды.

{% demo "/includes/" %}

🛠Будь внимателен, когда передаешь в `includes` объекты. Помни, что если два объекта выглядят одинаково, это не обязательно один объект.

```js
const phoneContacts = [
  { name: "Иван", lastName: "Таранов" },
  { name: "Игорь", lastName: "Иванов" },
  { name: "Мама", lastName: "" },
]

console.log(phoneContacts.includes({ name: "Мама", lastName: "" }))
// напечатает false, так как мы создали новый объект,
// хотя он выглядит так же как и тот, что в массиве
```

{% include "authors/n_lopin/author.njk" %}
