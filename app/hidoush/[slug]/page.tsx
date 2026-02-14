import { getAllHidoushim, getHidoushBySlug, formatDate } from "@/lib/hidoushim";
import { getParshaByName } from "@/lib/parshiot";
import { markdownToHtml } from "@/lib/markdown";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllHidoushim().map((h) => ({ slug: h.slug }));
}

export default async function HidoushDetailPage({ params }: { params: { slug: string } }) {
  const hidoush = getHidoushBySlug(params.slug);
  if (!hidoush) return notFound();

  const htmlContent = await markdownToHtml(hidoush.content);
  const parsha = getParshaByName(hidoush.parasha);

  return (
    <>
      <div className="breadcrumb">
        <a href="/">Accueil</a>
        <span>›</span>
        <a href="/parasha">Parasha</a>
        <span>›</span>
        {parsha ? (
          <a href={`/parasha/${parsha.slug}`}>{parsha.name}</a>
        ) : (
          hidoush.parasha
        )}
        <span>›</span>
        Hidoush
      </div>

      <article>
        <header className="hidoush-header">
          <h1 className="hidoush-detail-title">{hidoush.title}</h1>
          <div className="hidoush-detail-meta">
            {parsha && (
              <a href={`/parasha/${parsha.slug}`}>Parashat {parsha.name}</a>
            )}
            <span>•</span>
            <span>{formatDate(hidoush.date)}</span>
          </div>
        </header>

        <div
          className="hidoush-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {parsha && (
          <div className="hidoush-footer">
            <a href={`/parasha/${parsha.slug}`}>
              ← Voir tous les hidoushim sur Parashat {parsha.name}
            </a>
          </div>
        )}
      </article>
    </>
  );
}
