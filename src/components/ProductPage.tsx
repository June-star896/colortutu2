"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ProductPageData } from "@/data/products";
import styles from "./ProductPage.module.css";

const proof = [["20 Years", "Beauty tool manufacturing"], ["OEM / ODM", "Concept to production"], ["Global Export", "International delivery support"], ["Quality Control", "Process-led inspection"]];
const steps = [["01", "Brief", "Share your market, positioning and target requirements."], ["02", "Design", "Align product, color, branding and packaging."], ["03", "Sample", "Review appearance, function and production details."], ["04", "Production", "Move into controlled production and export delivery."]];
const faqs = ["Can the product and packaging be customized?", "Can we request samples?", "What is the minimum order quantity?", "Do you support export delivery?"];

export function ProductPage({ product }: { product: ProductPageData }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const mainImage = product.images[selectedImage];

  return <main className={styles.page}>
    <div className={styles.announcement}>OEM / ODM BEAUTY TOOL DEVELOPMENT · GLOBAL EXPORT SUPPORT <a href="#inquiry">START A PROJECT →</a></div>
    <header className={styles.header}>
      <Link href="/" aria-label="Colotutu home"><Image className={styles.logo} src="/images/colotutu-logo.png" alt="Colotutu" width={82} height={68} priority /></Link>
      <nav aria-label="Main navigation"><a href="#gallery">Products</a><a href="#process">OEM / ODM</a><a href="#story">Our Story</a><a href="#faq">FAQ</a></nav>
      <a className={styles.topCta} href="#inquiry">GET A QUOTE</a>
    </header>
    <div className={styles.breadcrumb}><Link href="/">Home</Link><span>/</span><span>Products</span><span>/</span><b>{product.name}</b></div>

    <section className={styles.hero}>
      <div className={styles.gallery}>
        <div className={styles.thumbs} role="tablist" aria-label="Product images">
          {product.images.map((image, index) => <button key={image.src} type="button" role="tab" className={index === selectedImage ? styles.activeThumb : ""} onClick={() => setSelectedImage(index)} aria-label={`View product image ${index + 1}`} aria-selected={index === selectedImage}><Image src={image.src} alt="" fill sizes="86px" /></button>)}
        </div>
        <div className={styles.mainImage}><Image key={mainImage.src} src={mainImage.src} alt={mainImage.alt} fill priority sizes="(max-width: 800px) 100vw, 52vw" style={{ objectPosition: mainImage.position ?? "center" }} /></div>
      </div>
      <div className={styles.productInfo}>
        <p className={styles.eyebrow}>{product.kicker}</p><h1>{product.name}</h1><p className={styles.intro}>{product.intro}</p>
        <div className={styles.tags}>{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <dl className={styles.infoRows}><div><dt>Business model</dt><dd>OEM / ODM · Wholesale</dd></div><div><dt>MOQ</dt><dd>Available on request</dd></div><div><dt>Sample</dt><dd>Available before production</dd></div></dl>
        <p className={styles.choiceLabel}>CUSTOMIZATION FOCUS</p><div className={styles.choices}><button className={styles.selectedChoice}>Product</button><button>Branding</button><button>Packaging</button></div>
        <div className={styles.buttonRow}><a className={styles.primaryButton} href="#inquiry">GET A QUOTE</a><a className={styles.lightButton} href="#inquiry">REQUEST A SAMPLE</a></div>
        <a className={styles.catalog} href="#details">Download product catalog →</a>
      </div>
    </section>

    <section className={styles.proof} aria-label="Company strengths">{proof.map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}</section>
    <section className={styles.story} id="story"><div className={styles.storyImage}><Image src={product.storyImage} alt={`${product.name} presentation`} fill sizes="47vw" /></div><div className={styles.storyCopy}><p className={styles.eyebrow}>DESIGNED TO BE REMEMBERED</p><h2>{product.storyTitle}</h2><p>{product.story}</p><div className={styles.brandSeal}><Image src="/images/colotutu-logo.png" alt="Colotutu brand mark" width={42} height={48} /><span><b>COLOTUTU ORIGINAL</b>Art-led beauty tools since 2006</span></div></div></section>

    <section className={styles.collection} id="gallery"><div className={styles.sectionHead}><div><p className={styles.eyebrow}>COLLECTION GALLERY</p><h2>Every detail, designed to be discovered.</h2></div><p>Explore coordinated colorways, refined finishes and gift-ready presentation developed for memorable beauty collections.</p></div><div className={styles.collectionGrid}>{product.gallery.map(item => <article key={item.title}><Image src={item.src} alt={item.title} fill sizes="33vw" style={{ objectPosition: item.position ?? "center" }} /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>

    <section className={styles.details} id="details"><div><p className={styles.eyebrow}>PRODUCT HIGHLIGHTS</p><h2>Made for beauty, gifting and retail storytelling.</h2><div className={styles.highlightGrid}>{product.highlights.map(item => <article key={item.title}><b>{item.kicker}</b><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div><div className={styles.specs}><p className={styles.eyebrow}>PRODUCT INFORMATION</p><h2>Details for buyers.</h2><dl><div><dt>Product type</dt><dd>{product.productType}</dd></div><div><dt>Customization</dt><dd>{product.customization}</dd></div><div><dt>Packaging</dt><dd>Custom options available</dd></div><div><dt>Sample</dt><dd>Available before production</dd></div><div><dt>MOQ</dt><dd>Available on request</dd></div></dl></div></section>

    <section className={styles.process} id="process"><div className={styles.sectionHead}><div><p className={styles.eyebrow}>OEM / ODM PROCESS</p><h2>A clear path from idea to production.</h2></div><p>Practical checkpoints for confident product decisions.</p></div><div className={styles.steps}>{steps.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className={styles.closing}><div className={styles.faq} id="faq"><p className={styles.eyebrow}>FREQUENTLY ASKED</p><h2>Before we begin.</h2>{faqs.map((question, index) => <details key={question}><summary>{question}<span>+</span></summary><p>{index === 2 ? "MOQ depends on materials, customization and packaging. Share your brief for an accurate recommendation." : "Yes. Our team will confirm the best options, timeline and requirements during the project brief."}</p></details>)}</div><div className={styles.inquiry} id="inquiry"><p className={styles.eyebrow}>START A PROJECT</p>{submitted ? <div className={styles.success}><h2>Thank you — your brief is ready.</h2><p>Our team will review your requirements and follow up with the most useful next step.</p><button onClick={() => setSubmitted(false)}>Send another inquiry</button></div> : <><h2>Tell us what you want to create.</h2><p>Share your market and requirements. We’ll follow up with the most useful next step.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><input aria-label="Name" required placeholder="NAME" /><input aria-label="Email" required type="email" placeholder="EMAIL" /><input aria-label="Country" placeholder="COUNTRY" /><input aria-label="Product requirement" placeholder="PRODUCT REQUIREMENT" /><textarea aria-label="Message" placeholder="MESSAGE" /><button type="submit">SUBMIT INQUIRY</button></form></>}</div></section>

    <footer className={styles.footer}><div><Image src="/images/colotutu-logo.png" alt="Colotutu" width={52} height={62} /><p>Art-inspired beauty tools backed by 20 years of manufacturing experience.</p></div><nav><b>EXPLORE</b><a href="#gallery">Products</a><a href="#process">OEM / ODM</a><a href="#story">Our Story</a></nav><address><Link href="/contact"><b>CONTACT</b></Link><a href="mailto:yincx888@163.com">yincx888@163.com</a><span>Dongguan, Guangdong, China</span></address></footer>
  </main>;
}
