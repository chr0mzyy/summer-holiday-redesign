# Adaptacja projektu w VCMS gate

Ten katalog zawiera bezpieczny punkt startowy do przeniesienia layoutu na oficjalny wariant VCMS/VIBE gate. Nie zawiera pakietu MerlinX, identyfikatora afiliatu ani ID widgetów.

## Wymagania

- aktywowana przez MerlinX opcja gate,
- pakiet zawierający `rwdGate.php` i `.htaccess`,
- PHP zgodne z aktualnymi wymaganiami dostawcy,
- identyfikator afiliatu,
- ID widgetów z panelu VCMS,
- środowisko testowe/staging.

## Procedura

1. Skopiuj dostarczone przez MerlinX pliki `rwdGate.php` i `.htaccess` do projektu PHP zgodnie z oficjalną instrukcją.
2. Skopiuj `index.php.example` jako `index.php`.
3. Skopiuj katalog `assets` do publicznego katalogu `/assets`; zawiera oficjalne logo użyte w nagłówku.
4. Zastąp `VCMS_AFFILIATE_ID_FROM_PANEL` rzeczywistym identyfikatorem, ale nie commituj go do publicznego repozytorium.
5. Zastąp przykładową tablicę widgetów ID pochodzącymi z panelu VCMS.
6. Zachowaj kolejność: obsługa raw result → `HEAD` → widgety/layout → `BODY` → `FOOTER`.
7. Dodaj `summer-holiday-vcms.css` po CSS VCMS i zweryfikuj selektory w podglądzie panelu.
8. Uzupełnij obrazy i teksty w panelu VCMS, aby pozostawały edytowalne przez zespół.
9. Przetestuj całą ścieżkę rezerwacji na stagingu.

## Ważne

VCMS pozwala dodać własny CSS, ale klasy i ID wygenerowanych widgetów zależą od konfiguracji konta. Dlatego arkusz celowo używa prefiksu `.sh-vcms` i niskiego poziomu specyficzności. Po otrzymaniu stagingu należy dopasować tylko potwierdzone selektory — bez zgadywania nazw wewnętrznych klas MerlinX.
