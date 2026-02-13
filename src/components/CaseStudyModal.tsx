'use client';
import React, { useEffect } from 'react';
import { CaseStudyContent } from '@/data/caseStudies';

interface CaseStudyModalProps {
  content: CaseStudyContent | null;
  fallback?: {
    name: string;
    domain: string;
    metric: string;
    note?: string;
    description: string;
    years?: string;
    lightBgLogo?: boolean;
    hasQuote?: boolean;
    hasVideo?: boolean;
  };
  onClose: () => void;
}

const getLogo = (domain: string) => `https://icon.horse/icon/${domain}`;

export default function CaseStudyModal({ content, fallback, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (content || fallback) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [content, fallback, onClose]);

  if (!content && !fallback) return null;

  const name = content?.name || fallback?.name || '';
  const domain = content?.domain || fallback?.domain || '';

  // Rich mode: full case study content available
  if (content && content.sections.length > 0) {
    return (
      <div
        className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4 md:p-8"
        onClick={onClose}
      >
        <div
          className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl animate-in max-h-[85vh] overflow-y-auto modal-scroll"
          onClick={e => e.stopPropagation()}
        >
          {/* Sticky header */}
          <div className="sticky top-0 z-10 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-900/95 backdrop-blur-sm p-6 md:p-8 pb-4 border-b border-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center p-2 border border-white/10">
                  <img
                    src={getLogo(domain)}
                    alt={name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">{name}</h2>
                  {content.partnership && (
                    <span className="text-xs font-body font-medium text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full">
                      {content.partnership} Partnership
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 flex-shrink-0"
              >
                <span className="text-neutral-400 text-xl">&times;</span>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8 pt-4">
            {/* Headline */}
            <p className="text-neutral-300 text-lg font-body font-light mb-6 leading-relaxed">
              {content.headline}
            </p>

            {/* Metrics banner */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-6">
              <div className={`grid gap-4 ${content.metrics.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
                {content.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display text-2xl md:text-3xl font-bold text-red-500">{m.value}</div>
                    <p className="text-neutral-400 text-sm font-body mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote block */}
            {content.quote && (
              <blockquote className="border-l-2 border-red-700 pl-6 my-6">
                <p className="text-lg italic text-neutral-300 leading-relaxed font-body font-light">
                  &ldquo;{content.quote.text}&rdquo;
                </p>
                <cite className="text-neutral-400 text-sm mt-4 block font-body not-italic">
                  <span className="font-medium text-white">{content.quote.author}</span>
                  <span className="text-neutral-400">, {content.quote.title}</span>
                </cite>
              </blockquote>
            )}

            {/* Sections */}
            {content.sections.map((section, i) => (
              <div key={i} className="mb-6 last:mb-0">
                <h3 className="font-display font-semibold text-lg text-white mb-3">{section.heading}</h3>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-neutral-300 font-body font-light leading-relaxed mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Fallback mode: simple metric display (matches existing client modal style)
  const fb = fallback!;
  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl animate-in max-h-[85vh] overflow-y-auto modal-scroll"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center p-2 border border-white/10 ${fb.lightBgLogo ? 'bg-white' : 'bg-white/5'}`}>
                <img
                  src={getLogo(domain)}
                  alt={name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold">{name}</h2>
                {fb.years && (
                  <p className="text-neutral-400 text-sm font-body">Partnered for {fb.years} years</p>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 flex-shrink-0"
            >
              <span className="text-neutral-400 text-xl">&times;</span>
            </button>
          </div>

          {/* Simple metric + headline for content with no sections */}
          {content && content.sections.length === 0 ? (
            <>
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-6">
                <div className={`grid gap-4 ${content.metrics.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {content.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-2xl md:text-3xl font-bold text-red-500">{m.value}</div>
                      <p className="text-neutral-400 text-sm font-body mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-neutral-400 leading-relaxed font-body font-light">
                {content.headline}
              </p>
            </>
          ) : (
            <>
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 mb-4">
                <p className="text-red-500 font-bold">{fb.metric}</p>
                {fb.note && (
                  <p className="text-neutral-400 text-sm mt-1">{fb.note}</p>
                )}
              </div>

              <p className="text-neutral-400 leading-relaxed font-body font-light">
                {fb.description}
              </p>
            </>
          )}

          {fb.hasVideo && (
            <div className="mt-4 bg-white/[0.02] border border-white/10 rounded-xl p-4 text-center">
              <span className="text-neutral-400 text-sm">Video testimonial available</span>
            </div>
          )}

          {fb.hasQuote && (
            <div className="mt-4 bg-white/[0.02] border border-white/10 rounded-xl p-4 text-center">
              <span className="text-neutral-400 text-sm">Quote available</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
