import { expect, test } from "@playwright/test";

test("renders the primary journey and clearly labels demo search", async ({ page }) => {
  await page.goto("/");

  const logo = page.getByRole("img", { name: "Summer Holiday — Biuro Podróży" }).first();
  await expect(logo).toBeVisible();
  await expect(logo).toHaveJSProperty("complete", true);
  expect(await logo.evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
  await expect(page.getByRole("heading", { name: /Twoje lato/i })).toBeVisible();
  const heroCta = page.getByRole("link", { name: /Zaplanuj wakacje/i });
  await expect(heroCta).toBeVisible();
  expect((await heroCta.boundingBox())?.height).toBeGreaterThanOrEqual(64);
  await expect(page.locator(".flight-plane")).toHaveCount(1);
  await expect(page.getByText("Demo UI", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Dokąd lecisz/i })).toBeVisible();

  await page.getByRole("button", { name: "Szukaj" }).click();
  await expect(page.getByRole("status")).toContainText("demonstracja nowego interfejsu");
  await expect(page.getByRole("status")).toContainText("system rezerwacyjny");
});

test("navigation reaches destinations", async ({ page, isMobile }) => {
  await page.goto("/");

  if (isMobile) {
    await page.getByRole("button", { name: "Otwórz menu" }).click();
    await page.getByRole("navigation", { name: "Nawigacja mobilna" }).getByRole("link", { name: /Kierunki/ }).click();
  } else {
    await page.getByRole("navigation", { name: "Nawigacja główna" }).getByRole("link", { name: "Kierunki" }).click();
  }

  await expect(page.getByRole("heading", { name: /Morze Śródziemne/i })).toBeInViewport();
});

test("offer inspirations explain how prices are confirmed", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cena demonstracyjna").first()).toBeVisible();
  await expect(page.getByText(/Aktualne ceny i dostępność są zawsze potwierdzane/)).toBeVisible();
});

test("connects only verified social profiles and provides a useful footer", async ({ page }) => {
  await page.goto("/");

  const facebook = page.getByRole("link", { name: "Odwiedź Summer Holiday na Facebooku" });
  await expect(facebook).toHaveAttribute("href", "https://www.facebook.com/summerholidaypolska");
  await expect(page.getByText("Profil do podłączenia po przekazaniu zweryfikowanego adresu.")).toBeVisible();
  await expect(page.getByRole("heading", { name: /Twoja następna podróż/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /572 219 872/ }).last()).toHaveAttribute("href", "tel:+48572219872");
});

test("keeps the trust strip and scroll-driven plane above the search transition", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Bezpieczna rezerwacja w systemie rezerwacyjnym")).toBeVisible();
  const transition = page.locator(".flight-transition");
  const plane = page.locator(".flight-plane");
  const transitionTop = await transition.evaluate((element) => (element as HTMLElement).offsetTop);

  await page.evaluate((top) => window.scrollTo(0, top - window.innerHeight * 0.8), transitionTop);
  await page.waitForTimeout(100);
  const firstTransform = await plane.evaluate((element) => getComputedStyle(element).transform);

  await page.evaluate((top) => window.scrollTo(0, top - window.innerHeight * 0.25), transitionTop);
  await page.waitForTimeout(100);
  const secondTransform = await plane.evaluate((element) => getComputedStyle(element).transform);

  expect(firstTransform).not.toBe(secondTransform);
  await expect(plane).toBeVisible();
});


test("shows tailored trip categories, current contact details and the office map", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /Znajdź wyjazd/i })).toBeVisible();
  await expect(page.locator(".audience-card")).toHaveCount(6);
  await expect(page.getByText("Traugutta 51 · 44-370 Pszów")).toBeVisible();
  await expect(page.getByTitle("Mapa dojazdu do biura Summer Holiday")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Godziny otwarcia" })).toBeVisible();
  const sectionOrder = await page
    .locator(".process-section, .social-section, .location-section")
    .evaluateAll((sections) => sections.map((section) => section.className));
  expect(sectionOrder).toEqual([
    "section process-section",
    "section social-section",
    "location-section",
  ]);
  await expect(page.locator("body")).not.toContainText("MerlinX");
});
