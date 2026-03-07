import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/landing/layout/Header";
import Footer from "../components/landing/layout/Footer";
import Hero from "../components/landing/sections/Hero";
import StatsBar from "../components/landing/sections/StatsBar";
import Comparison from "../components/landing/sections/Comparison";
import Solution from "../components/landing/sections/Solution";
import Authority from "../components/landing/sections/Authority";
import ProductDetails from "../components/landing/sections/ProductDetails";
import SocialProof from "../components/landing/sections/SocialProof";
import Pricing from "../components/landing/sections/Pricing";
import FAQ from "../components/landing/sections/FAQ";
import RevealOnScroll from "../components/landing/ui/RevealOnScroll";
import ScrollToTop from "../components/landing/ui/ScrollToTop";
import StructuredData from "../components/StructuredData";
import WelcomePopup from "../components/WelcomePopup";

import {
  siteConfig,
  navLinks,
  heroContent,
  statsContent,
  comparisonContent,
  solutionContent,
  authorityContent,
  detailsContent,
  testimonialsContent,
  pricingContent,
  faqContent,
  footerContent,
} from "../content/landing";


const Index = () => {
  const { hash } = useLocation();

  // Прокрутка к якорю при переходе с другой страницы (например /about → /#pricing)
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header
        siteName={siteConfig.name}
        logo={siteConfig.logo}
        navLinks={navLinks}
      />

      <main className="flex-1">
        <Hero {...heroContent} />
        <RevealOnScroll>
          <StatsBar {...statsContent} />
        </RevealOnScroll>
        <RevealOnScroll>
          <Comparison {...comparisonContent} />
        </RevealOnScroll>
        <RevealOnScroll>
          <Solution {...solutionContent} />
        </RevealOnScroll>
        <RevealOnScroll>
          <Authority {...authorityContent} />
        </RevealOnScroll>
        <RevealOnScroll>
          <ProductDetails {...detailsContent} />
        </RevealOnScroll>
        <RevealOnScroll>
          <SocialProof
            {...testimonialsContent}
            headline={
              <>
                Отзывы участников <del className="line-through">курса</del>{" "}
                групп подготовки к экзамену в Минюсте
              </>
            }
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <Pricing {...pricingContent} />
        </RevealOnScroll>
        <RevealOnScroll>
          <FAQ {...faqContent} />
        </RevealOnScroll>
      </main>

      <Footer {...footerContent} />
      <ScrollToTop />
      <WelcomePopup />
    </div>
  );
};

export default Index;
