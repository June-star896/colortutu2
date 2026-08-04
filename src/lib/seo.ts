import type {Metadata} from "next";
import {localeInfo, products, blogPosts} from "@/data/localized";
import {locales, type Locale} from "@/i18n/routing";

export const SITE_URL = "https://www.colotutu.com";
const segments={products:{en:"products",fr:"produits",de:"produkte",it:"prodotti",es:"productos"},contact:{en:"contact",fr:"contact",de:"kontakt",it:"contatti",es:"contacto"},inquiry:{en:"inquiry",fr:"demande",de:"anfrage",it:"richiesta",es:"consulta"}} as const;
export function localizedPath(locale:Locale,page:"home"|"products"|"blog"|"contact"|"inquiry",slug?:string){
  if(page==="home")return `/${locale}`;
  const segment=page==="blog"?"blog":segments[page][locale];
  return `/${locale}/${segment}${slug?`/${slug}`:""}`;
}
export function alternates(paths:Record<Locale,string>){
  return Object.fromEntries([...locales.map(locale=>[localeInfo[locale].hreflang,paths[locale]]),["x-default",paths.en]]);
}
export function metadataFor(locale:Locale,values:{title:string;description:string;keywords?:string[];image:string;paths:Record<Locale,string>}):Metadata{
 return {title:values.title,description:values.description,keywords:values.keywords,alternates:{canonical:values.paths[locale],languages:alternates(values.paths)},openGraph:{title:values.title,description:values.description,type:"website",locale:localeInfo[locale].ogLocale,alternateLocale:locales.filter(l=>l!==locale).map(l=>localeInfo[l].ogLocale),url:values.paths[locale],images:[{url:values.image,alt:values.title}]},twitter:{card:"summary_large_image",title:values.title,description:values.description,images:[values.image]}};
}
export function productPaths(id:string){const p=products.find(x=>x.id===id)!;return Object.fromEntries(locales.map(l=>[l,localizedPath(l,"products",p.translations[l].slug)])) as Record<Locale,string>}
export function articlePaths(id:string){const p=blogPosts.find(x=>x.id===id)!;return Object.fromEntries(locales.map(l=>[l,localizedPath(l,"blog",p.translations[l].slug)])) as Record<Locale,string>}
