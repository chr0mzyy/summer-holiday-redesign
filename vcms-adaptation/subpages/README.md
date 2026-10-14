# Podstrony — przygotowanie do późniejszego VCMS

Ten katalog opisuje mapowanie przygotowanych widoków Next.js na przyszłe podstrony VCMS. Nie zawiera danych logowania, identyfikatorów widgetów ani zmian wykonanych w panelu.

## Mapowanie

- `/o-nas` → istniejąca strona „O nas”,
- `/kontakt` → istniejąca strona kontaktowa i formularz VCMS,
- `/polityka-prywatnosci` → obowiązująca treść prawna z VCMS,
- `/dla-kogo/*` → nowe strony treściowe lub moduły CMS, zależnie od możliwości panelu.

## Czego nie robić bez zgody

- nie zapisywać konfiguracji panelu,
- nie podmieniać aktywnego szablonu,
- nie edytować produkcyjnych formularzy,
- nie zmieniać linków rezerwacyjnych,
- nie publikować szkiców,
- nie podłączać domeny ani DNS.

## Procedura po zgodzie właściciela

1. Wykonać kopię aktualnej konfiguracji VCMS.
2. Sprawdzić na podglądzie, czy podstrony są edytowalnymi stronami treściowymi, czy częścią szablonu.
3. Przenieść wyłącznie zaakceptowany HTML i CSS z prefiksem klas `sh-`.
4. Formularz podłączyć do istniejącego, potwierdzonego mechanizmu VCMS — bez własnych endpointów.
5. Sprawdzić stronę testową na telefonie i desktopie.
6. Opublikować dopiero po końcowej akceptacji.
