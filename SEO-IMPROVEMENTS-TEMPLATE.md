# Шаблон SEO-доработок для сайта

## 📋 Полный список выполненных SEO-улучшений

Используйте этот список как чек-лист для внедрения аналогичных улучшений в другие проекты.

---

## 1. ТЕХНИЧЕСКИЕ ФАЙЛЫ

### 1.1. Создать sitemap.xml
**Файл:** `public/sitemap.xml`

**Содержание:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ВАША-ССЫЛКА/</loc>
    <lastmod>ТЕКУЩАЯ-ДАТА</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Добавить все страницы сайта -->
</urlset>
```

**Требования:**
- Включить все страницы сайта
- Указать приоритеты (1.0 для главной, 0.8-0.9 для важных, 0.7 для остальных)
- Указать частоту обновления (daily/weekly/monthly)
- Обновлять lastmod при изменении страниц

### 1.2. Обновить robots.txt
**Файл:** `public/robots.txt`

**Добавить:**
```txt
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Yandex
Allow: /

User-agent: *
Allow: /

Sitemap: https://ВАША-ССЫЛКА/sitemap.xml
```

### 1.3. Создать humans.txt
**Файл:** `public/humans.txt`

**Содержание:**
```txt
/* TEAM */
Автор: ИМЯ
Контакт: ССЫЛКА
Локация: ГОРОД, СТРАНА

/* SITE */
Стандарты: HTML5, CSS3, JavaScript ES6+
Компоненты: React, TypeScript, Vite, TailwindCSS
Язык: Русский

/* THANKS */
Спасибо всем, кто использует наши материалы!
```

---

## 2. META-ТЕГИ В index.html

### 2.1. Базовые meta-теги
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="canonical" href="https://ВАША-ССЫЛКА/" />
```

### 2.2. SEO meta-теги
```html
<title>ОПТИМИЗИРОВАННЫЙ TITLE (60 символов, с ключевыми словами)</title>
<meta name="description" content="ОПИСАНИЕ (160 символов, с цифрами и призывом к действию)" />
<meta name="keywords" content="ключевое слово 1, ключевое слово 2, ключевое слово 3, ..." />
<meta name="author" content="ИМЯ АВТОРА" />
```

### 2.3. Директивы для роботов
```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="googlebot" content="index, follow" />
<meta name="bingbot" content="index, follow" />
<meta name="yandex" content="index, follow" />
<meta name="theme-color" content="#ffffff" />
<meta name="format-detection" content="telephone=no" />
<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
```

### 2.4. Performance hints
```html
<link rel="dns-prefetch" href="https://ВНЕШНИЙ-РЕСУРС-1" />
<link rel="preconnect" href="https://ВНЕШНИЙ-РЕСУРС-2" />
```

### 2.5. Open Graph (для соцсетей)
```html
<meta property="og:title" content="TITLE" />
<meta property="og:description" content="DESCRIPTION" />
<meta property="og:locale" content="ru_RU" />
<meta property="og:site_name" content="НАЗВАНИЕ САЙТА" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://ВАША-ССЫЛКА/image.png" />
<meta property="og:url" content="https://ВАША-ССЫЛКА/" />
```

### 2.6. Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="TITLE" />
<meta name="twitter:description" content="DESCRIPTION" />
<meta name="twitter:image" content="https://ВАША-ССЫЛКА/image.png" />
```

### 2.7. Мобильные приложения
```html
<meta name="mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="КОРОТКОЕ НАЗВАНИЕ" />
```

---

## 3. СТРУКТУРИРОВАННЫЕ ДАННЫЕ (Schema.org)

### 3.1. Создать компонент StructuredData
**Файл:** `src/components/StructuredData.tsx`

```tsx
import { useEffect } from "react";

interface StructuredDataProps {
  data: object;
}

const StructuredData = ({ data }: StructuredDataProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
};

