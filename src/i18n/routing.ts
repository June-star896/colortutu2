import {defineRouting} from "next-intl/routing";

export const locales = ["en", "fr", "de", "it", "es"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
  alternateLinks: false,
  pathnames: {
    "/": "/",
    "/products": {en: "/products", fr: "/produits", de: "/produkte", it: "/prodotti", es: "/productos"},
    "/products/[slug]": {en: "/products/[slug]", fr: "/produits/[slug]", de: "/produkte/[slug]", it: "/prodotti/[slug]", es: "/productos/[slug]"},
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/contact": {en: "/contact", fr: "/contact", de: "/kontakt", it: "/contatti", es: "/contacto"},
    "/inquiry": {en: "/inquiry", fr: "/demande", de: "/anfrage", it: "/richiesta", es: "/consulta"}
  }
});
