---
title: <html>
name: html
section: html
type: doka
tags:
  - htmlDoka
  - post
autor: grachev
co-autors:
  - ABatickaya
designers:
contributors:
summary:
---

## Кратко

Элемент `<html>` открывает контейнер, в котором находится всё содержимое страницы. Это корневой, или родительский, элемент всего документа.

# Пример

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

## Как пишется

Тег `<html>` ставят сразу после `<!DOCTYPE>`.

### 💡Атрибуты

- `manifest` — указывает URI (унифицированный идентификатор ресурса) манифеста, который сообщает браузеру, какие элементы страницы могут быть закэшированы.
- `title` — добавляет всплывающую подсказку, которая появляется, когда курсор мыши задерживается в окне веб-страницы.
- `version` — определяет версию шаблона HTML-документа, но необходимости в этом нет <i>(устарел в HTML4.01; вышел из употребления с версии HTML5)</i>.
- `xmlns` — необязательный для HTML5, но необходимый для XHTML-документов атрибут. Определяет пространство имён XML, в котором находится документ.
- `prefix` — здесь прописывают open-graph разметку, типа `<html lang="ru-RU" prefix="og: [http://ogp.me/ns#](http://ogp.me/ns#)">`. Это чтобы при репосте с сайта в VK, Facebook и другие соцсети передавались те заголовки, картинки и описания, которые мы укажем.

## Подсказки

💡 В HTML есть атрибут `lang`, который подсказывает браузеру язык, на котором написан текст на странице. Если добавить `lang` в `<html>`, браузер правильно отобразит текст и подберёт подходящую для этого языка пунктуацию. Например, в английском тексте будут такие кавычки `“ ”`, а в русском такие `«»`. Пишется так: `lang="en"`.

Кроме того атрибут `lang` позволяет браузеру понять, отличается ли язык страницы от языка вашей системы. Если да, то браузер предложит пользователю использовать онлайн-переводчик.

### HTML

```html
<html lang="ru">
  ...
</html>
```

