import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Youtube, Twitter, Linkedin, Music2, Instagram } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function DanielMateoPortfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = useRef({});

  useEffect(() => {
    if (document.getElementById('twitter-widget-script')) {
      if (window.twttr) window.twttr.widgets.load();
    } else {
      const script = document.createElement('script');
      script.id = 'twitter-widget-script';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      script.onload = () => { if (window.twttr) window.twttr.widgets.load(); };
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const observers = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-10% 0px -80% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Header — editorial masthead */}
      <header className="sticky top-0 bg-white z-50" style={{ borderBottom: '2px solid #111' }}>
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between py-4">
          <div>
            <h1 className="text-base font-black tracking-tight text-gray-900 uppercase leading-none">Daniel Mateo-Galvis</h1>
            <p className="text-xs text-gray-400 tracking-widest uppercase mt-0.5">Finance · Crypto · Content</p>
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1 relative">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative px-3 py-1.5 text-xs font-black uppercase tracking-widest transition-colors z-10"
                style={{ color: activeSection === id ? '#fff' : '#9ca3af' }}
              >
                {activeSection === id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gray-900"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile nav */}
          <nav className="flex sm:hidden items-center gap-1 overflow-x-auto">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 text-xs font-black uppercase tracking-widest whitespace-nowrap transition-colors ${
                  activeSection === id ? 'bg-gray-900 text-white' : 'text-gray-400'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">

        {/* ── ABOUT ─────────────────────────────────────────── */}
        <section id="about" ref={el => sectionRefs.current.about = el} className="py-16">
          {/* Section rule */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-black tracking-widest uppercase text-gray-900 whitespace-nowrap">About Me</span>
            <div className="flex-1" style={{ height: 1, background: '#111' }}></div>
          </div>

          {/* Hero profile */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            <div className="sm:col-span-1">
              <img
                src="/profile.jpg"
                alt="Daniel Mateo-Galvis"
                className="w-full object-cover"
                style={{ filter: 'grayscale(100%)', aspectRatio: '1/1', maxWidth: 240 }}
              />
            </div>
            <div className="sm:col-span-2 flex flex-col justify-center">
              <h2 className="font-black text-gray-900 leading-none tracking-tight mb-1" style={{ fontSize: '3.5rem' }}>DANIEL</h2>
              <h2 className="font-black text-gray-900 leading-none tracking-tight mb-6" style={{ fontSize: '3.5rem' }}>MATEO-GALVIS</h2>
              <div className="mb-6" style={{ width: 48, height: 4, background: '#111' }}></div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-md">
                Finance and crypto content creator · 600,000+ followers · 100M+ impressions · Creator of one of the most recognized independent finance brands on X. Also performing as house DJ <span className="font-semibold text-gray-900">Mateo</span> in South Florida.
              </p>
              <a
                href="mailto:valueandtime@icloud.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-700 text-white font-black text-xs uppercase tracking-widest transition-colors w-fit"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* LinkedIn card — editorial byline */}
          <div className="border border-gray-200 p-5 flex items-center gap-5" style={{ borderLeft: '4px solid #0A66C2' }}>
            <img src="/profile.jpg" alt="Daniel Mateo-Galvis" className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-black text-gray-900 text-sm leading-tight">Daniel Mateo-Galvis</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Finance & Crypto Content Creator · Value & Time</p>
                  <p className="text-xs text-gray-400 mt-0.5">Miami, Florida · <span className="text-blue-600 font-semibold">500+ connections</span></p>
                </div>
                <a
                  href="https://www.linkedin.com/in/danielmateogalvis"
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs font-black uppercase tracking-widest text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1.5 transition-all duration-200 flex-shrink-0"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNERSHIPS ──────────────────────────────────── */}
        <section id="partnerships" ref={el => sectionRefs.current.partnerships = el} className="py-16" style={{ borderTop: '2px solid #111' }}>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-black tracking-widest uppercase text-gray-900 whitespace-nowrap">Partnerships</span>
            <div className="flex-1" style={{ height: 1, background: '#111' }}></div>
          </div>

          <div style={{ border: '1px solid #e5e7eb' }}>
            {[
              [
                { name: 'Polymarket', url: 'https://polymarket.com', logo: 'https://icon.horse/icon/polymarket.com' },
                { name: 'Solana', url: 'https://solana.com', logo: 'https://icon.horse/icon/solana.com' },
                { name: 'Sui', url: 'https://sui.io', logo: 'https://icon.horse/icon/sui.io' },
              ],
              [
                { name: 'Kick', url: 'https://kick.com', logo: 'https://icon.horse/icon/kick.com' },
                { name: 'Kraken', url: 'https://kraken.com', logo: '/kraken-logo.webp' },
                { name: 'Solana Mobile', url: 'https://solanamobile.com', logo: 'https://icon.horse/icon/solanamobile.com' },
              ],
              [
                { name: 'Bitcoin Conf', url: 'https://b.tc/conference', logo: '/bitcoin-conf-logo.png' },
                { name: 'City of Miami', url: 'https://miamigov.com', logo: 'https://icon.horse/icon/miamigov.com' },
                { name: 'Valuetainment', url: 'https://valuetainment.com', logo: '/valuetainment-logo.webp' },
              ],
              [
                { name: 'StockTwits', url: 'https://stocktwits.com', logo: '/stocktwits-logo.png' },
                { name: 'Yuga Labs', url: 'https://yuga.com', logo: 'https://icon.horse/icon/yuga.com' },
                { name: 'Apechain', url: 'https://apechain.com', logo: 'https://icon.horse/icon/apechain.com' },
              ],
              [
                { name: 'Crossmint', url: 'https://crossmint.com', logo: 'https://icon.horse/icon/crossmint.com' },
                { name: 'Magic Eden', url: 'https://magiceden.io', logo: '/magiceden-logo.png' },
              ],
            ].map((row, rowIdx, rows) => (
              <div key={rowIdx} className="grid grid-cols-3"
                style={rowIdx < rows.length - 1 ? { borderBottom: '1px solid #e5e7eb' } : {}}>
                {row.map((partner, i) => (
                  <a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-4 py-10 px-8 group transition-all hover:bg-gray-50"
                    style={i < row.length - 1 ? { borderRight: '1px solid #e5e7eb' } : {}}>
                    <img src={partner.logo} alt={partner.name}
                      className="h-12 w-12 object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }} />
                    <span className="text-xs font-black tracking-widest text-gray-400 uppercase group-hover:text-gray-900 transition-colors">{partner.name}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ──────────────────────────────────────── */}
        <section id="projects" ref={el => sectionRefs.current.projects = el} className="py-16" style={{ borderTop: '2px solid #111' }}>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-black tracking-widest uppercase text-gray-900 whitespace-nowrap">Projects</span>
            <div className="flex-1" style={{ height: 1, background: '#111' }}></div>
          </div>

          {/* Value & Time sublabel */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-black tracking-widest uppercase text-gray-400 whitespace-nowrap">Value & Time</span>
            <div className="flex-1" style={{ height: 1, background: '#e5e7eb' }}></div>
          </div>

          {/* Substack */}
          <div className="w-full mb-4 border border-gray-200" style={{ borderTop: '3px solid #f97316' }}>
            <img
              src="https://substack-post-media.s3.amazonaws.com/public/images/6bb57440-5915-4dcc-a09d-511ebc96200c_1536x1024.png"
              alt="Magic Eden article" className="w-full object-cover" style={{ maxHeight: 220 }}
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-black">S</span>
                </div>
                <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Value & Time · Substack</span>
                <span className="text-xs text-gray-400 ml-auto">Feb 26, 2026</span>
              </div>
              <h3 className="font-black text-gray-900 text-xl leading-snug mb-3">Magic Eden is done with ETH NFTs and Ordinals</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Magic Eden is shutting down Bitcoin and EVM marketplaces while sunsetting its multi-chain wallet. A strategic consolidation — focusing resources on Solana — that represents intelligent cycle management rather than failure.
              </p>
              <div className="flex items-center justify-between">
                <a href="https://valueandtime.substack.com/p/magic-eden-is-done-with-eth-nfts" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gray-900 hover:bg-gray-700 text-white text-xs font-black uppercase tracking-widest transition-colors">
                  Read Article →
                </a>
                <a href="https://valueandtime.substack.com" target="_blank" rel="noopener noreferrer"
                  className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-gray-800 border border-gray-300 hover:border-gray-600 px-4 py-2 transition-colors">
                  Subscribe
                </a>
              </div>
            </div>
          </div>

          {/* Twitter */}
          <div className="w-full mb-4 border border-gray-200" style={{ borderTop: '3px solid #1d9bf0' }}>
            <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100">
              <Twitter className="w-4 h-4 text-gray-900" />
              <span className="text-sm font-black text-gray-900">@valueandtime</span>
              <a href="https://x.com/valueandtime" target="_blank" rel="noopener noreferrer"
                className="ml-auto text-xs font-black uppercase tracking-widest text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-900 px-3 py-1.5 transition-colors">
                Follow
              </a>
            </div>
            <div className="flex justify-center px-6 py-2"
              dangerouslySetInnerHTML={{ __html: `
                <blockquote class="twitter-tweet" data-width="500" data-theme="light" data-dnt="true">
                  <p lang="en" dir="ltr">Donald Trump is the worst vice president in Israeli history</p>
                  &mdash; Value &amp; Time (@valueandtime)
                  <a href="https://twitter.com/valueandtime/status/2029582553674297621?ref_src=twsrc%5Etfw">March 5, 2026</a>
                </blockquote>
              `}}
            />
          </div>

          {/* YouTube */}
          <div className="w-full mb-12 border border-gray-200" style={{ borderTop: '3px solid #ff0000' }}>
            <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100">
              <img src="/yt-icon.jpg" alt="Value & Time" className="w-8 h-8 rounded-full object-cover" />
              <div>
                <p className="text-sm font-black text-gray-900 leading-none">Value & Time</p>
                <p className="text-xs text-gray-400 mt-0.5">@valueandtime</p>
              </div>
              <a href="https://youtube.com/@valueandtime" target="_blank" rel="noopener noreferrer"
                className="ml-auto text-xs font-black uppercase tracking-widest text-red-600 hover:text-white hover:bg-red-600 border border-red-200 hover:border-red-600 px-3 py-1.5 transition-colors">
                Subscribe
              </a>
            </div>
            <iframe width="100%" height="420"
              src="https://www.youtube.com/embed/kTrdpRFm45U?start=202"
              title="Value & Time" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen style={{ display: 'block' }} />
          </div>

          {/* Tools */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-black tracking-widest uppercase text-gray-400 whitespace-nowrap">Tools & Affiliate Links</span>
            <div className="flex-1" style={{ height: 1, background: '#e5e7eb' }}></div>
          </div>
          <div className="mb-16" style={{ border: '1px solid #e5e7eb' }}>
            <div className="grid grid-cols-4">
              {[
                { name: 'TradingView', url: 'https://www.tradingview.com/pricing/?share_your_love=valueandtime', logo: 'https://icon.horse/icon/tradingview.com' },
                { name: 'Coinbase', url: 'https://coinbase.com/join/52XEHSS?src=ios-link', logo: 'https://icon.horse/icon/coinbase.com' },
                { name: 'Padre', url: 'https://trade.padre.gg/rk/value', logo: '/padre-logo.png' },
                { name: 'Trojan Bot', url: 'https://t.me/solana_trojanbot?start=r-valueandtime', logo: 'https://icon.horse/icon/telegram.org' },
              ].map((tool, i, arr) => (
                <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-4 py-10 px-8 group transition-all hover:bg-gray-50"
                  style={i < arr.length - 1 ? { borderRight: '1px solid #e5e7eb' } : {}}>
                  <img src={tool.logo} alt={tool.name} className="h-12 w-12 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }} />
                  <span className="text-xs font-black tracking-widest text-gray-400 uppercase group-hover:text-gray-900 transition-colors">{tool.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Reddit Trading */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-black tracking-widest uppercase text-gray-400 whitespace-nowrap">Reddit Trading</span>
              <div className="flex-1" style={{ height: 1, background: '#e5e7eb' }}></div>
            </div>
            <div className="border border-gray-200" style={{ borderTop: '3px solid #ff4500' }}>
              <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="#ff4500">
                  <path d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm5.894 9.223a1.33 1.33 0 0 1 .563 1.073 1.334 1.334 0 0 1-1.334 1.334 1.329 1.329 0 0 1-.878-.332c-.878.596-2.07.986-3.394 1.03l.577 2.717 1.876-.4a1.0 1.0 0 1 1 .093.435l-2.094.446a.25.25 0 0 1-.298-.188l-.644-3.032c-1.354-.033-2.573-.428-3.463-1.034a1.329 1.329 0 0 1-.876.332 1.334 1.334 0 0 1-1.334-1.334c0-.435.21-.82.534-1.065a2.62 2.62 0 0 1-.027-.378c0-1.917 2.228-3.472 4.974-3.472 2.745 0 4.973 1.555 4.973 3.472 0 .128-.01.254-.028.376zm-8.56.777a.889.889 0 1 0 1.778 0 .889.889 0 0 0-1.778 0zm4.939 2.356c-.607.607-1.762.655-2.273.655-.511 0-1.667-.048-2.273-.655a.167.167 0 0 1 .235-.235c.383.383 1.196.52 2.038.52.842 0 1.654-.137 2.038-.52a.167.167 0 0 1 .235.235zm-.213-1.467a.889.889 0 1 0 1.778 0 .889.889 0 0 0-1.778 0z"/>
                </svg>
                <span className="text-sm font-black text-gray-900">Reddit Trading Community</span>
                <a href="https://reddit.com/r/valueandtime" target="_blank" rel="noopener noreferrer"
                  className="ml-auto text-xs font-black uppercase tracking-widest text-orange-600 hover:text-white hover:bg-orange-500 border border-orange-200 hover:border-orange-500 px-3 py-1.5 transition-colors">
                  Join
                </a>
              </div>
              <div className="px-6 py-6">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">Finance and crypto trading discussions, market analysis, and community insights.</p>
                <a href="https://reddit.com/r/valueandtime" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gray-900 hover:bg-gray-700 text-white text-xs font-black uppercase tracking-widest transition-colors">
                  View Community →
                </a>
              </div>
            </div>
          </div>

          {/* MATEO */}
          <div style={{ borderTop: '2px solid #111', paddingTop: '3rem' }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-black tracking-widest uppercase text-gray-900 whitespace-nowrap">Mateo</span>
              <div className="flex-1" style={{ height: 1, background: '#111' }}></div>
            </div>
            <h2 className="font-black text-gray-900 tracking-tight leading-none mb-2" style={{ fontSize: '4rem' }}>MATEO</h2>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">DJ Sets · Live Mixes · Event Bookings</p>

            <div className="border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-black text-gray-900">Halloween Mix 2025</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">Live from Palm Beach</p>
                </div>
                <a href="https://x.com/itsmateomusic" target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gray-900 hover:bg-gray-700 text-white text-xs font-black uppercase tracking-widest transition-colors">
                  Book Event
                </a>
              </div>
              <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1994831648&color=%23000000&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: 'https://x.com/itsmateomusic', label: 'Twitter', hover: 'hover:bg-gray-900 hover:text-white hover:border-gray-900', icon: <Twitter className="w-4 h-4" /> },
                { href: 'https://instagram.com/itsmateomusic', label: 'Instagram', hover: 'hover:bg-pink-500 hover:text-white hover:border-pink-500', icon: <Instagram className="w-4 h-4" /> },
                { href: 'https://tiktok.com/@itsmateomusic', label: 'TikTok', hover: 'hover:bg-black hover:text-white hover:border-black', icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                )},
                { href: 'https://soundcloud.com/itsmateomusic', label: 'SoundCloud', hover: 'hover:bg-orange-500 hover:text-white hover:border-orange-500', icon: <Music2 className="w-4 h-4" /> },
              ].map(({ href, label, hover, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3 border border-gray-200 text-xs font-black uppercase tracking-widest text-gray-700 transition-all duration-200 ${hover}`}>
                  {icon}{label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────────────── */}
        <section id="contact" ref={el => sectionRefs.current.contact = el} className="py-16" style={{ borderTop: '2px solid #111' }}>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-black tracking-widest uppercase text-gray-900 whitespace-nowrap">Contact</span>
            <div className="flex-1" style={{ height: 1, background: '#111' }}></div>
          </div>

          <h2 className="font-black text-gray-900 leading-none tracking-tight mb-3" style={{ fontSize: '3.5rem' }}>GET IN<br/>TOUCH.</h2>
          <div className="mb-6" style={{ width: 48, height: 4, background: '#111' }}></div>
          <p className="text-sm text-gray-600 mb-8 max-w-lg leading-relaxed">
            Open to brand partnerships, speaking opportunities, podcast appearances, and media collaborations.
          </p>
          <a href="mailto:valueandtime@icloud.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-700 text-white font-black text-xs uppercase tracking-widest transition-colors mb-10">
            valueandtime@icloud.com →
          </a>

          <div className="flex flex-wrap gap-3 mt-2">
            {[
              { href: 'https://x.com/valueandtime', label: '@valueandtime', icon: <Twitter className="w-4 h-4" /> },
              { href: 'https://youtube.com/@valueandtime', label: 'YouTube', icon: <Youtube className="w-4 h-4 text-red-600" /> },
              { href: 'https://www.linkedin.com/in/danielmateogalvis', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4 text-blue-600" /> },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-gray-900 text-xs font-black uppercase tracking-widest text-gray-700 transition-colors">
                {icon}{label}
              </a>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: '2px solid #111', marginTop: '2rem' }}>
        <div className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center text-xs text-gray-500 uppercase tracking-widest font-black">
          <div>© 2026 Daniel Mateo-Galvis</div>
          <div className="flex gap-6">
            <a href="https://x.com/valueandtime" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">@valueandtime</a>
            <a href="https://x.com/itsmateomusic" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">@itsmateomusic</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
