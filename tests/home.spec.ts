import { expect, test } from "@playwright/test";

test("renders the primary journey and clearly labels demo search", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /Twoje lato/i })).toBeVisible();
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
