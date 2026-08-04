"use client";

import { FormEvent, useState } from "react";
import styles from "./B2BInquiryForm.module.css";
import type { Locale } from "@/i18n/routing";

type FieldName = "name" | "email" | "phone" | "company" | "country" | "requirement" | "message";
type FormValues = Record<FieldName, string> & { website: string; startedAt: string };
type FormErrors = Partial<Record<FieldName | "form", string>>;

const createInitial = (): FormValues => ({ name: "", email: "", phone: "", company: "", country: "", requirement: "", message: "", website: "", startedAt: String(Date.now()) });
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9()\-\s.]{7,25}$/;

const copy = {
  en:{required:"Required fields",reply:"We usually reply within 1–2 business days.",name:"Name",namePh:"Your full name",email:"Business email",phone:"Phone / WhatsApp",company:"Company name",companyPh:"Your company or brand",country:"Country / Region",countryPh:"France, Germany, Spain…",requirement:"Product requirement",requirementPh:"Product type, quantity or target market",message:"Message",messagePh:"Tell us about your project, customization needs, target price or launch schedule.",send:"SEND INQUIRY",sending:"SENDING INQUIRY…",consent:"By submitting, you agree that Colotutu may contact you about this project.",received:"INQUIRY RECEIVED",thanks:"Thank you",receivedText:"We’ve received your project brief and will reply as soon as possible.",again:"Send another inquiry",invalid:"Please complete all required fields correctly."},
  fr:{required:"Champs obligatoires",reply:"Réponse habituelle sous 1 à 2 jours ouvrés.",name:"Nom",namePh:"Votre nom complet",email:"E-mail professionnel",phone:"Téléphone / WhatsApp",company:"Entreprise",companyPh:"Votre entreprise ou marque",country:"Pays / Région",countryPh:"France, Allemagne, Espagne…",requirement:"Besoin produit",requirementPh:"Type de produit, quantité ou marché cible",message:"Message",messagePh:"Présentez votre projet, la personnalisation, le prix cible ou le calendrier.",send:"ENVOYER LA DEMANDE",sending:"ENVOI EN COURS…",consent:"En envoyant ce formulaire, vous acceptez que Colotutu vous contacte au sujet du projet.",received:"DEMANDE REÇUE",thanks:"Merci",receivedText:"Nous avons reçu votre brief et vous répondrons rapidement.",again:"Envoyer une autre demande",invalid:"Veuillez remplir correctement les champs obligatoires."},
  de:{required:"Pflichtfelder",reply:"Wir antworten gewöhnlich innerhalb von 1–2 Werktagen.",name:"Name",namePh:"Ihr vollständiger Name",email:"Geschäftliche E-Mail",phone:"Telefon / WhatsApp",company:"Unternehmen",companyPh:"Unternehmen oder Marke",country:"Land / Region",countryPh:"Deutschland, Frankreich, Spanien…",requirement:"Produktanforderung",requirementPh:"Produkttyp, Menge oder Zielmarkt",message:"Nachricht",messagePh:"Beschreiben Sie Projekt, Anpassungen, Zielpreis oder Zeitplan.",send:"ANFRAGE SENDEN",sending:"ANFRAGE WIRD GESENDET…",consent:"Mit dem Absenden stimmen Sie einer Kontaktaufnahme durch Colotutu zu.",received:"ANFRAGE EINGEGANGEN",thanks:"Vielen Dank",receivedText:"Wir haben Ihr Briefing erhalten und antworten so bald wie möglich.",again:"Weitere Anfrage senden",invalid:"Bitte füllen Sie alle Pflichtfelder korrekt aus."},
  it:{required:"Campi obbligatori",reply:"Di solito rispondiamo entro 1–2 giorni lavorativi.",name:"Nome",namePh:"Nome e cognome",email:"E-mail aziendale",phone:"Telefono / WhatsApp",company:"Azienda",companyPh:"Azienda o brand",country:"Paese / Regione",countryPh:"Italia, Francia, Germania…",requirement:"Esigenza di prodotto",requirementPh:"Tipo, quantità o mercato target",message:"Messaggio",messagePh:"Descrivi progetto, personalizzazioni, prezzo target o tempistiche.",send:"INVIA RICHIESTA",sending:"INVIO IN CORSO…",consent:"Inviando il modulo accetti di essere contattato da Colotutu per il progetto.",received:"RICHIESTA RICEVUTA",thanks:"Grazie",receivedText:"Abbiamo ricevuto il brief e risponderemo al più presto.",again:"Invia un’altra richiesta",invalid:"Compila correttamente tutti i campi obbligatori."},
  es:{required:"Campos obligatorios",reply:"Solemos responder en 1–2 días laborables.",name:"Nombre",namePh:"Nombre completo",email:"Correo profesional",phone:"Teléfono / WhatsApp",company:"Empresa",companyPh:"Empresa o marca",country:"País / Región",countryPh:"España, Francia, Alemania…",requirement:"Necesidad de producto",requirementPh:"Tipo de producto, cantidad o mercado",message:"Mensaje",messagePh:"Describe el proyecto, personalización, precio objetivo o calendario.",send:"ENVIAR CONSULTA",sending:"ENVIANDO CONSULTA…",consent:"Al enviar, aceptas que Colotutu te contacte sobre este proyecto.",received:"CONSULTA RECIBIDA",thanks:"Gracias",receivedText:"Hemos recibido tu briefing y responderemos lo antes posible.",again:"Enviar otra consulta",invalid:"Completa correctamente todos los campos obligatorios."}
} as const;

