# Руководство по внедренным SEO улучшениям

## 📦 Что было добавлено

### Новые файлы

1. **`public/sitemap.xml`** - Карта сайта для поисковых систем
2. **`public/manifest.json`** - Манифест для PWA
3. **`src/components/StructuredData.tsx`** - Компонент со структурированными данными
4. **`src/components/SEOHead.tsx`** - Компонент для управления мета-тегами

### Обновленные файлы

1. **`index.html`** - Оптимизированы мета-теги, добавлены preconnect
2. **`public/robots.txt`** - Добавлена ссылка на sitemap
3. **`src/pages/Index.tsx`** - Подключен компонент StructuredData
4. Все компоненты с изображениями - добавлены описательные alt-теги

---

## 🚀 Как использовать новые компоненты

### 1. StructuredData компонент

Компонент автоматически добавляет JSON-LD разметку на страницу. Уже подключен на главной странице.

**Расположение:** `src/components/StructuredData.tsx`

**Использование:**
```tsx
import StructuredData from "@/components/StructuredData";

function MyPage() {
  return (
    <>
      <StructuredData />
      {/* остальной контент */}
    </>
  );
}
```

**Что включает:**
- Organization Schema
- Course Schema
- FAQPage Schema
- WebSite Schema
- BreadcrumbList Schema

### 2. SEOHead компонент

Компонент для динамического изменения мета-тегов на разных страницах.

**Расположение:** `src/components/SEOHead.tsx`

**Использование:**
```tsx
import SEOHead from "@/components/SEOHead";

function AboutPage() {
  return (
    <>
      <SEOHead
        title="О нас | Подготовка к экзамену в Минюсте"
        description="Информация об авторе курса и методике подготовки"
        url="https://exam.ilat.info/about"
        image="https://exam.ilat.info/author.jpg"
      />
      {/* контент страницы */}
    </>
  );
}
```

**Параметры:**
- `title` - заголовок страницы (по умолчанию: главная)
- `description` - описание страницы
- `image` - изображение для социальных сетей
- `url` - URL страницы
- `type` - тип контента (по умолчанию: "website")

---

## 🔍 Проверка внедрения

### После деплоя проверьте:

#### 1. Sitemap доступен
```
https://exam.ilat.info/sitemap.xml
```

#### 2. Robots.txt доступен
```
https://exam.ilat.info/robots.txt
```

#### 3. Manifest доступен
```
https://exam.ilat.info/manifest.json
```

#### 4. Структурированные данные
Откройте страницу и проверьте в исходном коде наличие `<script type="application/ld+json">` тегов.

Или используйте инструменты:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

#### 5. Open Graph теги
Проверьте в исходном коде наличие мета-тегов:
- `og:title`
- `og:description`
- `og:image`
- `og:url`
- `og:locale`
- `og:site_name`

Или используйте:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## 📤 Отправка в поисковые системы

### Google Search Console

