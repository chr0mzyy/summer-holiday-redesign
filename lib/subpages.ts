export type AudiencePage = {
  slug: string;
  title: string;
  eyebrow: string;
  lead: string;
  image: string;
  highlights: string[];
  process: string[];
};

export const audiencePages: AudiencePage[] = [
  {
    slug: "rodziny-z-dziecmi",
    title: "Wakacje dla rodzin z dziećmi",
    eyebrow: "Top 5 hoteli",
    lead:
      "Rodzinny wyjazd powinien dawać odpoczynek także rodzicom. Pomagamy wybrać hotel, transport i udogodnienia dopasowane do wieku dzieci.",
    image: "/images/destination-mallorca.webp",
    highlights: ["Aquaparki i animacje", "Rodzinne pokoje", "Krótki transfer", "Wyżywienie dopasowane do dzieci"],
    process: ["Poznajemy potrzeby rodziny", "Porównujemy sprawdzone obiekty", "Potwierdzamy cenę i usługi dodatkowe"],
  },
  {
    slug: "dla-par",
    title: "Wakacje dla par",
    eyebrow: "Tylko we dwoje",
    lead:
      "Butikowe hotele, spokojne zatoki i miejsca, w których łatwo zwolnić. Dobieramy podróż do Waszego rytmu i okazji.",
    image: "/images/destination-greece.webp",
    highlights: ["Hotele adults only", "Romantyczne lokalizacje", "City break lub plaża", "Podróże poślubne"],
    process: ["Wybieramy klimat wyjazdu", "Porównujemy standard i położenie", "Dopasowujemy szczegóły podróży"],
  },
  {
    slug: "wyjazdy-firmowe",
    title: "Wyjazdy firmowe",
    eyebrow: "Dla zespołów",
    lead:
      "Organizujemy wyjazdy integracyjne, incentive i spotkania firmowe z jednym, czytelnym planem i osobą prowadzącą rezerwację.",
    image: "/images/destination-amalfi.webp",
    highlights: ["Wyjazdy integracyjne", "Transport grupowy", "Sale i zaplecze hotelowe", "Program dopasowany do zespołu"],
    process: ["Ustalamy cel i liczbę osób", "Budujemy warianty programu", "Koordynujemy rezerwację grupową"],
  },
  {
    slug: "po-calym-swiecie",
    title: "Podróże po całym świecie",
    eyebrow: "Top 5 wycieczek",
    lead:
      "Od śródziemnomorskich wysp po dalekie kierunki. Przygotowujemy inspiracje, a potem wspólnie wybieramy najlepszy wariant.",
    image: "/images/hero-mediterranean.webp",
    highlights: ["Egzotyczne kierunki", "Wycieczki objazdowe", "Sprawdzeni organizatorzy", "Wsparcie przed podróżą"],
    process: ["Rozmawiamy o marzeniu", "Sprawdzamy realne możliwości", "Potwierdzamy pełen zakres świadczeń"],
  },
  {
    slug: "kolonie",
    title: "Kolonie dla dzieci i młodzieży",
    eyebrow: "Bezpieczna przygoda",
    lead:
      "Pomagamy znaleźć wypoczynek dopasowany do wieku, zainteresowań i samodzielności uczestnika.",
    image: "/images/destination-greece.webp",
    highlights: ["Program dopasowany do wieku", "Zweryfikowany organizator", "Transport i opieka", "Jasne informacje dla rodziców"],
    process: ["Poznajemy wiek i zainteresowania", "Porównujemy programy", "Sprawdzamy warunki i dokumenty"],
  },
  {
    slug: "szyte-na-miare",
    title: "Wakacje szyte na miarę",
    eyebrow: "Wyjątkowy klient",
    lead:
      "Dla firmy, grupy albo podróżnika z konkretną wizją. Łączymy elementy wyjazdu w spójny plan przygotowany indywidualnie.",
    image: "/images/destination-mallorca.webp",
    highlights: ["Indywidualny scenariusz", "Nietypowe terminy i trasy", "Dodatkowe usługi", "Osobiste wsparcie doradcy"],
    process: ["Zbieramy wymagania", "Tworzymy dopasowaną propozycję", "Prowadzimy przez wszystkie ustalenia"],
  },
];

export function getAudiencePage(slug: string) {
  return audiencePages.find((page) => page.slug === slug);
}
