/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require("C:/Users/23135/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const slugs = ["rococo", "rococo-v2", "midnight", "modern"];
const widths = [1024, 768, 390];

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: chromePath });
  const report = [];
  for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 1000 } });
    for (const slug of slugs) {
      const page = await context.newPage();
      await page.goto(`http://127.0.0.1:3000/concepts/${slug}`, { waitUntil: "networkidle" });
      const state = await page.evaluate(() => ({
        viewport: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth,
        h1Visible: !!document.querySelector("h1")?.getBoundingClientRect().height,
        navLinks: document.querySelectorAll("header nav a").length,
        requiredFields: document.querySelectorAll("form [required]").length,
      }));
      report.push({ width, slug, ...state });
      await page.close();
    }
    await context.close();
  }

  const formContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const formPage = await formContext.newPage();
  await formPage.goto("http://127.0.0.1:3000/concepts/modern#inquiry", { waitUntil: "networkidle" });
  await formPage.locator('input[autocomplete="name"]').fill("Test Buyer");
  await formPage.locator('input[type="email"]').fill("buyer@example.com");
  await formPage.locator('input[autocomplete="country-name"]').fill("United States");
  await formPage.getByLabel("Product requirement").fill("Custom gift set");
  await formPage.getByLabel("Message").fill("Please share OEM options.");
  await formPage.getByRole("button", { name: "Submit inquiry" }).click();
  await formPage.getByText("Our sales team will contact you soon.").waitFor();
  const formSuccess = await formPage.getByRole("status").isVisible();
  await formContext.close();
  await browser.close();
  console.log(JSON.stringify({ responsive: report, formSuccess }, null, 2));
})().catch((error) => { console.error(error); process.exit(1); });
