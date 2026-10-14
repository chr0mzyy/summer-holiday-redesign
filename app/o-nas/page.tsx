import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck, Sparkles } from "lucide-react";
import SubpageShell from "@/components/SubpageShell";

export const metadata: Metadata = {
  title: "O nas",
  description: "Poznaj biuro podróży Summer Holiday z Pszowa, działające od 2008 roku.",
};

export default function AboutPage() {
  return (
    <SubpageShell>
      <section className="subpage-hero">
        <Image src="/images/hero-mediterranean.webp" alt="" fill priority sizes="100vw" className="cover" />
        <span className="subpage-hero__wash" />
        <div className="shell subpage-hero__content subpage-hero__content--light">
          <span className="eyebrow">Summer Holiday od 2008 roku</span>
          <h1>Podróże zaczynają się<br /><em>od zaufania.</em></h1>
          <p>Pomagamy zamieniać plany w dobrze przygotowane wyjazdy — spokojnie, uważnie i z człowiekiem po drugiej stronie.</p>
        </div>
      </section>

      <section className="subpage-section">
        <div className="shell story-grid">
          <div>
            <span className="eyebrow eyebrow--blue">Nasza historia</span>
            <h2>Blisko ludzi.<br /><em>Blisko marzeń.</em></h2>
          </div>
          <div className="story-copy">
            <p>Biuro Podróży Summer Holiday działa od 2008 roku. Od początku naszym celem jest znalezienie propozycji, która pasuje nie tylko do budżetu, ale też do sposobu, w jaki klient naprawdę chce odpocząć.</p>
            <p>Pomagamy przy wakacjach rodzinnych, podróżach dla par, wyjazdach grupowych i firmowych, koloniach oraz planach tworzonych indywidualnie. Wspieramy przed rezerwacją i wtedy, gdy pojawiają się dodatkowe pytania.</p>
            <blockquote>„W życiu piękne są tylko chwile. My pomagamy zamienić je w podróż.”</blockquote>
          </div>
        </div>
      </section>

      <section className="subpage-section subpage-section--tint">
        <div className="shell values-grid">
          <article><ShieldCheck /><h3>Pewność</h3><p>Cenę, dostępność i zakres świadczeń potwierdzamy przed rezerwacją.</p></article>
          <article><Heart /><h3>Uważność</h3><p>Słuchamy potrzeb i szukamy rozwiązania dopasowanego do konkretnej osoby.</p></article>
          <article><Sparkles /><h3>Doświadczenie</h3><p>Łączymy znajomość branży z praktycznym wsparciem na każdym etapie.</p></article>
        </div>
      </section>

      <section className="subpage-cta">
        <div className="shell subpage-cta__inner">
          <div><span className="eyebrow">Zaplanujmy coś pięknego</span><h2>Opowiedz nam o swojej podróży.</h2></div>
          <Link className="button button--light" href="/kontakt">Skontaktuj się <ArrowRight /></Link>
        </div>
      </section>
    </SubpageShell>
  );
}
