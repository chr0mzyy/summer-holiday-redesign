import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";
import SubpageShell from "@/components/SubpageShell";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Informacje dotyczące prywatności i przetwarzania danych w Summer Holiday.",
};

export default function PrivacyPage() {
  return (
    <SubpageShell>
      <section className="subpage-hero subpage-hero--compact">
        <div className="shell subpage-hero__content">
          <span className="eyebrow eyebrow--blue">Dokumenty</span>
          <h1>Polityka<br /><em>prywatności.</em></h1>
          <p>Przejrzyste informacje o danych osobowych i sposobie kontaktu z administratorem.</p>
        </div>
      </section>
      <section className="subpage-section legal-page">
        <div className="shell legal-layout">
          <aside><FileCheck2 /><strong>Ważna informacja</strong><p>Nie tworzymy nowej treści prawnej bez zatwierdzenia. W finalnym wdrożeniu dokument zostanie przeniesiony z VCMS bez zmiany znaczenia.</p></aside>
          <article>
            <span className="eyebrow eyebrow--gold">Wersja robocza podstrony</span>
            <h2>Treść prawna zostanie zachowana 1:1.</h2>
            <p>Ta podstrona przygotowuje układ typograficzny, nawigację i miejsce na obowiązującą politykę prywatności. Przed publikacją należy pobrać pełną treść z VCMS, zweryfikować dane administratora oraz datę ostatniej aktualizacji.</p>
            <h3>Planowany zakres dokumentu</h3>
            <ul>
              <li>dane administratora i kontakt,</li>
              <li>cele oraz podstawy przetwarzania danych,</li>
              <li>okres przechowywania i odbiorcy danych,</li>
              <li>prawa osoby, której dane dotyczą,</li>
              <li>informacje o plikach cookies i formularzach.</li>
            </ul>
            <Link className="button" href="/kontakt">Kontakt z biurem <ArrowRight /></Link>
          </article>
        </div>
      </section>
    </SubpageShell>
  );
}