1. Зайдите в [Google Search Console](https://search.google.com/search-console)
2. Добавьте сайт (если еще не добавлен)
3. Перейдите в раздел "Файлы Sitemap"
4. Добавьте URL: `https://exam.ilat.info/sitemap.xml`
5. Нажмите "Отправить"

### Яндекс.Вебмастер

1. Зайдите в [Яндекс.Вебмастер](https://webmaster.yandex.ru/)
2. Добавьте сайт (если еще не добавлен)
3. Перейдите в раздел "Индексирование" → "Файлы Sitemap"
4. Добавьте URL: `https://exam.ilat.info/sitemap.xml`
5. Нажмите "Добавить"

---

## 🛠️ Обновление контента

### Обновление Sitemap

Если добавляете новые страницы, обновите `public/sitemap.xml`:

```xml
<url>
  <loc>https://exam.ilat.info/new-page</loc>
  <lastmod>2026-03-02</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### Обновление Structured Data

Если меняется контент (цены, FAQ, отзывы), обновите `src/components/StructuredData.tsx`:

**Пример: обновление цены**
```tsx
offers: {
  "@type": "Offer",
  price: "1000", // новая цена
  priceCurrency: "BYN",
  // ...
}
```

**Пример: обновление рейтинга**
```tsx
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: "4.9", // новый рейтинг
  reviewCount: "120", // новое количество отзывов
  bestRating: "5",
}
```

### Обновление FAQ

FAQ автоматически берется из `src/content/landing.ts`. При изменении FAQ там, структурированные данные обновятся автоматически.

---

## 🎨 Добавление изображений

При добавлении новых изображений **обязательно** указывайте описательные alt-теги:

❌ **Плохо:**
```tsx
<img src="/image.jpg" alt="" />
<img src="/image.jpg" alt="image" />
```

✅ **Хорошо:**
```tsx
<img src="/author.jpg" alt="Илья Латышев - автор курса подготовки" />
<img src="/testimonial.jpg" alt="Отзыв участника группы подготовки" />
```

---

## 📊 Мониторинг результатов

### Что отслеживать:

1. **Индексация**
   - Количество проиндексированных страниц в Google Search Console
   - Ошибки индексации

2. **Позиции**
   - Отслеживайте позиции по ключевым запросам:
     - "подготовка к экзамену минюст"
     - "аттестационный экзамен минюст"
     - "группа подготовки юристов"

3. **Трафик**
   - Органический трафик из поиска
   - CTR из поисковой выдачи
   - Показы и клики в Search Console

4. **Rich Snippets**
   - Появление расширенных сниппетов (FAQ, рейтинг)
   - Проверяйте в Google Search Console → "Улучшения"

---

## 🐛 Устранение проблем

### Sitemap не индексируется

**Проблема:** Google/Яндекс не видит sitemap

**Решение:**
1. Проверьте доступность: `https://exam.ilat.info/sitemap.xml`
2. Проверьте robots.txt: должна быть строка `Sitemap: https://exam.ilat.info/sitemap.xml`
3. Отправьте sitemap вручную через Search Console/Вебмастер

### Structured Data не отображается

**Проблема:** Структурированные данные не появляются в результатах поиска

**Решение:**
1. Проверьте наличие в исходном коде страницы
2. Проверьте валидность через [Schema.org Validator](https://validator.schema.org/)
3. Подождите 2-4 недели - Google индексирует не сразу

### Open Graph не работает

**Проблема:** При публикации в соцсетях не появляется превью

**Решение:**
1. Проверьте мета-теги в исходном коде
2. Используйте [Facebook Debugger](https://developers.facebook.com/tools/debug/) для обновления кэша
3. Проверьте доступность изображения: `https://exam.ilat.info/sections/details.png`

---

## 📝 Чеклист после деплоя

- [ ] Проверить доступность sitemap.xml
- [ ] Проверить доступность robots.txt
- [ ] Проверить доступность manifest.json
- [ ] Проверить структурированные данные через Google Rich Results Test
- [ ] Проверить Open Graph через Facebook Debugger
- [ ] Отправить sitemap в Google Search Console
- [ ] Отправить sitemap в Яндекс.Вебмастер
- [ ] Проверить мобильную версию через Google Mobile-Friendly Test
- [ ] Проверить производительность через PageSpeed Insights
- [ ] Настроить мониторинг позиций

---

## 🎯 Ожидаемые сроки

- **Индексация изменений:** 3-7 дней
- **Появление rich snippets:** 2-4 недели
- **Улучшение позиций:** 4-8 недель
- **Рост трафика:** 2-3 месяца

---

## 💡 Дополнительные ресурсы

### Документация
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)

### Инструменты
- [Google Search Console](https://search.google.com/search-console)
- [Яндекс.Вебмастер](https://webmaster.yandex.ru/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### Проверка SEO
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) - анализ сайта
- [Ahrefs](https://ahrefs.com/) - анализ конкурентов
- [SEMrush](https://www.semrush.com/) - комплексный SEO анализ

---

Если возникнут вопросы или нужна помощь - обращайтесь!
