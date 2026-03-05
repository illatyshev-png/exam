/**
 * Проверяет, ведёт ли ссылка на домен ilat.info (включая поддомены)
 */
export const isIlatInfoUrl = (href: string): boolean => {
  if (!href.startsWith("http")) return false;
  try {
    const url = new URL(href);
    return url.hostname.endsWith(".ilat.info") || url.hostname === "ilat.info";
  } catch {
    return false;
  }
};

/**
 * Возвращает rel для внешней ссылки: nofollow для всех, кроме ilat.info
 */
export const getExternalLinkRel = (href: string): string => {
  const base = "noopener noreferrer";
  return isIlatInfoUrl(href) ? base : `${base} nofollow`;
};
