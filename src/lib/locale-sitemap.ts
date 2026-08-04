import {blogPosts,localeInfo,products} from "@/data/localized";
import {locales,type Locale} from "@/i18n/routing";
import {articlePaths,localizedPath,productPaths,SITE_URL} from "@/lib/seo";

type SitemapEntry={path:string;alternates:Record<Locale,string>;lastModified:string};
const lastModified="2026-08-04";
const escapeXml=(value:string)=>value.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");

function entriesFor(locale:Locale):SitemapEntry[]{
 const staticPages=["home","products","blog","contact","inquiry"] as const;
 const staticEntries=staticPages.map(page=>{const alternates=Object.fromEntries(locales.map(l=>[l,localizedPath(l,page)])) as Record<Locale,string>;return{path:alternates[locale],alternates,lastModified}});
 const productEntries=products.map(product=>{const alternates=productPaths(product.id);return{path:alternates[locale],alternates,lastModified}});
 const articleEntries=blogPosts.map(article=>{const alternates=articlePaths(article.id);return{path:alternates[locale],alternates,lastModified}});
 return [...staticEntries,...productEntries,...articleEntries];
}

export function createLocaleSitemap(locale:Locale){
 const urls=entriesFor(locale).map(entry=>{const links=[...locales.map(target=>`<xhtml:link rel="alternate" hreflang="${localeInfo[target].hreflang}" href="${escapeXml(`${SITE_URL}${entry.alternates[target]}`)}"/>`),`<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${SITE_URL}${entry.alternates.en}`)}"/>`].join("");return `<url><loc>${escapeXml(`${SITE_URL}${entry.path}`)}</loc><lastmod>${entry.lastModified}</lastmod>${links}</url>`}).join("");
 return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
}

export function sitemapResponse(locale:Locale){return new Response(createLocaleSitemap(locale),{headers:{"Content-Type":"application/xml; charset=utf-8","Cache-Control":"public, max-age=0, s-maxage=86400"}})}