export default StructuredData;
```

### 3.2. Создать генераторы Schema.org
**Файл:** `src/utils/structuredData.ts`

**Включить разметку для:**
- **Organization** - информация о компании
- **Person** - информация об авторе/основателе
- **Product** - описание продуктов/услуг
- **FAQPage** - раздел с вопросами и ответами
- **Course** - если это образовательный продукт
- **WebSite** - общая информация о сайте
- **BreadcrumbList** - навигационные цепочки
- **AggregateRating** - рейтинги и отзывы (если есть)

**Пример структуры:**
```typescript
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "НАЗВАНИЕ КОМПАНИИ",
  url: "https://ВАША-ССЫЛКА/",
  logo: "https://ВАША-ССЫЛКА/logo.png",
  description: "ОПИСАНИЕ",
  // ... остальные поля
});
```

### 3.3. Добавить разметку на страницы
В каждом компоненте страницы добавить:
```tsx
import StructuredData from "../components/StructuredData";
import { getOrganizationSchema, ... } from "../utils/structuredData";

// В JSX:
<StructuredData data={getOrganizationSchema()} />
<StructuredData data={getProductSchema(...)} />
// и т.д.
```

---

## 4. ДОПОЛНИТЕЛЬНЫЕ СТРАНИЦЫ

### 4.1. Создать страницы для расширения семантического ядра

**Минимальный набор страниц:**
1. Главная (`/`)
2. О продукте/услуге (`/product` или `/services`)
3. Цены (`/pricing`)
4. О компании/авторе (`/about`)
5. Контакты (`/contacts`)
6. FAQ (`/faq`) - опционально, если большой раздел

**Для каждой страницы:**
- Уникальный H1 с ключевыми словами
- Уникальные title и description
- Breadcrumbs навигация
- Schema.org разметка
- Внутренние ссылки на другие страницы

### 4.2. Структура страницы
```tsx
import { useEffect } from "react";
import { updatePageMeta, pageMetas } from "../utils/seo";
import Breadcrumbs from "../components/Breadcrumbs";
import StructuredData from "../components/StructuredData";

const PageName = () => {
  useEffect(() => {
    updatePageMeta(pageMetas.pageName);
  }, []);

  return (
    <div>
      <StructuredData data={...} />
      <Header />
      <main>
        <Breadcrumbs items={[...]} />
        <h1>ЗАГОЛОВОК С КЛЮЧЕВЫМИ СЛОВАМИ</h1>
        {/* Контент */}
      </main>
      <Footer />
    </div>
  );
};
```

---

## 5. BREADCRUMBS (ХЛЕБНЫЕ КРОШКИ)

### 5.1. Создать компонент Breadcrumbs
**Файл:** `src/components/Breadcrumbs.tsx`

```tsx
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <a href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
```

### 5.2. Добавить на все внутренние страницы
```tsx
<Breadcrumbs
  items={[
    { label: "Главная", href: "/" },
    { label: "Текущая страница" },
  ]}
/>
```

### 5.3. Добавить Schema.org разметку для breadcrumbs
```typescript
export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
```

---

## 6. ОПТИМИЗАЦИЯ ИЗОБРАЖЕНИЙ

### 6.1. Добавить lazy loading
Для всех изображений (кроме первого экрана):
```html
<img src="..." alt="..." loading="lazy" />
```

### 6.2. Добавить описательные alt-теги
**Плохо:**
```html
<img src="image.png" alt="" />
<img src="image.png" alt="image" />
```

**Хорошо:**
```html
<img src="author.jpg" alt="Илья Латышев - автор курса" />
<img src="product.png" alt="Конспекты для подготовки к экзамену" />
```

### 6.3. Оптимизировать размеры
- Использовать WebP формат где возможно
- Сжимать изображения (TinyPNG, ImageOptim)
- Использовать правильные размеры (не загружать 4K изображение для превью)

---

## 7. ОПТИМИЗАЦИЯ ЗАГОЛОВКОВ

### 7.1. Правила для заголовков

**H1 (один на страницу):**
- Должен содержать основное ключевое слово
- Длина: 40-70 символов
- Уникален для каждой страницы
- Пример: "Конспекты для подготовки к экзамену в Минюсте"

**H2 (несколько на страницу):**
- Содержат дополнительные ключевые слова
- Описывают основные разделы страницы
- Длина: 30-60 символов
- Примеры:
  - "Самый доступный вариант подготовки юристов к аттестационному экзамену"
  - "Почему большинство юристов не проходят аттестацию в Министерстве юстиции?"
  - "Ваш «GPS для подготовки к экзамену в Минюсте»: всё необходимое в одном месте"

**H3 (подразделы):**
- Уточняют информацию из H2
- Могут содержать LSI-ключевые слова
- Примеры:
  - "Чем наши материалы для юристов лучше других?"
  - "Обновлено под программу аттестационного экзамена 2026"

### 7.2. Иерархия заголовков
```
H1 - Главный заголовок страницы
  H2 - Основной раздел 1
    H3 - Подраздел 1.1
    H3 - Подраздел 1.2
  H2 - Основной раздел 2
    H3 - Подраздел 2.1
