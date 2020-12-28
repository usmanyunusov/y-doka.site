---
title: ":checked"
name: checked
author: ABatickaya
co-authors:
designers:
contributors: skorobaeus
summary:
  - псевдокласс
  - :checked
---

## Кратко

Псевдокласс, который активизируется, когда пользователь отмечает чекбокс или выбирает одну из радио-кнопок.

С его помощью удобно стилизовать эти элементы в их активном состоянии.

## Пример

Будем менять обводку и цвет текста у чекбокса когда он отмечен:

```html
<label>
  <input type="checkbox" />
  <span class="input-text"> Чекбокс (нажми!) </span>
</label>
```

```css
/* белая обводка в дефолтном состоянии */
input[type="checkbox"] {
  outline: 2px solid #ffffff;
}

/* обводка становится синей, когда чекбокс кликнули */
input[type="checkbox"]:checked {
  outline: 2px solid #1a5ad7;
}

/* цвет текста меняется тоже на синий */
input[type="checkbox"]:checked ~ .input-text {
  color: #1a5ad7;
}
```

{% demo "/checked/check", "Чекбоксы", 250 %}

## Как пишется

После селектора, который выбирает элемент чекбокса или радио-кнопки ставим двоеточие и пишем ключевое слово `checked`.

На Windows можно менять также внешний вид выбранного пункта (`option`) выпадающего списка (`select`) с помощью `:checked`, но работает это только в Chrome. Так что ждём и надеемся, но особо не используем.

## Как это понять

Браузер присваивает чекбоксу или радио-кнопке псевдокласс `:checked` когда они отмечены. Мы можем это использовать для стилизации элемента на свой вкус.

## Подсказки

💡 Этот псевдокласс есть только у тех элементов, которые можно _отметить_: `input type=[checkbox]`, `input type="radio"]`.

💡 По задумке должен работать и с `option`, но поскольку выпадающий список сильно отличается от системы к системе и от браузера к браузеру, то пока работает толь в Chrome на Windows.

## В работе

🛠 Очень часто этот класс пригождается, когда вы делаете какой-то нестандартный элемент управления на основе чекбокса / радиокнопок. В этом случае стандартные элементы скрываются, но их поведение, в частности псевдокласс `:checked` позволяет что-то переключать вообще без JavaScript.

Например, вот это выпадающее меню реализовано на чистом HTML с использованием трюка в чекбоксом.

HTML

```html
<div class="dropdown">
  <input type="checkbox" id="menu" />
  <label for="menu">Выбери меня</label>
  <ul>
    <li><a href="#">Леонардо</a></li>
    <li><a href="#">Рафаэль</a></li>
    <li><a href="#">Донателло</a></li>
    <li><a href="#">Микеланджело</a></li>
  </ul>
</div>
```

CSS

```css
.dropdown {
  position: relative; /* Относительное позиционирование */
}

.dropdown input,
.dropdown ul {
  display: none; /* Прячем */
}

.dropdown label {
  cursor: pointer; /* Вид курсора */
  border-bottom: 3px dashed #1a5ad7; /* Пунктир снизу */
}

.dropdown ul {
  position: absolute; /* Абсолютное позиционирование */
  left: 0;
  top: 1.4em; /* Положение меню */
  margin: 0;
  padding: 5px; /* Убираем отступы и поля */
  list-style: none; /* Убираем маркеры списка */
  background: #1a5ad7; /* Цвет фона */
  font-size: 20px;
}

.dropdown a {
  color: #fff; /* Цвет ссылок */
}

.dropdown :checked ~ ul {
  display: inline-block; /* Показываем меню */
}
```

{% demo "/checked/choose", "Выпадающее меню", 230 %}

{% include "authors/ABatickaya/author.njk" %}
