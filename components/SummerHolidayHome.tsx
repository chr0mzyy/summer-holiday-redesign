"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  Camera,
  CalendarDays,
  ChevronDown,
  Compass,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plane,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { FormEvent, useRef, useState } from "react";

const LIVE_SITE = "https://biurosummerholiday.pl/";

const offers = [
  {
    country: "Grecja",
    place: "Santorini",
    label: "Wybór na romantyczny wyjazd",
    meta: "7 nocy · śniadania · wylot z Katowic",
    price: "od 3 290 zł",
    image: "/images/destination-greece.webp",
  },
  {
    country: "Hiszpania",
    place: "Majorka",
    label: "Zatoki i butikowe hotele",
    meta: "7 nocy · all inclusive · wylot z Krakowa",
    price: "od 2 790 zł",
    image: "/images/destination-mallorca.webp",
  },
  {
    country: "Włochy",
    place: "Wybrzeże Amalfi",
    label: "Smak la dolce vita",
    meta: "5 nocy · śniadania · wylot z Warszawy",
    price: "od 3 890 zł",
    image: "/images/destination-amalfi.webp",
  },
];

const destinations = [
  { name: "Wyspy Grecji", eyebrow: "Biel i błękit", image: "/images/destination-greece.webp" },
  { name: "Słoneczna Majorka", eyebrow: "Ukryte zatoki", image: "/images/destination-mallorca.webp" },
  { name: "Włoskie wybrzeże", eyebrow: "Smak i zachwyt", image: "/images/destination-amalfi.webp" },
];