```

### 7.3. Оптимизация существующих заголовков
- Добавить ключевые слова естественным образом
- Избегать переспама ключевых слов
- Делать заголовки информативными и привлекательными
- Использовать цифры где уместно (350+, 2026, 20 лет)

**Примеры оптимизации:**

| Было | Стало |
|------|-------|
| "Отзывы" | "Отзывы про материалы к экзамену в Минюсте" |
| "Остались вопросы?" | "Остались вопросы про подготовку к экзамену в Минюсте?" |
| "Начните прямо сейчас!" | "Начните прямо сейчас готовиться к экзамену в Минюсте!" |
| "Цены" | "Цены на материалы для подготовки к экзамену в Минюсте" |

---

## 8. SEO УТИЛИТЫ

### 8.1. Создать файл для управления meta-тегами
**Файл:** `src/utils/seo.ts`

```typescript
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export const updatePageMeta = (meta: PageMeta) => {
  document.title = meta.title;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", meta.description);
  }
  
  // Обновить og:title, og:description, canonical и т.д.
  // ... полный код в src/utils/seo.ts
};

export const pageMetas = {
  home: {
    title: "...",
    description: "...",
    canonical: "https://ВАША-ССЫЛКА/",
  },
  // Для каждой страницы
};
```

### 8.2. Использовать в компонентах страниц
```tsx
import { useEffect } from "react";
import { updatePageMeta, pageMetas } from "../utils/seo";

const PageName = () => {
  useEffect(() => {
    updatePageMeta(pageMetas.pageName);
  }, []);
  
  return <div>...</div>;
};
```

---

## 9. ВНУТРЕННЯЯ ПЕРЕЛИНКОВКА

### 9.1. Добавить ссылки между страницами
- На главной странице - ссылки на все внутренние страницы
- На внутренних страницах - ссылки на главную и связанные страницы
- В футере - ссылки на все основные страницы

### 9.2. Использовать правильные анкоры
**Плохо:**
- "Нажмите здесь"
- "Читать далее"
- "Подробнее"

**Хорошо:**
- "Подробнее о конспектах"
- "Узнать больше о боте"
- "Посмотреть все цены"

### 9.3. Обновить Footer
Добавить внутренние ссылки на основные страницы:
```tsx
links: [
  { label: "Продукт", href: "/product", internal: true },
  { label: "Цены", href: "/pricing", internal: true },
  { label: "О нас", href: "/about", internal: true },
  // ... внешние ссылки
]
```

Обновить компонент Footer для поддержки internal ссылок:
```tsx
<a
  href={link.href}
  target={link.internal ? undefined : "_blank"}
  rel={link.internal ? undefined : "noopener noreferrer"}
>
  {link.label}
</a>
```

---

## 10. РОУТИНГ

### 10.1. Добавить новые роуты в App.tsx
```tsx
import Index from "./pages/Index";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/product" element={<Product />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### 10.2. Обновить навигацию
Исправить ссылку логотипа в Header:
```tsx
// Было:
<a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(...) }}>

// Стало:
<a href="/">
```

---

## 11. PRERENDERING (для SPA)

### 11.1. Установить react-snap
```bash
npm install --save-dev react-snap
```

### 11.2. Обновить package.json
```json
{
  "scripts": {
    "build": "vite build && react-snap",
    "build:no-snap": "vite build"
  },
  "reactSnap": {
    "source": "dist",
    "minifyHtml": {
      "collapseWhitespace": true,
      "removeComments": true
    },
    "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"],
    "include": [
      "/",
      "/product",
      "/pricing",
      "/about"
    ]
  }
}
```

