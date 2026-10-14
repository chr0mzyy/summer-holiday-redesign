"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { ReactNode, useState } from "react";

const navItems = [
  ["Strona główna", "/"],
  ["Oferty", "/#oferty"],
  ["Dla kogo", "/dla-kogo"],
  ["O nas", "/o-nas"],
  ["Kontakt", "/kontakt"],
];

export default function SubpageShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <main id="top" className="subpage-root">
      <header className="site-header subpage-header">
        <div className="shell header-inner glass glass--header">
          <Link className="brand" href="/" aria-label="Summer Holiday — strona główna">
            <Image
              className="brand__logo"
              src="/brand/summer-holiday-logo-transparent.webp"
              alt="Summer Holiday — Biuro Podróży"
              width={1075}
              height={635}
              priority
              sizes="(max-width: 800px) 130px, 148px"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Nawigacja główna">
            {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <div className="header-actions">
            <a className="phone-link" href="tel:+48572219872"><Phone size={17} /><span>572 219 872</span></a>
            <Link className="button button--small" href="/kontakt">Zapytaj o wyjazd</Link>
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
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              {navItems.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight /></Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {children}

      <footer id="kontakt-stopka" className="site-footer subpage-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <Link className="brand brand--light" href="/">
              <Image
                className="brand__logo"
                src="/brand/summer-holiday-logo-transparent.webp"
                alt="Summer Holiday — Biuro Podróży"
                width={1075}
                height={635}
                sizes="148px"
              />
            </Link>
            <p>W życiu piękne są chwile. My pomagamy zamienić je w podróż, do której wraca się pamięcią.</p>
            <span className="footer-address"><MapPin /> Traugutta 51 · 44-370 Pszów</span>
          </div>
          <div className="footer-links">
            <h3>Odkrywaj</h3>
            <Link href="/#oferty">Oferty <ArrowRight /></Link>
            <Link href="/#kierunki">Kierunki <ArrowRight /></Link>
            <Link href="/dla-kogo">Dla kogo <ArrowRight /></Link>
          </div>
          <div className="footer-links">
            <h3>Summer Holiday</h3>
            <Link href="/o-nas">O nas <ArrowRight /></Link>
            <Link href="/kontakt">Kontakt <ArrowRight /></Link>
            <Link href="/polityka-prywatnosci">Prywatność <ArrowRight /></Link>
          </div>
          <div className="footer-contact">
            <h3>Kontakt</h3>
            <a href="tel:+48572219872"><span><Phone /></span><div><small>Zadzwoń</small>572 219 872</div></a>
            <a href="mailto:summerholiday@onet.pl"><span><Mail /></span><div><small>Napisz</small>summerholiday@onet.pl</div></a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Summer Holiday</span>
          <span>Biuro podróży · Traugutta 51 · 44-370 Pszów</span>
        </div>
      </footer>
    </main>
  );
}
