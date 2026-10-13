# Summer Holiday — Luxury Liquid Glass Redesign

Kompletna koncepcja nowej strony biura podróży **Summer Holiday** w kierunku Mediterranean Luxury Liquid Glass. Projekt jest responsywnym demo UI w Next.js i nie udaje aktywnej integracji z MerlinX.

## Status integracji

W publicznym demo:

- wyszukiwarka działa jako interaktywna demonstracja interfejsu,
- ceny na kartach są jawnie oznaczone jako demonstracyjne,
- akcje wymagające aktualnej oferty kierują do działającego serwisu `biurosummerholiday.pl`,
- nie ma żadnych wymyślonych endpointów ani danych logowania.

Pełna integracja wymaga jednego z oficjalnych wariantów MerlinX:

1. **Vacations IBE iframe** — URL wygenerowany w panelu VCMS.
2. **VIBE/VCMS gate** — dostarczana przez MerlinX biblioteka `rwdGate.php`, identyfikator afiliatu i ID widgetów.
3. **MWS/MDS Web Service** — osobna usługa i autoryzowany dostęp; rekomendowana dopiero po potwierdzeniu umowy i parametrów przez MerlinX.

Szczegóły: [docs/INTEGRATION_MERLINX.md](docs/INTEGRATION_MERLINX.md) oraz [vcms-adaptation/README.md](vcms-adaptation/README.md).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Motion
- Lucide Icons
- Playwright

## Uruchomienie

Wymagany Node.js 22+ i pnpm.

```bash
pnpm install
pnpm dev
```

Strona będzie dostępna pod `http://localhost:3000`.

## Weryfikacja

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm test:e2e
```

Testy E2E obejmują widok desktopowy, widok mobilny, nawigację, interakcję wyszukiwarki oraz zabezpieczenie przed przedstawieniem demo jako aktywnego MerlinX.

## Struktura

```text
app/                    routing, SEO i style globalne
components/             interaktywny interfejs strony
public/images/          autorskie materiały wygenerowane dla projektu
docs/                   dokumentacja integracji i QA
tests/                  testy przeglądarkowe
vcms-adaptation/        wariant CSS/PHP do adaptacji w VCMS gate
```

## Bezpieczeństwo i produkcja

- Projekt nie zawiera danych dostępowych, identyfikatora afiliatu ani ID widgetów.
- Pliki `.env*` są ignorowane przez Git.
- Produkcyjna domena nie jest podłączona do Vercel.
- `robots` dla demo są ustawione na `noindex, nofollow`.
- Przed wdrożeniem produkcyjnym należy uzyskać od MerlinX oficjalny pakiet gate lub dostęp MWS oraz przeprowadzić test rezerwacji w środowisku dostawcy.

## Materiały źródłowe integracji

- [Dokumentacja podłączenia Vacations IBE](https://www.merlinx.pl/dla-biur-podrozy/vibe-podl/)
- [Dokumentacja VCMS](https://www.merlinx.pl/dla-biur-podrozy/vcms-dokumentacja/)
- [Dokumentacja MWS/MDSWS](https://docu.mdsws.merlinx.pl/mdsws)
- [MerlinX Docs](https://docs.merlinx.pl/)

## Licencja

Projekt wykonany jako koncepcja redesignu dla Summer Holiday. Zdjęcia zostały wygenerowane specjalnie na potrzeby tego projektu. Znaki i dane firmy pozostają własnością ich właścicieli.
