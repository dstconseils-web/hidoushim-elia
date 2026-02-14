# Hidoushim d'Elia

Site personnel pour publier des hidoushim classés par Parasha et par titre.

## Stack technique

- **Next.js 14** (App Router) — choisi pour sa génération statique native, le routing basé sur le système de fichiers, et l'excellent support TypeScript.
- **Markdown + gray-matter** — les hidoushim sont des fichiers `.md` avec front-matter YAML.
- **CSS pur** — pas de dépendance Tailwind, style sobre et lisible.
- **Export statique** — le site se compile en fichiers HTML statiques, déployables sur Vercel, Netlify, ou tout hébergement.

## Structure du projet

```
hidoushim-site/
├── app/
│   ├── layout.tsx              # Layout global (nav + footer)
│   ├── globals.css             # Styles globaux
│   ├── page.tsx                # Accueil
│   ├── parasha/
│   │   ├── page.tsx            # Liste des 54 parachiot
│   │   └── [slug]/page.tsx     # Hidoushim d'une parsha
│   ├── titres/
│   │   └── page.tsx            # Tous les titres
│   ├── hidoush/
│   │   └── [slug]/page.tsx     # Détail d'un hidoush
│   └── a-propos/
│       └── page.tsx            # Page à propos
├── content/
│   └── hidoushim/              # ← Elia dépose ses fichiers .md ici
│       ├── pourquoi-le-monde-commence-par-beth.md
│       ├── noah-patience-epreuve.md
│       └── sens-profond-epreuve-avraham.md
├── lib/
│   ├── parshiot.ts             # Liste des 54 parachiot
│   ├── hidoushim.ts            # Lecture et parsing des fichiers Markdown
│   └── markdown.ts             # Conversion Markdown → HTML
├── package.json
├── tsconfig.json
└── next.config.js
```

## Routing

| URL | Page |
|-----|------|
| `/` | Accueil (intro + derniers hidoushim) |
| `/parasha` | Liste des 54 parachiot par Sefer |
| `/parasha/[slug]` | Hidoushim d'une parsha spécifique |
| `/titres` | Tous les hidoushim (tri par date ou alphabétique) |
| `/hidoush/[slug]` | Détail d'un hidoush |
| `/a-propos` | Mini-bio + disclaimer |

## Comment publier un hidoush

1. Créer un fichier `.md` dans `content/hidoushim/`
2. Ajouter le front-matter :

```md
---
title: "Mon titre de hidoush"
slug: "mon-titre-de-hidoush"
parasha: "Berechit"
date: "2026-02-14"
tags: ["optionnel"]
---

Contenu du hidoush en Markdown...
```

3. Le champ `parasha` doit correspondre exactement à un nom de la liste (ex: "Berechit", "Noa'h", "Lekh Lekha"...).
4. Relancer `npm run build` ou, en dev, le rechargement est automatique.

## Installation et lancement

```bash
npm install
npm run dev      # Développement (http://localhost:3000)
npm run build    # Build statique
npm run start    # Servir le build
```

## Déploiement

Le site est configuré en `output: "export"` (fichiers statiques). Déployez le dossier `out/` sur Vercel, Netlify, GitHub Pages, ou tout hébergement statique.
