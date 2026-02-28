import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const METRIKA_ID = 107047350;
const SCRIPT_SRC = `https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}`;

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

function loadMetrikaScript() {
  if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;

  window.ym =
    window.ym ||
    function (...args: unknown[]) {
      (window.ym!.a = window.ym!.a || []).push(args);
    };
  (window.ym as any).l = Number(new Date());

  const script = document.createElement("script");
  script.async = true;
  script.src = SCRIPT_SRC;
  document.head.appendChild(script);
}

const YandexMetrika = () => {
  const location = useLocation();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    loadMetrikaScript();

    window.ym?.(METRIKA_ID, "init", {
      defer: true,
      webvisor: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      ecommerce: "dataLayer",
    });
  }, []);

  useEffect(() => {
    const url = location.pathname + location.search;

    if (prevPath.current === null) {
      prevPath.current = url;
      window.ym?.(METRIKA_ID, "hit", url, { title: document.title });
      return;
    }

    if (prevPath.current !== url) {
      const referer = window.location.origin + prevPath.current;
      prevPath.current = url;
      window.ym?.(METRIKA_ID, "hit", url, {
        title: document.title,
        referer,
      });
    }
  }, [location]);

  return null;
};

export default YandexMetrika;
