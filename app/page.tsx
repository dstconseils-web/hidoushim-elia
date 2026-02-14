import { getAllHidoushim, formatDate } from "@/lib/hidoushim";

export default function Home() {
  const hidoushim = getAllHidoushim().slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-hebrew">חידושים</div>
        <h1 className="hero-title">Les Hidoushim d'Elia</h1>
        <p className="hero-subtitle">
          Réflexions personnelles sur les Parachiot de la Torah. Des idées à méditer, étudier et
          approfondir.
        </p>
        <hr className="hero-separator" />
        <div className="hero-buttons">
          <a href="/parasha" className="btn btn-primary">
            📖 Par Parasha
          </a>
          <a href="/titres" className="btn btn-secondary">
            📝 Tous les titres
          </a>
        </div>
      </section>

      {/* Derniers hidoushim */}
      {hidoushim.length > 0 && (
        <section>
          <h2 className="section-title">Derniers hidoushim</h2>
          <div className="hidoush-list">
            {hidoushim.map((h) => (
              <a key={h.slug} href={`/hidoush/${h.slug}`} className="hidoush-card">
                <div className="hidoush-card-title">{h.title}</div>
                <div className="hidoush-card-meta">
                  <span className="parsha-tag">{h.parasha}</span>
                  <span>{formatDate(h.date)}</span>
                </div>
                <div className="hidoush-card-excerpt">{h.excerpt}</div>
              </a>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
