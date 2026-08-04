import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/"] }, sitemap: ["https://www.colotutu.com/sitemap.xml","https://www.colotutu.com/sitemap-en.xml","https://www.colotutu.com/sitemap-fr.xml","https://www.colotutu.com/sitemap-de.xml","https://www.colotutu.com/sitemap-it.xml","https://www.colotutu.com/sitemap-es.xml"], host:"https://www.colotutu.com" };
}
