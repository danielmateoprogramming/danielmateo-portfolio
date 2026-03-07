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
    <div className="min-h-screen" style={{ background: '#faf7f2' }}>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md" style={{ background: 'rgba(250,247,242,0.85)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between py-3.5">
          <span className="text-sm font-semibold text-gray-900">Daniel Mateo-Galvis</span>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-0.5 bg-white rounded-full px-1.5 py-1.5 shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors z-10"
                style={{ color: activeSection === id ? '#fff' : '#6b7280' }}
              >
                {activeSection === id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gray-900"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile nav */}
          <nav className="flex sm:hidden items-center gap-0.5 overflow-x-auto">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${
                  activeSection === id ? 'bg-gray-900 text-white' : 'text-gray-500'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-6 space-y-3">

        {/* ── ABOUT ─────────────────────────────────────────── */}
        <section id="about" ref={el => sectionRefs.current.about = el} className="space-y-2">

          {/* Hero card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 leading-tight">Daniel Mateo-Galvis</h1>
                    <p className="text-sm text-gray-500 mt-1">Finance & Crypto Content Creator · Value & Time</p>
                  </div>
                  <a href="mailto:valueandtime@icloud.com"
                    className="text-xs font-semibold text-white px-4 py-2 rounded-full transition-colors flex-shrink-0"
                    style={{ background: '#111' }}>
                    Get in touch
                  </a>
                </div>
                <div className="text-sm text-gray-600 leading-relaxed mt-3 space-y-2">
                  <p>Finance and crypto content creator with a combined social media following of 600,000+ across platforms. Creator of <span className="font-semibold text-gray-900">Value & Time</span>, one of the more recognized independent finance brands on X, covering crypto markets, Solana, AI, and macroeconomics.</p>
                  <p>Background in traditional financial media production. Currently building Value & Time into a full media operation — newsletter, podcast, and YouTube — focused on honest market analysis for people who are still paying attention when things are down.</p>
                  <p>Also Part Time House-DJ performing at nightclubs in South Florida, under the project name <span className="font-semibold text-gray-900">"Mateo"</span></p>
                  <p>Open to brand partnerships, speaking opportunities, and media collaborations.<br/>
                  <a href="mailto:valueandtime@icloud.com" className="font-medium text-gray-900 hover:underline">📩 valueandtime@icloud.com</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3" style={{ border: '1px solid rgba(0,0,0,0.06)', borderLeft: '3px solid #0A66C2' }}>
            <img src="/profile.jpg" alt="Daniel Mateo-Galvis" className="w-11 h-11 rounded-full object-cover flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 leading-tight">Daniel Mateo-Galvis</p>
              <p className="text-xs text-gray-400 mt-0.5">Palm Beach, Florida · <span className="text-blue-600 font-medium">500+ connections</span></p>
            </div>
            <a href="https://www.linkedin.com/in/danielmateogalvis" target="_blank" rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-600 border border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-4 py-1.5 rounded-full transition-all flex-shrink-0">
              Connect
            </a>
          </div>
        </section>

        {/* ── PARTNERSHIPS ──────────────────────────────────── */}
        <section id="partnerships" ref={el => sectionRefs.current.partnerships = el}>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="px-5 pt-4 pb-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Partnerships</p>
            </div>
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
                style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                {row.map((partner, i) => (
                  <a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 py-5 px-4 group hover:bg-gray-50 transition-colors"
                    style={i < row.length - 1 ? { borderRight: '1px solid rgba(0,0,0,0.06)' } : {}}>
                    <img src={partner.logo} alt={partner.name} className="h-10 w-10 object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }} />
                    <span className="text-xs font-medium text-gray-400 group-hover:text-gray-700 transition-colors">{partner.name}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ──────────────────────────────────────── */}
        <section id="projects" ref={el => sectionRefs.current.projects = el} className="space-y-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-1">Projects</p>

          {/* Value & Time label */}
          <p className="text-xs font-medium text-gray-400 px-1">Value & Time</p>

          {/* Substack */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
            <img
              src="https://substack-post-media.s3.amazonaws.com/public/images/6bb57440-5915-4dcc-a09d-511ebc96200c_1536x1024.png"
              alt="Article" className="w-full object-cover" style={{ maxHeight: 160 }}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="text-xs font-medium text-gray-400">Value & Time · Substack</span>
                <span className="text-xs text-gray-300 ml-auto">Feb 26, 2026</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">Magic Eden is done with ETH NFTs and Ordinals</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                A strategic consolidation — focusing resources on Solana — that represents intelligent cycle management rather than failure.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://valueandtime.substack.com/p/magic-eden-is-done-with-eth-nfts" target="_blank" rel="noopener noreferrer"
                  className="text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full transition-colors">
                  Read Article →
                </a>
                <a href="https://valueandtime.substack.com" target="_blank" rel="noopener noreferrer"
                  className="text-xs font-medium text-gray-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors">
                  Subscribe
                </a>
              </div>
            </div>
          </div>

          {/* Twitter */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <Twitter className="w-4 h-4 text-gray-800" />
              <span className="text-sm font-semibold text-gray-900">@valueandtime</span>
              <a href="https://x.com/valueandtime" target="_blank" rel="noopener noreferrer"
                className="ml-auto text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-900 hover:text-white px-4 py-1.5 rounded-full transition-colors">
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
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <img src="/yt-icon.jpg" alt="Value & Time" className="w-7 h-7 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-gray-900 leading-none">Value & Time</p>
                <p className="text-xs text-gray-400 mt-0.5">@valueandtime</p>
              </div>
              <a href="https://youtube.com/@valueandtime" target="_blank" rel="noopener noreferrer"
                className="ml-auto text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-600 hover:text-white px-4 py-1.5 rounded-full transition-colors">
                Subscribe
              </a>
            </div>
            <iframe width="100%" height="300"
              src="https://www.youtube.com/embed/kTrdpRFm45U?start=202"
              title="Value & Time" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen style={{ display: 'block' }} />
          </div>

          {/* Tools */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="px-5 pt-4 pb-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Tools & Affiliate Links</p>
            </div>
            <div className="grid grid-cols-4">
              {[
                { name: 'TradingView', url: 'https://www.tradingview.com/pricing/?share_your_love=valueandtime', logo: 'https://icon.horse/icon/tradingview.com' },
                { name: 'Coinbase', url: 'https://coinbase.com/join/52XEHSS?src=ios-link', logo: 'https://icon.horse/icon/coinbase.com' },
                { name: 'Padre', url: 'https://trade.padre.gg/rk/value', logo: '/padre-logo.png' },
                { name: 'Trojan Bot', url: 'https://t.me/solana_trojanbot?start=r-valueandtime', logo: 'https://icon.horse/icon/telegram.org' },
              ].map((tool, i, arr) => (
                <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 py-5 px-4 group hover:bg-gray-50 transition-colors"
                  style={{ borderTop: '1px solid rgba(0,0,0,0.06)', ...(i < arr.length - 1 ? { borderRight: '1px solid rgba(0,0,0,0.06)' } : {}) }}>
                  <img src={tool.logo} alt={tool.name} className="h-10 w-10 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }} />
                  <span className="text-xs font-medium text-gray-400 group-hover:text-gray-700 transition-colors text-center">{tool.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Reddit Trading */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="#ff4500">
                <path d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm5.894 9.223a1.33 1.33 0 0 1 .563 1.073 1.334 1.334 0 0 1-1.334 1.334 1.329 1.329 0 0 1-.878-.332c-.878.596-2.07.986-3.394 1.03l.577 2.717 1.876-.4a1.0 1.0 0 1 1 .093.435l-2.094.446a.25.25 0 0 1-.298-.188l-.644-3.032c-1.354-.033-2.573-.428-3.463-1.034a1.329 1.329 0 0 1-.876.332 1.334 1.334 0 0 1-1.334-1.334c0-.435.21-.82.534-1.065a2.62 2.62 0 0 1-.027-.378c0-1.917 2.228-3.472 4.974-3.472 2.745 0 4.973 1.555 4.973 3.472 0 .128-.01.254-.028.376zm-8.56.777a.889.889 0 1 0 1.778 0 .889.889 0 0 0-1.778 0zm4.939 2.356c-.607.607-1.762.655-2.273.655-.511 0-1.667-.048-2.273-.655a.167.167 0 0 1 .235-.235c.383.383 1.196.52 2.038.52.842 0 1.654-.137 2.038-.52a.167.167 0 0 1 .235.235zm-.213-1.467a.889.889 0 1 0 1.778 0 .889.889 0 0 0-1.778 0z"/>
              </svg>
              <span className="text-sm font-semibold text-gray-900">Reddit Trading</span>
              <a href="https://reddit.com/r/valueandtime" target="_blank" rel="noopener noreferrer"
                className="ml-auto text-xs font-semibold text-orange-600 bg-orange-50 hover:bg-orange-500 hover:text-white px-4 py-1.5 rounded-full transition-colors">
                Join
              </a>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm text-gray-500 leading-relaxed mb-3">Finance and crypto trading discussions, market analysis, and community insights.</p>
              <a href="https://reddit.com/r/valueandtime" target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold text-white px-4 py-2 rounded-full transition-colors"
                style={{ background: '#ff4500' }}>
                View Community →
              </a>
            </div>
          </div>

          {/* MATEO */}
          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.06)', background: '#000' }}>
            <div className="p-5">
              <img src="/mateo-logo.png" alt="MATEO" className="h-10 w-auto mb-4" />
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>House DJ performing at nightclubs in South Florida. DJ sets, live mixes, and event bookings.</p>

              <div className="rounded-xl overflow-hidden mb-4" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <p className="text-sm font-semibold text-white">Halloween Mix 2025</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Live from Palm Beach</p>
                  </div>
                  <a href="https://x.com/itsmateomusic" target="_blank" rel="noopener noreferrer"
                    className="text-xs font-semibold text-black bg-white hover:bg-gray-100 px-4 py-2 rounded-full transition-colors">
                    Book Event
                  </a>
                </div>
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1994831648&color=%23ffffff&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { href: 'https://x.com/itsmateomusic', label: 'Twitter', icon: <Twitter className="w-4 h-4" /> },
                  { href: 'https://instagram.com/itsmateomusic', label: 'Instagram', icon: <Instagram className="w-4 h-4" /> },
                  { href: 'https://tiktok.com/@itsmateomusic', label: 'TikTok', icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  )},
                  { href: 'https://soundcloud.com/itsmateomusic', label: 'SoundCloud', icon: <Music2 className="w-4 h-4" /> },
                ].map(({ href, label, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium transition-all hover:bg-white hover:text-black"
                    style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}>
                    {icon}{label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────────────── */}
        <section id="contact" ref={el => sectionRefs.current.contact = el}>
          <div className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in touch</h2>
            <p className="text-sm text-gray-500 mb-4 max-w-md leading-relaxed">
              Open to brand partnerships, speaking opportunities, podcast appearances, and media collaborations.
            </p>
            <a href="mailto:valueandtime@icloud.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2 rounded-full transition-colors mb-4"
              style={{ background: '#111' }}>
              valueandtime@icloud.com →
            </a>
            <div className="flex flex-wrap gap-2">
              {[
                { href: 'https://x.com/valueandtime', label: '@valueandtime', icon: <Twitter className="w-4 h-4" /> },
                { href: 'https://youtube.com/@valueandtime', label: 'YouTube', icon: <Youtube className="w-4 h-4 text-red-500" /> },
                { href: 'https://www.linkedin.com/in/danielmateogalvis', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4 text-blue-600" /> },
              ].map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors">
                  {icon}{label}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-6 mt-2 flex justify-between items-center text-xs text-gray-400">
        <span>© 2026 Daniel Mateo-Galvis</span>
        <div className="flex gap-5">
          <a href="https://x.com/valueandtime" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">@valueandtime</a>
          <a href="https://x.com/itsmateomusic" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">@itsmateomusic</a>
        </div>
      </footer>
    </div>
  );
}