export function B2BInquiryForm({locale="en"}:{locale?:Locale}) {
  const t=copy[locale];
  const [values, setValues] = useState<FormValues>(createInitial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update(name: FieldName, value: string) {
    setValues(current => ({ ...current, [name]: value }));
    if (errors[name]) setErrors(current => ({ ...current, [name]: undefined, form: undefined }));
  }

  function validate() {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!emailPattern.test(values.email)) next.email = "Please enter a valid email address.";
    if (!values.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!phonePattern.test(values.phone) || values.phone.replace(/\D/g, "").length < 7) next.phone = "Use an international format, for example +33 1 23 45 67 89.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) { setStatus("error"); return; }
    setStatus("submitting");
    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "We could not send your inquiry.");
      setStatus("success");
      setErrors({});
    } catch (error) {
      setStatus("error");
      setErrors(current => ({ ...current, form: error instanceof Error ? error.message : "We could not send your inquiry. Please try again." }));
    }
  }

  if (status === "success") return <div className={styles.success} role="status"><span>✓</span><p>{t.received}</p><h2>{t.thanks}, {values.name}.</h2><p>{t.receivedText} <b>{values.email}</b></p><button type="button" onClick={() => { setValues(createInitial()); setStatus("idle"); }}>{t.again}</button></div>;

  const field = (name: FieldName, label: string, placeholder: string, required = false, type = "text") => <label className={styles.field}><span>{label}{required && <b aria-label="required"> *</b>}</span><input name={name} type={type} required={required} value={values[name]} onChange={event => update(name, event.target.value)} placeholder={placeholder} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} autoComplete={name === "company" ? "organization" : name === "phone" ? "tel" : name} />{errors[name] && <small id={`${name}-error`} role="alert">{errors[name]}</small>}</label>;

  return <form className={styles.form} onSubmit={submit} noValidate>
    <div className={styles.requiredNote}><span><b>*</b> {t.required}</span><span>{t.reply}</span></div>
    <div className={styles.grid}>{field("name", t.name, t.namePh, true)}{field("email", t.email, "name@company.com", true, "email")}{field("phone", t.phone, "+33 1 23 45 67 89", true, "tel")}{field("company", t.company, t.companyPh)}{field("country", t.country, t.countryPh)}{field("requirement", t.requirement, t.requirementPh)}</div>
    <label className={`${styles.field} ${styles.message}`}><span>{t.message}</span><textarea name="message" value={values.message} onChange={event => update("message", event.target.value)} placeholder={t.messagePh} rows={5} /></label>
    <label className={styles.honeypot} aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={event => setValues(current => ({ ...current, website: event.target.value }))} /></label>
    {errors.form && <div className={styles.formError} role="alert">{errors.form}</div>}
    {status === "error" && !errors.form && <div className={styles.formError} role="alert">{t.invalid}</div>}
    <div className={styles.actions}><button type="submit" disabled={status === "submitting"}>{status === "submitting" ? t.sending : t.send}</button><p>{t.consent}</p></div>
  </form>;
}
