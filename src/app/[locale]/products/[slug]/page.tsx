import type {Metadata} from "next";
import {hasLocale} from "next-intl";
import {notFound} from "next/navigation";
import {LocalizedProductPage} from "@/components/LocalizedProductPage";
import {getProductBySlug,products} from "@/data/localized";
import {routing,type Locale} from "@/i18n/routing";
import {metadataFor,productPaths} from "@/lib/seo";
export function generateStaticParams(){return routing.locales.flatMap(locale=>products.map(p=>({locale,slug:p.translations[locale].slug})))}
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{const {locale:l,slug}=await params;if(!hasLocale(routing.locales,l))return{};const locale=l as Locale,p=getProductBySlug(locale,slug);if(!p)return{};const x=p.translations[locale];return metadataFor(locale,{title:x.seoTitle,description:x.seoDescription,image:p.images[0],paths:productPaths(p.id)})}
export default async function ProductRoute({params}:{params:Promise<{locale:string;slug:string}>}){const {locale:l,slug}=await params;if(!hasLocale(routing.locales,l))notFound();const locale=l as Locale,p=getProductBySlug(locale,slug);if(!p)notFound();const x=p.translations[locale];const schema={"@context":"https://schema.org","@type":"Product",name:x.name,description:x.intro,image:p.images.map(src=>`https://www.colotutu.com${src}`),brand:{"@type":"Brand",name:"Colotutu"},category:x.productType,url:`https://www.colotutu.com${productPaths(p.id)[locale]}`,inLanguage:locale};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/><LocalizedProductPage product={p} locale={locale}/></>}
