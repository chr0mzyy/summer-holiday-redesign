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
  await expect(page.getByLabel("Imię i nazwisko")).toBeEnabled();
  await expect(page.getByLabel("Telefon lub e-mail")).toBeEnabled();
  await expect(page.getByRole("button", { name: "Przygotuj e-mail" })).toBeEnabled();
  await expect(page.getByText("Dane nie są zapisywane na stronie.")).toBeVisible();
});

test("links all audience cards to prepared detail pages", async ({ page }) => {
  await page.goto("/dla-kogo");
  await expect(page.locator(".audience-card")).toHaveCount(6);

  await page.getByRole("link", { name: /Wakacje dla rodzin z dziećmi/i }).click();
  await expect(page).toHaveURL(/\/dla-kogo\/rodziny-z-dziecmi$/);
  await expect(page.getByRole("heading", { name: "Wakacje dla rodzin z dziećmi" })).toBeVisible();
  await expect(page.getByText("Aktualną cenę i dostępność zawsze potwierdzamy")).toBeVisible();
});

test("renders the company privacy policy locally", async ({ page }) => {
  await page.goto("/polityka-prywatnosci");
  await expect(page).toHaveURL(/\/polityka-prywatnosci$/);
  await expect(page.getByRole("heading", { name: /Polityka ochrony/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Wyszukiwarka ofert i system rezerwacyjny" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Administrator danych osobowych" })).toBeVisible();
  await expect(page.getByText(/Ostateczna cena, dostępność i zakres usług dodatkowych/)).toBeVisible();
  await expect(page.getByText(/Dane nie są zapisywane ani wysyłane przez serwer tej strony/)).toBeVisible();
  await expect(page.getByRole("link", { name: "uodo.gov.pl" })).toHaveAttribute("href", "https://uodo.gov.pl/");
});
