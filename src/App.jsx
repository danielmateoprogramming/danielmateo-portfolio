import { useState, useEffect } from 'react';
import { ExternalLink, Youtube, Twitter, Linkedin, Music2, Instagram } from 'lucide-react';

export default function DanielMateoPortfolio() {
  const [activeTab, setActiveTab] = useState('home');

  // Load Twitter widget script
  useEffect(() => {
    if (document.getElementById('twitter-widget-script')) {
      if (window.twttr) window.twttr.widgets.load();
      return;
    }
    const script = document.createElement('script');
    script.id = 'twitter-widget-script';
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header + Nav */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">Daniel Mateo-Galvis</h1>
            <a
              href="https://youtube.com/@valueandtime"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-700 transition-colors"
            >
              <Youtube className="w-3.5 h-3.5 text-red-600" />
              YouTube
            </a>
            <a
              href="https://x.com/valueandtime"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-700 transition-colors"
            >
              <Twitter className="w-3.5 h-3.5" />
              Twitter
            </a>
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

      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div>
            {/* Intro / About */}
            <div className="mb-12">
              <div className="space-y-4 mb-8">
                <p className="text-xl text-gray-900 leading-relaxed">
                  Finance and crypto content creator with a combined social media following of 600,000+ across platforms. Creator of <span className="font-semibold">Value & Time</span>, one of the more recognized independent finance brands on X, covering crypto markets, Solana, AI, and macroeconomics.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Background in traditional financial media production. Currently building Value & Time into a full media operation — newsletter, podcast, and YouTube — focused on honest market analysis for people who are still paying attention when things are down.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Also part-time house DJ performing at nightclubs in South Florida, under the project name <span className="font-semibold">Mateo</span>.
                </p>
                <p className="text-base text-gray-600">
                  Open to brand partnerships, speaking opportunities, and media collaborations.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:valueandtime@icloud.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors text-sm"
                >
                  📩 valueandtime@icloud.com
                </a>
                <a
                  href="https://linkedin.com/in/danielmateogalvis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 hover:border-gray-500 text-gray-700 rounded-lg font-medium transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* valueandtime */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">valueandtime</h2>
              <p className="text-lg text-gray-600 mb-8">
                Trading insights, market analysis, and educational content for traders and investors.
              </p>

              {/* Stats */}
              <div className="flex gap-10 mb-10">
                <div>
                  <p className="text-3xl font-bold text-gray-900">90K+</p>
                  <p className="text-sm text-gray-500 mt-1">Followers</p>
                </div>
                <div className="border-l border-gray-200 pl-10">
                  <p className="text-3xl font-bold text-gray-900">30M+</p>
                  <p className="text-sm text-gray-500 mt-1">Monthly Impressions</p>
                </div>
              </div>

              {/* Two-column: Twitter feed + right col */}
              <div className="grid grid-cols-5 gap-8 mb-10">
                {/* Twitter timeline - takes 3/5 */}
                <div className="col-span-3 border border-gray-200 rounded-xl overflow-hidden" style={{ maxHeight: 520 }}>
                  <a
                    className="twitter-timeline"
                    data-height="520"
                    data-theme="light"
                    data-chrome="noheader nofooter noborders"
                    href="https://twitter.com/valueandtime"
                  >
                    Tweets by valueandtime
                  </a>
                </div>

                {/* Right col: YouTube card + Newsletter - takes 2/5 */}
                <div className="col-span-2 flex flex-col gap-6">
                  {/* YouTube card */}
                  <a
                    href="https://youtube.com/@valueandtime"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-3 border border-gray-200 rounded-xl p-6 hover:border-red-300 hover:bg-red-50 transition-all text-center"
                  >
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Youtube className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Watch on YouTube</p>
                      <p className="text-xs text-gray-500 mt-1">@valueandtime</p>
                    </div>
                    <span className="text-xs font-medium text-red-600 group-hover:underline">Subscribe →</span>
                  </a>

                  {/* Newsletter */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Newsletter</h3>
                    <p className="text-xs text-gray-500 mb-4">Weekly trading insights delivered to your inbox.</p>
                    <div className="flex flex-col gap-2">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-sm"
                      />
                      <button
                        type="submit"
                        className="w-full px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors text-sm"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Tools & Affiliate Links</p>
              <div className="grid grid-cols-2 gap-4 mb-12">
                {[
                  { name: 'TradingView', desc: 'Professional charting and technical analysis', url: 'https://www.tradingview.com/pricing/?share_your_love=valueandtime' },
                  { name: 'Coinbase', desc: 'Trusted crypto exchange', url: 'https://coinbase.com/join/52XEHSS?src=ios-link' },
                  { name: 'Padre', desc: 'Advanced memecoin trading', url: 'https://trade.padre.gg/rk/value' },
                  { name: 'Trojan Bot', desc: 'Trade from Telegram', url: 'https://t.me/solana_trojanbot?start=r-valueandtime' },
                ].map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-gray-200 rounded-lg p-5 hover:border-gray-400 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base font-bold text-gray-900">{tool.name}</h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-sm text-gray-500">{tool.desc}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* MATEO */}
            <div className="border-t border-gray-200 pt-12">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-4xl font-bold text-gray-900">MATEO</h2>
                <a
                  href="https://x.com/itsmateomusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-900 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
                <a
                  href="https://instagram.com/itsmateomusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-900 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://soundcloud.com/itsmateomusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-900 transition-colors"
                >
                  <Music2 className="w-4 h-4" />
                  SoundCloud
                </a>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                DJ sets, live mixes, and event bookings.
              </p>

              {/* SoundCloud embed on home page */}
              <div className="border border-gray-200 rounded-xl p-6 mb-6">
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
            </div>
          </div>
        )}

        {/* PARTNERSHIPS TAB */}
        {activeTab === 'partnerships' && (
          <div>
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>
              {[
                [
                  { name: 'Polymarket', url: 'https://polymarket.com', logo: 'https://icon.horse/icon/polymarket.com' },
                  { name: 'Solana', url: 'https://solana.com', logo: 'https://icon.horse/icon/solana.com' },
                  { name: 'Sui', url: 'https://sui.io', logo: 'https://icon.horse/icon/sui.io' },
                ],
                [
                  { name: 'Kick', url: 'https://kick.com', logo: 'https://icon.horse/icon/kick.com' },
                  { name: 'Kraken', url: 'https://kraken.com', logo: 'https://icon.horse/icon/kraken.com' },
                  { name: 'Solana Mobile', url: 'https://solanamobile.com', logo: 'https://icon.horse/icon/solanamobile.com' },
                ],
                [
                  { name: 'Bitcoin Conf', url: 'https://b.tc/conference', logo: 'https://icon.horse/icon/b.tc' },
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
                        className="h-12 w-12 object-contain grayscale group-hover:grayscale-0 transition-all"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase group-hover:text-gray-900 transition-colors">{partner.name}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MUSIC TAB */}
        {activeTab === 'music' && (
          <div>
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
          </div>
        )}
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
