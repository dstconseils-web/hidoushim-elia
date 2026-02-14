import { parshiot, getParshaBySlug } from "@/lib/parshiot";
import { getHidoushimByParasha, formatDate } from "@/lib/hidoushim";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return parshiot.map((p) => ({ slug: p.slug }));
}

export default function ParshaDetailPage({ params }: { params: { slug: string } }) {
  const parsha = getParshaBySlug(params.slug);
  if (!parsha) return notFound();

  const hidoushim = getHidoushimByParasha(parsha.name);

  return (
    <>
      <div className="breadcrumb">
        <a href="/">Accueil</a>
        <span>›</span>
        <a href="/parasha">Parasha</a>
        <span>›</span>
        {parsha.name}
      </div>

      <h1 className="page-title">Parashat {parsha.name}</h1>
      <p className="page-subtitle">Sefer {parsha.sefer}</p>

      {hidoushim.length === 0 ? (
        <div className="empty-state">
          Pas encore de hidoush sur cette parsha. Bientôt, b'ezrat Hachem !
        </div>
      ) : (
        <div className="hidoush-list">
          {hidoushim.map((h) => (
            <a key={h.slug} href={`/hidoush/${h.slug}`} className="hidoush-card">
              <div className="hidoush-card-title">{h.title}</div>
              <div className="hidoush-card-meta">
                <span>{formatDate(h.date)}</span>
              </div>
              <div className="hidoush-card-excerpt">{h.excerpt}</div>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
