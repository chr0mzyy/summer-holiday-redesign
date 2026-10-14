import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import SubpageShell from "@/components/SubpageShell";
import { audiencePages, getAudiencePage } from "@/lib/subpages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return audiencePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getAudiencePage((await params).slug);
  if (!page) return {};
  return { title: page.title, description: page.lead };
}

export default async function AudiencePage({ params }: Props) {
  const page = getAudiencePage((await params).slug);
  if (!page) notFound();

  return (
    <SubpageShell>
      <section className="detail-hero">
        <Image src={page.image} alt="" fill priority sizes="100vw" className="cover" />
        <span className="detail-hero__wash" />
        <div className="shell detail-hero__content">
          <Link className="back-link" href="/dla-kogo"><ArrowLeft /> Wszystkie rodzaje wyjazdów</Link>
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.lead}</p>
          <Link className="button button--light" href="/kontakt">Porozmawiaj z doradcą <ArrowRight /></Link>
        </div>
      </section>

      <section className="subpage-section">
        <div className="shell detail-grid">
          <div>
            <span className="eyebrow eyebrow--blue">Na co zwracamy uwagę</span>
            <h2>Dobry wyjazd zaczyna się<br /><em>od właściwych pytań.</em></h2>
          </div>
          <div className="highlight-list">
            {page.highlights.map((highlight) => <span key={highlight}><Check /> {highlight}</span>)}
          </div>
        </div>
      </section>

      <section className="subpage-section subpage-section--tint">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow eyebrow--gold">Jak działamy</span><h2>Od rozmowy<br /><em>do rezerwacji</em></h2></div>
            <p>Nie pokazujemy przypadkowych ofert. Najpierw poznajemy potrzeby, potem potwierdzamy dostępność, cenę i wszystkie usługi dodatkowe.</p>
          </div>
          <div className="process-grid">
            {page.process.map((step, index) => (
              <div className="process-card glass" key={step}><span>0{index + 1}</span><div><h3>{step}</h3><p>Każdy etap prowadzimy wspólnie i jasno wyjaśniamy dostępne warianty.</p></div></div>
            ))}
          </div>
          <div className="subpage-contact glass">
            <div><span className="eyebrow eyebrow--blue">Sprawdź możliwości</span><strong>Aktualną cenę i dostępność zawsze potwierdzamy w systemie rezerwacyjnym.</strong></div>
            <a className="button" href="tel:+48572219872"><Phone /> 572 219 872</a>
          </div>
        </div>
      </section>
    </SubpageShell>
  );
}
