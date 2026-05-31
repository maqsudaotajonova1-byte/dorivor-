import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onDone }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 2500);
    const t2 = setTimeout(onDone, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'linear-gradient(160deg,#0a1f14,#1e5c3a)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 100, fontFamily: "'DM Sans',sans-serif",
      opacity: fade ? 0 : 1, transition: 'opacity 0.7s ease',
    }}>
      {/* Yurak */}
      <div style={{ fontSize: 72, marginBottom: 8, animation: 'splashPulse 1s infinite' }}>💚</div>

      {/* ECG chizig'i */}
      <svg viewBox="0 0 300 60" width="260" height="55" style={{ marginBottom: 20, overflow: 'visible' }}>
        <polyline
          points="0,30 40,30 55,30 65,5 75,55 85,30 100,30 115,30 125,15 135,45 145,30 160,30 300,30"
          fill="none" stroke="#52b788" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ strokeDasharray: 600, strokeDashoffset: 0, animation: 'ecgDraw 2s ease forwards' }}
        />
        <style>{`
          @keyframes ecgDraw { from { stroke-dashoffset: 600; } to { stroke-dashoffset: 0; } }
          @keyframes splashPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.12)} }
          @keyframes splashFadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        `}</style>
      </svg>

      <h1 style={{
        fontFamily: "'Playfair Display',serif",
        fontSize: 28, color: '#f5f0e8', margin: '0 0 6px',
        textAlign: 'center', textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
        animation: 'splashFadeUp 0.8s ease forwards',
      }}>
        Dorivor O'simliklar
      </h1>
      <p style={{
        color: '#52b788', fontSize: 13,
        letterSpacing: 2, textTransform: 'uppercase',
        animation: 'splashFadeUp 1s ease forwards',
      }}>
        Sog'liq • Quvvat • Daromad
      </p>

      {/* Progress bar */}
      <div style={{
        width: 200, height: 3, background: 'rgba(255,255,255,0.1)',
        borderRadius: 99, marginTop: 36, overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg,#52b788,#c9a84c)',
          animation: 'splashBar 2.5s ease forwards',
        }} />
      </div>
      <style>{`@keyframes splashBar { from{width:0} to{width:100%} }`}</style>
    </div>
  );
}