const tripStyles = [
  { title: "Rodziny z dziećmi", eyebrow: "Top 5 hoteli", copy: "Sprawdzone udogodnienia, aquaparki i komfort dla całej rodziny.", image: "/images/destination-mallorca.webp" },
  { title: "Wakacje dla par", eyebrow: "Tylko we dwoje", copy: "Butikowe hotele, spokojne zatoki i miejsca stworzone na wspólny czas.", image: "/images/destination-greece.webp" },
  { title: "Wyjazdy firmowe", eyebrow: "Dla zespołów", copy: "Podróże integracyjne i firmowe dopasowane do celu, terminu i budżetu.", image: "/images/destination-amalfi.webp" },
  { title: "Po całym świecie", eyebrow: "Top 5 wycieczek", copy: "Najciekawsze kierunki i gotowe inspiracje na dalszą podróż.", image: "/images/hero-mediterranean.webp" },
  { title: "Kolonie", eyebrow: "Dla dzieci i młodzieży", copy: "Wypoczynek pełen przygód, nowych znajomości i dobrych wspomnień.", image: "/images/destination-greece.webp" },
  { title: "Szyte na miarę", eyebrow: "Wyjątkowy klient", copy: "Indywidualny plan dla firmy, grupy lub podróżnika z wyjątkową wizją.", image: "/images/destination-mallorca.webp" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand--light" : ""}`} href="#top" aria-label="Summer Holiday — strona główna">
      <Image
        className="brand__logo"
        src="/brand/summer-holiday-logo-transparent.webp"
        alt="Summer Holiday — Biuro Podróży"
        width={1075}
        height={635}
        priority={!light}
        sizes="(max-width: 800px) 130px, 148px"
      />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Oferty", "#oferty"],
    ["Kierunki", "#kierunki"],
    ["Dla kogo", "#dla-kogo"],
    ["Kontakt", "#kontakt"],
  ];

  return (
    <header className="site-header">
      <div className="shell header-inner glass glass--header">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Nawigacja główna">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="phone-link" href="tel:+48572219872" aria-label="Zadzwoń: 572 219 872">
            <Phone size={17} aria-hidden="true" />
            <span>572 219 872</span>
          </a>
          <a className="button button--small" href="#wyszukiwarka">Znajdź wyjazd</a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav glass"
            aria-label="Nawigacja mobilna"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight size={16} /></a>
            ))}
            <a href="tel:+48572219872"><Phone size={17} /> 572 219 872</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function SearchPanel() {
  const [tab, setTab] = useState("Samolot");
  const [advanced, setAdvanced] = useState(false);
  const [notice, setNotice] = useState(false);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(true);
  }

  return (
    <motion.section
      id="wyszukiwarka"
      className="search-card glass glass--strong"
      aria-labelledby="search-title"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.75 }}
    >
      <div className="search-card__top">
        <div>
          <span className="eyebrow eyebrow--blue"><Sparkles size={14} /> Zacznij swoją podróż</span>
          <h2 id="search-title">Dokąd lecisz tego lata?</h2>
        </div>
        <span className="demo-badge" title="Formularz demonstracyjny — docelowe połączenie z systemem rezerwacyjnym">Demo UI</span>
      </div>

      <div className="travel-tabs" role="tablist" aria-label="Rodzaj dojazdu">
        {["Samolot", "Autokar", "Dojazd własny"].map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={tab === item}
            className={tab === item ? "is-active" : ""}
            onClick={() => setTab(item)}
          >
            {item === "Samolot" && <Plane size={16} />}{item}
          </button>
        ))}
      </div>

      <form onSubmit={submitSearch}>
        <div className="search-grid">
          <label className="field field--destination">
            <span>Cel podróży</span>
            <span className="field__control"><MapPin aria-hidden="true" /><input name="destination" placeholder="Grecja, Hiszpania…" /></span>
          </label>
          <label className="field">
            <span>Podróż z</span>
            <span className="field__control"><Plane aria-hidden="true" /><select name="departure" defaultValue="Katowice"><option>Katowice</option><option>Kraków</option><option>Warszawa</option><option>Wrocław</option></select><ChevronDown /></span>
          </label>
          <label className="field">
            <span>Termin</span>
            <span className="field__control"><CalendarDays aria-hidden="true" /><input name="date" type="text" defaultValue="15.06 — 30.09" readOnly /><ChevronDown /></span>
          </label>
          <label className="field">
            <span>Podróżni</span>
            <span className="field__control"><Users aria-hidden="true" /><select name="travellers" defaultValue="2 dorosłych"><option>2 dorosłych</option><option>2 dorosłych, 1 dziecko</option><option>2 dorosłych, 2 dzieci</option><option>1 dorosły</option></select><ChevronDown /></span>
          </label>
          <button className="search-submit" type="submit"><Search aria-hidden="true" /><span>Szukaj</span></button>
        </div>
        <button className="advanced-trigger" type="button" aria-expanded={advanced} onClick={() => setAdvanced((value) => !value)}>
          <SlidersHorizontal size={16} /> Więcej opcji <ChevronDown className={advanced ? "rotate" : ""} size={15} />
        </button>
        <AnimatePresence initial={false}>
          {advanced && (
            <motion.div className="advanced-fields" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
              <label className="field"><span>Wyżywienie</span><span className="field__control"><select defaultValue="All inclusive"><option>All inclusive</option><option>Śniadania</option><option>Bez wyżywienia</option></select><ChevronDown /></span></label>
              <label className="field"><span>Standard</span><span className="field__control"><select defaultValue="4–5 gwiazdek"><option>4–5 gwiazdek</option><option>3+ gwiazdki</option><option>Dowolny</option></select><ChevronDown /></span></label>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <AnimatePresence>
        {notice && (
          <motion.div className="search-notice" role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <ShieldCheck aria-hidden="true" />
            <div>
              <strong>To demonstracja nowego interfejsu.</strong>
              <span>Aktualne ceny, dostępność i rezerwacje obsługuje system rezerwacyjny.</span>
            </div>
            <a href={LIVE_SITE} target="_blank" rel="noreferrer">Otwórz aktualną wyszukiwarkę <ExternalLink size={14} /></a>
            <button type="button" onClick={() => setNotice(false)} aria-label="Zamknij komunikat"><X size={16} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function OfferCard({ offer, index }: { offer: (typeof offers)[number]; index: number }) {
  const [saved, setSaved] = useState(false);
  return (
    <motion.article className="offer-card" variants={reveal} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
      <div className="offer-card__image">
        <Image src={offer.image} alt={`${offer.place}, ${offer.country}`} fill sizes="(max-width: 768px) 90vw, 33vw" className="cover" />
        <span className="offer-number">0{index + 1}</span>
        <button type="button" className={`save-button ${saved ? "is-saved" : ""}`} aria-label={saved ? "Usuń z zapisanych" : "Zapisz ofertę"} aria-pressed={saved} onClick={() => setSaved(!saved)}>
          <Heart fill={saved ? "currentColor" : "none"} />
        </button>
        <span className="offer-tag"><Sparkles size={13} /> {offer.label}</span>
      </div>
      <div className="offer-card__body">
        <div><span className="eyebrow">{offer.country}</span><h3>{offer.place}</h3></div>
        <div className="rating" role="img" aria-label="Ocena demonstracyjna: 5 na 5"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
        <p>{offer.meta}</p>
        <div className="offer-card__footer"><div><small>Cena demonstracyjna</small><strong>{offer.price}</strong><span>/ os.</span></div><a href={LIVE_SITE} target="_blank" rel="noreferrer" aria-label={`Sprawdź ${offer.place} w aktualnym systemie`}><ArrowRight /></a></div>
      </div>
    </motion.article>
  );
}

function FlightTransition({ reducedMotion }: { reducedMotion: boolean | null }) {
  const transitionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: transitionRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-18vw", "108vw"]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [24, -16, -34]);
  const rotateX = useTransform(scrollYProgress, [0, 0.55, 1], [38, 8, -24]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-12, -3, 8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.72, 1.08, 0.82]);

  return (
    <section ref={transitionRef} className="flight-transition" aria-hidden="true">
      <div className="flight-transition__glow" />
      <motion.div className="flight-plane" style={reducedMotion ? { x: "50vw" } : { x, y, rotateX, rotateZ, scale }}>
        <span className="flight-plane__trail" />
        <span className="flight-plane__body"><Plane /></span>
        <span className="flight-plane__shadow" />
      </motion.div>
    </section>
  );
}

function App() {
  const reducedMotion = useReducedMotion();
  return (
    <main id="top">
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <Image src="/images/hero-mediterranean.webp" alt="Luksusowy taras z basenem nad Morzem Śródziemnym" fill priority sizes="100vw" className="hero__image" />
        <div className="hero__veil" />
        <div className="hero__orb hero__orb--one" aria-hidden="true" />
        <div className="hero__orb hero__orb--two" aria-hidden="true" />
        <div className="shell hero__content">
          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="hero__kicker"><span /> Podróże w pięknym stylu</span>
            <h1 id="hero-title">Twoje lato.<br /><em>Pięknie zaplanowane.</em></h1>
            <p>Starannie wybrane kierunki, prawdziwe wsparcie i wakacje dopasowane do Twojego rytmu.</p>
            <div className="hero__actions">
              <a className="button button--hero" href="#wyszukiwarka">
                <span><strong>Zaplanuj wakacje</strong><small>Znajdź wyjazd dla siebie</small></span>
                <ArrowRight size={20} />
              </a>
              <a className="text-link text-link--light" href="#kierunki">Odkryj kierunki <span aria-hidden="true">↘</span></a>
            </div>
          </motion.div>
        </div>
        <div className="hero__side-label" aria-hidden="true">MEDITERRANEAN · SUMMER 2026</div>
      </section>

      <div className="shell search-wrap"><SearchPanel /></div>

      <section className="trust-strip" aria-label="Korzyści">
        <div className="shell trust-strip__inner">
          <span><ShieldCheck /> Bezpieczna rezerwacja w systemie rezerwacyjnym</span>
          <span><Phone /> Pomoc doradcy przez telefon</span>
          <span><Compass /> Oferty wielu touroperatorów</span>
          <small>Ceny i dostępność potwierdzamy przed rezerwacją</small>
        </div>
      </section>

      <FlightTransition reducedMotion={reducedMotion} />

      <section id="oferty" className="section offers-section">
        <div className="shell">
          <motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={reveal}>
            <div><span className="eyebrow eyebrow--blue">Wybrane dla Ciebie</span><h2>Oferty, które<br /><em>zostają w pamięci</em></h2></div>
            <div><p>Inspiracje prezentowane w tej wersji są demonstracyjne. Aktualne ceny i dostępność są zawsze potwierdzane w systemie rezerwacyjnym i aktualizowane w czasie rzeczywistym.</p><a className="text-link" href={LIVE_SITE} target="_blank" rel="noreferrer">Zobacz aktualne oferty <ArrowRight size={16} /></a></div>
          </motion.div>
          <motion.div className="offers-grid" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} transition={{ staggerChildren: 0.12 }}>
            {offers.map((offer, index) => <OfferCard key={offer.place} offer={offer} index={index} />)}
          </motion.div>
        </div>
      </section>

      <section id="kierunki" className="section destinations-section">
        <div className="shell">
          <div className="section-heading section-heading--center">
            <span className="eyebrow eyebrow--gold">Poczuj miejsce</span>
            <h2>Morze Śródziemne<br /><em>na wyciągnięcie ręki</em></h2>
          </div>
          <div className="destination-grid">
            {destinations.map((destination, index) => (
              <motion.a key={destination.name} className={`destination-card destination-card--${index + 1}`} href={LIVE_SITE} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Image src={destination.image} alt={destination.name} fill sizes="(max-width: 800px) 90vw, 40vw" className="cover" />
                <span className="destination-card__wash" />
                <div><span>{destination.eyebrow}</span><h3>{destination.name}</h3><span className="destination-card__link">Odkryj <ArrowRight /></span></div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="dla-kogo" className="section audience-section" aria-labelledby="audience-title">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow eyebrow--blue">Wakacje dla Ciebie</span><h2 id="audience-title">Znajdź wyjazd<br /><em>dla swojej historii</em></h2></div>
            <div><p>Od rodzinnego hotelu po podróż szytą na miarę — wybierz kategorię, a my pomożemy dopasować szczegóły.</p><a className="text-link" href="tel:+48572219872">Zapytaj o dostępność <Phone size={16} /></a></div>
          </div>
          <div className="audience-grid">
            {tripStyles.map((trip, index) => (
              <motion.a
                className="audience-card"
                href={LIVE_SITE}
                target="_blank"
                rel="noreferrer"
                key={trip.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Image src={trip.image} alt="" fill sizes="(max-width: 800px) 90vw, 33vw" className="cover" />
                <span className="audience-card__wash" />
                <span className="audience-card__number">0{index + 1}</span>
                <div><span>{trip.eyebrow}</span><h3>{trip.title}</h3><p>{trip.copy}</p><span className="audience-card__link">Zobacz propozycje <ArrowRight /></span></div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="dlaczego-my" className="section social-section" aria-labelledby="social-title">
        <div className="shell">
          <motion.div className="social-heading" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={reveal}>
            <div>
              <span className="eyebrow eyebrow--blue">Podróżuj razem z nami</span>
              <h2 id="social-title">Zobacz, czym żyje<br /><em>Summer Holiday</em></h2>
            </div>
            <p>Wakacyjne inspiracje, nowe kierunki i kontakt z naszym biurem — także wtedy, gdy dopiero zaczynasz marzyć o wyjeździe.</p>
          </motion.div>

          <div className="social-stage">
            <motion.a
              className="social-feature"
              href="https://www.facebook.com/summerholidaypolska"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              aria-label="Odwiedź Summer Holiday na Facebooku"
            >
              <Image src="/images/destination-mallorca.webp" alt="Słoneczne wybrzeże Majorki" fill sizes="(max-width: 800px) 100vw, 58vw" className="cover" />
              <span className="social-feature__wash" />
              <div className="social-feature__content">
                <span className="social-platform"><b aria-hidden="true">f</b> Facebook</span>
                <h3>Inspiracje, kierunki<br />i wakacyjne nowości.</h3>
                <p>Dołącz do społeczności Summer Holiday i bądź bliżej kolejnej podróży.</p>
                <span className="social-feature__link">Odwiedź profil <ArrowRight /></span>
              </div>
            </motion.a>

            <div className="social-side">
              <motion.figure className="social-photo" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Image src="/images/destination-greece.webp" alt="Białe domy nad błękitnym morzem w Grecji" fill sizes="(max-width: 800px) 100vw, 34vw" className="cover" />
                <figcaption><span>#summerholiday</span><strong>Chwile, do których chce się wracać</strong></figcaption>
              </motion.figure>

              <motion.div className="social-connect glass" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
                <span className="social-connect__icon"><Camera /></span>
                <div><span>Instagram</span><strong>Podróżnicze kadry i relacje</strong><small>Profil do podłączenia po przekazaniu zweryfikowanego adresu.</small></div>
                <span className="social-connect__status">Wkrótce</span>
              </motion.div>

              <motion.a className="social-message" href="mailto:summerholiday@onet.pl" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.14 }}>
                <span><Mail /></span><div><small>Masz pytanie?</small><strong>Napisz do nas bezpośrednio</strong></div><ArrowRight />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading section-heading--center"><span className="eyebrow eyebrow--gold">Prosty plan</span><h2 id="process-title">Od marzenia<br /><em>do walizki</em></h2></div>
          <div className="process-grid">
            {[ ["01", "Wyszukaj", "Wybierz kierunek, termin i liczbę podróżnych."], ["02", "Porównaj", "Skontaktuj się z nami, aby potwierdzić cenę, dostępność oraz usługi dodatkowe — w tym bagaż i transfer."], ["03", "Zarezerwuj", "Tylko jeden krok dzieli Cię od Twoich wymarzonych wakacji."] ].map(([number, title, body]) => (
              <div className="process-card glass" key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></div>
            ))}
          </div>
          <div className="process-contact glass">
            <div><span className="eyebrow eyebrow--blue">Sprawdź dostępność</span><strong>Potwierdzimy cenę, bagaż, transfer i wszystkie usługi dodatkowe.</strong></div>
            <a className="button" href="tel:+48572219872"><Phone size={17} /> 572 219 872</a>
          </div>
        </div>
      </section>

      <section id="kontakt" className="cta-section">
        <div className="shell cta-card">
          <div><span className="eyebrow eyebrow--gold">Twój następny rozdział</span><h2>Dokąd zabierze Cię<br /><em>to lato?</em></h2></div>
          <div><p>Opowiedz nam o swoim wymarzonym wyjeździe. Pomożemy znaleźć wariant dopasowany do Ciebie.</p><div className="cta-actions"><a className="button button--light" href="tel:+48572219872"><Phone size={17} /> Zadzwoń</a><a className="text-link text-link--light" href="mailto:summerholiday@onet.pl"><Mail size={16} /> Napisz e-mail</a></div></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-invitation">
          <div><span className="eyebrow">Zaczynamy?</span><h2>Twoja następna podróż<br /><em>może zacząć się dziś.</em></h2></div>
          <div><p>Powiedz nam, gdzie chcesz odpocząć. Zajmiemy się wyborem właściwej oferty i spokojnym przejściem przez rezerwację.</p><div className="footer-invitation__actions"><a className="button button--light" href="tel:+48572219872"><Phone /> 572 219 872</a><a href="mailto:summerholiday@onet.pl">Napisz wiadomość <ArrowRight /></a></div></div>
        </div>
        <div className="shell footer-grid">
          <div className="footer-brand"><BrandMark light /><p>W życiu piękne są chwile. My pomagamy zamienić je w podróż, do której wraca się pamięcią.</p><span className="footer-address"><MapPin /> Traugutta 51 · 44-370 Pszów</span><div className="socials"><a href="https://www.facebook.com/summerholidaypolska" target="_blank" rel="noreferrer" aria-label="Summer Holiday na Facebooku"><b aria-hidden="true">f</b><span>Facebook</span></a><span role="img" aria-label="Instagram — profil do podłączenia"><Camera /><span>Instagram wkrótce</span></span></div></div>
          <div className="footer-links"><h3>Odkrywaj</h3><a href="#oferty">Oferty <ArrowRight /></a><a href="#kierunki">Kierunki <ArrowRight /></a><a href={LIVE_SITE} target="_blank" rel="noreferrer">Aktualna wyszukiwarka <ExternalLink /></a></div>
          <div className="footer-links"><h3>Summer Holiday</h3><a href={`${LIVE_SITE}aboutus`} target="_blank" rel="noreferrer">O nas <ExternalLink /></a><a href={`${LIVE_SITE}contact`} target="_blank" rel="noreferrer">Kontakt <ExternalLink /></a><a href={`${LIVE_SITE}privacyrodo`} target="_blank" rel="noreferrer">Prywatność <ExternalLink /></a></div>
          <div className="footer-contact"><h3>Kontakt</h3><a href="tel:+48572219872"><span><Phone /></span><div><small>Zadzwoń</small>572 219 872</div></a><a href="mailto:summerholiday@onet.pl"><span><Mail /></span><div><small>Napisz</small>summerholiday@onet.pl</div></a></div>
        </div>
        <div className="shell footer-location">
          <div className="footer-hours">
            <span className="eyebrow">Odwiedź nasze biuro</span>
            <h3>Godziny otwarcia</h3>
            <dl>
              <div><dt>Poniedziałek</dt><dd>10:00–18:00</dd></div>
              <div><dt>Wtorek–środa</dt><dd>09:00–17:00</dd></div>
              <div><dt>Czwartek</dt><dd>10:00–18:00</dd></div>
              <div><dt>Piątek</dt><dd>09:00–17:00</dd></div>
              <div><dt>Sobota</dt><dd>10:00–14:00</dd></div>
              <div><dt>Niedziela</dt><dd>Nieczynne</dd></div>
            </dl>
            <a href="https://www.google.com/maps/search/?api=1&query=Traugutta+51%2C+44-370+Psz%C3%B3w" target="_blank" rel="noreferrer"><MapPin /> Traugutta 51, 44-370 Pszów <ExternalLink /></a>
          </div>
          <div className="footer-map">
            <iframe title="Mapa dojazdu do biura Summer Holiday" src="https://www.google.com/maps?q=Traugutta+51%2C+44-370+Psz%C3%B3w&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Summer Holiday — koncepcja redesignu</span><span>Demo UI · docelowo połączone z systemem rezerwacyjnym</span></div>
      </footer>
    </main>
  );
}

export default App;