### 11.3. Альтернатива: использовать Next.js
Если проект на Next.js, использовать SSG:
```tsx
export async function generateStaticParams() {
  return [
    { slug: 'product' },
    { slug: 'pricing' },
    // ...
  ];
}
```

---

## 12. PERFORMANCE ОПТИМИЗАЦИИ

### 12.1. Настроить vite.config.ts
```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@radix-ui/react-accordion", "@radix-ui/react-dialog"],
        },
      },
    },
    cssCodeSplit: true,
    minify: "esbuild",
  },
});
```

### 12.2. Code splitting
- Разделить vendor и UI библиотеки
- Использовать dynamic imports для больших компонентов
- Включить CSS code splitting

---

## 13. КОНТЕНТ-ОПТИМИЗАЦИЯ

### 13.1. Оптимизация текста

**Принципы:**
- Плотность ключевых слов: 2-3%
- Использовать ключевые слова естественно
- Добавлять синонимы и LSI-ключевые слова
- Структурировать текст (списки, таблицы)

**Где добавлять ключевые слова:**
- В заголовках (H1, H2, H3)
- В первом абзаце
- В подзаголовках секций
- В alt-тегах изображений
- В анкорах ссылок
- В meta-описании

### 13.2. Структура контента
- Короткие абзацы (3-4 строки)
- Маркированные списки
- Выделение важного жирным шрифтом
- Использование цифр и статистики
- Социальные доказательства (отзывы, кейсы)

---

## 14. МИКРОРАЗМЕТКА ЦЕН

### 14.1. Добавить itemScope для цен
```tsx
<div itemScope itemType="https://schema.org/Offer">
  <meta itemProp="priceCurrency" content="BYN" />
  <meta itemProp="price" content="99" />
  <meta itemProp="availability" content="https://schema.org/InStock" />
  <span itemProp="price">99 руб.</span>
</div>
```

---

## 15. СЕМАНТИЧЕСКАЯ HTML СТРУКТУРА

### 15.1. Использовать правильные HTML5 теги
```html
<header> - шапка сайта
<nav> - навигация
<main> - основной контент
<article> - статья/контент
<aside> - дополнительная информация
<section> - секция контента
<footer> - подвал сайта
```

### 15.2. Aria-атрибуты
```html
<button aria-label="Открыть меню">
<nav aria-label="Breadcrumb">
<img alt="Описание изображения">
```

---

## 16. НАСТРОЙКА РОУТИНГА ДЛЯ SEO

### 16.1. Обновить sitemap при добавлении страниц
Каждый раз при создании новой страницы:
1. Добавить URL в `public/sitemap.xml`
2. Обновить дату `<lastmod>`
3. Пересобрать проект
4. Переотправить sitemap в Search Console

### 16.2. Настроить 404 страницу
- Создать кастомную страницу 404
- Добавить ссылки на основные разделы
- Добавить поиск по сайту (опционально)

---

## 17. ЧЕКЛИСТ ВНЕДРЕНИЯ

### Технические файлы:
- [ ] Создать `public/sitemap.xml`
- [ ] Обновить `public/robots.txt` (добавить ссылку на sitemap)
- [ ] Создать `public/humans.txt`

### Meta-теги в index.html:
- [ ] Добавить canonical URL
- [ ] Оптимизировать title (60 символов, ключевые слова)
- [ ] Оптимизировать description (160 символов, цифры, CTA)
- [ ] Расширить keywords
- [ ] Добавить robots meta-теги
- [ ] Добавить theme-color
- [ ] Добавить dns-prefetch и preconnect
- [ ] Улучшить Open Graph теги
- [ ] Улучшить Twitter Cards
- [ ] Добавить мобильные meta-теги

### Структурированные данные:
- [ ] Создать `src/components/StructuredData.tsx`
- [ ] Создать `src/utils/structuredData.ts`
- [ ] Добавить Organization schema
- [ ] Добавить Person schema (если есть автор)
- [ ] Добавить Product schema
- [ ] Добавить FAQPage schema
- [ ] Добавить WebSite schema
- [ ] Добавить BreadcrumbList schema
- [ ] Добавить Course schema (для образовательных продуктов)
- [ ] Добавить разметку на все страницы

