import { parshiot, sfarim, sfarimHebrew } from "@/lib/parshiot";
import { getHidoushimByParasha } from "@/lib/hidoushim";

export default function ParashaPage() {
  return (
    <>
      <h1 className="page-title">Parachiot de la Torah</h1>
      <p className="page-subtitle">54 parachiot, de Berechit à Vezot Haberakha</p>

      {sfarim.map((sefer) => {
        const seferParshiot = parshiot.filter((p) => p.sefer === sefer);
        return (
          <div key={sefer} className="sefer-group">
            <h2 className="sefer-title">
              {sefer} <span className="sefer-title-hebrew">{sfarimHebrew[sefer]}</span>
            </h2>
            <div className="parsha-grid">
              {seferParshiot.map((p) => {
                const count = getHidoushimByParasha(p.name).length;
                return (
                  <a key={p.slug} href={`/parasha/${p.slug}`} className="parsha-link">
                    {p.name}
                    {count > 0 && <span className="parsha-count"> ({count})</span>}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
