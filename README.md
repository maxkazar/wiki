# wiki

Static HTML pages hosted on GitHub Pages — учебные материалы команды.

**Live site:** https://maxkazar.github.io/wiki/

`index.html` — стартовая страница (лендинг): список курсов и отдельных разборов.

## Структура

```
index.html                  # лендинг: карточки курсов и статей
assets/site.css             # общая тёмная тема оболочки (лендинг + оглавления курсов)
ddd-rails-subscriptions.html# отдельная статья-разбор
courses/
  <slug>/                   # одна серия = одна папка
    index.html              # оглавление курса (использует ../../assets/site.css)
    lessons/0001…NNNN.html  # уроки серии
    assets/                 # стили/скрипты уроков (lesson.css, quiz.js, …)
    reference/              # шпаргалки
    *.md                    # вспомогательные доки (открываются как текст)
```

Уроки ссылаются на свои ресурсы относительными путями `../assets/…`, `../reference/…`,
`../<doc>.md`, поэтому внутри `courses/<slug>/` структуру менять нельзя — иначе ссылки
сломаются.

## Добавить новую серию уроков

1. Создай папку `courses/<slug>/` с подпапками `lessons/`, `assets/` (и при нужде `reference/`).
2. Положи уроки в `lessons/`, общие стили/скрипты — в `assets/`.
3. Создай `courses/<slug>/index.html` — оглавление курса (можно скопировать
   `courses/ddd-rails/index.html` как шаблон; стили берутся из `../../assets/site.css`).
4. Добавь карточку курса в корневой `index.html` (секция «Курсы»).
5. Commit и push:

   ```sh
   git add -A && git commit -m "add <slug> course" && git push
   ```

Сайт обновится за ~1 минуту. `.nojekyll` присутствует — файлы отдаются как есть
(без обработки Jekyll), поэтому `.md` показываются как сырой текст.