<details>
  <summary>Коды всех языков</summary>
  <table class="table">
    <tr>
        <th class="table__item table__item_half">
            Язык
        </th>
        <th class="table__item table__item_half">
            Код
        </th>
    </tr>
    <tr><td class="table__item table__item_half">Абхазский</td><td class="table__item table__item_half">ab</td></tr>
    <tr><td class="table__item table__item_half">Азербайджанский</td><td class="table__item table__item_half">az</td></tr>
    <tr><td class="table__item table__item_half">Аймарский</td><td class="table__item table__item_half">ay</td></tr>
    <tr><td class="table__item table__item_half">Албанский</td><td class="table__item table__item_half">sq</td></tr>
    <tr><td class="table__item table__item_half">Английский</td><td class="table__item table__item_half">en</td></tr>
    <tr><td class="table__item table__item_half">Американский английский</td><td class="table__item table__item_half">en-us</td></tr>
    <tr><td class="table__item table__item_half">Арабский</td><td class="table__item table__item_half">ar</td></tr>
    <tr><td class="table__item table__item_half">Армянский</td><td class="table__item table__item_half">hy</td></tr>
    <tr><td class="table__item table__item_half">Ассамский</td><td class="table__item table__item_half">as</td></tr>
    <tr><td class="table__item table__item_half">Африкаанс</td><td class="table__item table__item_half">af</td></tr>
    <tr><td class="table__item table__item_half">Башкирский</td><td class="table__item table__item_half">ba</td></tr>
    <tr><td class="table__item table__item_half">Белорусский</td><td class="table__item table__item_half">be</td></tr>
    <tr><td class="table__item table__item_half">Бенгальский</td><td class="table__item table__item_half">bn</td></tr>
    <tr><td class="table__item table__item_half">Болгарский</td><td class="table__item table__item_half">bg</td></tr>
    <tr><td class="table__item table__item_half">Бретонский</td><td class="table__item table__item_half">br</td></tr>
    <tr><td class="table__item table__item_half">Валлийский</td><td class="table__item table__item_half">cy</td></tr>
    <tr><td class="table__item table__item_half">Венгерский</td><td class="table__item table__item_half">hu</td></tr>
    <tr><td class="table__item table__item_half">Вьетнамский</td><td class="table__item table__item_half">vi</td></tr>
    <tr><td class="table__item table__item_half">Галисийский</td><td class="table__item table__item_half">gl</td></tr>
    <tr><td class="table__item table__item_half">Голландский</td><td class="table__item table__item_half">nl</td></tr>
    <tr><td class="table__item table__item_half">Греческий</td><td class="table__item table__item_half">el</td></tr>
    <tr><td class="table__item table__item_half">Грузинский</td><td class="table__item table__item_half">ka</td></tr>
    <tr><td class="table__item table__item_half">Гуарани</td><td class="table__item table__item_half">gn</td></tr>
    <tr><td class="table__item table__item_half">Датский</td><td class="table__item table__item_half">da</td></tr>
    <tr><td class="table__item table__item_half">Зулу</td><td class="table__item table__item_half">zu</td></tr>
    <tr><td class="table__item table__item_half">Иврит</td><td class="table__item table__item_half">iw</td></tr>
    <tr><td class="table__item table__item_half">Идиш</td><td class="table__item table__item_half">ji</td></tr>
    <tr><td class="table__item table__item_half">Индонезийский</td><td class="table__item table__item_half">in</td></tr>
    <tr><td class="table__item table__item_half">Интерлингва (искусственный язык)</td><td class="table__item table__item_half">ia</td></tr>
    <tr><td class="table__item table__item_half">Ирландский</td><td class="table__item table__item_half">ga</td></tr>
    <tr><td class="table__item table__item_half">Исландский</td><td class="table__item table__item_half">is</td></tr>
    <tr><td class="table__item table__item_half">Испанский</td><td class="table__item table__item_half">es</td></tr>
    <tr><td class="table__item table__item_half">Итальянский</td><td class="table__item table__item_half">it</td></tr>
    <tr><td class="table__item table__item_half">Казахский</td><td class="table__item table__item_half">kk</td></tr>
    <tr><td class="table__item table__item_half">Камбоджийский</td><td class="table__item table__item_half">km</td></tr>
    <tr><td class="table__item table__item_half">Каталанский</td><td class="table__item table__item_half">ca</td></tr>
    <tr><td class="table__item table__item_half">Кашмирский</td><td class="table__item table__item_half">ks</td></tr>
    <tr><td class="table__item table__item_half">Кечуа</td><td class="table__item table__item_half">qu</td></tr>
    <tr><td class="table__item table__item_half">Киргизский</td><td class="table__item table__item_half">ky</td></tr>
    <tr><td class="table__item table__item_half">Китайский</td><td class="table__item table__item_half">zh</td></tr>
    <tr><td class="table__item table__item_half">Корейский</td><td class="table__item table__item_half">ko</td></tr>
    <tr><td class="table__item table__item_half">Корсиканский</td><td class="table__item table__item_half">co</td></tr>
    <tr><td class="table__item table__item_half">Курдский</td><td class="table__item table__item_half">ku</td></tr>
    <tr><td class="table__item table__item_half">Лаосский</td><td class="table__item table__item_half">lo</td></tr>
    <tr><td class="table__item table__item_half">Латвийский, латышский</td><td class="table__item table__item_half">lv</td></tr>
    <tr><td class="table__item table__item_half">Латынь</td><td class="table__item table__item_half">la</td></tr>
    <tr><td class="table__item table__item_half">Литовский</td><td class="table__item table__item_half">lt</td></tr>
    <tr><td class="table__item table__item_half">Малагасийский</td><td class="table__item table__item_half">mg</td></tr>
    <tr><td class="table__item table__item_half">Малайский</td><td class="table__item table__item_half">ms</td></tr>
    <tr><td class="table__item table__item_half">Мальтийский</td><td class="table__item table__item_half">mt</td></tr>
    <tr><td class="table__item table__item_half">Маори</td><td class="table__item table__item_half">mi</td></tr>
    <tr><td class="table__item table__item_half">Македонский</td><td class="table__item table__item_half">mk</td></tr>
    <tr><td class="table__item table__item_half">Молдавский</td><td class="table__item table__item_half">mo</td></tr>
    <tr><td class="table__item table__item_half">Монгольский</td><td class="table__item table__item_half">mn</td></tr>
    <tr><td class="table__item table__item_half">Науру</td><td class="table__item table__item_half">na</td></tr>
    <tr><td class="table__item table__item_half">Немецкий</td><td class="table__item table__item_half">de</td></tr>
    <tr><td class="table__item table__item_half">Непальский</td><td class="table__item table__item_half">ne</td></tr>
    <tr><td class="table__item table__item_half">Норвежский</td><td class="table__item table__item_half">no</td></tr>
    <tr><td class="table__item table__item_half">Пенджаби</td><td class="table__item table__item_half">pa</td></tr>
    <tr><td class="table__item table__item_half">Персидский</td><td class="table__item table__item_half">fa</td></tr>
    <tr><td class="table__item table__item_half">Польский</td><td class="table__item table__item_half">pl</td></tr>
    <tr><td class="table__item table__item_half">Португальский</td><td class="table__item table__item_half">pt</td></tr>
    <tr><td class="table__item table__item_half">Пуштунский</td><td class="table__item table__item_half">ps</td></tr>
    <tr><td class="table__item table__item_half">Ретороманский</td><td class="table__item table__item_half">rm</td></tr>
    <tr><td class="table__item table__item_half">Румынский</td><td class="table__item table__item_half">ro</td></tr>
    <tr><td class="table__item table__item_half">Русский</td><td class="table__item table__item_half">ru</td></tr>
    <tr><td class="table__item table__item_half">Самоанский</td><td class="table__item table__item_half">sm</td></tr>
    <tr><td class="table__item table__item_half">Санскрит</td><td class="table__item table__item_half">sa</td></tr>
    <tr><td class="table__item table__item_half">Сербский</td><td class="table__item table__item_half">sr</td></tr>
    <tr><td class="table__item table__item_half">Словацкий</td><td class="table__item table__item_half">sk</td></tr>
    <tr><td class="table__item table__item_half">Словенский</td><td class="table__item table__item_half">sl</td></tr>
    <tr><td class="table__item table__item_half">Сомали</td><td class="table__item table__item_half">so</td></tr>
    <tr><td class="table__item table__item_half">Суахили</td><td class="table__item table__item_half">sw</td></tr>
    <tr><td class="table__item table__item_half">Суданский</td><td class="table__item table__item_half">su</td></tr>
    <tr><td class="table__item table__item_half">Тагальский</td><td class="table__item table__item_half">tl</td></tr>
    <tr><td class="table__item table__item_half">Таджикский</td><td class="table__item table__item_half">tg</td></tr>
    <tr><td class="table__item table__item_half">Тайский</td><td class="table__item table__item_half">th</td></tr>
    <tr><td class="table__item table__item_half">Тамильский</td><td class="table__item table__item_half">ta</td></tr>
    <tr><td class="table__item table__item_half">Татарский</td><td class="table__item table__item_half">tt</td></tr>
    <tr><td class="table__item table__item_half">Тибетский</td><td class="table__item table__item_half">bo</td></tr>
    <tr><td class="table__item table__item_half">Тонга</td><td class="table__item table__item_half">to</td></tr>
    <tr><td class="table__item table__item_half">Турецкий</td><td class="table__item table__item_half">tr</td></tr>
    <tr><td class="table__item table__item_half">Туркменский</td><td class="table__item table__item_half">tk</td></tr>
    <tr><td class="table__item table__item_half">Узбекский</td><td class="table__item table__item_half">uz</td></tr>
    <tr><td class="table__item table__item_half">Украинский</td><td class="table__item table__item_half">uk</td></tr>
    <tr><td class="table__item table__item_half">Урду</td><td class="table__item table__item_half">ur</td></tr>
    <tr><td class="table__item table__item_half">Фиджи</td><td class="table__item table__item_half">fj</td></tr>
    <tr><td class="table__item table__item_half">Финский</td><td class="table__item table__item_half">fi</td></tr>
    <tr><td class="table__item table__item_half">Французский</td><td class="table__item table__item_half">fr</td></tr>
    <tr><td class="table__item table__item_half">Фризский</td><td class="table__item table__item_half">fy</td></tr>
    <tr><td class="table__item table__item_half">Хауса</td><td class="table__item table__item_half">ha</td></tr>
    <tr><td class="table__item table__item_half">Хинди</td><td class="table__item table__item_half">hi</td></tr>
    <tr><td class="table__item table__item_half">Хорватский</td><td class="table__item table__item_half">hr</td></tr>
    <tr><td class="table__item table__item_half">Чешский</td><td class="table__item table__item_half">cs</td></tr>
    <tr><td class="table__item table__item_half">Шведский</td><td class="table__item table__item_half">sv</td></tr>
    <tr><td class="table__item table__item_half">Эсперанто (искусственный язык)</td><td class="table__item table__item_half">eo</td></tr>
    <tr><td class="table__item table__item_half">Эстонский</td><td class="table__item table__item_half">et</td></tr>
    <tr><td class="table__item table__item_half">Яванский</td><td class="table__item table__item_half">jw</td></tr>
    <tr><td class="table__item table__item_half">Японский</td><td class="table__item table__item_half">ja</td></tr>
  </table>
