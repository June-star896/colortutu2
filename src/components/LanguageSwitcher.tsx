"use client";

import {useLocale} from "next-intl";
import {useRouter} from "next/navigation";
import {localeInfo} from "@/data/localized";
import {locales, type Locale} from "@/i18n/routing";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher({paths,label}:{paths:Record<Locale,string>;label:string}){
 const locale=useLocale() as Locale; const router=useRouter();
 return <label className={styles.wrap}><span className={styles.sr}>{label}</span><select aria-label={label} value={locale} onChange={e=>router.push(paths[e.target.value as Locale])}>{locales.map(code=><option value={code} key={code}>{localeInfo[code].name}</option>)}</select></label>;
}
