import { getAllHidoushim, formatDate } from "@/lib/hidoushim";

export default function TitresPage() {
  const hidoushim = getAllHidoushim(); // déjà triés par date (récent en premier)

  return (
    <>
      <h1 className="page-title">Tous les titres</h1>
      <p className="page-subtitle">
        {hidoushim.length} hidoush{hidoushim.length > 1 ? "im" : ""} — classés du plus récent au
        plus ancien
      </p>

      {hidoushim.length === 0 ? (
        <div className="empty-state">Aucun hidoush pour le moment.</div>
      ) : (
        <div>
          {hidoushim.map((h) => (
            <a key={h.slug} href={`/hidoush/${h.slug}`} className="titre-item">
              <div className="titre-item-left">
                <div className="titre-item-title">{h.title}</div>
              </div>
              <div className="titre-item-right">
                <span className="parsha-tag">{h.parasha}</span>
                <span>{formatDate(h.date)}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
