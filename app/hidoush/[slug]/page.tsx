import { getAllHidoushim, getHidoushBySlug, formatDate } from '@/lib/hidoushim';
import { getParshaByName } from '@/lib/parshiot';
import { markdownToHtml } from '@/lib/markdown';
import { notFound } from 'next/navigation';

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
      <article>
        <header className='hidoush-header'>
          <h1 className='hidoush-detail-title'>{hidoush.title}</h1>
        </header>
        <div className='hidoush-content' dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </>
  );
}
