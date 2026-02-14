import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hidoushim d'Elia",
  description: "Hidoushim sur les Parachiot de la Torah, par Elia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+3:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className="site-nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo">
              <span className="nav-logo-hebrew">חידושים</span>
              <span className="nav-logo-name">Elia</span>
            </a>
            <div className="nav-links">
              <a href="/parasha">Parasha</a>
              <a href="/titres">Titres</a>
              <a href="/a-propos">À propos</a>
            </div>
          </div>
        </nav>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <p>
            Les idées publiées ici sont des hidoushim personnels, pour l'étude.
            <br />
            Pour toute question pratique, il faut consulter un Rav.
          </p>
        </footer>
      </body>
    </html>
  );
}
