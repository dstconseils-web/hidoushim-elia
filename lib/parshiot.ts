export interface Parsha {
  name: string;
  slug: string;
  sefer: string;
}

export const parshiot: Parsha[] = [
  // Berechit (Genèse)
  { name: "Berechit", slug: "berechit", sefer: "Berechit" },
  { name: "Noa'h", slug: "noah", sefer: "Berechit" },
  { name: "Lekh Lekha", slug: "lekh-lekha", sefer: "Berechit" },
  { name: "Vayera", slug: "vayera", sefer: "Berechit" },
  { name: "Hayei Sarah", slug: "hayei-sarah", sefer: "Berechit" },
  { name: "Toledot", slug: "toledot", sefer: "Berechit" },
  { name: "Vayetse", slug: "vayetse", sefer: "Berechit" },
  { name: "Vayichla'h", slug: "vayichlah", sefer: "Berechit" },
  { name: "Vayechev", slug: "vayechev", sefer: "Berechit" },
  { name: "Mikets", slug: "mikets", sefer: "Berechit" },
  { name: "Vayigach", slug: "vayigach", sefer: "Berechit" },
  { name: "Vaye'hi", slug: "vayehi", sefer: "Berechit" },
  // Chemot (Exode)
  { name: "Chemot", slug: "chemot", sefer: "Chemot" },
  { name: "Vaera", slug: "vaera", sefer: "Chemot" },
  { name: "Bo", slug: "bo", sefer: "Chemot" },
  { name: "Bechala'h", slug: "bechalah", sefer: "Chemot" },
  { name: "Yitro", slug: "yitro", sefer: "Chemot" },
  { name: "Michpatim", slug: "michpatim", sefer: "Chemot" },
  { name: "Terouma", slug: "terouma", sefer: "Chemot" },
  { name: "Tetsave", slug: "tetsave", sefer: "Chemot" },
  { name: "Ki Tissa", slug: "ki-tissa", sefer: "Chemot" },
  { name: "Vayakhel", slug: "vayakhel", sefer: "Chemot" },
  { name: "Pekoudei", slug: "pekoudei", sefer: "Chemot" },
  // Vayikra (Lévitique)
  { name: "Vayikra", slug: "vayikra", sefer: "Vayikra" },
  { name: "Tsav", slug: "tsav", sefer: "Vayikra" },
  { name: "Chemini", slug: "chemini", sefer: "Vayikra" },
  { name: "Tazria", slug: "tazria", sefer: "Vayikra" },
  { name: "Metsora", slug: "metsora", sefer: "Vayikra" },
  { name: "A'harei Mot", slug: "aharei-mot", sefer: "Vayikra" },
  { name: "Kedochim", slug: "kedochim", sefer: "Vayikra" },
  { name: "Emor", slug: "emor", sefer: "Vayikra" },
  { name: "Behar", slug: "behar", sefer: "Vayikra" },
  { name: "Be'houkotai", slug: "behoukotai", sefer: "Vayikra" },
  // Bamidbar (Nombres)
  { name: "Bamidbar", slug: "bamidbar", sefer: "Bamidbar" },
  { name: "Nasso", slug: "nasso", sefer: "Bamidbar" },
  { name: "Beha'alotekha", slug: "behaalotekha", sefer: "Bamidbar" },
  { name: "Chela'h Lekha", slug: "chelah-lekha", sefer: "Bamidbar" },
  { name: "Kora'h", slug: "korah", sefer: "Bamidbar" },
  { name: "'Houkat", slug: "houkat", sefer: "Bamidbar" },
  { name: "Balak", slug: "balak", sefer: "Bamidbar" },
  { name: "Pin'has", slug: "pinhas", sefer: "Bamidbar" },
  { name: "Matot", slug: "matot", sefer: "Bamidbar" },
  { name: "Massei", slug: "massei", sefer: "Bamidbar" },
  // Devarim (Deutéronome)
  { name: "Devarim", slug: "devarim", sefer: "Devarim" },
  { name: "Vaet'hanan", slug: "vaethanan", sefer: "Devarim" },
  { name: "Ekev", slug: "ekev", sefer: "Devarim" },
  { name: "Reeh", slug: "reeh", sefer: "Devarim" },
  { name: "Choftim", slug: "choftim", sefer: "Devarim" },
  { name: "Ki Tetse", slug: "ki-tetse", sefer: "Devarim" },
  { name: "Ki Tavo", slug: "ki-tavo", sefer: "Devarim" },
  { name: "Nitsavim", slug: "nitsavim", sefer: "Devarim" },
  { name: "Vayelekh", slug: "vayelekh", sefer: "Devarim" },
  { name: "Haazinou", slug: "haazinou", sefer: "Devarim" },
  { name: "Vezot Haberakha", slug: "vezot-haberakha", sefer: "Devarim" },
];

export function getParshaBySlug(slug: string): Parsha | undefined {
  return parshiot.find((p) => p.slug === slug);
}

export function getParshaByName(name: string): Parsha | undefined {
  return parshiot.find((p) => p.name === name);
}

export const sfarim = ["Berechit", "Chemot", "Vayikra", "Bamidbar", "Devarim"];

export const sfarimHebrew: Record<string, string> = {
  Berechit: "בראשית",
  Chemot: "שמות",
  Vayikra: "ויקרא",
  Bamidbar: "במדבר",
  Devarim: "דברים",
};