### Дополнительные страницы:
- [ ] Создать страницу о продукте/услуге
- [ ] Создать страницу с ценами
- [ ] Создать страницу "О нас"
- [ ] Добавить роуты в App.tsx
- [ ] Создать уникальные title/description для каждой страницы

### Breadcrumbs:
- [ ] Создать компонент `src/components/Breadcrumbs.tsx`
- [ ] Добавить на все внутренние страницы
- [ ] Добавить Schema.org разметку BreadcrumbList

### Изображения:
- [ ] Добавить lazy loading для всех изображений
- [ ] Добавить описательные alt-теги
- [ ] Оптимизировать размеры изображений
- [ ] Конвертировать в WebP (опционально)

### Заголовки:
- [ ] Оптимизировать H1 на всех страницах (добавить ключевые слова)
- [ ] Оптимизировать H2 (добавить ключевые слова)
- [ ] Оптимизировать H3 (добавить LSI-ключевые слова)
- [ ] Проверить иерархию заголовков (H1→H2→H3)

### Внутренняя перелинковка:
- [ ] Добавить ссылки между страницами
- [ ] Обновить Footer с внутренними ссылками
- [ ] Использовать описательные анкоры
- [ ] Исправить ссылку логотипа (href="/")

### SEO утилиты:
- [ ] Создать `src/utils/seo.ts`
- [ ] Добавить функцию updatePageMeta()
- [ ] Создать объект pageMetas с данными для всех страниц
- [ ] Использовать в компонентах страниц

### Prerendering:
- [ ] Установить react-snap
- [ ] Настроить в package.json
- [ ] Добавить все страницы в include
- [ ] Протестировать сборку

### Performance:
- [ ] Настроить code splitting в vite.config.ts
- [ ] Включить CSS code splitting
- [ ] Настроить minification
- [ ] Добавить dns-prefetch для внешних ресурсов

### Микроразметка:
- [ ] Добавить itemScope для цен
- [ ] Добавить aria-labels для кнопок
- [ ] Использовать семантические HTML5 теги

---

## 18. КЛЮЧЕВЫЕ ФРАЗЫ ДЛЯ ВАШЕЙ НИШИ

### 18.1. Определить основное ключевое слово
Пример: "подготовка к экзамену в Минюсте"

### 18.2. Определить дополнительные ключевые слова
Примеры:
- "аттестационный экзамен"
- "конспекты для юристов"
- "материалы для подготовки"
- "симулятор тестирования"

### 18.3. Определить LSI-ключевые слова
Примеры:
- "Министерство юстиции"
- "аттестация юристов"
- "подготовка юристов"
- "программа 2026"

### 18.4. Внедрить ключевые слова
- В H1 - основное ключевое слово
- В H2 - основное + дополнительные
- В H3 - LSI-ключевые слова
- В тексте - естественное использование всех ключевых слов

---

## 19. ПРОВЕРКА ПОСЛЕ ВНЕДРЕНИЯ

### Локальная проверка:
- [ ] Собрать проект (`npm run build`)
- [ ] Проверить все страницы локально
- [ ] Проверить sitemap.xml
- [ ] Проверить robots.txt
- [ ] Проверить отсутствие ошибок линтера

