---
title: transition-property
name: transition-property
section: css
type: doka
tags:
 - cssDoka
 - post
article: post
---
## Кратко

Если нам нужно анимировать переход нескольких свойств элемента (например, цвета и размера шрифта), то удобно перечислить их в свойстве `transition-property`

## Пример

```css
.box {
  transition-property: color, font-size;
	transition-duration: .3s, .5s;
}
```

## Как пишется

```css
/* Одно значение */
transition-property: color;

/* Несколько значений */
transition-property: transform, height, color;

/* Служебные значения */
transition-property: inherit;
transition-property: initial;
transition-property: unset;
transition-property: none;
transition-property: all;
```

## Как это понять

Когда нужно анимировать переход сразу нескольких свойств элемента, то лучше использовать не комплексное свойство [transition](/posts/css/doka/transition/), а каждое из подсвойств в отдельности. Код получится более понятным и ты не запутаешься в длинных строчках. Сравни:

```css
.box {
	transition: color .2s, transform .3s, padding-left .5s, padding-right .5s;
}

.box {
	transition-property: color, transform, padding-left, padding-right;
	transition-duration: .2s, .3s, .5s, .5s;
}
```

Во втором примере строк больше, но он выглядит понятнее и проще читается

## Подсказки

❗Чтобы свойство анимировалось, не забывай обязательно добавлять [transition-duration](/posts/css/doka/transition-duration/), иначе браузер не поймет, какой длительности должны быть переходы свойств

❗`transition-property` может принимать значение `all`, что говорит браузеру о том, что нужно будет плавно изменять **все** возможные свойства элемента. Такая запись сильно короче, но заставляет браузер выполнять лишнюю работу по проверке каждого CSS-свойства. Поэтому правилом хорошего тона считается не использовать `all`, а перечислить только изменяющиеся свойства.

## В работе

В реальных проектах не так часто приходится плавно изменять более двух свойств одновременно, поэтому свойство `transition-property` используется довольно редко. В основном переходы стилизуются с использованием комплексного свойства [transition](/posts/css/doka/transition/)