</details>

<div class="callout">
    💡 Если после открывающего тега <code>&lt;html&gt;</code> или перед закрывающим тегом <code>&lt;html&gt;</code> нет комментария, но внутри есть заполненная конструкция <code>&lt;body&gt; ... &lt;/body&gt;</code>, теги <code>&lt;html&gt;</code> и <code>&lt;/html&gt;</code> можно не писать.
</div>

## В работе

{% include "autors/ABatickaya/in-work.njk" %}

🛠 Программисты не пишут стандартную разметку страницы руками. Для этого чаще всего используется плагин [Emmet](https://emmet.io/), который позволяет _развернуть_ эту самую стандартную разметку по сочетанию клавиш `!` &xrarr; Tab. Альтернатива восклицательному знаку — `html:5` &xrarr; Tab.

В стандартной разметке «от Emmet» есть и тег `html`. Остаётся лишь дописать атрибут `lang` если он вам нужен. И можно приступать к написанию разметки страницы.

🛠 Тегу `html` можно добавить атрибут класса. Например, удобно при помощи JS добавлять класс в соответствии с операционной системой пользователя или по типу устройства, и, в зависимости от этого класса, менять поведение сайта. К примеру, на всех сайтах, где предусмотрены поп-апы, я подключаю скрипт, который проставляет класс `._popup-opened` для тега `html`. Таким образом я могу добавлять дополнительные стили только тогда, когда поп-ап открыт. К примеру, чтобы страница под поп-апом не прокручивалась, нужно добавить `overflow: hidden` для `body`. Но во всё остальное время это свойство не нужно. Я пишу следующий блок кода:

CSS

```css
html._popup-opened body {
  overflow: hidden;
}
```

Попап открывается &xrarr; скрипт добавляет класс `_popup-opened` для `html` &xrarr; срабатывает стиль для `body` &xrarr; попап закрывается &xrarr; скрипт убирает класс &xrarr; страница снова проматывается.

В общем, используй атрибут класса у `html` для дополнительной, служебной информации.

{% include "autors/grachev/autor.njk" %}
