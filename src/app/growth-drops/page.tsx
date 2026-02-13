import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';

export const metadata = {
  title: 'Growth Drops - Growth Engine X',
  description: 'Tactical cold email and outbound insights from Eric Nowoslawski. YouTube videos turned into actionable articles.',
};

function extractVideoId(url: string): string | null {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export default function GrowthDropsPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen text-white" style={{
      fontFamily: '"Inter", system-ui, sans-serif',
      background: 'linear-gradient(180deg, #000000 0%, #080808 25%, #0a0a0a 50%, #080808 75%, #000000 100%)'
    }}>
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
            <span className="text-sm font-medium text-red-500 hidden md:flex items-center gap-1.5">
              Growth Drops
            </span>
            <a href="https://tally.so/r/meK550" target="_blank" rel="noopener noreferrer" className="bg-red-700 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors">
              Apply for Free Test
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="px-4 md:px-8 pt-12 md:pt-20 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
            Growth <span className="text-red-500">Drops</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            Tactical cold email and outbound insights. Each article is based on a YouTube video — practical, specific, and straight from the trenches.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {articles.length === 0 ? (
            <p className="text-center text-neutral-500 py-20">Articles coming soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => {
                const videoId = extractVideoId(article.youtube_url);
                const thumb = article.thumbnail || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null);

                return (
                  <Link
                    key={article.slug}
                    href={`/growth-drops/${article.slug}`}
                    className="group bg-white/[0.02] border border-white/10 hover:border-red-700/50 rounded-xl overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-lg hover:shadow-red-900/10"
                  >
                    {thumb && (
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={thumb}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3 text-xs text-neutral-500">
                        <time>{article.published}</time>
                        <span>{article.reading_time}</span>
                      </div>
                      <h2 className="font-semibold text-lg mb-2 group-hover:text-red-400 transition-colors leading-snug" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
                        {article.title}
                      </h2>
                      <p className="text-sm text-neutral-400 line-clamp-2 font-light leading-relaxed">
                        {article.description}
                      </p>
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-neutral-400">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-600 text-sm font-light">&copy; 2026 Growth Engine X. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
