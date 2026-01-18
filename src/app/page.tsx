'use client';

import React, { useState, useEffect } from 'react';

interface CaseStudy {
  name: string;
  domain: string;
  highlight: string;
  metric: string;
  metricLabel: string;
  description?: string;
  quote?: string;
  quotee?: string;
  quoteeTitle?: string;
  hasGif?: boolean;
}

interface Client {
  name: string;
  domain: string;
  years?: string;
  metric: string;
  note?: string;
  description: string;
  hasGif?: boolean;
  hasVideo?: boolean;
  hasQuote?: boolean;
  isLink?: boolean;
}

interface Partner {
  name: string;
  domain: string;
  note?: string;
}

interface Quote {
  quote: string;
  name: string;
  title: string;
  domain: string;
  photo?: string;
  useLogo?: boolean;
}

export default function GEXHomepage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeClientModal, setActiveClientModal] = useState<number | null>(null);
  const [emailCount, setEmailCount] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const target = 8000000;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setEmailCount(target);
        clearInterval(timer);
      } else {
        setEmailCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M+';
    return num.toLocaleString();
  };

  // Logo helper - using Clearbit Logo API
  const getLogo = (domain: string) => `https://logo.clearbit.com/${domain}`;

  // Image paths for Vercel deployment
  const images = {
    gexLogo: '/images/gex-logo.png',
    kyleMallien: '/images/kyle-mallien.jpg',
    clayElitePill: '/images/clay-elite-studio-pill.png',
    clayEliteBadge: '/images/clay-elite-studio-badge.png',
    clayEliteCircle: '/images/clay-elite-studio-circle.png'
  };

  const caseStudies: Record<string, CaseStudy> = {
    instantly: {
      name: 'Instantly AI',
      domain: 'instantly.ai',
      highlight: 'Partnered for 3 years',
      metric: '10-20',
      metricLabel: 'positive responses per day',
      description: 'Long-term partnership powering their outbound growth engine',
      hasGif: true
    },
    clay: {
      name: 'Clay',
      domain: 'clay.com',
      highlight: '4:1 ROI',
      metric: '4:1',
      metricLabel: 'return on investment',
      quote: '"Eric is one of the most creative minds in outbound today. He is one of the most, if not the most respected, agency owner there is."',
      quotee: 'Varun Anand',
      quoteeTitle: 'Co-Founder @ Clay.com'
    },
    notion: {
      name: 'Notion',
      domain: 'notion.so',
      highlight: 'See what Notion has to say about us',
      metric: 'Enterprise',
      metricLabel: 'campaign execution',
      quote: '"Working with Eric and the Growth Engine X team was fast-paced, structured, and creative. Eric\'s process-driven style made it easy to test ideas quickly and learn from the results. Even when things didn\'t go perfectly, he was relentless about digging into every angle, from targeting signals to creative messaging, which helped us move faster and make smarter calls."',
      quotee: 'Kyle Jurilla',
      quoteeTitle: 'Growth @ Notion'
    },
    pathos: {
      name: 'Pay On Results PR',
      domain: 'payonresultspr.com',
      highlight: '80 positive responses per day',
      metric: '80',
      metricLabel: 'positive responses per day',
      description: 'Helped boost valuation through pipeline generation during acquisition process'
    }
  };

  const allClients: Client[] = [
    {
      name: 'Numeral',
      domain: 'numeral.com',
      years: '3+',
      metric: 'TAM processing others couldn\'t do',
      description: 'Partnered for 3+ years helping them process and enrich their TAM in ways other providers couldn\'t handle.'
    },
    {
      name: 'Baton Market',
      domain: 'batonmarket.com',
      years: '3+',
      metric: '30-100 positive responses per day',
      note: 'depending on sales team availability',
      hasGif: true,
      description: 'Partnered for 3+ years generating consistent high-volume results that scale with their team capacity.'
    },
    {
      name: 'Heritage Wealth Capital',
      domain: 'heritagewealthcapital.com',
      metric: '552 positive responses in 4 months',
      note: 'Regular event speaker',
      description: 'Generated 552 positive responses in 4 months. Eric is a regular speaker at their mastermind events.'
    },
    {
      name: 'Online Seller Consulting',
      domain: 'onlinesellerconsulting.com',
      metric: '3-7 positive responses per day',
      hasVideo: true,
      description: 'Consistent daily results with video testimonial available.'
    },
    {
      name: 'USA Payments',
      domain: 'usapayments.com',
      metric: '2-3 positive responses per day',
      note: 'High-risk targeting',
      description: 'Specialized targeting for high-risk businesses and Spanish-speaking markets using advanced technographic filters.'
    },
    {
      name: 'Oren Klaff',
      domain: 'intersectioncapital.com',
      metric: 'Investor outreach',
      description: 'Running cold outbound campaigns to find investors for fundraising projects.'
    },
    {
      name: 'Sharf Enterprises',
      domain: 'sharfenterprises.com',
      metric: '95 positive responses in 30 days',
      hasVideo: true,
      description: '95 positive responses in just 30 days with video testimonial available.'
    },
    {
      name: 'Snitcher',
      domain: 'snitcher.com',
      metric: 'Check out how we get more leads than their branded Google ads',
      isLink: true,
      description: 'Our leads are cheaper than their branded Google ad spend and more scalable. One of their most efficient acquisition channels.'
    },
    {
      name: 'Donut',
      domain: 'donut.com',
      years: '1+',
      metric: '15 positive responses per day',
      description: 'Generating 15 positive responses per day for companies wanting to advertise in their newsletter network.'
    },
    {
      name: 'Arketa',
      domain: 'arketa.co',
      metric: '3-5 positive responses per day',
      description: 'Consistent results reaching yoga studios for their fitness app.'
    },
    {
      name: 'Troveo',
      domain: 'troveo.com',
      metric: '8 positive responses per day',
      note: 'AI targeting',
      description: 'Using AI to parse through and analyze videographer content to identify highest-value prospects.'
    },
    {
      name: 'Media Max',
      domain: 'mediamax.com',
      metric: '6 positive responses per day',
      description: 'Consistent daily results for media services.'
    },
    {
      name: 'Bissell Vacuums',
      domain: 'bissell.com',
      metric: '3 positive responses per day',
      hasQuote: true,
      description: 'CFO quote available about referral quality.'
    },
    {
      name: 'Young Innovations',
      domain: 'younginnovations.com',
      metric: 'Cold email leads are 1/3 the cost of Facebook leads',
      description: 'Dramatically reduced cost per lead compared to paid social campaigns.'
    },
    {
      name: 'Rively',
      domain: 'rively.com',
      metric: 'Check out our case study',
      isLink: true,
      description: 'Full case study available detailing our partnership and results.'
    },
    {
      name: 'Gutter Kings',
      domain: 'gutterkings.com',
      metric: '212 positive responses in 3 months',
      description: '212 positive responses generated over a 3-month campaign.'
    }
  ];

  const marqueeClients = [...allClients, ...allClients];

  const partners: Partner[] = [
    { name: 'Clay', domain: 'clay.com', note: 'Largest customer by enrichment volume' },
    { name: 'Smartlead', domain: 'smartlead.ai', note: 'Top 3 by reply volume' },
    { name: 'Outbound Sync', domain: 'outboundsync.com' },
    { name: 'Hypertide', domain: 'hypertide.io' },
    { name: 'Ops Kings', domain: 'opskings.com' }
  ];

  const featuredQuotes: Quote[] = [
    {
      quote: "Eric has forgotten more about cold email than other people we've worked with. He's our go-to. We fly him out to speak on our stages every time we bring our mastermind together and have been doing so for the last two and a half years.",
      name: "Kyle Mallien",
      title: "Founder @ Heritage Wealth Capital",
      domain: "heritagewealthcapital.com",
      photo: images.kyleMallien
    },
    {
      quote: "The leads we get from Growth Engine X are cheaper than our branded Google ad spend and more scalable. It's become one of our most efficient acquisition channels.",
      name: "Snitcher Team",
      title: "Snitcher",
      domain: "snitcher.com",
      useLogo: true
    }
  ];

  return (
    <div className="min-h-screen text-white" style={{
      fontFamily: '"Inter", system-ui, sans-serif',
      background: 'linear-gradient(180deg, #000000 0%, #080808 25%, #0a0a0a 50%, #080808 75%, #000000 100%)'
    }}>

      {/* Fonts and Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        .font-display {
          font-family: 'Instrument Sans', sans-serif;
        }

        .font-body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-ring {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .marquee-track {
          animation: marquee 40s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-in {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(185, 28, 28, 0.25);
        }

        .btn-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .btn-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }

        .btn-hover:hover::before {
          left: 100%;
        }

        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px -10px rgba(185, 28, 28, 0.4);
        }

        .metric-number {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .border-glow {
          position: relative;
        }

        .border-glow::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(135deg, #B91C1C 0%, transparent 50%, #B91C1C 100%);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s;
          z-index: -1;
        }

        .border-glow:hover::before {
          opacity: 1;
        }

        .text-shadow-glow {
          text-shadow: 0 0 40px rgba(185, 28, 28, 0.5);
        }

        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #B91C1C;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .stat-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(10, 10, 10, 0.8) 100%);
          backdrop-filter: blur(10px);
        }

        .flywheel-segment {
          transition: all 0.3s ease;
        }

        .flywheel-segment:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* Navigation */}
      <nav className="border-b border-white/5 px-8 py-5 sticky top-0 z-40 backdrop-blur-2xl bg-black/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={images.gexLogo}
              alt="Growth Engine X"
              className="h-10 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const sibling = target.nextSibling as HTMLElement;
                if (sibling) sibling.style.display = 'block';
              }}
            />
            <div className="hidden w-10 h-10 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="10" y="10" width="60" height="80" fill="none" stroke="white" strokeWidth="8"/>
                <line x1="25" y1="90" x2="55" y2="10" stroke="white" strokeWidth="8"/>
                <line x1="45" y1="90" x2="75" y2="10" stroke="#B91C1C" strokeWidth="8"/>
                <line x1="65" y1="90" x2="90" y2="20" stroke="#B91C1C" strokeWidth="8"/>
              </svg>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">GROWTH ENGINE X</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#methodology" className="nav-link text-sm font-medium text-neutral-400 hover:text-white transition-colors">Methodology</a>
            <a href="https://gamma.app/docs/Collection-of-GEX-Social-Proof-qwtscnnuryij6yj" target="_blank" rel="noopener noreferrer" className="nav-link text-sm font-medium text-neutral-400 hover:text-white transition-colors">More Results</a>
            <a href="#" className="nav-link text-sm font-medium text-red-500 hover:text-red-400 transition-colors flex items-center gap-1.5">
              Growth Drops
              <span className="text-xs">✦</span>
            </a>
            <a href="https://tally.so/r/meK550" target="_blank" rel="noopener noreferrer" className="btn-hover bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold">
              Apply for Free Test →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 pt-24 pb-20 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-red-700/8 rounded-full blur-3xl pointer-events-none pulse-glow"></div>
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-red-900/5 rounded-full blur-3xl pointer-events-none pulse-glow" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Clay Elite Studio Badge - Prominent in Hero */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <img
                src={images.clayElitePill}
                alt="Clay Elite Studio Solutions Partner 2026"
                className="h-14 w-auto rounded-full shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform cursor-pointer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="badge-shine border border-cyan-500/30 rounded-full px-5 py-2.5 flex items-center gap-3"><span class="text-lg">🏆</span><div class="text-left"><p class="text-xs font-semibold text-white">Clay Elite Studio</p><p class="text-xs text-neutral-500">Solutions Partner 2026</p></div></div>';
                  }
                }}
              />
              {/* Tooltip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                Largest customer by enrichment volume
              </div>
            </div>
          </div>

          {/* Smartlead Badge */}
          <div className="flex justify-center gap-4 mb-10">
            <div className="group relative">
              <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-full px-5 py-2.5 flex items-center gap-3 hover:border-green-500/60 transition-all cursor-default">
                <span className="text-lg">📈</span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Smartlead Top 3</p>
                  <p className="text-xs text-neutral-500">By reply volume</p>
                </div>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-neutral-900 border border-white/10 rounded-lg text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Only 2 other accounts get more replies on the entire platform
              </div>
            </div>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
            <span className="text-white">We Send</span>{' '}
            <span className="text-red-500 text-shadow-glow">8 Million+</span>
            <br />
            <span className="text-white">Emails Per Month.</span>
            <br />
            <span className="text-neutral-400 font-medium text-4xl md:text-5xl lg:text-6xl">We Know What Converts.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed font-body font-light">
            B2B lead generation for companies with $1M+ in revenue. Launch a free test campaign and see results before you commit.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://tally.so/r/meK550" target="_blank" rel="noopener noreferrer" className="btn-hover bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-display font-semibold text-lg">
              Apply for Free Test Campaign →
            </a>
            <button className="btn-hover border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-body font-medium transition-all">
              Looking to scale what&apos;s working? Let&apos;s talk
            </button>
          </div>

          {/* Hero Case Studies */}
          <div className="mt-24">
            <p className="text-xs text-neutral-500 uppercase tracking-[0.2em] mb-10 font-body font-medium">
              Trusted by industry leaders. Click to see results.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {Object.entries(caseStudies).map(([key, study]) => (
                <button
                  key={key}
                  onClick={() => setActiveModal(key)}
                  className="group border-glow bg-white/[0.02] border border-white/10 hover:border-red-700/50 rounded-2xl p-6 text-center transition-all card-hover backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-4 h-10 items-center">
                    <img
                      src={getLogo(study.domain)}
                      alt={study.name}
                      className="h-8 w-auto object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const sibling = target.nextSibling as HTMLElement;
                        if (sibling) sibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-10 h-10 bg-neutral-800 rounded-lg items-center justify-center">
                      <span className="text-neutral-400 text-xs font-bold">{study.name.substring(0, 2).toUpperCase()}</span>
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-1">{study.name}</h3>
                  <p className="text-red-500 font-bold text-sm">{study.highlight}</p>
                  <span className="text-xs text-neutral-600 group-hover:text-red-500 transition-colors mt-3 block font-body">
                    View Case Study →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-8"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl animate-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center p-3 border border-white/10">
                    <img
                      src={getLogo(caseStudies[activeModal].domain)}
                      alt={caseStudies[activeModal].name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold">{caseStudies[activeModal].name}</h2>
                    <p className="text-neutral-500 font-body font-light">{caseStudies[activeModal].highlight}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10"
                >
                  <span className="text-neutral-400 text-xl">×</span>
                </button>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 mb-6 text-center">
                <div className="font-display text-6xl md:text-7xl font-bold text-red-500 mb-2">
                  {caseStudies[activeModal].metric}
                </div>
                <p className="text-neutral-400 font-body font-light text-lg">{caseStudies[activeModal].metricLabel}</p>
              </div>

              {caseStudies[activeModal].quote && (
                <blockquote className="border-l-2 border-red-700 pl-6 my-6">
                  <p className="text-lg italic text-neutral-300 leading-relaxed font-body font-light">{caseStudies[activeModal].quote}</p>
                  <cite className="text-neutral-400 text-sm mt-4 block font-body">
                    <span className="font-medium text-white">{caseStudies[activeModal].quotee}</span>
                    {caseStudies[activeModal].quoteeTitle && (
                      <span className="text-neutral-500">, {caseStudies[activeModal].quoteeTitle}</span>
                    )}
                  </cite>
                </blockquote>
              )}

              {caseStudies[activeModal].hasGif && (
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl h-48 flex items-center justify-center my-6">
                  <span className="text-neutral-500 font-body">[Animated GIF: Blurred leads scrolling]</span>
                </div>
              )}

              {caseStudies[activeModal].description && (
                <p className="text-neutral-400 leading-relaxed font-body font-light">{caseStudies[activeModal].description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Client Modal */}
      {activeClientModal !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-8"
          onClick={() => setActiveClientModal(null)}
        >
          <div
            className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl animate-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center p-2 border border-white/10">
                    <img
                      src={getLogo(allClients[activeClientModal].domain)}
                      alt={allClients[activeClientModal].name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold">{allClients[activeClientModal].name}</h2>
                    {allClients[activeClientModal].years && (
                      <p className="text-neutral-500 text-sm font-body">Partnered for {allClients[activeClientModal].years} years</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setActiveClientModal(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10"
                >
                  <span className="text-neutral-400 text-xl">×</span>
                </button>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 mb-4">
                <p className="text-red-500 font-bold">{allClients[activeClientModal].metric}</p>
                {allClients[activeClientModal].note && (
                  <p className="text-neutral-500 text-sm mt-1">{allClients[activeClientModal].note}</p>
                )}
              </div>

              <p className="text-neutral-400 leading-relaxed font-body font-light">
                {allClients[activeClientModal].description}
              </p>

              {allClients[activeClientModal].hasVideo && (
                <div className="mt-4 bg-white/[0.02] border border-white/10 rounded-xl p-4 text-center">
                  <span className="text-neutral-500 text-sm">🎥 Video testimonial available</span>
                </div>
              )}

              {allClients[activeClientModal].hasQuote && (
                <div className="mt-4 bg-white/[0.02] border border-white/10 rounded-xl p-4 text-center">
                  <span className="text-neutral-500 text-sm">💬 Quote available</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Free Test Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">See Results Before You Commit</h2>
            <p className="text-xl text-neutral-400 leading-relaxed font-body font-light">
              We&apos;ll launch a real campaign for your business at no cost. If it works, we talk. If not, you&apos;ve lost nothing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            {[
              { num: '01', title: 'Apply', desc: 'Tell us about your ICP, your offer, and your goals' },
              { num: '02', title: 'We Launch', desc: 'Real campaign, real prospects, real infrastructure' },
              { num: '03', title: 'See Results', desc: 'Get positive responses. Decide if you want more.' }
            ].map((step, i) => (
              <div key={i} className="border-glow stat-card border border-white/10 rounded-2xl p-8 card-hover">
                <span className="text-red-500 font-display font-bold text-sm">{step.num}</span>
                <h3 className="font-display text-xl font-bold mt-4 mb-2">{step.title}</h3>
                <p className="text-neutral-500 font-body font-light">{step.desc}</p>
              </div>
            ))}
          </div>

          <button className="btn-hover border border-white/20 hover:border-red-700 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-display font-semibold transition-all">
            Learn More About Free Tests →
          </button>
        </div>
      </section>

      {/* Client Logo Marquee */}
      <section className="py-8 border-y border-white/5 overflow-hidden">
        <div className="relative">
          <div className="marquee-track flex gap-16 items-center">
            {marqueeClients.map((client, i) => (
              <div key={i} className="flex-shrink-0 opacity-30 hover:opacity-70 transition-opacity duration-300">
                <img
                  src={getLogo(client.domain)}
                  alt={client.name}
                  className="h-7 w-auto object-contain filter brightness-0 invert"
                  onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">The Results Speak for Themselves</h2>
            <p className="text-neutral-500 text-lg font-body font-light">8M+ emails monthly. Here&apos;s what that looks like for some of our clients.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {allClients.map((client, i) => (
              <button
                key={i}
                onClick={() => setActiveClientModal(i)}
                className="border-glow rounded-xl p-4 transition-all text-center bg-white/[0.02] border border-white/5 hover:border-white/20 cursor-pointer card-hover"
              >
                {/* Logo above company name */}
                <div className="flex justify-center mb-3 h-8">
                  <img
                    src={getLogo(client.domain)}
                    alt={client.name}
                    className="h-8 w-auto object-contain filter brightness-0 invert opacity-50"
                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                  />
                </div>
                <h4 className="font-display font-semibold text-sm text-white text-center">{client.name}</h4>
                {client.years && (
                  <span className="text-xs text-neutral-600 font-body block text-center">Partnered for {client.years} years</span>
                )}
                {client.metric && (
                  <p className="font-bold text-xs mt-2 text-center text-red-500">
                    {client.metric}
                    {client.isLink && ' →'}
                  </p>
                )}
                {client.hasQuote && (
                  <span className="text-xs text-neutral-500 mt-1 block text-center">💬</span>
                )}
                {client.hasVideo && (
                  <span className="text-xs text-neutral-500 mt-1 block text-center">🎥</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-20 tracking-tight">How We Work Together</h2>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block"></div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { phase: 'Free Test', title: 'Launch & Evaluate', desc: 'We launch a successful free test, you evaluate' },
                { phase: 'Weeks 1-2', title: 'Onboarding', desc: 'Onboarding and inbox warm-up' },
                { phase: 'Weeks 3-4', title: 'First Campaigns', desc: 'First campaigns are being launched' },
                { phase: 'Month 2', title: 'Scale Winners', desc: 'Double down on what works' },
                { phase: 'Ongoing', title: 'Optimize', desc: 'Continuous testing and iteration' }
              ].map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full mx-auto mb-4 flex items-center justify-center font-display font-bold text-lg relative z-10 shadow-lg shadow-red-900/30 group-hover:scale-110 transition-transform duration-300">
                    {i + 1}
                  </div>
                  <p className="text-red-500 text-xs font-semibold mb-2 uppercase tracking-wider font-body">{step.phase}</p>
                  <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-neutral-500 text-sm font-body font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quotes Section */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredQuotes.map((item, i) => (
              <div key={i} className="border-glow stat-card border border-white/10 rounded-3xl p-8 card-hover">
                <div className="flex items-start gap-4 mb-6">
                  {/* Photo or Logo */}
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const sibling = target.nextSibling as HTMLElement;
                        if (sibling) sibling.style.display = 'flex';
                      }}
                    />
                  ) : item.useLogo ? (
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white/10 p-2">
                      <img
                        src={getLogo(item.domain)}
                        alt={item.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white/10">
                      <span className="font-display font-bold text-lg text-white/60">{item.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  )}
                  {/* Fallback initials */}
                  <div className="hidden w-16 h-16 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white/10">
                    <span className="font-display font-bold text-lg text-white/60">{item.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">{item.name}</h4>
                    <p className="text-neutral-500 text-sm font-body font-light">{item.title}</p>
                  </div>
                </div>
                <blockquote className="text-neutral-300 leading-relaxed text-lg font-body font-light italic">
                  &quot;{item.quote}&quot;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="px-8 py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Methodology</h2>
            <p className="text-xl text-neutral-400 leading-relaxed font-body font-light">
              From your best idea to a positive response. Three pillars. Zero gaps.
            </p>
          </div>

          {/* Pillar 1 - Enhanced Flywheel */}
          <div className="stat-card border border-white/10 rounded-3xl p-8 md:p-10 mb-6">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <span className="bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold px-4 py-1.5 rounded-full font-display">01</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold">Email Infrastructure</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <p className="text-neutral-300 mb-4 leading-relaxed text-lg font-body font-light">
                  <span className="text-white font-medium">Done-for-you email deliverability setup and consulting.</span> We follow all the best practices, but what makes us different is simple:
                </p>
                <p className="text-neutral-300 mb-6 leading-relaxed font-body font-light">
                  <span className="text-white font-medium">We always keep backup domains warming and ready.</span> If your goal is to send 1,000 emails per day, we set up capacity for 1,500. That way, when any domain starts underperforming, we swap it instantly without any downtime.
                </p>
                <div className="space-y-3 inline-block text-left">
                  {[
                    'Backup domains always warming in reserve',
                    'Weekly performance monitoring',
                    'Instant swap when a domain drops',
                    'Never wait 2 weeks to recover'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 bg-red-700/20 rounded-lg flex items-center justify-center group-hover:bg-red-700/30 transition-colors">
                        <span className="text-red-500 text-sm">✓</span>
                      </div>
                      <span className="text-neutral-300 font-body font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Flywheel */}
              <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl p-8 flex items-center justify-center border border-white/5">
                <div className="text-center relative">
                  {/* Outer rotating ring */}
                  <div className="relative w-64 h-64 mx-auto">
                    {/* Animated outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-700/30 spin-slow"></div>

                    {/* Static middle ring */}
                    <div className="absolute inset-4 rounded-full border-2 border-white/10"></div>

                    {/* Pulsing inner ring */}
                    <div className="absolute inset-8 rounded-full border-2 border-red-500/40 pulse-ring"></div>

                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-900/50">
                        <span className="text-3xl">📧</span>
                      </div>
                    </div>

                    {/* Flywheel segments */}
                    <div className="flywheel-segment absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-b from-green-600 to-green-700 px-4 py-2 rounded-xl text-xs font-bold shadow-lg border border-green-500/30">
                      <span className="text-green-100">Purchase</span>
                    </div>
                    <div className="flywheel-segment absolute top-1/2 -right-4 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-xl text-xs font-bold shadow-lg border border-blue-500/30">
                      <span className="text-blue-100">Warming</span>
                    </div>
                    <div className="flywheel-segment absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-t from-amber-600 to-amber-700 px-4 py-2 rounded-xl text-xs font-bold shadow-lg border border-amber-500/30">
                      <span className="text-amber-100">Active</span>
                    </div>
                    <div className="flywheel-segment absolute top-1/2 -left-4 -translate-y-1/2 bg-gradient-to-l from-neutral-600 to-neutral-700 px-4 py-2 rounded-xl text-xs font-bold shadow-lg border border-neutral-500/30">
                      <span className="text-neutral-100">Retire</span>
                    </div>

                    {/* Arrows */}
                    <div className="absolute top-8 right-8 text-white/40 text-lg">↘</div>
                    <div className="absolute bottom-8 right-8 text-white/40 text-lg">↙</div>
                    <div className="absolute bottom-8 left-8 text-white/40 text-lg">↖</div>
                    <div className="absolute top-8 left-8 text-white/40 text-lg">↗</div>
                  </div>

                  <p className="text-neutral-400 text-sm mt-6 font-body font-medium">Domain Flywheel</p>
                  <p className="text-neutral-600 text-xs mt-1">Continuous rotation ensures zero downtime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="stat-card border border-white/10 rounded-3xl p-8 md:p-10 mb-6">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <span className="bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold px-4 py-1.5 rounded-full font-display">02</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold">List Building</h3>
            </div>

            <p className="text-neutral-400 mb-10 max-w-2xl mx-auto text-center text-lg font-body font-light">
              We don&apos;t just scrape. We analyze your best customers, then find everyone who looks like them.
            </p>

            <div className="grid grid-cols-5 gap-3 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Your Customers', desc: 'Input your list' },
                { step: '2', title: 'Enrich', desc: 'Add 20+ data points' },
                { step: '3', title: 'Analyze', desc: 'Find patterns' },
                { step: '4', title: 'AI Review', desc: 'Batch API scoring' },
                { step: '5', title: 'Validate', desc: 'Claygent + Prospeo.io' }
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.02] rounded-2xl p-4 text-center relative border border-white/5 hover:border-white/20 transition-colors">
                  {i < 4 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-red-500 z-10 text-lg">→</div>
                  )}
                  <span className="text-red-500 font-display font-bold text-2xl">{item.step}</span>
                  <h4 className="font-display font-semibold text-sm mt-2">{item.title}</h4>
                  <p className="text-neutral-500 text-xs mt-1 font-body font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="stat-card border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <span className="bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold px-4 py-1.5 rounded-full font-display">03</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold">Campaign Strategy</h3>
            </div>

            <p className="text-neutral-400 mb-10 max-w-2xl mx-auto text-center text-lg font-body font-light">
              15-20 campaign ideas from day one. We test everything until we find winners, then scale.
            </p>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="border-glow bg-white/[0.02] border border-white/10 rounded-2xl p-6 text-center card-hover">
                <div className="w-12 h-12 bg-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-display font-bold text-lg mb-2">Broad Campaigns</h4>
                <p className="text-neutral-400 text-sm leading-relaxed font-body font-light">
                  Evergreen campaigns that can reach the majority of your TAM. Built to scale.
                </p>
              </div>
              <div className="border-glow bg-white/[0.02] border border-white/10 rounded-2xl p-6 text-center card-hover">
                <div className="w-12 h-12 bg-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h4 className="font-display font-bold text-lg mb-2">Focused Campaigns</h4>
                <p className="text-neutral-400 text-sm leading-relaxed font-body font-light">
                  Narrow down on large triggers and specific pain points for higher conversion.
                </p>
              </div>
              <div className="border-glow bg-white/[0.02] border border-white/10 rounded-2xl p-6 text-center card-hover">
                <div className="w-12 h-12 bg-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-display font-bold text-lg mb-2">Niche Campaigns</h4>
                <p className="text-neutral-400 text-sm leading-relaxed font-body font-light">
                  Highly selective lists with only 100-500 people qualifying at any given time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Validation Section */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-neutral-500 uppercase tracking-[0.2em] mb-2 font-body font-medium">
            What Our Partners Say
          </p>
          <p className="text-neutral-400 mb-10 text-sm font-body font-light max-w-xl mx-auto">
            They get an inside look at our work and can verify our success. Not just as an individual customer, but as a whole business.
          </p>

          {/* Clay Elite Badge in Partners Section */}
          <div className="flex justify-center mb-8">
            <img
              src={images.clayEliteCircle}
              alt="Clay Elite Studio Solutions Partner"
              className="h-24 w-auto hover:scale-105 transition-transform"
              onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
            />
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            {partners.map((partner, i) => (
              <div key={i} className="border-glow stat-card border border-white/10 px-6 py-4 rounded-xl flex items-center gap-3 card-hover">
                <img
                  src={getLogo(partner.domain)}
                  alt={partner.name}
                  className="h-6 w-auto object-contain"
                  onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                />
                <div className="text-left">
                  <span className="font-display font-semibold text-neutral-300 block">{partner.name}</span>
                  {partner.note && (
                    <span className="text-xs text-neutral-500">{partner.note}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-700/10 rounded-full blur-3xl pointer-events-none pulse-glow"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to See What&apos;s Possible?</h2>
          <p className="text-xl text-neutral-400 mb-12 leading-relaxed font-body font-light">
            B2B companies with $1M+ revenue. Free test campaign. Real results.
          </p>
          <a href="https://tally.so/r/meK550" target="_blank" rel="noopener noreferrer" className="btn-hover bg-gradient-to-r from-red-500 to-red-700 text-white px-12 py-5 rounded-xl text-lg font-display font-bold shadow-lg shadow-red-900/30 inline-block">
            Apply for Your Free Test Campaign →
          </a>
          <p className="text-neutral-600 mt-8 font-body font-light">No commitment. See positive responses before you decide.</p>
        </div>
      </section>

      {/* Footer with Badges */}
      <footer className="px-8 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Badges Row */}
          <div className="flex justify-center gap-6 mb-12 pb-12 border-b border-white/5">
            <img
              src={images.clayEliteBadge}
              alt="Clay Elite Studio Partner 2026"
              className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <img
                  src={images.gexLogo}
                  alt="Growth Engine X"
                  className="h-10 w-auto"
                  onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                />
                <span className="font-display font-bold text-lg tracking-tight">GROWTH ENGINE X</span>
              </div>
              <p className="text-neutral-500 text-sm font-body font-light">8M+ emails monthly.</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm mb-4 text-neutral-400 uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-neutral-500 font-body font-light">
                <li className="hover:text-white transition-colors cursor-pointer">About</li>
                <li className="hover:text-white transition-colors cursor-pointer">Methodology</li>
                <li className="hover:text-white transition-colors cursor-pointer">Free Test</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm mb-4 text-neutral-400 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3 text-neutral-500 font-body font-light">
                <li className="text-red-500 hover:text-red-400 transition-colors cursor-pointer">Growth Drops ✦</li>
                <li className="hover:text-white transition-colors cursor-pointer">Case Studies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm mb-4 text-neutral-400 uppercase tracking-wider">Connect</h4>
              <ul className="space-y-3 text-neutral-500 font-body font-light">
                <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
                <li className="hover:text-white transition-colors cursor-pointer">YouTube</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 mt-12 pt-8 text-center">
            <p className="text-neutral-600 text-sm font-body font-light">© 2025 Growth Engine X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
