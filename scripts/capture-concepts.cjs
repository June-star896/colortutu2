/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("C:/Users/23135/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "outputs", "homepage-concepts");
const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const requestedSlugs = process.argv.slice(2);
const slugs = requestedSlugs.length ? requestedSlugs : ["rococo", "midnight", "modern"];

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: chromePath });
  const context = await browser.newContext({ viewport: { width: 1440, height: 2400 }, deviceScaleFactor: 1 });
  const results = [];

  for (const slug of slugs) {
    const page = await context.newPage();
    const consoleErrors = [];
    page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(`http://127.0.0.1:3000/concepts/${slug}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const metrics = await page.evaluate(() => ({
      title: document.title,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      h1: document.querySelector("h1")?.textContent,
      forms: document.forms.length,
      images: [...document.images].map((image) => ({ alt: image.alt, complete: image.complete, width: image.naturalWidth })),
    }));
    const screenshot = path.join(outDir, `colotutu-${slug}-1440x2400.png`);
    await page.screenshot({ path: screenshot, fullPage: false });
    results.push({ slug, screenshot, metrics, consoleErrors });
    await page.close();
  }

  fs.writeFileSync(path.join(outDir, "capture-report.json"), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})().catch((error) => { console.error(error); process.exit(1); });
