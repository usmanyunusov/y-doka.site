---
title: padding
name: padding
author: ABatickaya
co-authors:
  - furtivite
designers:
contributors:
summary:
  - padding
---

## Кратко

Свойство `padding` — или внутренний отступ — позволяет _оттолкнуть_ контент от границ родительского элемента.

Само свойство `padding` это так называемый шорткат (короткая запись), позволяющий задать отступы сразу со всех четырёх сторон.

Можно управлять отступами по отдельности при помощи свойств `padding-top`, `padding-left`, `padding-right`, `padding-bottom`.

## Пример

HTML

```html
<div class="parent">
  <p class="content">Сублимация, как бы это ни казалось парадоксальным, ...</p>
</div>
```

CSS

```css
.parent {
  border: 1px solid #666; /* Границы родительского элемента */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="solarrust" data-slug-hash="MxZJJd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="MxZJJd">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/MxZJJd">
  MxZJJd</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Текстовый контент, вложенный в блок с классом `.parent`, занимает всю площадь родителя и плотно прилегает к краям.

Попробуем добавить внутренний отступ — `padding`.

CSS

```css
.parent {
  border: 1px solid #666;
  padding: 10px; /* Отступ по 10 пикселей со всех четырёх сторон. */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="solarrust" data-slug-hash="ywGgzW" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ywGgzW">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/ywGgzW">
  ywGgzW</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Почему в данном случае не следует задавать `margin` или `padding` для элемента с классом `.content` чтобы оттолкнуть его от краёв родителя? Потому что нужно стараться верстать максимально гибко с расчётом на изменения в дальнейшем.

Если задать отступы для блока `.parent`, то даже в случае изменения контента всегда останется отступ между краями блока и вложенным контентом.

А если задать отступ для элемента `.content`, а завтра его заменят на `.content-2`, то отступ пропадёт и вёрстка потеряет свой исходный вид.

## Как это понять

Слово **padding** переводится с английского как _набивочный материал_. Слегка неочевидное сравнение, но вполне логичное.

## Как пишется

Пишем свойство `padding` и через двоеточие после пробела указываем значение.

Значения можно указывать в любых относительных или абсолютных единицах измерения, доступных в вебе: `px`, `em`, `rem`, `%`, `vh`, `vw` и так далее. Также можно использовать функцию `calc()`.

В качестве значения можно указать одно, два, три или четыре числа. Браузер будет читать это значение по-разному в зависимости от количества указанных значений.

- `padding: 10px 15px 20px 30px` — читается по часовой стрелке начиная с верхней границы. Сверху 10 пикселей —> справа 15 пикселей —> снизу 20 пикселей —> слева 30 пикселей. Все вычисления в вебе начинаются от верхнего левого угла. Запомни этот порядок. Он часто нужен при чтении кода.
- `padding: 15px` — со всех четырёх сторон будет одинаковый отступ в 15 пикселей.
- `padding: 15px 20px` — парные противоположные отступы. Первое значение для верхнего и нижнего отступов: сверху и снизу по 15 пикселей. Второе значение для боковых отступов: справа и слева по 20 пикселей.
- `padding: 10px 5px 25px` — первое значение для верхнего отступ (сверху 10 пикселей), второе значение для боковых отступов (справа и слева по 5 пикселей), последнее значение для нижнего отступа (снизу 25 пикселей).

## Подсказки

💡 Свойство не наследуется.

💡 Значение по умолчанию — `0`.

💡 Внутренний отступ не может быть отрицательным.

💡 Отступы можно анимировать при помощи свойства `transition` 🥳

💡 У вертикальных отступов нет проблемы схлапывания как у `margin`.

💡 У списков есть левый отступ по умолчанию. Не забывай его сбрасывать, если используешь списки только для группировки объектов.

![Левый отступ по умолчанию у списков](/assets/images/posts/padding/padding.png)

💡 В инструментах разработчика в Chrome `padding` подсвечивается зелёным цветов. В FireFox при инспектировании элемента внутренний отступ обозначается светло-сиреневым цветом.

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠Самая прикольная фишка, которую можно реализовать при помощи `padding` — адаптивные картинки, которые при изменении ширины экрана изменяют свой размер, но не деформируются.

HTML

```html
<!-- Элемент для трюка в padding -->
<div class="responsive image-box"></div>

<!-- Просто блок с фоновой картинкой -->
<div class="image-box"></div>
```

CSS

```css
.image-box {
  width: 70%;
  height: 500px; /* Второй блок будет высотой 500 пикселей. Всегда */
  border: 1px solid red;
  background: url(https://static.appvn.com/a/uploads/thumbnails/112015/mr-square_icon.png)
    no-repeat center / contain;
}

.responsive {
  height: 0; /* Первому блоку задаём нулевую высоту */
  padding-bottom: 56.25%; /* Отталкиваем нижнюю границу при помощи внутреннего отступа */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="solarrust" data-slug-hash="gEZROR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="gEZROR">
  <span>See the Pen <a href="https://codepen.io/solarrust/pen/gEZROR">
  gEZROR</a> by Alena (<a href="https://codepen.io/solarrust">@solarrust</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

🛠Попробуй менять размеры окна браузера и понаблюдать за поведением обоих блоков. Первый будет всегда сохранять пропорции 16:9, а вот второй всегда будет высотой 500 пикселей.

<details class="article__table article__table_all-half">
	<summary>Таблица значений <code>padding-bottom</code> для разных стандартных соотношений сторон:</summary>

| Соотношение сторон | padding-bottom |
| ------------------ | -------------- |
| 16:9               | 56.25%         |
| 4:3                | 75%            |
| 3:2                | 66.66%         |
| 8:5                | 62.5%          |

</details>

{% include "authors/furtivite/in-work.njk" %}

🛠 Чтобы понять `padding` представьте лист бумаги с напечатанным на принтере текстом. Видите эти отступы по краям листа? Они внутри и это тот самый `padding`! `padding` стоит использовать, чтобы указать отступы от краёв блока и навсегда отказаться от `margin-top`. Правильно задав границы, вы сможете упорядочить все прочие отступы у элементов внутри вашего блока.

{% include "authors/ABatickaya/author.njk" %}
