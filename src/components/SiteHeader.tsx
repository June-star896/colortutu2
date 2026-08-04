import Image from "next/image";
import {Link} from "@/i18n/navigation";
import {LanguageSwitcher} from "./LanguageSwitcher";
import {ui} from "@/data/localized";
import type {Locale} from "@/i18n/routing";
import styles from "./SiteHeader.module.css";

export function SiteHeader({locale,paths}:{locale:Locale;paths:Record<Locale,string>}){const t=ui[locale];return <><div className={styles.announcement}>{t.announcement}</div><header className={styles.header}><Link href="/" locale={locale} aria-label="Colotutu"><Image src="/images/colotutu-logo.png" alt="Colotutu" width={82} height={68} priority/></Link><nav aria-label="Main navigation"><Link href="/products" locale={locale}>{t.products}</Link><Link href={{pathname:"/",hash:"oem"}} locale={locale}>{t.process}</Link><Link href="/blog" locale={locale}>{t.blog}</Link><Link href="/contact" locale={locale}>{t.contact}</Link></nav><div className={styles.actions}><LanguageSwitcher paths={paths} label={t.language}/><Link className={styles.cta} href="/inquiry" locale={locale}>{t.quote}</Link></div></header></>}
