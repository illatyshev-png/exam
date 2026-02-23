import Header from "../components/landing/layout/Header";
import Footer from "../components/landing/layout/Footer";
import Hero from "../components/landing/sections/Hero";
import Pain from "../components/landing/sections/Pain";
import Solution from "../components/landing/sections/Solution";
import Authority from "../components/landing/sections/Authority";
import ProductDetails from "../components/landing/sections/ProductDetails";
import SocialProof from "../components/landing/sections/SocialProof";
import Pricing from "../components/landing/sections/Pricing";
import FAQ from "../components/landing/sections/FAQ";

import {
  siteConfig,
  navLinks,
  heroContent,
  painContent,
  solutionContent,
  authorityContent,
  detailsContent,
  testimonialsContent,
  pricingContent,
  faqContent,
  footerContent,
} from "../content/landing";

{/* 
  ============================================
  ANALYTICS PLACEHOLDERS
  ============================================
  
  Yandex Metrika — uncomment and add your counter ID:
  useEffect(() => {
    (function(m,e,t,r,i,k,a){...})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(XXXXXXXX, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });
  }, []);

  Meta Pixel — uncomment and add your pixel ID:
  useEffect(() => {
    !function(f,b,e,v,n,t,s){...}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'XXXXXXXXXXXXXXX');
    fbq('track', 'PageView');
  }, []);
*/}

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        siteName={siteConfig.name}
        logo={siteConfig.logo}
        navLinks={navLinks}
      />

      <main className="flex-1">
        <Hero {...heroContent} />
        <Pain {...painContent} />
        <Solution {...solutionContent} />
        <Authority {...authorityContent} />
        <ProductDetails {...detailsContent} />
        <SocialProof {...testimonialsContent} />
        <Pricing {...pricingContent} />
        <FAQ {...faqContent} />
      </main>

      <Footer {...footerContent} />
    </div>
  );
};

export default Index;
