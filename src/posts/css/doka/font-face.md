---
title: ＠font-face
name: font-face
author: ABatickaya
co-authors:
designers:
contributors:
summary:
  - ＠-правило
  - подключение шрифта
  - шрифт
  - кастомный шрифт
---

## Кратко

Встроенных в операционные системы шрифтов часто не хватает для создания уникального дизайна сайта. Для подключения нестандартных шрифтов существует @-правило `@font-face`. С его помощью можно подключить и использовать на странице любой шрифт из файла.

При загрузке сайта браузер будет брать шрифт из указанного файла и отображать текст именно этим шрифтом.

## Пример

Подключим к странице шрифт **Lexend Peta** и сделаем его основным шрифтом нашего сайта.

```css
@font-face {
  font-family: "Lexend Peta";
  src: local("Lexend Peta Regular"), local("LexendPeta-Regular"),
    url("/fonts/Lexend_Peta-webfont.woff2") format("woff2"), url("/fonts/Lexend_Peta-webfont.woff")
      format("woff"), url("/fonts/Lexend_Peta-webfont.svg") format("svg");
  font-weight: normal;
}

body {
  font-family: "Lexend Peta", sans-serif;
}
```

## Как пишется

Правило `@font-face` по своей анатомии отличается от стандартных CSS-правил, где есть селектор и применяемые к нему правила. Основное отличие в том, что на месте селектора мы активируем функцию, предназначенную браузеру.

Внутри этого правила должно быть два обязательных свойства:

1. Название шрифта, которое мы будем использовать ниже в CSS. Название может отличаться от настоящего названия этого шрифта.

   Важный момент: Если название шрифта состоит из двух и более слов, то его нужно взять в кавычки. Или объединить слова в названии, удалив пробелы. Не `Lexend Peta`, а `"Lexend Peta"` или `LexendPeta`. Или вообще `MyFont` 🙊

2. Ссылки на файлы, из которого браузер может взять шрифт: свойство `src`.

   Тут важно указать ссылки на файлы в нескольких форматах чтобы любой браузер — старый или новый — мог загрузить шрифт в понятном ему формате. Принято хранить и подключать шрифты в форматах `woff`, `woff2`, `svg`.

   Подключение из внешних файлов происходит при помощи конструкции `url("ссылка-на-файл")`. Несколько файлов можно подключить, перечислив эти конструкции через запятую.

   Если указаны ссылки на несколько файлов в разных форматах, то после `url()` оставляют браузеру подсказку в виде записи `format("формат-подключаемого-файла")`.

Поскольку пользователь имеет возможность устанавливать в свою систему любые нестандартные шрифты, то есть вероятность, что нужный наш шрифт уже есть на ПК. Если это так, то браузеру будет удобнее и быстрее взять шрифт из системы, чем читать файл.

Для этого в качестве одного или нескольких значений у свойства `src` можно указать конструкцию `local("Имя-шрифта-в-система")`. Нужно указывать локальные названия до ссылок на внешние файлы, чтобы браузер, найдя шрифт в системе под таким именем, даже не пошёл загружать и читать внешние файлы.

На сайте может использоваться один и тот же шрифт, но в разных начертаниях. Например, жирный `font-weight: bold` или италик `font-style: italic`. В этом случае вам нужно будет подключить разные файлы, содержащие эти начертания.

Тут есть два подхода:

— Использовать разные @-правила для подключения разных начертаний шрифта, называя их разными именами. Например, `"Lexend Peta Regular"`, `"Lexend Peta Bold"` и `"Lexend Peta Italic"`. Выглядеть это будет так:

```css
@font-face {
  font-family: "Lexend Peta Regular";
  src: local("Lexend Peta Regular"), local("LexendPeta-Regular"),
    url("/fonts/Lexend Peta-webfont.woff2") format("woff2"), url("/fonts/Lexend Peta-webfont.woff")
      format("woff"), url("/fonts/Lexend Peta-webfont.svg") format("svg");
}

@font-face {
  font-family: "Lexend Peta Bold";
  src: local("Lexend Peta Bold"), local("LexendPeta-Bold"),
    url("/fonts/Lexend Peta Bold-webfont.woff2") format("woff2"), url("/fonts/Lexend Peta Bold-webfont.woff")
      format("woff"), url("/fonts/Lexend Peta Bold-webfont.svg") format("svg");
}

@font-face {
  font-family: "Lexend Peta Italic";
  src: local("Lexend Peta Italic"), local("LexendPeta-Italic"),
    url("/fonts/Lexend Peta Italic-webfont.woff2") format("woff2"), url("/fonts/Lexend Peta Italic-webfont.woff")
      format("woff"), url("/fonts/Lexend Peta Italic-webfont.svg") format("svg");
}

/* Используем в разных местах разные начертания шрифтов */

body {
  font-family: "Lexend Peta Regular", sans-serif;
}

.title {
  font-family: "Lexend Peta Bold", sans-serif;
}

.accent {
  font-family: "Lexend Peta Italic", sans-serif;
}
```

