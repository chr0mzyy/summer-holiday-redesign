# Integracja MerlinX / VCMS — ustalenia techniczne

Data researchu: 13 października 2026.

## Co udało się potwierdzić

Obecna strona `biurosummerholiday.pl` korzysta z komponentów VCMS: wyszukiwarki wczasów, wyników, kart ofertowych, szczegółów, schowka i ścieżki rezerwacji. Dane ofertowe są pobierane z infrastruktury MerlinX, a ceny mogą zmieniać się dynamicznie.

Publiczna dokumentacja MerlinX potwierdza trzy modele:

### 1. Vacations IBE w iframe

Panel VCMS generuje indywidualny „Link Iframe”. Może on zostać osadzony w niezależnej stronie. To najszybszy wariant, ale ogranicza pełną kontrolę nad wyglądem i częścią zachowania interfejsu.

### 2. VIBE/VCMS gate

Gate jest oficjalnie opisany jako rozwiązanie oparte o PHP. MerlinX dostarcza:

- pliki `.htaccess` i `rwdGate.php`,
- identyfikator afiliatu widoczny w panelu VCMS,
- ID widgetów,
- sekcje `HEAD`, `BODY` i `FOOTER`.

Sekcja `BODY` odpowiada za dalsze kroki: listę wyników, szczegóły, rezerwację i potwierdzenie. To wariant rekomendowany do najwierniejszej adaptacji przygotowanego designu, ponieważ zachowuje działanie systemu i pozwala otoczyć jego komponenty własnym layoutem oraz CSS.

### 3. MWS / MDS Web Service

MWS rozdziela operacje na wyszukiwanie/listowanie oraz sprawdzanie dostępności i rezerwację. Dokumentacja wymienia m.in. regiony, filtry, grupy, oferty, szczegóły, sprawdzenie dostępności i rezerwację. Nie ma jednak podstaw, by zakładać, że obecna umowa Summer Holiday obejmuje dostęp MWS dla niezależnego frontendu.

## Wniosek dla Next.js

Nie wdrożono własnego klienta API. Publiczna dokumentacja nie podaje danych autoryzacyjnych ani nie potwierdza dostępu przypisanego do tego biura. Bez umowy, danych środowiska oraz potwierdzenia dozwolonego modelu integracji tworzenie endpointów byłoby zgadywaniem i ryzykiem dla rezerwacji.

Możliwe ścieżki:

- **Szybki preview**: Next.js + iframe VCMS z indywidualnym URL z panelu.
- **Docelowy redesign bez utraty funkcji**: hosting PHP zgodny z wymaganiami gate, layout i CSS z katalogu `vcms-adaptation`, komponenty VCMS wstrzykiwane do odpowiednich miejsc.
- **Headless Next.js**: dopiero po zakupie/aktywacji MWS i uzyskaniu dokumentacji autoryzacji dla konkretnego konta. Warstwa serwerowa Next.js powinna wtedy działać jako BFF, aby tajne dane nigdy nie trafiały do przeglądarki.

## Dane wymagane od właściciela konta VCMS

1. Potwierdzenie aktywnej usługi: IBE iframe, gate lub MWS.
2. W przypadku iframe: wygenerowany Link Iframe.
3. W przypadku gate: oryginalny pakiet instalacyjny, identyfikator afiliatu i lista ID widgetów.
4. W przypadku MWS: adres środowiska, mechanizm autoryzacji, zakres operacji i dane testowe przekazane bezpiecznym kanałem.
5. Dostęp do kopii/stagingu VCMS, nie do produkcji, na czas wdrożenia i testów.

## Testy wymagane przed publikacją produkcyjną

- pełna ścieżka dla wszystkich typów transportu,
- filtry, sortowanie, liczba uczestników i wiek dzieci,
- aktualizacja ceny i dostępności,
- szczegóły hotelu, pokoje i świadczenia,
- schowek ofert,
- rezerwacja opcjonalna/online zgodnie z konfiguracją biura,
- wiadomości e-mail i dokumenty,
- zgody RODO i CAPTCHA,
- płatności, jeśli są aktywne,
- błędy operatora, timeouty i zmiana ceny,
- wersje językowe i walutowe.

## Źródła

- [Podłączenie Vacations IBE: iframe i gate](https://www.merlinx.pl/dla-biur-podrozy/vibe-podl/)
- [Dokumentacja konfiguracji VCMS i własnego CSS](https://www.merlinx.pl/dla-biur-podrozy/vcms-dokumentacja/)
- [Dokumentacja MDS Web Service](https://docu.mdsws.merlinx.pl/mdsws)
- [Portal dokumentacji MerlinX](https://docs.merlinx.pl/)
