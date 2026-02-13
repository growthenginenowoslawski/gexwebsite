import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllSlugs } from '@/lib/articles';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Not Found' };

  return {
    title: `${article.title} - Growth Drops`,
    description: article.description,
  };
}

function extractVideoId(url: string): string | null {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const videoId = extractVideoId(article.youtube_url);

  return (
    <div className="min-h-screen text-white" style={{
      fontFamily: '"Inter", system-ui, sans-serif',
      background: 'linear-gradient(180deg, #000000 0%, #080808 25%, #0a0a0a 50%, #080808 75%, #000000 100%)'
    }}>
      <style>{`
        .article-content h2 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }
        .article-content h3 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }
        .article-content p {
          color: #a3a3a3;
          line-height: 1.8;
          margin-bottom: 1rem;
          font-weight: 300;
        }
        .article-content strong {
          color: #ffffff;
          font-weight: 600;
        }
        .article-content ul, .article-content ol {
          color: #a3a3a3;
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          font-weight: 300;
        }
        .article-content li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
        }
        .article-content blockquote {
          border-left: 3px solid #b91c1c;
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: #d4d4d4;
          font-style: italic;
        }
        .article-content a {
          color: #ef4444;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .article-content a:hover {
          color: #f87171;
        }
        .article-content code {
          background: rgba(255,255,255,0.05);
          padding: 0.15rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.9em;
        }
        .article-content pre {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
          margin-bottom: 1rem;
        }
        .article-content pre code {
          background: none;
          padding: 0;
        }
        .article-content hr {
          border-color: rgba(255,255,255,0.1);
          margin: 2rem 0;
        }
      `}</style>

      {/* Navigation */}
      <nav className="border-b border-white/5 px-4 md:px-8 py-4 md:py-5 sticky top-0 z-40 backdrop-blur-2xl bg-black/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <img
                src="/images/gex-logo.png"
                alt="Growth Engine X"
                className="h-8 md:h-10 w-auto"
              />
              <span className="font-bold text-base md:text-xl tracking-tight" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>GROWTH ENGINE X</span>
            </Link>
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            <Link href="/" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden md:block">Home</Link>
            <Link href="/growth-drops" className="text-sm font-medium text-red-500 hover:text-red-400 transition-colors hidden md:flex items-center gap-1.5">
              Growth Drops
            </Link>
            <a href="https://tally.so/r/meK550" target="_blank" rel="noopener noreferrer" className="bg-red-700 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors">
              Apply for Free Test
            </a>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="px-4 md:px-8 pt-8 md:pt-12 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link href="/growth-drops" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors mb-8">
            &larr; All Growth Drops
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-4 text-sm text-neutral-500">
            <time>{article.published}</time>
            <span>&middot;</span>
            <span>{article.reading_time}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
            {article.title}
          </h1>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* YouTube Embed */}
          {videoId && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-10">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={article.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {/* Article Content */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/[0.02] text-center">
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
              Want results like these for your business?
            </h3>
            <p className="text-neutral-400 mb-6 font-light">
              Apply for a free test campaign and see positive responses before you commit.
            </p>
            <a
              href="https://tally.so/r/meK550"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors"
            >
              Apply for Free Test &rarr;
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-600 text-sm font-light">&copy; 2026 Growth Engine X. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