### После деплоя:
- [ ] Проверить доступность всех страниц
- [ ] Проверить sitemap.xml (https://ваш-сайт/sitemap.xml)
- [ ] Проверить robots.txt (https://ваш-сайт/robots.txt)
- [ ] Зарегистрироваться в Google Search Console
- [ ] Зарегистрироваться в Яндекс.Вебмастер
- [ ] Отправить sitemap в обе системы
- [ ] Запросить индексацию всех страниц

### Валидация:
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] [Schema.org Validator](https://validator.schema.org/)

---

## 20. СПЕЦИФИЧЕСКИЕ ДОРАБОТКИ ДЛЯ ПРОЕКТА

### Для образовательных проектов:
- Добавить Course schema
- Указать educationalLevel
- Добавить coursePrerequisites
- Указать courseWorkload

### Для e-commerce:
- Добавить Product schema для каждого товара
- Добавить AggregateRating
- Добавить Review schema
- Микроразметка цен (Offer, PriceSpecification)

### Для услуг:
- Добавить Service schema
- Указать serviceType
- Добавить areaServed
- Указать provider

### Для локального бизнеса:
- Добавить LocalBusiness schema
- Указать address (полный адрес)
- Добавить geo координаты
- Указать openingHours

---

## 21. ДОПОЛНИТЕЛЬНЫЕ РЕКОМЕНДАЦИИ

### 21.1. Контент
- Минимум 1000-1500 слов на главной странице
- 800-1200 слов на внутренних страницах
- Уникальный контент для каждой страницы
- Регулярное обновление контента

### 21.2. Мобильная версия
- Responsive дизайн
- Touch-friendly элементы (минимум 44x44px)
- Быстрая загрузка на мобильных
- Читаемый текст без зума

### 21.3. Скорость загрузки
- Оптимизировать изображения
- Минифицировать CSS/JS
- Использовать CDN (опционально)
- Включить compression на сервере

### 21.4. HTTPS
- Обязательно использовать HTTPS
- Настроить редирект с HTTP на HTTPS
- Проверить SSL сертификат

---

## 22. МОНИТОРИНГ

### После запуска отслеживать:
- Позиции по ключевым запросам (Google Search Console)
- Органический трафик (Яндекс.Метрика / Google Analytics)
- CTR в поисковой выдаче
- Ошибки индексации
- Скорость загрузки страниц
- Поведенческие факторы (время на сайте, отказы)

---

## 23. ВРЕМЕННЫЕ РАМКИ

### Немедленно (день 1):
- Технические файлы (sitemap, robots.txt, humans.txt)
- Meta-теги в index.html
- Структурированные данные

### В течение недели:
- Дополнительные страницы
- Breadcrumbs
- Оптимизация изображений
- Оптимизация заголовков

### В течение месяца:
- Prerendering
- Performance оптимизации
- Внутренняя перелинковка
- Регистрация в поисковых системах

---

## 24. ИТОГОВЫЙ ЧЕКЛИСТ

**Перед деплоем:**
- [ ] Все файлы созданы
- [ ] Все компоненты обновлены
- [ ] Сборка проходит без ошибок
- [ ] Нет ошибок линтера
- [ ] Все страницы работают локально

**После деплоя:**
- [ ] Все страницы доступны
- [ ] Sitemap доступен
- [ ] Robots.txt доступен
- [ ] Meta-теги корректны
- [ ] Структурированные данные без ошибок
- [ ] Отправлен sitemap в поисковые системы

**Через неделю:**
- [ ] Сайт появился в индексе
- [ ] Нет ошибок в Search Console
- [ ] Rich snippets отображаются

**Через месяц:**
- [ ] Анализ первых данных
- [ ] Корректировка стратегии
- [ ] Начало роста трафика

---

## 📞 ВАЖНЫЕ ССЫЛКИ

**Инструменты проверки:**
- Google Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Schema.org Validator: https://validator.schema.org/

**Регистрация:**
- Google Search Console: https://search.google.com/search-console
- Яндекс.Вебмастер: https://webmaster.yandex.ru/
- Bing Webmaster: https://www.bing.com/webmasters

**Документация:**
- Schema.org: https://schema.org/
- Google Search Central: https://developers.google.com/search
- Open Graph Protocol: https://ogp.me/

---

## ✅ ИТОГО

Этот шаблон содержит все SEO-доработки, которые были внедрены в проект exam2.ilat.info.

**Основные улучшения:**
1. Технические файлы (sitemap, robots.txt, humans.txt)
2. Оптимизированные meta-теги
3. Структурированные данные (8 типов Schema.org)
4. Дополнительные страницы (4 новые страницы)
5. Breadcrumbs навигация
6. Оптимизация изображений (lazy loading, alt-теги)
7. Оптимизация заголовков (H1, H2, H3 с ключевыми словами)
8. Внутренняя перелинковка
9. Prerendering (react-snap)
10. Performance оптимизации

**Результат:** Комплексная SEO-оптимизация, готовая к продвижению в поисковых системах.

---

**Дата создания шаблона:** 2 марта 2026  
**Версия:** 1.0  
**Статус:** Проверено и работает ✅