— Подключить все файлы начертаний, но использовать для них одно и то же имя шрифта. Тогда не нужно будет переопределять шрифт для разных элементов, достаточно будет указывать нужный стиль или вес шрифта.

```css
@font-face {
  font-family: "Lexend Peta";
  src: local("Lexend Peta Regular"), local("LexendPeta-Regular"),
    url("/fonts/Lexend Peta-webfont.woff2") format("woff2"), url("/fonts/Lexend Peta-webfont.woff")
      format("woff"), url("/fonts/Lexend Peta-webfont.svg") format("svg");
  font-weight: normal;
  /* говорим браузеру, что эти файлы используем для нормального начертания */
}

@font-face {
  font-family: "Lexend Peta";
  src: local("Lexend Peta Bold"), local("LexendPeta-Bold"),
    url("/fonts/Lexend Peta Bold-webfont.woff2") format("woff2"), url("/fonts/Lexend Peta Bold-webfont.woff")
      format("woff"), url("/fonts/Lexend Peta Bold-webfont.svg") format("svg");
  font-weight: bold;
  /* говорим браузеру, что эти файлы используем для жирного начертания */
}

@font-face {
  font-family: "Lexend Peta";
  src: local("Lexend Peta Italic"), local("LexendPeta-Italic"),
    url("/fonts/Lexend Peta Italic-webfont.woff2") format("woff2"), url("/fonts/Lexend Peta Italic-webfont.woff")
      format("woff"), url("/fonts/Lexend Peta Italic-webfont.svg") format("svg");
  font-style: italic;
  /* говорим браузеру, что эти файлы используем для стиля италик */
}

/* Используем в разных местах разные начертания шрифтов */

body {
  font-family: "Lexend Peta", sans-serif;
  font-weight: normal;
}

.title {
  font-weight: bold;
}

.accent {
  font-style: italic;
}
```

## Подсказки

💡 Важно чтобы файлы со шрифтами лежали на том же домене, что и сайт, на котором они используются. Если вы захотите обратиться к шрифтам из другого домена, то подобный запрос будет заблокирован по правилам безопасности кроссдоменных запросов (CORS).

💡 `@font-face` нужно объявлять до того, как вы обратитесь в CSS к этому шрифту. Принято подключать шрифты в самом начале файла стилей (но после всех `@import`).

💡 `@font-face` нельзя объявить внутри другого CSS-правила.

💡 Важно использовать в точности то название подключенного шрифта, которое вы задаёте внутри `@font-face`. Иначе магия не сработает.

## В работе

{% include "authors/ABatickaya/in-work.njk" %}

🛠 Дизайнеры очень любят всякие разные нестандартные шрифты. Если видите в макете несистемный шрифт — просите файл на шрифт или ссылку у дизайнера.

Часто происходит так, что дизайнер отдаёт только ttf-файл, потому что для дизайнерских программ его достаточно. В этом случае вам нужно будет конвертировать шрифт в остальные форматы.

Держи проверенные конверторы:

[Font Converter: ttf to woff 2, otf woff woff2 eot svg otf with css stylesheet](https://www.font-converter.net/)

[Online @font-face generator](https://transfonter.org/)

🛠 Советую всегда проверять есть ли шрифт на сайте гуглового сервиса [https://fonts.google.com/](https://fonts.google.com/). Если найдёшь, то натыкай нужных стилей шрифта и подключи одной строкой вместо кучи `@font-face`. Ах, чудный идеальный мир, где все дизайнеры используют только бесплатные шрифты 🧚‍♀️

🛠 Не все кастомные шрифты бесплатные. Например, студия Лебедева разрабатывает [собственные шрифты](https://store.artlebedev.ru/type/). Дизайнеры в полёте фантазии могут использовать в том числе пиратские копии. Чтобы у вас и у заказчика потом не случилось проблем, просите дизайнера купить легальные версии нужных шрифтов и прислать вам исходные файлы. Или заменить платный шрифт на бесплатный.

{% include "authors/ABatickaya/author.njk" %}
