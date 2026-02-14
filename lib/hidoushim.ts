import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Hidoush {
  title: string;
  slug: string;
  parasha: string;
  date: string;
  content: string;
  excerpt: string;
  tags?: string[];
}

const contentDir = path.join(process.cwd(), "content/hidoushim");

export function getAllHidoushim(): Hidoush[] {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const plainText = content.replace(/[#*_`>\[\]()-]/g, "").trim();
      const excerpt = plainText.substring(0, 180) + (plainText.length > 180 ? "…" : "");

      return {
        title: data.title,
        slug: data.slug || filename.replace(".md", ""),
        parasha: data.parasha,
        date: data.date,
        content,
        excerpt,
        tags: data.tags || [],
      } as Hidoush;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getHidoushBySlug(slug: string): Hidoush | undefined {
  return getAllHidoushim().find((h) => h.slug === slug);
}

export function getHidoushimByParasha(parashaName: string): Hidoush[] {
  return getAllHidoushim().filter((h) => h.parasha === parashaName);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
