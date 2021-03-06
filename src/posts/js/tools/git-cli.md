---
title: "Git CLI — минимум для работы"
name: git-cli
author: kamyshev
co-authors:
designers:
contributors:
tags:
  - sprint-4
  - sprint-8
  - sprint-10
summary:
  - гит
---

## Кратко

Git CLI — это консольный интерфейс для Git, который выполняется в терминале. На своих компьютерах разработчики часто используют графические интерфейсы, чтобы работать с репозиторием более комфортно. Но уметь пользоваться Git CLI все равно важно. Например, на серверах графического интерфейса нет, и все пользователи вынуждены использовать консольные приложения. Git CLI — это общий для всех разработчиков инструмент, он не зависит от операционной системы, компьютера и доступен абсолютно для всех.

При работе над проектом разработчики обычно следуют примерно одному и тому же сценарию — скачивают себе удаленный репозиторий, создают отдельную ветку для своих правок, изменяют код или пишут новый, добавляют изменённые файлы к списку отслеживаемых Git изменений, создают коммит и отправляют всю ветку в удаленный репозиторий, чтобы другие программисты могли провести [код-ревью](https://www.notion.so/d7239a517022427fa41ff02afd781b25). После успешного код-ревью ветка разработчика сливается в основную ветку. На этом разработку по конерктной задаче можно считать законченной, а ветку — удалять.

![Схема работы с Гит](/assets/images/posts/js/git-cli/high-level.png)

## Как пользоваться

### Скачивание удаленного репозитория

Удалённый репозиторий — не самый удачный перевод на русский английского `remote repository`. Он значит, что репозиторий находится далеко — не на вашем компьютере, а не то, что ваш код уничтожен.

Обычно, при разработке программы есть сервер, где хранится оригинал исходного кода. Все разработчики копируют этот репозиторий на свой локальный компьютер. После разработки какой-то функциональности изменения отправляются обратно — из локального репозитория разработчика в удаленный.

В первый раз, чтобы скачать весь удаленный репозиторий на свой компьютер, его нужно **клонировать**. Команда `git clone` создаст полную локальную копию, в которою можно будет вносить изменения.

```bash
git clone git@remote_repo_address
```

Со временем, в удаленном репозитории могут появляться новые изменения, которые необходимо подтягивать в локальный репозиторий. Получить все изменения из удаленного репозитория можно командой:

```bash
git pull --all
```

### Создание ветки

При работе в команде, разработчики делают задачи параллельно. Чтобы в будущем возникло минимальное число конфликтов в исходном коде, используют ветки.

Конфликт — это ситуация, когда один и тот же код изменили два разных разработчика. В такой ситуации нельзя автоматически решить, чьи правки важнее и приходится разбирать каждый случай вручную.

Новую ветку можно создать через Git CLI. Родительской считается активная в текущий момент ветка.

```bash
git branch new-user-profile
```

Обычно после создания ветки, её сразу делают активной, для этого используется команда:

```bash
git checkout new-user-profile
```

Для удобства можно использовать команду, которая сразу создаёт новую ветку и делает её активной: `git checkout -b new-user-profile`

Новая ветка будет полностью копировать историю той ветки, из которой она создана. Но при этом, коммиты созданные в родительской ветке, после создания дочерней, уже не попадут в историю дочерней ветки. Точно также, и коммиты из дочерней ветки не попадут ни в какую другую, пока разработчик явным образом их туда не поместит.

Можно произвольно переключаться между ветками с помощью команды `git checkout`.

```bash
git checkout master
git checkout new-user-profile
```

### Проверка текущего статуса репозитория

Чтобы посмотреть, какие файлы были изменены, созданы или удалены нужно проверить статус репозитория:

```bash
git status
```

Это команда помогает понять, что произошло в репозитории со времени последнего коммита, какие файлы отслеживаются Git, и решить, что делать дальше.

### Отслеживание изменений

По умолчанию изменения в репозитории не отслеживаются Git. Прежде чем сохранить эти изменения, нужно добавить их к списку отслеживания. Для этого в Git CLI используется команда `git add`:

```bash
git add filename.js
```

Использовать команду можно не только для отдельного файла, но и для целой директории. Например, чтобы добавить все файлы в текущей директории можно сделать так:

```bash
git add .
```

На практике часто добавляют в список отслеживания все изменившиеся файлы через команду `git add all`

### Коммит

Самая важная концепция Git — коммиты. Весь репозиторий с кодом состоит из последовательного набора коммитов, применив которые можно получить последнее состояние исходного кода.

Всегда создавайте коммиты после внесения изменений в код проекта и давайте ему осмысленный комментарий. В Git CLI для этого используется команда:

```bash
git commit
```

Она создаст коммит, в который войдут все изменения, добавленные к отслеживанию Git. После вызова откроется консольный текстовый редактор, куда следует ввести комментарий к коммиту.

Если комментарий к коммиту короткий, то его можно передавать через аргумент: `git commit -m "Rename getUser function"`

### Отправка в удаленный репозиторий

Чтобы отправить свои изменения в удаленный репозиторий, нужно сделать коммит в конкретной ветке и выполнить команду:

```bash
git push
```

Если такой ветки еще не существует в удаленном репозитории Git CLI посоветует создать ее и подскажет команду.

### Слияние изменений

Часто случается так, что за время разработки какой-то функциональности в дочерней ветке, в родительскую ветку добавляется много новых коммитов и хочется добавить их и в дочернюю ветку. Для этого нужно провести слияние родительской ветки в дочернюю.

С другой стороны, после окончания разработки функциональности в дочерней ветке, нужно отправить изменения в родительскую. Для этого тоже нужно провести слияния, но уже в обратную сторону — из дочерней ветки в родительскую.

![](/assets/images/posts/js/git-cli/merge.png)

Чтобы слить любую ветку в текущую активную ветку нужно выполнить следующую команду:

```bash
git merge branch_name
```

### Удаление ветки

После того, как изменения из ветки разработчика попали в основную ветку (`master` или `main`), ветку разработчика нужно удалить. Это можно сделать консольной командой:

```bash
git branch -d branch_name
```

## В работе

### .gitignore

Во многих проектах есть целые папки, которые не требуется сохранять в Git-репозитории:

- папку `node_modules` не добавляют в репозиторий, ведь зависимости можно установить через пакетный менеджер в любой момент
- результат работы сборщика тоже обычно держат вне репозитория, так как эти файлы не являются исходным кодом
- файлы, которые создаёт среда разработки (например, `.idea`)
- любые секретные данные (пароли и ключи доступа)

Чтобы Git никогда не отслеживал изменения в таких директориях, нужно создать файл `.gitignore`. В файле перечисляют все файлы и папки, которые следует игнорировать.

Типичный `.gitignore` выглядит примерно так:

```
node_modules
build
.idea
```

### Графические клиенты Git

Несмотря на важность умения использовать консольный интерфейс Git, многие разработчики в повседневной жизни используют графические интерфейсы, которые помогают наглядно следить за репозиторием, создавать ветки и коммиты.

Вот несколько красивых и простых клиентов:

**Бесплатные**
- [GitKraken](https://www.gitkraken.com/) для Windows, macOS и Linux
- [Sourcetree](https://www.sourcetreeapp.com/) для Windows и macOS
- [GitHub Desktop](https://desktop.github.com) для Windows и macOS

**Платные**
- [Tower](https://www.git-tower.com/) для Windows и macOS
- [Fork](https://git-fork.com/) для Windows и macOS
- [Sublime Merge](https://www.sublimemerge.com/) для Windows, macOS и Linux
