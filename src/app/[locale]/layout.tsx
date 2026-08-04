import type {Metadata} from "next";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import {WhatsAppButton} from "@/components/WhatsAppButton";
import "../globals.css";

export const metadata:Metadata={metadataBase:new URL("https://www.colotutu.com"),title:{default:"Colotutu",template:"%s | Colotutu"}};
export function generateStaticParams(){return routing.locales.map(locale=>({locale}))}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(!hasLocale(routing.locales,locale))notFound();setRequestLocale(locale);const messages=await getMessages();return <html lang={locale}><body><NextIntlClientProvider messages={messages}>{children}<WhatsAppButton/></NextIntlClientProvider></body></html>}
