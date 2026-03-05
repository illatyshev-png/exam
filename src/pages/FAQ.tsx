import { useEffect } from "react";
import Header from "../components/landing/layout/Header";
import Footer from "../components/landing/layout/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import SEOHead from "../components/SEOHead";
import Container from "../components/landing/ui/Container";
import Section from "../components/landing/ui/Section";
import Heading from "../components/landing/ui/Heading";
import Text from "../components/landing/ui/Text";
import LandingAccordion from "../components/landing/ui/LandingAccordion";
import LandingButton from "../components/landing/ui/LandingButton";
import StructuredData from "../components/StructuredData";

import {
  siteConfig,
  navLinks,
  faqContent,
  footerContent,
  SITE_URL,
} from "../content/landing";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Часто задаваемые вопросы о подготовке к экзамену в Минюсте | FAQ"
        description="Ответы на часто задаваемые вопросы о группе подготовки к аттестационному экзамену в Минюсте. Как проходят встречи, сколько времени нужно, как присоединиться к группе."
        url={`${SITE_URL}/faq`}
        image={`${SITE_URL}/sections/faq.jpeg`}
      />
      <StructuredData />
      <Header
        siteName={siteConfig.name}
        logo={siteConfig.logo}
        navLinks={navLinks}
      />

      <main className="flex-1">
        <Section>
          <Container className="max-w-3xl mx-auto">
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Часто задаваемые вопросы" },
              ]}
            />

            <Heading as="h1" className="mb-6 text-center">
              Часто задаваемые вопросы о подготовке к экзамену в Минюсте
            </Heading>

            <Text variant="lead" className="mb-12 text-center">
              Собрали ответы на самые частые вопросы участников групп подготовки
              к аттестационному экзамену в Министерстве юстиции.
            </Text>

            <LandingAccordion items={faqContent.items} />
          </Container>
        </Section>

        <Section variant="muted">
          <Container className="max-w-3xl mx-auto text-center">
            <Heading as="h2" className="mb-4">
              {faqContent.finalCta.headline}
            </Heading>
            <Text variant="lead" className="mb-8">
              {faqContent.finalCta.description}
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LandingButton variant="accent" size="lg" href="/pricing">
                Узнать стоимость
              </LandingButton>
              <LandingButton variant="outline" size="lg" href="/about">
                О программе подготовки
              </LandingButton>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="max-w-3xl mx-auto">
            <Heading as="h2" className="mb-6 text-center">
              Не нашли ответ на свой вопрос?
            </Heading>
            <Text className="mb-8 text-center">
              Свяжитесь со мной любым удобным способом, и я отвечу на все ваши
              вопросы о программе подготовки к экзамену в Минюсте.
            </Text>

            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="https://t.me/IlyaLatyshev"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Telegram</p>
                    <p className="text-sm text-muted-foreground">@IlyaLatyshev</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Быстрый ответ в течение нескольких часов
                </p>
              </a>

              <a
                href="mailto:il.latyshev@gmail.com"
                rel="nofollow"
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">
                      il.latyshev@gmail.com
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Подробный ответ в течение 24 часов
                </p>
              </a>
            </div>
          </Container>
        </Section>
      </main>

      <Footer {...footerContent} />
    </div>
  );
};

export default FAQPage;
