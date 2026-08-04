import Image from "next/image";
import {Link} from "@/i18n/navigation";
import {ProductGallery} from "./ProductGallery";
import {SiteHeader} from "./SiteHeader";
import {productPaths} from "@/lib/seo";
import {ui,type products} from "@/data/localized";
import type {Locale} from "@/i18n/routing";
import styles from "./ProductPage.module.css";

type Product=(typeof products)[number];
export function LocalizedProductPage({product,locale}:{product:Product;locale:Locale}){const p=product.translations[locale],t=ui[locale],paths=productPaths(product.id);return <main className={styles.page}><SiteHeader locale={locale} paths={paths}/><div className={styles.breadcrumb}><Link href="/" locale={locale}>{t.home}</Link><span>/</span><Link href="/products" locale={locale}>{t.products}</Link><span>/</span><b>{p.name}</b></div><section className={styles.hero}><ProductGallery images={product.images} alts={p.imageAlts}/><div className={styles.productInfo}><p className={styles.eyebrow}>{p.kicker}</p><h1>{p.name}</h1><p className={styles.intro}>{p.intro}</p><dl className={styles.infoRows}><div><dt>{t.productType}</dt><dd>{p.productType}</dd></div><div><dt>MOQ</dt><dd>{t.moq}</dd></div></dl><div className={styles.buttonRow}><Link className={styles.primaryButton} href="/inquiry" locale={locale}>{t.quote}</Link><Link className={styles.lightButton} href="/inquiry" locale={locale}>{t.sample}</Link></div></div></section><section className={styles.story} id="story"><div className={styles.storyImage}><Image src={product.images[1]??product.images[0]} alt={p.imageAlts[1]??p.imageAlts[0]} fill sizes="47vw"/></div><div className={styles.storyCopy}><p className={styles.eyebrow}>{t.story.toUpperCase()}</p><h2>{p.storyTitle}</h2><p>{p.story}</p></div></section><section className={styles.details} id="details"><div><p className={styles.eyebrow}>{t.details.toUpperCase()}</p><h2>{p.name}</h2></div><div className={styles.specs}><dl><div><dt>{t.productType}</dt><dd>{p.productType}</dd></div><div><dt>{t.customization}</dt><dd>{p.customization}</dd></div><div><dt>{t.packaging}</dt><dd>{t.available}</dd></div><div><dt>MOQ</dt><dd>{t.moq}</dd></div></dl></div></section></main>}
