# QA

## Automatyczne

- TypeScript: `pnpm typecheck`
- ESLint: `pnpm lint`
- build produkcyjny: `pnpm build`
- desktop i mobile E2E: `pnpm test:e2e`

## Manualne

- menu i kotwice,
- zakładki środka transportu,
- rozwijane opcje wyszukiwania,
- komunikat po wyszukaniu,
- zapisanie/odznaczenie karty,
- linki telefoniczne i e-mail,
- szerokości 390 px, 768 px, 1280 px i 1440 px,
- `prefers-reduced-motion`,
- nawigacja klawiaturą i stany focus,
- brak błędów konsoli,
- kontrola alt textów i struktury nagłówków.

## Ograniczenie testów rezerwacji

Demo nie ma dostępu do konta VCMS/MerlinX, dlatego nie testuje prawdziwego wyszukiwania, ceny ani rezerwacji. Te scenariusze należy wykonać na stagingu MerlinX po przekazaniu oficjalnych danych integracyjnych.

## Ostatni wynik

Pomiar lokalnego builda produkcyjnego (Lighthouse, 13.10.2026):

- Performance: **97/100**
- Accessibility: **100/100**
- Best Practices: **100/100**
- SEO: **63/100** — celowo obniżone przez `noindex, nofollow`, aby demo nie konkurowało z produkcyjną domeną.

Playwright: **6/6 testów zaliczonych** (desktop + mobile). Skrypt screenshotów nie wykrył błędów konsoli.
