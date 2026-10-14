import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const outputDir = resolve("outputs/subpages");
await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });

for (const item of [
  { name: "dla-kogo-desktop", path: "/dla-kogo", width: 1440, height: 1000 },
  { name: "kontakt-desktop", path: "/kontakt", width: 1440, height: 1000 },
  { name: "rodzina-mobile", path: "/dla-kogo/rodziny-z-dziecmi", width: 390, height: 844 },
  { name: "privacy-desktop", path: "/polityka-prywatnosci", width: 1440, height: 1000 },
  { name: "privacy-mobile", path: "/polityka-prywatnosci", width: 390, height: 844 },
]) {
  const page = await browser.newPage({
    viewport: { width: item.width, height: item.height },
    reducedMotion: "reduce",
  });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(`http://127.0.0.1:3000${item.path}`, { waitUntil: "networkidle" });
  await page.screenshot({ path: resolve(outputDir, `${item.name}.png`), fullPage: true });
  if (errors.length) throw new Error(`${item.name}: ${errors.join("\n")}`);
  await page.close();
}

await browser.close();
console.log("Subpage screenshots saved without browser console errors.");
