# Prerendering настроен

## Что сделано

1. **react-snap** добавлен в devDependencies
2. **package.json** — скрипт `build` запускает `vite build && react-snap`
3. **main.tsx** — используется `hydrateRoot` для prerendered контента
4. **Страницы для prerendering:** /, /about, /pricing, /faq, /reviews, /author

## Первый запуск

Если при `npm run build` появляется ошибка **"Chromium revision is not downloaded"**:

1. Закройте все процессы, использующие проект (IDE, терминалы)
2. Выполните:
   ```bash
   npm install
   npm run build
   ```

## Если Chromium не устанавливается

Можно использовать системный Chrome. Добавьте в `package.json` в секцию `reactSnap`:

```json
"puppeteerExecutablePath": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
```

(Путь может отличаться — проверьте, где установлен Chrome.)

## Сборка без prerendering

Если нужно собрать без react-snap (например, для быстрой проверки):

```bash
npm run build:no-snap
```

## Результат

После успешной сборки в `dist/` будут:
- `index.html` — главная с готовым HTML
- `about/index.html` — страница «О программе»
- `pricing/index.html` — страница «Стоимость»
- `faq/index.html` — страница FAQ
- `reviews/index.html` — страница «Отзывы»
- `author/index.html` — страница «Об авторе»

Поисковые роботы смогут индексировать контент без выполнения JavaScript.
