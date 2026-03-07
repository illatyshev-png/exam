# Контекст проекта exam.ilat.info

## 📋 Обзор

**Тип проекта**: Landing page / маркетинговый сайт для курса подготовки к экзамену в Минюсте (групповая подготовка)

**Домен**: https://exam.ilat.info
**Репозиторий**: C:\Users\User\Downloads\exam

## 🛠 Технологический стек

### Frontend
- **React 18.3.1** + TypeScript 5.8
- **Vite 5.4** - build tool
- **React Router DOM 6.30** - routing
- **TanStack Query 5.83** - state management

### Styling & UI
- **Tailwind CSS 3.4** - utility-first CSS
- **shadcn/ui** - компоненты на базе Radix UI
- **Radix UI** - недоступные компоненты (accordion, dialog, dropdown, tabs, toast и др.)
- **lucide-react 0.462** - иконки
- **class-variance-authority** - управление вариантами компонентов

### Forms & Validation
- **React Hook Form 7.61** - формы
- **Zod 3.25** - валидация схем
- **@hookform/resolvers** - интеграция

### SSR/SEO
- **react-snap 1.23** - prerendering для SEO
- **Yandex Metrika** - аналитика
- **Structured Data (JSON-LD)** - разметка для поисковиков

### Testing & Dev
- **Vitest 3.2** - unit тесты
- **Testing Library** - React тестирование
- **ESLint 9** - линтер
- **TypeScript ESLint** - TS линтинг

### Package Manager
- **bun** (используется bun.lockb)

## 📁 Структура приложения

### Маршруты (React Router)
```
/          → Index (главная landing page)
/about     → About (о курсе)
/pricing   → Pricing (тарифы)
/faq       → FAQ (вопросы-ответы)
/reviews   → Reviews (отзывы)
/author    → Author (об авторе)
/*         → NotFound (404)
```

### Компоненты Landing Page
```
src/
├── pages/
│   ├── Index.tsx          → Главная страница (собирает все секции)
│   ├── About.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── Reviews.tsx
│   ├── Author.tsx
│   └── NotFound.tsx
│
├── components/
│   ├── landing/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx           → Первый экран
│   │   │   ├── StatsBar.tsx       → Статистика
│   │   │   ├── Comparison.tsx     → Сравнение подходов
│   │   │   ├── Solution.tsx       → Решение
│   │   │   ├── Authority.tsx      → Авторитет
│   │   │   ├── ProductDetails.tsx → Детали продукта
│   │   │   ├── SocialProof.tsx    → Отзывы с фото
│   │   │   ├── Pricing.tsx        → Тарифы
│   │   │   └── FAQ.tsx            → FAQ
│   │   └── ui/
│   │       ├── Container.tsx
│   │       ├── Heading.tsx
│   │       ├── Text.tsx
│   │       ├── Section.tsx
│   │       ├── LandingCard.tsx
│   │       ├── LandingButton.tsx
│   │       ├── LandingAccordion.tsx
│   │       ├── TestimonialCard.tsx
│   │       ├── SectionImage.tsx
│   │       ├── RevealOnScroll.tsx
│   │       └── ScrollToTop.tsx
│   │
│   ├── ui/                     → shadcn/ui компоненты
│   ├── SEOHead.tsx
│   ├── StructuredData.tsx
│   ├── YandexMetrika.tsx
│   ├── Breadcrumbs.tsx
│   └── NavLink.tsx
│
├── content/
│   └── landing.ts              → Контент для всех секций
│
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── lib/
│   └── utils.ts                → cn() утилита для tailwind-merge
│
└── utils/
    ├── seo.ts
    ├── linkRel.ts
    └── structuredData.ts
```

## 🔧 Build & Deploy

### Скрипты package.json
```json
{
  "dev": "vite",                           // Dev сервер на localhost:8080
  "build": "vite build && react-snap",     // Продакшн сборка + prerendering
  "build:no-snap": "vite build",          // Без prerendering
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview",
  "test": "vitest run",
  "test:watch": "vitest"
}
```

### Конфигурация Vite
- **Dev server**: localhost:8080
- **Alias**: `@` → `./src`
- **Code splitting**: vendor, ui, query, form чанки
- **Minify**: esbuild
- **CSS code split**: включен

### react-snap конфигурация
```json
{
  "source": "dist",
  "include": ["/", "/about", "/pricing", "/faq", "/reviews", "/author"],
  "skipThirdPartyRequests": true,
  "removeBlobs": true,
  "timeout": 45000,
  "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
}
```

### Деплой на cPanel
- **FTP сервер**: ftp.ilat.info
- **Папка сборки**: `dist/`
- **Команда**: `npm run build:no-snap`
- **Правила деплоя**: см. `DEPLOY_CPANEL_RULES.md`
- **Ветка**: main

### .htaccess редиректы
- HTTP → HTTPS (с учётом прокси через `X-Forwarded-Proto`)
- `/exam` → `https://exam.ilat.info/` (301 редирект)
- SPA routing fallback на index.html

## 🎨 Дизайн и UX

### UI компоненты
- Полный набор shadcn/ui компонентов (accordion, dialog, dropdown-menu, tabs, toast и др.)
- Кастомные landing компоненты
- Анимации появления на скролле (RevealOnScroll)
- Прокрутка к якорям при навигации

### SEO оптимизация
- Prerendering через react-snap
- Structured Data (JSON-LD)
- Yandex Metrika
- Мета-теги (SEOHead)

## 📝 Недавние изменения

### Git коммиты
- `2e27c81` - временно убрано приветственное всплывающее окно
- `e52516e` - замена Radix Dialog на кастомный overlay
- `9e49faf` - полная размонтировка WelcomePopup
- `3a491bd` - корректное закрытие приветственного окна
- `7a66de0` - Install Chromium in CI for react-snap

### Текущий статус Git
```
M  public/.htaccess     (изменён: добавлены редиректы)
?? DEPLOY_CPANEL_RULES.md
?? exam-deploy.zip
?? public/.htaccess-redirect-ilat-root.txt
```

## 🔑 Ключевые файлы

### Конфигурация
- `vite.config.ts` - Vite конфигурация
- `tsconfig.json` - TypeScript конфигурация
- `tailwind.config.js` - Tailwind конфигурация
- `components.json` - shadcn/ui конфигурация
- `eslint.config.js` - ESLint конфигурация
- `postcss.config.js` - PostCSS конфигурация

### Основные файлы
- `src/main.tsx` - точка входа (с hydrate для react-snap)
- `src/App.tsx` - корневой компонент с маршрутизацией
- `src/content/landing.ts` - весь контент landing page
- `src/index.css` - глобальные стили и Tailwind директивы

## 📌 Важные заметки

1. **SSR/Prerendering**: Проект использует react-snap для генерации статического HTML на этапе сборки. В продакшене используется hydrateRoot, в dev - createRoot.

2. **SEO**: Все страницы prerender-ятся для лучшего SEO и Core Web Vitals.

3. **Deploy**: Для деплоя используется GitHub Actions + FTP на cPanel. Правила в `DEPLOY_CPANEL_RULES.md`.

4. **Приветственное окно**: Было временно убрано (см. последние коммиты).

5. **Контент**: Весь текстовый контент хранится в `src/content/landing.ts` для удобного редактирования.
