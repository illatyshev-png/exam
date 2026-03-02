import { useEffect } from "react";
import { SITE_URL, faqContent } from "@/content/landing";

/**
 * Компонент для добавления структурированных данных (Schema.org) на страницу
 * Улучшает SEO и позволяет получить богатые сниппеты в поисковой выдаче
 */
const StructuredData = () => {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Группа подготовки к экзамену в Минюсте",
      url: SITE_URL,
      logo: `${SITE_URL}/apple-touch-icon.png`,
      description:
        "Группа подготовки к аттестационному экзамену в Минюсте. 60% участников сдают с первого раза.",
      founder: {
        "@type": "Person",
        name: "Илья Латышев",
        jobTitle: "Бизнес-коуч, юрист",
        image: `${SITE_URL}/author.jpg`,
        url: "https://www.ilat.info",
        sameAs: ["https://t.me/IlyaLatyshev"],
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "BY",
        addressLocality: "Минск",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        url: "https://t.me/IlyaLatyshev",
        availableLanguage: ["Russian"],
      },
    };

    // Course Schema
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Группа подготовки к экзамену в Министерстве юстиции",
      description:
        "8-недельная программа подготовки к аттестационному экзамену в Минюсте. Включает полный конспект, 350+ тестовых вопросов, коучинговые техники.",
      provider: {
        "@type": "Person",
        name: "Илья Латышев",
      },
      educationalLevel: "Professional",
      courseMode: "Online",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        duration: "P8W",
        instructor: {
          "@type": "Person",
          name: "Илья Латышев",
          description:
            "Юрист с 2001 года, бизнес-коуч ICU, автор 270+ статей и курсов",
        },
      },
      offers: {
        "@type": "Offer",
        price: "900",
        priceCurrency: "BYN",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#pricing`,
        validFrom: "2026-03-01",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "103",
        bestRating: "5",
      },
    };

    // FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqContent.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Подготовка к экзамену в Минюсте",
      url: SITE_URL,
      description:
        "Группа подготовки к аттестационному экзамену в Минюсте. 60% участников сдают с первого раза.",
      inLanguage: "ru-BY",
      publisher: {
        "@type": "Person",
        name: "Илья Латышев",
      },
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Что входит",
          item: `${SITE_URL}/#solution`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Как работает",
          item: `${SITE_URL}/#details`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Стоимость",
          item: `${SITE_URL}/#pricing`,
        },
      ],
    };

    // Добавляем все схемы в head
    const schemas = [
      organizationSchema,
      courseSchema,
      faqSchema,
      websiteSchema,
      breadcrumbSchema,
    ];

    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `structured-data-${index}`;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Cleanup при размонтировании
    return () => {
      scriptElements.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default StructuredData;
