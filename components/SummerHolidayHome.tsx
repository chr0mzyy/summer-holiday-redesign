"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Camera,
  CalendarDays,
  Check,
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
import { FormEvent, useState } from "react";

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

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand--light" : ""}`} href="#top" aria-label="Summer Holiday — strona główna">
      <span className="brand__sun" aria-hidden="true"><span /></span>
      <span className="brand__copy">
        <strong>SUMMER</strong>
        <span>HOLIDAY</span>
      </span>
      <span className="brand__rule" aria-hidden="true" />
      <small>BIURO PODRÓŻY</small>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Oferty", "#oferty"],
    ["Kierunki", "#kierunki"],
    ["Dlaczego my", "#dlaczego-my"],
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
        <span className="demo-badge" title="Formularz nie jest połączony z MerlinX">Demo UI</span>
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
              <span>Aktualne ceny, dostępność i rezerwacje obsługuje obecny system VCMS/MerlinX.</span>
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
              <a className="button" href="#wyszukiwarka">Zaplanuj wakacje <ArrowRight size={17} /></a>
              <a className="text-link text-link--light" href="#kierunki">Odkryj kierunki <span aria-hidden="true">↘</span></a>
            </div>
          </motion.div>
        </div>
        <div className="hero__side-label" aria-hidden="true">MEDITERRANEAN · SUMMER 2026</div>
      </section>

      <div className="shell search-wrap"><SearchPanel /></div>

      <section className="trust-strip" aria-label="Korzyści">
        <div className="shell trust-strip__inner">
          <span><ShieldCheck /> Bezpieczna rezerwacja w MerlinX*</span>
          <span><Phone /> Pomoc doradcy przez telefon</span>
          <span><Compass /> Oferty wielu touroperatorów</span>
          <small>* Po docelowym wdrożeniu integracji VCMS</small>
        </div>
      </section>

      <section id="oferty" className="section offers-section">
        <div className="shell">
          <motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={reveal}>
            <div><span className="eyebrow eyebrow--blue">Wybrane dla Ciebie</span><h2>Oferty, które<br /><em>zostają w pamięci</em></h2></div>
            <div><p>Inspiracje prezentowane w tej wersji są demonstracyjne. Aktualna cena i dostępność są zawsze potwierdzane w MerlinX.</p><a className="text-link" href={LIVE_SITE} target="_blank" rel="noreferrer">Zobacz aktualne oferty <ArrowRight size={16} /></a></div>
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

      <section id="dlaczego-my" className="section concierge-section">
        <div className="shell concierge-grid">
          <motion.div className="concierge-visual" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Image src="/images/hero-mediterranean.webp" alt="Widok na śródziemnomorską zatokę" fill sizes="(max-width: 900px) 100vw, 45vw" className="cover" />
            <div className="concierge-float glass"><span>Porozmawiajmy</span><strong>605 425 620</strong><a href="tel:+48605425620"><Phone size={17} /> Zadzwoń do nas</a></div>
          </motion.div>
          <motion.div className="concierge-copy" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="eyebrow eyebrow--blue">Summer Holiday concierge</span>
            <h2>Technologia wybiera.<br /><em>Człowiek doradza.</em></h2>
            <p>Wyszukiwarka pomaga zawęzić wybór, a rozmowa pozwala dopasować szczegóły — od lotniska i wyżywienia po rytm całego wyjazdu.</p>
            <ul>
              <li><span><Check /></span><div><strong>Aktualność potwierdzana w systemie</strong><small>Cena i dostępność są weryfikowane w MerlinX przed rezerwacją.</small></div></li>
              <li><span><Check /></span><div><strong>Jasna ścieżka wyboru</strong><small>Wyszukiwanie, porównanie, szczegóły i rezerwacja bez wizualnego chaosu.</small></div></li>
              <li><span><Check /></span><div><strong>Kontakt, kiedy go potrzebujesz</strong><small>Dwa numery telefonu i szybki dostęp do doradcy.</small></div></li>
            </ul>
            <a className="button button--ink" href="tel:+48572219872">Porozmawiaj z doradcą <ArrowRight size={17} /></a>
          </motion.div>
        </div>
      </section>

      <section className="section process-section" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading section-heading--center"><span className="eyebrow eyebrow--gold">Prosty plan</span><h2 id="process-title">Od marzenia<br /><em>do walizki</em></h2></div>
          <div className="process-grid">
            {[ ["01", "Znajdź", "Wybierz kierunek, termin i liczbę podróżnych."], ["02", "Porównaj", "Sprawdź standard, wyżywienie i warunki oferty."], ["03", "Zarezerwuj", "Potwierdź dostępność i przejdź bezpieczną ścieżkę MerlinX."] ].map(([number, title, body]) => (
              <div className="process-card glass" key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></div>
            ))}
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
        <div className="shell footer-grid">
          <div className="footer-brand"><BrandMark light /><p>Wakacje zaczynają się od dobrego planu i spokojnej głowy.</p><div className="socials"><a href="https://www.facebook.com/summerholidaypolska" target="_blank" rel="noreferrer" aria-label="Summer Holiday na Facebooku"><b aria-hidden="true">f</b></a><span role="img" aria-label="Instagram — profil do uzupełnienia"><Camera /></span></div></div>
          <div><h3>Odkrywaj</h3><a href="#oferty">Oferty</a><a href="#kierunki">Kierunki</a><a href={LIVE_SITE} target="_blank" rel="noreferrer">Aktualna wyszukiwarka</a></div>
          <div><h3>Summer Holiday</h3><a href={`${LIVE_SITE}aboutus`} target="_blank" rel="noreferrer">O nas</a><a href={`${LIVE_SITE}contact`} target="_blank" rel="noreferrer">Kontakt</a><a href={`${LIVE_SITE}privacyrodo`} target="_blank" rel="noreferrer">Polityka prywatności</a></div>
          <div><h3>Kontakt</h3><a href="tel:+48572219872"><Phone /> 572 219 872</a><a href="tel:+48605425620"><Phone /> 605 425 620</a><a href="mailto:summerholiday@onet.pl"><Mail /> summerholiday@onet.pl</a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Summer Holiday — koncepcja redesignu</span><span>Demo UI · bez aktywnej integracji MerlinX</span></div>
      </footer>
    </main>
  );
}

export default App;
