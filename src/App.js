import React, { useState, useEffect } from 'react';
import './App.css';

import SplashScreen  from './components/SplashScreen';
import PlantDetail   from './components/PlantDetail';
import DashboardTab  from './components/DashboardTab';
import KatalogTab    from './components/KatalogTab';
import SevimlTab     from './components/SevimlTab';
import ProfilTab     from './components/ProfilTab';
import IbnSinoTab    from './components/IbnSinoTab';
import MarketTab     from './components/MarketTab';
import LibraryTab    from './components/LibraryTab';
import AdminPanel    from './components/AdminPanel';
import { favStore }  from './lib/storage';
import { t, LANGUAGES } from './lib/i18n';
import plants        from './data/plants';

const TABS = (lang) => [
  { key: 'home',    icon: '🏠', label: t(lang,'biznes')  },
  { key: 'katalog', icon: '📖', label: t(lang,'katalog') },
  { key: 'library', icon: '📚', label: 'Kutubxona'       },
  { key: 'market',  icon: '🛒', label: t(lang,'market')  },
  { key: 'profil',  icon: '👤', label: t(lang,'profil')  },
];

export default function App() {
  const [splash,     setSplash]     = useState(true);
  const [tab,        setTab]        = useState('katalog');
  const [detail,     setDetail]     = useState(null);
  const [favs,       setFavs]       = useState(favStore.all());
  const [search,     setSearch]     = useState('');
  const [dark,       setDark]       = useState(true);
  const [lang,       setLang]       = useState('uz');
  const [notifOn,    setNotifOn]    = useState(false);
  const [showLang,   setShowLang]   = useState(false);
  const [showAdmin,  setShowAdmin]  = useState(false);

  const refreshFavs = () => setFavs([...favStore.all()]);
  const toggleFav   = (id) => { favStore.toggle(id); refreshFavs(); };

  // Dark/Light CSS variables
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.style.setProperty('--bg-main',   '#0f2d1e');
      root.style.setProperty('--bg-card',   'rgba(255,255,255,0.06)');
      root.style.setProperty('--text-main', '#f5f0e8');
      root.style.setProperty('--text-muted','rgba(245,240,232,0.5)');
      root.style.setProperty('--app-bg',    'linear-gradient(160deg,#0f2d1e,#163324,#0a1f14)');
      root.style.setProperty('--nav-bg',    'rgba(10,31,20,0.95)');
    } else {
      root.style.setProperty('--bg-main',   '#f0f7f0');
      root.style.setProperty('--bg-card',   'rgba(0,0,0,0.05)');
      root.style.setProperty('--text-main', '#0f2d1e');
      root.style.setProperty('--text-muted','rgba(15,45,30,0.55)');
      root.style.setProperty('--app-bg',    'linear-gradient(160deg,#e8f5e9,#f0f7f0,#e0f0e0)');
      root.style.setProperty('--nav-bg',    'rgba(240,247,240,0.97)');
    }
  }, [dark]);

  // Bildirishnoma
  const handleNotif = async () => {
    if (!('Notification' in window)) return alert("Bu brauzer bildirishnomalarni qo'llab-quvvatlamaydi.");
    const perm = await Notification.requestPermission();
    if (perm === 'granted') {
      setNotifOn(true);
      const today = new Date().getDate();
      const plant = plants[today % plants.length];
      new Notification(`🌿 ${plant.name}`, { body: plant.short, icon: '/logo192.png' });
    } else {
      alert("Bildirishnomaga ruxsat berilmadi.");
    }
  };

  const tabs = TABS(lang);

  return (
    <div className="app" style={{ background: 'var(--app-bg, linear-gradient(160deg,#0f2d1e,#163324,#0a1f14))' }}>
      <div className="bg-glow" />

      {splash && <SplashScreen onDone={() => setSplash(false)} />}

      {detail && (
        <PlantDetail plant={detail} onBack={() => setDetail(null)} onFavChange={refreshFavs} lang={lang} />
      )}

      {/* Admin Panel */}
      {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} />}

      {/* Til tanlash modal */}
      {showLang && (
        <div style={{
          position:'fixed', inset:0, background:'rgba(0,0,0,0.6)',
          display:'flex', alignItems:'center', justifyContent:'center', zIndex:500,
        }} onClick={() => setShowLang(false)}>
          <div style={{
            background: dark ? '#1e5c3a' : '#fff',
            borderRadius:20, padding:20, minWidth:220,
          }} onClick={e => e.stopPropagation()}>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color: dark?'#f5f0e8':'#0f2d1e', marginBottom:14 }}>
              🌍 Til tanlang
            </div>
            {LANGUAGES.map(l => (
              <div key={l.code} onClick={() => { setLang(l.code); setShowLang(false); }} style={{
                display:'flex', alignItems:'center', gap:12, padding:'12px 14px',
                borderRadius:12, cursor:'pointer', marginBottom:6,
                background: lang === l.code ? 'rgba(82,183,136,0.2)' : 'transparent',
                border: lang === l.code ? '1px solid #52b788' : '1px solid transparent',
              }}>
                <span style={{ fontSize:24 }}>{l.flag}</span>
                <span style={{ fontSize:15, fontWeight:600, color: dark?'#f5f0e8':'#0f2d1e' }}>{l.label}</span>
                {lang === l.code && <span style={{ marginLeft:'auto', color:'#52b788' }}>✓</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="header" style={{ paddingBottom: 12 }}>
        <div className="header-top">
          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:'#52b788' }}>
            {t(lang,'appName')}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            {/* Dark/Light */}
            <button onClick={() => setDark(d => !d)} style={{
              background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)',
              borderRadius:'50%', width:34, height:34,
              display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', fontSize:16,
            }}>{dark ? '☀️' : '🌙'}</button>
            {/* Til */}
            <button onClick={() => setShowLang(true)} style={{
              background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)',
              borderRadius:20, padding:'5px 10px',
              display:'flex', alignItems:'center', gap:4,
              cursor:'pointer', fontSize:13, color: dark?'#f5f0e8':'#0f2d1e',
              fontFamily:"'DM Sans',sans-serif",
            }}>
              {LANGUAGES.find(l=>l.code===lang)?.flag} {lang.toUpperCase()}
            </button>
            {/* Bildirishnoma */}
            <button onClick={handleNotif} style={{
              background: notifOn ? 'rgba(82,183,136,0.2)' : 'rgba(255,255,255,0.08)',
              border: notifOn ? '1px solid #52b788' : '1px solid rgba(255,255,255,0.15)',
              borderRadius:'50%', width:34, height:34,
              display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', fontSize:16,
            }}>{notifOn ? '🔔' : '🔕'}</button>
          </div>
        </div>

        {tab === 'katalog' && (
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              placeholder={t(lang,'search')}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="content-area">
        {tab === 'home'    && <DashboardTab onSelect={setDetail} favs={favs} onToggleFav={toggleFav} lang={lang} />}
        {tab === 'katalog' && <KatalogTab   onSelect={setDetail} favs={favs} onToggleFav={toggleFav} search={search} lang={lang} />}
        {tab === 'library' && <LibraryTab />}
        {tab === 'ibnsino' && <IbnSinoTab   lang={lang} />}
        {tab === 'market'  && <MarketTab    lang={lang} />}
        {tab === 'sevimli' && <SevimlTab    onSelect={setDetail} favs={favs} onToggleFav={toggleFav} lang={lang} />}
        {tab === 'profil'  && <ProfilTab    favs={favs} onSelect={setDetail} onToggleFav={toggleFav} dark={dark} setDark={setDark} lang={lang} setLang={setLang} onOpenAdmin={() => setShowAdmin(true)} />}
      </div>

      {/* BOTTOM NAV */}
      <div className="bottom-nav" style={{ background:'var(--nav-bg)' }}>
        <div className="nav-items">
          {tabs.map(t2 => (
            <div
              key={t2.key}
              className={`nav-item${tab === t2.key ? ' active' : ''}`}
              onClick={() => setTab(t2.key)}
            >
              <span className="nav-icon">{t2.icon}</span>
              <span className="nav-label" style={{ color: tab===t2.key ? '#52b788' : 'var(--text-muted)' }}>
                {t2.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}