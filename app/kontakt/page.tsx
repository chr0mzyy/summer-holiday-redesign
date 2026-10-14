import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import ContactMailForm from "@/components/ContactMailForm";
import SubpageShell from "@/components/SubpageShell";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Skontaktuj się z biurem podróży Summer Holiday w Pszowie.",
};

export default function ContactPage() {
  return (
    <SubpageShell>
      <section className="subpage-hero subpage-hero--compact">
        <div className="shell subpage-hero__content">
          <span className="eyebrow eyebrow--blue">Jesteśmy blisko</span>
          <h1>Porozmawiajmy<br /><em>o Twoich wakacjach.</em></h1>
          <p>Zadzwoń, napisz albo odwiedź nas w biurze. Wspólnie sprawdzimy dostępność, cenę i szczegóły wyjazdu.</p>
        </div>
      </section>

      <section className="subpage-section contact-page">
        <div className="shell contact-layout">
          <div className="contact-details">
            <a href="tel:+48572219872"><span><Phone /></span><div><small>Telefon</small><strong>572 219 872</strong></div></a>
            <a href="mailto:summerholiday@onet.pl"><span><Mail /></span><div><small>E-mail</small><strong>summerholiday@onet.pl</strong></div></a>
            <a href="https://www.google.com/maps/search/?api=1&query=Traugutta+51%2C+44-370+Psz%C3%B3w" target="_blank" rel="noreferrer">
              <span><MapPin /></span><div><small>Adres</small><strong>Traugutta 51<br />44-370 Pszów</strong></div>
            </a>
            <div className="contact-hours">
              <span><Clock3 /></span>
              <div>
                <small>Godziny otwarcia</small>
                <dl>
                  <div><dt>Poniedziałek</dt><dd>10:00–18:00</dd></div>
                  <div><dt>Wtorek–środa</dt><dd>09:00–17:00</dd></div>
                  <div><dt>Czwartek</dt><dd>10:00–18:00</dd></div>
                  <div><dt>Piątek</dt><dd>09:00–17:00</dd></div>
                  <div><dt>Sobota</dt><dd>10:00–14:00</dd></div>
                  <div><dt>Niedziela</dt><dd>Nieczynne</dd></div>
                </dl>
              </div>
            </div>
          </div>

          <ContactMailForm />
        </div>
        <div className="shell contact-map">
          <iframe title="Mapa dojazdu do biura Summer Holiday" src="https://www.google.com/maps?q=Traugutta+51%2C+44-370+Psz%C3%B3w&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </SubpageShell>
  );
}
