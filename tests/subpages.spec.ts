import { expect, test } from "@playwright/test";

test("renders the about and contact subpages with verified office details", async ({ page }) => {
  await page.goto("/o-nas");
  await expect(page.getByRole("heading", { name: /Podróże zaczynają się/i })).toBeVisible();
  await expect(page.getByText("Summer Holiday działa od 2008 roku")).toBeVisible();

  await page.goto("/kontakt");
  await expect(page.getByRole("heading", { name: /Porozmawiajmy/i })).toBeVisible();
  await expect(page.getByText("Traugutta 51", { exact: false }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /572 219 872/ }).first()).toHaveAttribute("href", "tel:+48572219872");
  await expect(page.getByTitle("Mapa dojazdu do biura Summer Holiday")).toBeVisible();
  await expect(page.getByText("Wersja robocza — bez wysyłania danych.")).toBeVisible();
});

test("links all audience cards to prepared detail pages", async ({ page }) => {
  await page.goto("/dla-kogo");
  await expect(page.locator(".audience-card")).toHaveCount(6);

  await page.getByRole("link", { name: /Wakacje dla rodzin z dziećmi/i }).click();
  await expect(page).toHaveURL(/\/dla-kogo\/rodziny-z-dziecmi$/);
  await expect(page.getByRole("heading", { name: "Wakacje dla rodzin z dziećmi" })).toBeVisible();
  await expect(page.getByText("Aktualną cenę i dostępność zawsze potwierdzamy")).toBeVisible();
});

test("keeps legal copy clearly marked as a draft pending VCMS migration", async ({ page }) => {
  await page.goto("/polityka-prywatnosci");
  await expect(page.getByRole("heading", { name: /Polityka prywatności/i })).toBeVisible();
  await expect(page.getByText("Nie tworzymy nowej treści prawnej bez zatwierdzenia.")).toBeVisible();
  await expect(page.getByText("Treść prawna zostanie zachowana 1:1.")).toBeVisible();
});
