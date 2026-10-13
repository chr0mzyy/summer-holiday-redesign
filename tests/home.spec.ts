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
  await expect(page.getByRole("status")).toContainText("VCMS/MerlinX");
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

test("offer inspirations never claim live MerlinX prices", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Cena demonstracyjna").first()).toBeVisible();
  await expect(page.getByText(/Aktualna cena i dostępność/)).toBeVisible();
});

test("connects only verified social profiles and provides a useful footer", async ({ page }) => {
  await page.goto("/");

  const facebook = page.getByRole("link", { name: "Odwiedź Summer Holiday na Facebooku" });
  await expect(facebook).toHaveAttribute("href", "https://www.facebook.com/summerholidaypolska");
  await expect(page.getByText("Profil do podłączenia po przekazaniu zweryfikowanego adresu.")).toBeVisible();
  await expect(page.getByRole("heading", { name: /Twoja następna podróż/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /572 219 872/ }).last()).toHaveAttribute("href", "tel:+48572219872");
});
