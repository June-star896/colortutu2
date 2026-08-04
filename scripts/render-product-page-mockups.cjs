/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("C:/Users/23135/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "outputs", "product-page-mockups");
const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";

function dataUrl(file, mime) {
  return `data:${mime};base64,${fs.readFileSync(path.join(root, "public", "images", file)).toString("base64")}`;
}

const logo = dataUrl("colotutu-logo.png", "image/png");
const products = [
  {
    slug: "zodiac",
    name: "Zodiac Mirror & Comb Gift Set",
    kicker: "COLLECTIBLE BEAUTY RITUALS",
    intro: "An art-led mirror and comb collection created for gifting, collectible launches and distinctive retail displays.",
    main: dataUrl("zodiac-gift-set-studio.png", "image/png"),
    secondary: dataUrl("zodiac-gift-set.png", "image/png"),
    gallery: [
      [dataUrl("zodiac-mirrors-editorial.png", "image/png"), "center"],
      [dataUrl("zodiac-combs-editorial.png", "image/png"), "center"],
      [dataUrl("zodiac-collection-four-colors.png", "image/png"), "center"],
    ],
    showcase: [
      [dataUrl("zodiac-mirrors-editorial.png", "image/png"), "The Zodiac Mirror Collection", "Jewelry-like frames in four collectible color stories."],
      [dataUrl("zodiac-combs-editorial.png", "image/png"), "The Decorative Comb Collection", "Ornamental details with a luminous, premium finish."],
      [dataUrl("zodiac-collection-four-colors.png", "image/png"), "Gift-Ready Colorways", "Coordinated product, packaging and retail presentation."],
    ],
    mainPosition: "center 55%",
    secondaryPosition: "center",
    storyTitle: "A little treasure for every beauty ritual.",
    story: "Jewelry-like silhouettes, expressive zodiac details and coordinated gift presentation turn an everyday tool into a collection with emotional and commercial appeal.",
    tags: ["Mirror & comb set", "Zodiac gifting", "Custom packaging"],
    options: [
      ["01", "Finish & color", "Coordinate plating tones, decorative colors and collection themes."],
      ["02", "Brand details", "Apply approved logos and graphics to products and packaging."],
      ["03", "Gift presentation", "Develop sleeves, boxes, inserts and coordinated set combinations."],
    ],
    highlights: [
      ["COLLECTIBLE DESIGN", "Recognizable forms built for display, gifting and social storytelling."],
      ["COORDINATED SET", "Mirror, comb and packaging can share one consistent visual language."],
      ["RETAIL PRESENCE", "Dimensional details help the collection feel memorable on shelf."],
    ],
    type: "Mirror and comb gift set",
    customization: "Finish, color, graphics, logo and packaging",
  },
  {
    slug: "puff",
    name: "Makeup Puff & Applicator Gift Set",
    kicker: "SOFT-TOUCH DAILY ESSENTIALS",
    intro: "A gift-ready beauty application set combining soft-touch tools, expressive packaging and private-label development support.",
    main: dataUrl("puff-lavender-editorial.png", "image/png"),
    secondary: dataUrl("makeup-puff-gift-set.jpg", "image/jpeg"),
    gallery: [
      [dataUrl("makeup-puff-gift-set-studio.png", "image/png"), "center 54%"],
      [dataUrl("makeup-puff-gift-set.jpg", "image/jpeg"), "center 48%"],
      [dataUrl("puff-lavender-editorial.png", "image/png"), "center bottom"],
    ],
    showcase: [
      [dataUrl("puff-lavender-editorial.png", "image/png"), "A Complete Beauty Ritual", "Puff, applicator and compact presented as one gift-ready story."],
      [dataUrl("makeup-puff-gift-set-studio.png", "image/png"), "Designed for Gifting", "Lavender packaging, satin detail and coordinated brand graphics."],
      [dataUrl("makeup-puff-gift-set.jpg", "image/jpeg"), "Retail-Ready Presentation", "A polished set created for shelves, launches and seasonal edits."],
    ],
    mainPosition: "center 54%",
    secondaryPosition: "center 48%",
    storyTitle: "Soft-touch performance, made gift-ready.",
    story: "A coordinated puff and applicator set brings together daily usability, comfortable materials and a presentation designed for seasonal gifting and beauty retail.",
    tags: ["Makeup puff set", "Applicator tools", "Private label"],
    options: [
      ["01", "Material & feel", "Align puff density, touch and applicator format to the product brief."],
      ["02", "Color & branding", "Coordinate colors, ribbons, approved logos and collection graphics."],
      ["03", "Retail packaging", "Develop protective inserts and gift-ready private-label presentation."],
    ],
    highlights: [
      ["SOFT-TOUCH USE", "A comfortable beauty application experience for everyday routines."],
      ["CURATED TOOL SET", "Puff and applicator formats presented as one coordinated collection."],
      ["GIFT PRESENTATION", "Designed for beauty retail, promotional sets and seasonal gifting."],
    ],
    type: "Makeup puff and applicator gift set",
    customization: "Material, shape, color, logo and packaging",
  },
];

function template(product) {
  return `<!doctype html>
  <html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=1440,initial-scale=1">
  <style>
    *{box-sizing:border-box}html,body{margin:0;width:1440px;height:2400px;overflow:hidden}body{font-family:Arial,sans-serif;background:#fffaf6;color:#342333}.page{width:1440px;height:2400px;background:#fffaf6;overflow:hidden}.serif{font-family:Georgia,serif}.announcement{height:28px;display:flex;align-items:center;justify-content:center;gap:34px;background:#7d416c;color:#fff;font-size:10px;font-weight:700;letter-spacing:.14em}.announcement u{text-underline-offset:3px}.header{height:78px;padding:0 72px;display:grid;grid-template-columns:170px 1fr 170px;align-items:center;background:#fffdf9;border-bottom:1px solid #eadce4}.logo{width:76px;height:62px;object-fit:contain}.nav{display:flex;justify-content:center;gap:42px;font-size:12px;font-weight:700}.nav span:nth-child(1):after,.nav span:nth-child(2):after{content:'⌄';margin-left:6px;color:#bd5f9b}.quoteTop{justify-self:end;padding:13px 22px;border:1px solid #5a4054;font-size:11px;font-weight:700}.breadcrumb{height:42px;padding:0 72px;display:flex;align-items:center;gap:10px;color:#887482;font-size:10px;border-bottom:1px solid #eee2e9}.breadcrumb b{color:#5e4056}.hero{height:585px;padding:28px 72px 34px;display:grid;grid-template-columns:57% 43%;gap:48px}.gallery{display:grid;grid-template-columns:84px 1fr;gap:14px}.thumbs{display:flex;flex-direction:column;gap:12px}.thumb{height:88px;border:1px solid #e4cfdb;border-radius:12px;overflow:hidden;background:#f5e8f0}.thumb.active{border:2px solid #b85a92}.thumb img{width:100%;height:100%;object-fit:cover}.thumb.contain img{object-fit:contain;background:#fff}.mainImage{height:510px;border-radius:160px 18px 18px 18px;overflow:hidden;background:#ede3f2;box-shadow:0 18px 48px rgba(78,43,69,.1)}.mainImage img{width:100%;height:100%;object-fit:cover}.productInfo{padding:17px 4px 0 0}.eyebrow{margin:0 0 12px;color:#a94d84;font-size:9px;font-weight:800;letter-spacing:.18em}.productInfo h1{margin:0;font:500 48px/1.04 Georgia,serif;letter-spacing:-.025em}.intro{margin:18px 0;color:#756674;font-size:13px;line-height:1.65}.tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:18px}.tag{padding:7px 11px;border-radius:20px;background:#f5e4ef;color:#74415f;font-size:9px;font-weight:700}.infoRows{border-top:1px solid #e5d6df}.infoRow{min-height:37px;display:grid;grid-template-columns:130px 1fr;align-items:center;border-bottom:1px solid #e5d6df;font-size:10px}.infoRow span{color:#887682}.infoRow b{font-weight:700}.choiceLabel{margin:17px 0 8px;font-size:9px;font-weight:800;letter-spacing:.13em}.choices{display:flex;gap:7px}.choice{padding:9px 12px;border:1px solid #ddc6d4;border-radius:6px;background:#fff;font-size:9px}.choice.selected{border-color:#b85790;background:#faedf5;color:#8b3f6b}.buttonRow{display:flex;gap:9px;margin-top:20px}.button{height:43px;padding:0 21px;display:flex;align-items:center;justify-content:center;border:1px solid #ae4f85;font-size:10px;font-weight:800}.button.primary{background:#b85790;color:#fff}.button.light{background:#fff;color:#6a405a}.catalog{margin-top:13px;color:#684c60;font-size:9px;text-decoration:underline;text-underline-offset:4px}.trust{height:88px;padding:0 72px;display:grid;grid-template-columns:repeat(4,1fr);align-items:center;background:#f4e2ed;border-block:1px solid #e4cddd}.trust div{padding-left:22px;border-left:1px solid #d9bdce}.trust b{display:block;font:600 21px Georgia,serif}.trust span{display:block;margin-top:4px;color:#7d6977;font-size:9px}.story{height:300px;display:grid;grid-template-columns:47% 53%;background:#452b40;color:#fff}.storyImage{position:relative;overflow:hidden}.storyImage:after{content:'';position:absolute;inset:0;border-radius:0 150px 150px 0;box-shadow:inset -40px 0 65px rgba(55,28,50,.18)}.storyImage img{width:100%;height:100%;object-fit:cover}.storyCopy{padding:48px 70px 44px 64px;display:flex;flex-direction:column;justify-content:center}.storyCopy .eyebrow{color:#e8afd1}.storyCopy h2{max-width:560px;margin:0;font:500 36px/1.08 Georgia,serif}.storyCopy p:last-child{max-width:560px;margin:17px 0 0;color:#dfd3db;font-size:11px;line-height:1.6}.custom{height:300px;padding:34px 72px;background:#fffdf9}.sectionHead{display:flex;justify-content:space-between;align-items:end;margin-bottom:23px}.sectionHead h2{margin:0;font:500 31px Georgia,serif}.sectionHead p{max-width:420px;margin:0;color:#7d6c78;font-size:10px;line-height:1.5}.optionGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.option{height:177px;padding:22px;border:1px solid #e4d5de;border-radius:20px 4px 20px 4px;background:#f8ebf3}.option:nth-child(2){background:#fff6f0}.option:nth-child(3){background:#eee7f7}.option b{color:#b6558b;font-size:9px}.option h3{margin:34px 0 9px;font:500 20px Georgia,serif}.option p{margin:0;color:#786a75;font-size:9px;line-height:1.5}.details{height:340px;padding:35px 72px;display:grid;grid-template-columns:57% 43%;gap:44px;background:#f9edf4}.highlights h2,.specs h2{margin:0 0 22px;font:500 30px Georgia,serif}.highlightGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:11px}.highlight{height:190px;padding:19px;border-radius:15px;background:#fff}.highlight b{font-size:8px;letter-spacing:.13em;color:#a64c80}.highlight h3{margin:50px 0 8px;font:500 17px Georgia,serif}.highlight p{margin:0;color:#7b6c76;font-size:8px;line-height:1.48}.specTable{border-top:1px solid #d9c5d1}.specRow{min-height:42px;padding:9px 0;display:grid;grid-template-columns:125px 1fr;align-items:center;border-bottom:1px solid #d9c5d1;font-size:9px}.specRow span{color:#836f7c}.specRow b{line-height:1.35}.process{height:220px;padding:32px 72px;background:#fffdf9}.processTop{display:flex;justify-content:space-between;align-items:end;margin-bottom:22px}.processTop h2{margin:0;font:500 29px Georgia,serif}.processTop span{font-size:9px;color:#846f7d}.steps{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #ddcbd6}.step{height:115px;padding:15px 18px;border-right:1px solid #ddcbd6}.step:last-child{border-right:0}.step b{font-size:8px;color:#b5568c}.step h3{margin:17px 0 7px;font:500 17px Georgia,serif}.step p{margin:0;color:#7b6c76;font-size:8px;line-height:1.4}.closing{height:330px;padding:32px 72px;display:grid;grid-template-columns:43% 57%;gap:46px;background:#fffaf6}.faq h2,.inquiry h2{margin:0 0 17px;font:500 29px Georgia,serif}.faqRow{height:43px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid #dfd1da;font-size:9px;font-weight:700}.faqRow:last-child{border-bottom:1px solid #dfd1da}.faqRow span:last-child{color:#b85790}.inquiry{padding:24px 28px;border-radius:24px 4px 0 0;background:#3c2939;color:#fff}.inquiry .eyebrow{color:#e6a9cc}.inquiry h2{margin-bottom:7px}.inquiry>p{margin:0 0 14px;color:#d8cbd4;font-size:9px}.form{display:grid;grid-template-columns:1fr 1fr;gap:8px}.field{height:33px;padding:9px 10px;border:1px solid #7c6577;color:#cfc0ca;font-size:8px}.field.wide{grid-column:1/-1;height:43px}.submit{width:126px;height:32px;margin-top:9px;display:flex;align-items:center;justify-content:center;background:#bc5891;font-size:8px;font-weight:800}.footer{height:89px;padding:12px 72px;display:grid;grid-template-columns:2fr 1fr 1.2fr;gap:40px;background:#342433;color:#fff}.footerBrand{display:flex;align-items:center;gap:16px}.footerLogo{width:50px;height:62px;object-fit:contain;background:#fff}.footer p{max-width:320px;margin:0;color:#cbbfc7;font-size:8px;line-height:1.5}.footerCol{display:flex;flex-direction:column;justify-content:center;gap:5px;font-size:8px}.footerCol b{font-size:8px;letter-spacing:.12em}
    .custom{padding:25px 72px 28px}.sectionHead{margin-bottom:15px}.sectionHead h2{font-size:29px}.showcaseGrid{display:grid;grid-template-columns:1.08fr 1fr 1fr;gap:13px}.showcaseCard{height:202px;position:relative;overflow:hidden;border-radius:18px 4px 18px 4px;background:#eee5ef}.showcaseCard img{width:100%;height:100%;object-fit:cover}.showcaseCard:first-child img{object-position:center 56%}.showcaseCard:after{content:'';position:absolute;inset:44% 0 0;background:linear-gradient(transparent,rgba(40,24,37,.88))}.showcaseCaption{position:absolute;left:18px;right:18px;bottom:15px;z-index:2;color:#fff}.showcaseCaption b{display:block;margin-bottom:5px;font:500 17px Georgia,serif}.showcaseCaption span{display:block;color:#eee3ea;font-size:8px;line-height:1.4}
  </style></head><body><main class="page">
    <div class="announcement">OEM / ODM BEAUTY TOOL DEVELOPMENT · GLOBAL EXPORT SUPPORT <u>START A PROJECT →</u></div>
    <header class="header"><img class="logo" src="${logo}" alt="Colotutu logo"><nav class="nav"><span>Products</span><span>OEM / ODM</span><span>Our Story</span><span>FAQ</span></nav><div class="quoteTop">GET A QUOTE</div></header>
    <div class="breadcrumb"><span>Home</span><span>/</span><span>Products</span><span>/</span><b>${product.name}</b></div>
    <section class="hero"><div class="gallery"><div class="thumbs"><div class="thumb contain active"><img src="${product.main}"></div>${product.gallery.map(([image, position])=>`<div class="thumb"><img src="${image}" style="object-position:${position}"></div>`).join("")}</div><div class="mainImage"><img src="${product.main}" style="object-position:${product.mainPosition}"></div></div>
      <div class="productInfo"><p class="eyebrow">${product.kicker}</p><h1>${product.name}</h1><p class="intro">${product.intro}</p><div class="tags">${product.tags.map(x=>`<span class="tag">${x}</span>`).join("")}</div><div class="infoRows"><div class="infoRow"><span>Business model</span><b>OEM / ODM · Wholesale</b></div><div class="infoRow"><span>MOQ</span><b>Available on request</b></div><div class="infoRow"><span>Sample</span><b>Available before production</b></div></div><div class="choiceLabel">CUSTOMIZATION FOCUS</div><div class="choices"><span class="choice selected">Product</span><span class="choice">Branding</span><span class="choice">Packaging</span></div><div class="buttonRow"><div class="button primary">GET A QUOTE</div><div class="button light">REQUEST A SAMPLE</div></div><div class="catalog">Download product catalog →</div></div>
    </section>
    <section class="trust"><div><b>20 Years</b><span>Beauty tool manufacturing</span></div><div><b>OEM / ODM</b><span>Concept to production</span></div><div><b>Global Export</b><span>International delivery support</span></div><div><b>Quality Control</b><span>Process-led inspection</span></div></section>
    <section class="story"><div class="storyImage"><img src="${product.secondary}" style="object-position:${product.secondaryPosition}"></div><div class="storyCopy"><p class="eyebrow">DESIGNED TO BE REMEMBERED</p><h2>${product.storyTitle}</h2><p>${product.story}</p></div></section>
    <section class="custom"><div class="sectionHead"><div><p class="eyebrow">COLLECTION GALLERY</p><h2>Every detail, designed to be discovered.</h2></div><p>Explore coordinated colorways, refined finishes and gift-ready presentation developed for memorable beauty collections.</p></div><div class="showcaseGrid">${product.showcase.map(x=>`<article class="showcaseCard"><img src="${x[0]}"><div class="showcaseCaption"><b>${x[1]}</b><span>${x[2]}</span></div></article>`).join("")}</div></section>
    <section class="details"><div class="highlights"><p class="eyebrow">PRODUCT HIGHLIGHTS</p><h2>Made for beauty, gifting and retail storytelling.</h2><div class="highlightGrid">${product.highlights.map(x=>`<article class="highlight"><b>${x[0]}</b><h3>${x[0].split(" ").map(w=>w[0]+w.slice(1).toLowerCase()).join(" ")}</h3><p>${x[1]}</p></article>`).join("")}</div></div><div class="specs"><p class="eyebrow">PRODUCT INFORMATION</p><h2>Details for buyers.</h2><div class="specTable"><div class="specRow"><span>Product type</span><b>${product.type}</b></div><div class="specRow"><span>Customization</span><b>${product.customization}</b></div><div class="specRow"><span>Packaging</span><b>Custom options available</b></div><div class="specRow"><span>Sample</span><b>Available before production</b></div><div class="specRow"><span>MOQ</span><b>Available on request</b></div></div></div></section>
    <section class="process"><div class="processTop"><div><p class="eyebrow">OEM / ODM PROCESS</p><h2>A clear path from idea to production.</h2></div><span>Practical checkpoints for confident product decisions.</span></div><div class="steps"><article class="step"><b>01</b><h3>Brief</h3><p>Share your market, positioning and target requirements.</p></article><article class="step"><b>02</b><h3>Design</h3><p>Align product, color, branding and packaging.</p></article><article class="step"><b>03</b><h3>Sample</h3><p>Review appearance, function and production details.</p></article><article class="step"><b>04</b><h3>Production</h3><p>Move into controlled production and export delivery.</p></article></div></section>
    <section class="closing"><div class="faq"><p class="eyebrow">FREQUENTLY ASKED</p><h2>Before we begin.</h2><div class="faqRow"><span>Can the product and packaging be customized?</span><span>+</span></div><div class="faqRow"><span>Can we request samples?</span><span>+</span></div><div class="faqRow"><span>What is the minimum order quantity?</span><span>+</span></div><div class="faqRow"><span>Do you support export delivery?</span><span>+</span></div></div><div class="inquiry"><p class="eyebrow">START A PROJECT</p><h2>Tell us what you want to create.</h2><p>Share your market and requirements. We’ll follow up with the most useful next step.</p><div class="form"><div class="field">NAME</div><div class="field">EMAIL</div><div class="field">COUNTRY</div><div class="field">PRODUCT REQUIREMENT</div><div class="field wide">MESSAGE</div></div><div class="submit">SUBMIT INQUIRY</div></div></section>
    <footer class="footer"><div class="footerBrand"><img class="footerLogo" src="${logo}"><p>Art-inspired beauty tools backed by 20 years of manufacturing experience.</p></div><div class="footerCol"><b>EXPLORE</b><span>Products</span><span>OEM / ODM</span><span>Our Story</span></div><div class="footerCol"><b>CONTACT</b><span>yincx888@163.com</span><span>Dongguan, Guangdong, China</span></div></footer>
  </main></body></html>`;
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: chromePath });
  const context = await browser.newContext({ viewport: { width: 1440, height: 2400 }, deviceScaleFactor: 1 });
  const report = [];
  for (const product of products) {
    const page = await context.newPage();
    const consoleErrors = [];
    page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
    await page.setContent(template(product), { waitUntil: "load" });
    await page.waitForFunction(() => [...document.images].every((image) => image.complete && image.naturalWidth > 0));
    const metrics = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      bodyHeight: document.body.getBoundingClientRect().height,
      h1: document.querySelector("h1")?.textContent,
      images: [...document.images].map((image) => ({ complete: image.complete, width: image.naturalWidth, height: image.naturalHeight })),
    }));
    const output = path.join(outDir, `colotutu-product-${product.slug}-1440x2400.png`);
    await page.screenshot({ path: output, fullPage: false });
    report.push({ product: product.slug, output, metrics, consoleErrors });
    await page.close();
  }
  fs.writeFileSync(path.join(outDir, "render-report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
})().catch((error) => { console.error(error); process.exit(1); });
