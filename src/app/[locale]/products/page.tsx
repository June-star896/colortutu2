import type {Metadata} from "next";
import Image from "next/image";
import {hasLocale} from "next-intl";
import {notFound} from "next/navigation";
import {SiteHeader} from "@/components/SiteHeader";
import {Link} from "@/i18n/navigation";
import {products,ui} from "@/data/localized";
import {routing,type Locale} from "@/i18n/routing";
import {localizedPath,metadataFor} from "@/lib/seo";
import styles from "./products.module.css";
const paths=Object.fromEntries(routing.locales.map(l=>[l,localizedPath(l,"products")])) as Record<Locale,string>;
const seo={en:["Custom Beauty Tools & Gift Sets","Explore custom mirrors, combs, makeup puffs and applicator gift sets for OEM/ODM beauty brands."],fr:["Accessoires beauté et coffrets sur mesure","Découvrez miroirs, peignes, houppettes et coffrets personnalisés pour les marques beauté."],de:["Individuelle Beauty-Tools & Geschenksets","Entdecken Sie individuelle Spiegel, Kämme, Make-up-Puffs und OEM-/ODM-Geschenksets."],it:["Accessori beauty e set regalo personalizzati","Scopri specchi, pettini, piumini e set regalo personalizzati per brand beauty."],es:["Accesorios de belleza y sets personalizados","Descubre espejos, peines, borlas y sets de regalo personalizados para marcas de belleza."]} as const;
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale:l}=await params;if(!hasLocale(routing.locales,l))return{};const locale=l as Locale;return metadataFor(locale,{title:seo[locale][0],description:seo[locale][1],image:"/images/zodiac-collection-four-colors.png",paths})}
export default async function Products({params}:{params:Promise<{locale:string}>}){const {locale:l}=await params;if(!hasLocale(routing.locales,l))notFound();const locale=l as Locale,t=ui[locale];return <main className={styles.page}><SiteHeader locale={locale} paths={paths}/><section className={styles.hero}><p>{t.categories.toUpperCase()}</p><h1>{seo[locale][0]}</h1><span>{seo[locale][1]}</span></section><section className={styles.grid}>{products.map(p=>{const x=p.translations[locale];return <Link href={{pathname:"/products/[slug]",params:{slug:x.slug}}} locale={locale} className={styles.card} key={p.id}><div><Image src={p.images[0]} alt={x.imageAlts[0]} fill sizes="(max-width:700px) 100vw,50vw"/></div><p>{x.kicker}</p><h2>{x.name}</h2><span>{x.intro}</span></Link>})}</section></main>}
