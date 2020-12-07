---
title: background-size
name: background-size
author: ABatickaya
co-authors:
designers:
contributors:
summary:
  - background-size
---

## Кратко

Свойство `background-size` позволяет изменять размер фонового изображения. Если фоновая картинка не совпадает по размеру с размерами блока, то при помощи `background-size` сделать так, чтобы она, картинка, занимала всю площадь блока или, наоборот, была определённого размера.

## Пример

Создадим блок и в качестве фона зададим ему красивую панораму:

![Фон с красивой панорамой](/assets/images/posts/background-size/151249.jpg)

HTML

```html
<div class="element"></div>
```

CSS

```css
.element {
  height: 100vh;
  background-color: #f1f1f1;
  background-image: url(https://wallpaperplay.com/walls/full/b/4/9/151249.jpg);
  background-repeat: no-repeat;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="EMLewa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="EMLewa">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/EMLewa">
  EMLewa</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Если не указывать свойство `background-size` то будет видна только небольшая часть картинки. Но хотелось бы, чтобы фон, несмотря на его нестандартный размер, смотрелся хорошо.

Укажем свойство `background-size` со значением `100% 100%`. По логике с таким значением фон должен занимать 100% высоты элемента и 100% ширины элемента.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="VRxGQp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="VRxGQp">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/VRxGQp">
  VRxGQp</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Если у тебя широкий монитор, то можно не заметить подвоха, но на узких мониторах картинка будет деформироваться и сплющиваться по ширине.

Есть способ заставить картинку занять всю доступную площадь и при этом не деформироваться. Зададим `background-size: cover` — cover переводится с английского как обложка.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="RdyYML" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="RdyYML">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/RdyYML">
  RdyYML</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

В этой версии добавлено ещё свойство `background-position` со значением `center` чтобы в области видимости был центр изображения.

Теперь изображение подстраивается под размеры элемента без деформации. Лишнее просто отрезается. Именно значение `cover` используется чаще всего для создания красивых фонов.

![Примеры background-size](/assets/images/posts/background-size/Untitled.png)

## Как это понять

Слово **size** переводится с английского языка как размер. Всё свойство дословно можно перевести как _фон-размер_. Если сказать по-русски, то получится размер фона.

Свойство `background-size` управляет размерами картинки внутри элемента, для которого эта картинка задана фоном.

## Как пишется

В качестве значения для свойства `background-size` можно задавать:

1. Точный размер в любых единицах измерения, доступных в вебе.
2. Проценты. Размер в процентах будет рассчитываться от размеров элемента.
3. Ключевое слово `auto`. Размер изображения остаётся неизменным. Кстати, это ключевое слово является значением по умолчанию.
4. Ключевое слово `cover`. Изображение масштабируется без изменения пропорций так, чтобы закрыть фон всего элемента. Короткая сторона изображения подстраивается под соответствующую сторону элемента. А длинная сторона закрывает длинную сторону элемента, а остальное, что не попало в поле видимости, обрезается.
5. Ключевое слово `contain`. Изображение масштабируется без изменения пропорций так, чтобы полностью поместиться в элемент.

Размеры в единицах измерения или процентах можно комбинировать с ключевым словом `auto`. Первое значение будет отвечать за ширину фонового изображения, а второе — за высоту.

Ключевое слово `auto` в случае комбинации позволяет сохранять пропорции изображения.

## Подсказки

💡Значение по умолчанию `auto`

💡Значение свойства не наследуется

💡Чаще всего используется значение `cover`. Второе по популярности значение — `contain`. Также часто можно увидеть значение `100% 100%`, но с ним следует быть аккуратным. Точные размеры фона указываются крайне редко. Не принято оставлять значение по умолчанию.

💡Свойство размера фона можно анимировать при помощи свойства `transition` 🥳

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠Если для задания фона используется шорткат `background`, то значение для `background-size` указывается последним, после слэша `/`. Пример: `background: url('example.jpg') no-repeat center / **cover**`

🛠Свойство `background-size` очень пригодится, если хочется сделать фон с повторяющимся элементом. Так называемым паттерном.

HTML

```html
<div class="element"></div>
```

CSS

```css
.element {
  height: 100vh;
  background-color: #f1f1f1; /* Фоновый цвет */
  /* Маленькая фоновая картинка */
  background-image: url("https://www.transparenttextures.com/patterns/bo-play.png");
  /* Нет background-repeat, а значит картинка будет повторяться по горизонтали и вертикали*/
  background-size: 20px auto; /* Размер картинки 20 пикселей по ширину и auto по высоте */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="YgLJeO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="YgLJeO">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/YgLJeO">
  YgLJeO</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Попробуй поменять размеры фоновой картинки и посмотреть, как будет меняться фоновый паттерн.

{% include "authors/ABatickaya/author.njk" %}
