import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SubpageShell from "@/components/SubpageShell";
import { audiencePages } from "@/lib/subpages";

export const metadata: Metadata = {
  title: "Wakacje dopasowane do Ciebie",
  description: "Rodzinne wakacje, wyjazdy dla par, firm, kolonie i podróże szyte na miarę.",
};

export default function AudienceIndexPage() {
  return (
    <SubpageShell>
      <section className="subpage-hero subpage-hero--compact">
        <div className="shell subpage-hero__content">
          <span className="eyebrow eyebrow--blue">Dla kogo podróżujesz?</span>
          <h1>Jeden świat.<br /><em>Wiele sposobów podróżowania.</em></h1>
          <p>Wybierz rodzaj wyjazdu, a pokażemy Ci, na co zwrócić uwagę i jak przygotujemy propozycję.</p>
        </div>
      </section>
      <section className="subpage-section audience-index">
        <div className="shell audience-grid">
          {audiencePages.map((page, index) => (
            <Link className="audience-card" href={`/dla-kogo/${page.slug}`} key={page.slug}>
              <Image src={page.image} alt="" fill sizes="(max-width: 800px) 90vw, 33vw" className="cover" />
              <span className="audience-card__wash" />
              <span className="audience-card__number">0{index + 1}</span>
              <div>
                <span>{page.eyebrow}</span>
                <h2>{page.title}</h2>
                <p>{page.lead}</p>
                <span className="audience-card__link">Poznaj szczegóły <ArrowRight /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SubpageShell>
  );
}
