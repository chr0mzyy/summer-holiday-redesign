# Summer Holiday — plan podstron

Status: wersja robocza, nieopublikowana.  
Produkcja VCMS: bez zmian.

## Przygotowane trasy

| Trasa Next.js | Przeznaczenie | Status integracji |
| --- | --- | --- |
| `/o-nas` | historia biura, wartości, CTA | gotowy widok |
| `/kontakt` | kontakt, godziny, mapa, formularz | formularz bez wysyłki |
| `/polityka-prywatnosci` | kontener dokumentu prawnego | oczekuje treści 1:1 z VCMS |
| `/dla-kogo` | przegląd sześciu typów wyjazdów | gotowy widok |
| `/dla-kogo/rodziny-z-dziecmi` | rodziny, top 5 hoteli | gotowy widok |
| `/dla-kogo/dla-par` | wyjazdy dla par | gotowy widok |
| `/dla-kogo/wyjazdy-firmowe` | podróże grupowe i firmowe | gotowy widok |
| `/dla-kogo/po-calym-swiecie` | inspiracje i top 5 wycieczek | gotowy widok |
| `/dla-kogo/kolonie` | wypoczynek dzieci i młodzieży | gotowy widok |
| `/dla-kogo/szyte-na-miare` | wyjazdy indywidualne | gotowy widok |

## Zasady przed publikacją

1. Nie publikować formularza bez podłączenia do potwierdzonego mechanizmu VCMS.
2. Nie kopiować identyfikatorów widgetów, tokenów ani konfiguracji konta do publicznego repozytorium.
3. Treść polityki prywatności przenieść bez zmiany znaczenia i zatwierdzić przed wdrożeniem.
4. Podstrony ofertowe nie pokazują fikcyjnej dostępności ani cen.
5. Po otrzymaniu zgody porównać mapowanie tras z konfiguracją panelu VCMS na środowisku testowym.
6. Dopiero po testach wykonać push do `main` oraz osobno zatwierdzone zmiany w VCMS.

## Zweryfikowane dane kontaktowe

- telefon: 572 219 872,
- e-mail: summerholiday@onet.pl,
- adres: Traugutta 51, 44-370 Pszów,
- mapa: zapytanie Google Maps bez klucza API.

## Testy

- TypeScript,
- ESLint,
- produkcyjny build Next.js,
- Playwright: desktop i mobile,
- kontrola błędów konsoli podczas wykonywania screenshotów.
