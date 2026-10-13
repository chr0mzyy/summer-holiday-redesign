import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const outputDir = resolve("outputs");
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

async function capture(name, viewport, isMobile = false) {
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    isMobile,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];

  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));

  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += Math.max(500, Math.floor(viewport.height * 0.8))) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(60);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(100);
  await page.screenshot({ path: resolve(outputDir, name), fullPage: true });

  if (errors.length) throw new Error(`${name}:\n${errors.join("\n")}`);
  await context.close();
}

await capture("summer-holiday-desktop.png", { width: 1440, height: 1000 });
await capture("summer-holiday-mobile.png", { width: 390, height: 844 }, true);

await browser.close();
console.log("Screenshots saved without browser console errors.");
