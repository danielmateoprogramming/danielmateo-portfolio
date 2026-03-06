import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Youtube, Twitter, Linkedin, Music2, Instagram } from 'lucide-react';

export default function DanielMateoPortfolio() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Twitter embed
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
    // LinkedIn badge
    if (!document.getElementById('linkedin-badge-script')) {
      const script = document.createElement('script');
      script.id = 'linkedin-badge-script';
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if (window.LIRenderAll) {
      window.LIRenderAll();
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header + Nav */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">Daniel Mateo-Galvis</h1>
          </div>
          <nav className="flex items-center gap-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'partnerships', label: 'Partnerships' },
              { id: 'music', label: 'Music' },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  activeTab === id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">

        {/* HOME TAB */}
        {activeTab === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {/* Intro / About */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-2xl">
                Finance and crypto content creator · 600,000+ followers · 100M+ impressions · Creator of one of the most recognized independent finance brands on X. Also performing as house DJ <span className="font-medium text-gray-900">Mateo</span> in South Florida.
              </p>
              <a
                href="mailto:valueandtime@icloud.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors text-sm"
              >
                📩 valueandtime@icloud.com
              </a>
            </div>

            {/* Projects */}
            <div className="border-t border-gray-200 pt-12">
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">Projects</p>

              {/* Layer 1: LinkedIn widget */}
              <div className="w-full border border-gray-200 rounded-xl overflow-hidden mb-4" style={{ borderTop: '3px solid #0A66C2' }}>
                <div className="px-6 py-5 flex items-center gap-5">
                  <img
                    src="/profile.jpg"
                    alt="Daniel Mateo-Galvis"
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0 shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-gray-900 leading-tight">Daniel Mateo-Galvis</h3>
                        <p className="text-sm text-gray-500 mt-0.5">Finance & Crypto Content Creator · Value & Time</p>
                        <p className="text-xs text-gray-400 mt-0.5">Miami, Florida · <span className="text-blue-600 font-medium">500+ connections</span></p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <a
                          href="https://www.linkedin.com/in/danielmateogalvis"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-full transition-all duration-200"
                        >
                          Connect
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layer 2: Substack article preview */}
              <div className="w-full border border-gray-200 rounded-xl overflow-hidden mb-4">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 bg-orange-500 rounded-md flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Value & Time · Substack</span>
                    <span className="text-xs text-gray-400 ml-auto">Feb 26, 2026</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl leading-snug mb-3">
                    Magic Eden is done with ETH NFTs and Ordinals
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    Magic Eden is shutting down Bitcoin and EVM marketplaces while sunsetting its multi-chain wallet. A strategic consolidation — focusing resources on Solana — that represents intelligent cycle management rather than failure.
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      href="https://valueandtime.substack.com/p/magic-eden-is-done-with-eth-nfts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      Read Article →
                    </a>
                    <a
                      href="https://valueandtime.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-gray-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
                    >
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>

              {/* Layer 3: X/Twitter embed */}
              <div className="w-full border border-gray-200 rounded-xl overflow-hidden mb-4">
                <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100">
                  <Twitter className="w-4 h-4 text-gray-900" />
                  <span className="text-sm font-bold text-gray-900">@valueandtime</span>
                  <a
                    href="https://x.com/valueandtime"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                  >
                    Follow
                  </a>
                </div>
                <div
                  className="flex justify-center px-6 py-2"
                  dangerouslySetInnerHTML={{ __html: `
                    <blockquote class="twitter-tweet" data-width="500" data-theme="light" data-dnt="true">
                      <p lang="en" dir="ltr">Donald Trump is the worst vice president in Israeli history</p>
                      &mdash; Value &amp; Time (@valueandtime)
                      <a href="https://twitter.com/valueandtime/status/2029582553674297621?ref_src=twsrc%5Etfw">March 5, 2026</a>
                    </blockquote>
                  `}}
                />
              </div>

              {/* Layer 4: YouTube video embed */}
              <div className="w-full border border-gray-200 rounded-xl overflow-hidden mb-10">
                <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100">
                  <img src="/yt-icon.jpg" alt="Value & Time" className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-none">Value & Time</p>
                    <p className="text-xs text-gray-400 mt-0.5">@valueandtime</p>
                  </div>
                  <a href="https://youtube.com/@valueandtime" target="_blank" rel="noopener noreferrer"
                    className="ml-auto text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full transition-colors">
                    Subscribe
                  </a>
                </div>
                <iframe
                  width="100%"
                  height="420"
                  src="https://www.youtube.com/embed/kTrdpRFm45U?start=202"
                  title="Value & Time"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: 'block' }}
                />
              </div>

              {/* Tools */}
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Tools & Affiliate Links</p>
              <div className="rounded-xl overflow-hidden mb-12" style={{ border: '1px solid #e5e7eb' }}>
                <div className="grid grid-cols-4" style={{ borderBottom: '1px solid #e5e7eb' }}>
                  {[
                    { name: 'TradingView', url: 'https://www.tradingview.com/pricing/?share_your_love=valueandtime', logo: 'https://icon.horse/icon/tradingview.com' },
                    { name: 'Coinbase', url: 'https://coinbase.com/join/52XEHSS?src=ios-link', logo: 'https://icon.horse/icon/coinbase.com' },
                    { name: 'Padre', url: 'https://trade.padre.gg/rk/value', logo: '/padre-logo.png' },
                    { name: 'Trojan Bot', url: 'https://t.me/solana_trojanbot?start=r-valueandtime', logo: 'https://icon.horse/icon/telegram.org' },
                  ].map((tool, i, arr) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-4 py-12 px-8 group transition-all hover:bg-gray-50"
                      style={i < arr.length - 1 ? { borderRight: '1px solid #e5e7eb' } : {}}
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="h-12 w-12 object-contain transition-all"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase group-hover:text-gray-900 transition-colors">{tool.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* MATEO */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">MATEO</h2>
              <p className="text-lg text-gray-600 mb-8">
                DJ sets, live mixes, and event bookings.
              </p>

              {/* SoundCloud embed */}
              <div className="border border-gray-200 rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">Halloween Mix 2025</h3>
                    <p className="text-sm text-gray-500">Live from Palm Beach</p>
                  </div>
                  <a
                    href="https://x.com/itsmateomusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Book Event
                  </a>
                </div>
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1994831648&color=%23000000&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                />
              </div>

              {/* Mateo socials — horizontal row */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { href: 'https://x.com/itsmateomusic', label: 'Twitter', bg: 'hover:bg-gray-900 hover:text-white hover:border-gray-900', icon: <Twitter className="w-4 h-4" /> },
                  { href: 'https://instagram.com/itsmateomusic', label: 'Instagram', bg: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-pink-400', icon: <Instagram className="w-4 h-4" /> },
                  { href: 'https://tiktok.com/@itsmateomusic', label: 'TikTok', bg: 'hover:bg-black hover:text-white hover:border-black', icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  )},
                  { href: 'https://soundcloud.com/itsmateomusic', label: 'SoundCloud', bg: 'hover:bg-orange-500 hover:text-white hover:border-orange-500', icon: <Music2 className="w-4 h-4" /> },
                ].map(({ href, label, bg, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 transition-all duration-200 ${bg}`}
                  >
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* PARTNERSHIPS TAB */}
        {activeTab === 'partnerships' && (
          <motion.div
            key="partnerships"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>
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
                ],
              ].map((row, rowIdx, rows) => (
                <div
                  key={rowIdx}
                  className="grid grid-cols-3"
                  style={rowIdx < rows.length - 1 ? { borderBottom: '1px solid #e5e7eb' } : {}}
                >
                  {row.map((partner, i) => (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-4 py-12 px-8 group transition-all hover:bg-gray-50"
                      style={i < row.length - 1 ? { borderRight: '1px solid #e5e7eb' } : {}}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 w-12 object-contain transition-all"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase group-hover:text-gray-900 transition-colors">{partner.name}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* MUSIC TAB */}
        {activeTab === 'music' && (
          <motion.div
            key="music"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-4xl font-bold text-gray-900">MATEO</h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">DJ sets, live mixes, and event bookings</p>

            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { href: 'https://x.com/itsmateomusic', icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                { href: 'https://instagram.com/itsmateomusic', icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                { href: 'https://tiktok.com/@itsmateomusic', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                ), label: 'TikTok' },
                { href: 'https://soundcloud.com/itsmateomusic', icon: <Music2 className="w-5 h-5" />, label: 'SoundCloud' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full font-medium text-gray-900 transition-colors"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>

            {/* SoundCloud embed */}
            <div className="border border-gray-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Halloween Mix 2025</h3>
              <p className="text-sm text-gray-500 mb-5">Live from Palm Beach</p>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1994831648&color=%23000000&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
              />
            </div>

            {/* Twitter feed for MATEO */}
            <div className="border border-gray-200 rounded-xl overflow-hidden mb-8" style={{ maxHeight: 480 }}>
              <a
                className="twitter-timeline"
                data-height="480"
                data-theme="light"
                data-chrome="noheader nofooter noborders"
                href="https://twitter.com/itsmateomusic"
              >
                Tweets by itsmateomusic
              </a>
            </div>

            <a
              href="https://x.com/itsmateomusic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors"
            >
              Book Event
            </a>
          </motion.div>
        )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-12 flex justify-between items-center text-sm text-gray-600">
          <div>© 2026 Daniel Mateo-Galvis</div>
          <div className="flex gap-6">
            <a href="https://x.com/valueandtime" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">@valueandtime</a>
            <a href="https://x.com/itsmateomusic" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">@itsmateomusic</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
