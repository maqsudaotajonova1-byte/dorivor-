import React, { useState, useEffect, useRef } from 'react';
import plants from '../data/plants';
import { t } from '../lib/i18n';

// ── KUNLIK MASLAHAT ───────────────────────────────────────────────────────────
function KunlikMaslahat({ lang }) {
  const today = new Date().getDate();
  const plant = plants[today % plants.length];
  return (
    <div style={{
      background: 'linear-gradient(135deg,#0f3d24,#1a5c35)',
      borderRadius: 20, padding: 18, marginBottom: 14,
      border: '1px solid rgba(105,213,154,0.2)',
    }}>
      <div style={{ fontSize: 11, color: '#69d59a', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>
        📅 {t(lang, 'dailyTip')}
      </div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <img src={plant.image} alt={plant.name} style={{ width: 64, height: 64, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }} />
        <div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: '#f5f0e8' }}>
            {plant.emoji} {plant.name}
          </div>
          <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.65)', marginTop: 4, lineHeight: 1.5 }}>
            {plant.short}
          </div>
          <div style={{ fontSize: 11, color: '#69d59a', marginTop: 6 }}>
            {plant.benefits?.[0]} • {plant.benefits?.[1]}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── KASALLIK QIDIRISH ─────────────────────────────────────────────────────────
const SYMPTOMS = [
  { label: "Yo'tal", emoji: "🤧", keywords: ["nafas", "immun"] },
  { label: "Bosh og'riq", emoji: "🤕", keywords: ["asab"] },
  { label: "Oshqozon", emoji: "🫀", keywords: ["hazm"] },
  { label: "Uyqusizlik", emoji: "😴", keywords: ["asab"] },
  { label: "Jigar", emoji: "💚", keywords: ["jigar"] },
  { label: "Teri", emoji: "🌸", keywords: ["teri"] },
  { label: "Immunitet", emoji: "🛡️", keywords: ["immun"] },
  { label: "Stress", emoji: "😰", keywords: ["asab"] },
];

function KasallikQidiruv({ onSelect, lang }) {
  const [active, setActive] = useState(null);
  const results = active
    ? plants.filter(p => active.keywords.includes(p.category)).slice(0, 3)
    : [];

  return (
    <div style={{
      background: '#0f2d1e', border: '1px solid rgba(105,213,154,0.2)',
      borderRadius: 20, padding: 16, marginBottom: 14,
    }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: '#f5f0e8', marginBottom: 12 }}>
        🌡 {t(lang, 'symptom')}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
        {SYMPTOMS.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(active?.label === s.label ? null : s)}
            style={{
              padding: '7px 12px', borderRadius: 50, fontSize: 12, fontWeight: 500,
              cursor: 'pointer', border: '1.5px solid',
              background: active?.label === s.label ? '#69d59a' : 'rgba(255,255,255,0.06)',
              color: active?.label === s.label ? '#02150c' : 'rgba(245,240,232,0.8)',
              borderColor: active?.label === s.label ? '#69d59a' : 'rgba(255,255,255,0.1)',
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {s.emoji} {s.label}
          </button>
        ))}
      </div>
      {results.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {results.map(p => (
            <div
              key={p.id}
              onClick={() => onSelect(p)}
              style={{
                display: 'flex', gap: 10, alignItems: 'center',
                background: 'rgba(105,213,154,0.08)', borderRadius: 12,
                padding: '10px 12px', cursor: 'pointer',
                border: '1px solid rgba(105,213,154,0.15)',
              }}
            >
              <img src={p.image} alt={p.name} style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#f5f0e8' }}>{p.emoji} {p.name}</div>
                <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.6)' }}>{p.short}</div>
              </div>
              <div style={{ marginLeft: 'auto', color: '#69d59a', fontSize: 18 }}>›</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── AI SCANNER ────────────────────────────────────────────────────────────────
function AIScanner({ lang }) {
  const [result,  setResult]  = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(file);

    setLoading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('http://localhost:5000/api/scan', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setResult({ found: false, message: "Xato: " + err.message });
    }
    setLoading(false);
  };

  return (
    <div style={{
      background: '#0f2d1e', border: '1px solid rgba(105,213,154,0.2)',
      borderRadius: 20, padding: 16, marginBottom: 14,
    }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: '#f5f0e8', marginBottom: 6 }}>
        🤖 {t(lang, 'aiScanner')}
      </div>
      <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.55)', marginBottom: 12 }}>
        O'simlik rasmini yuklang — AI nomi va tarifini aniqlaydi
      </div>

      <button
        onClick={() => inputRef.current.click()}
        style={{
          width: '100%', padding: 12, borderRadius: 12, border: 'none',
          background: 'linear-gradient(135deg,#1e5c3a,#3d9e6e)',
          color: '#f5f0e8', fontSize: 13, fontWeight: 600,
          cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
        }}
      >📷 {t(lang, 'scanBtn')}</button>
      <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />

      {preview && (
        <img src={preview} alt="preview" style={{ width: '100%', maxHeight: 180, objectFit: 'cover', borderRadius: 12, marginTop: 12 }} />
      )}

      {loading && (
        <div style={{ textAlign: 'center', color: '#69d59a', marginTop: 12, fontSize: 13 }}>
          🔍 AI aniqlamoqda...
        </div>
      )}

      {result && (
        <div style={{ marginTop: 12 }}>
          {result.found ? (
            <div style={{
              background: 'rgba(105,213,154,0.08)', borderRadius: 14,
              border: '1px solid rgba(105,213,154,0.2)', padding: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 28 }}>{result.emoji || '🌿'}</span>
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: '#f5f0e8' }}>
                    {result.name}
                  </div>
                  <div style={{ fontSize: 11, color: '#69d59a', fontStyle: 'italic' }}>{result.latin}</div>
                </div>
                {result.isHerbal && (
                  <div style={{ marginLeft: 'auto', background: '#52b788', color: '#0f2d1e', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 99 }}>
                    Dorivor
                  </div>
                )}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(245,240,232,0.8)', lineHeight: 1.6, marginBottom: 10 }}>
                {result.description}
              </div>
              {result.benefits?.length > 0 && (
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#69d59a', marginBottom: 6 }}>✅ {t(lang, 'benefits')}:</div>
                  {result.benefits.map((b, i) => (
                    <div key={i} style={{ fontSize: 12, color: 'rgba(245,240,232,0.7)', padding: '3px 0' }}>• {b}</div>
                  ))}
                </div>
              )}
              {result.warnings?.length > 0 && (
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#ffb86c', marginBottom: 6 }}>⚠️ {t(lang, 'warnings')}:</div>
                  {result.warnings.map((w, i) => (
                    <div key={i} style={{ fontSize: 12, color: '#ffd59e', padding: '3px 0' }}>• {w}</div>
                  ))}
                </div>
              )}
              {result.usage && (
                <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.65)', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 8, marginTop: 4 }}>
                  ☕ {result.usage}
                </div>
              )}
            </div>
          ) : (
            <div style={{
              background: 'rgba(255,100,100,0.08)', borderRadius: 12,
              border: '1px solid rgba(255,100,100,0.2)', padding: 12,
              fontSize: 13, color: 'rgba(245,240,232,0.7)', textAlign: 'center',
            }}>
              ❌ {result.message || "O'simlik aniqlanmadi"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── DAROMAD HISOBLAGICHI ──────────────────────────────────────────────────────
const CROPS = [
  { name: "Zafaron", emoji: '🟡', costPerSotix: 200, revenuePerSotix: 1400 },
  { name: 'Lavanda', emoji: '💜', costPerSotix: 100, revenuePerSotix: 500 },
  { name: 'Curcuma', emoji: '🟠', costPerSotix: 80,  revenuePerSotix: 350 },
  { name: 'Zanjabil',emoji: '🫚', costPerSotix: 60,  revenuePerSotix: 280 },
  { name: 'Yalpiz',  emoji: '🌱', costPerSotix: 40,  revenuePerSotix: 180 },
];

function DaromadCalc({ lang }) {
  const [sotix, setSotix] = useState(10);
  const [cropIdx, setCropIdx] = useState(0);
  const crop = CROPS[cropIdx];
  const cost   = sotix * crop.costPerSotix;
  const profit = sotix * crop.revenuePerSotix - cost;

  return (
    <div style={{
      background: '#0f2d1e', border: '1px solid rgba(105,213,154,0.2)',
      borderRadius: 20, padding: 16, marginBottom: 14,
    }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: '#f5f0e8', marginBottom: 14 }}>
        📊 {t(lang, 'income')}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: 13, color: 'rgba(245,240,232,0.7)' }}>Er maydoni (sotix):</span>
        <input
          type="number" value={sotix} min={1}
          onChange={e => setSotix(Number(e.target.value) || 1)}
          style={{
            width: 80, padding: '6px 10px', borderRadius: 8,
            border: '1px solid rgba(105,213,154,0.3)',
            background: 'rgba(255,255,255,0.07)', color: '#f5f0e8',
            fontSize: 14, textAlign: 'right', outline: 'none',
            fontFamily: "'DM Sans',sans-serif",
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <span style={{ fontSize: 13, color: 'rgba(245,240,232,0.7)' }}>Ekin turi:</span>
        <select
          value={cropIdx} onChange={e => setCropIdx(Number(e.target.value))}
          style={{
            padding: '6px 10px', borderRadius: 8,
            border: '1px solid rgba(105,213,154,0.3)',
            background: '#1e5c3a', color: '#f5f0e8',
            fontSize: 13, outline: 'none', cursor: 'pointer',
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          {CROPS.map((c, i) => <option key={i} value={i}>{c.emoji} {c.name}</option>)}
        </select>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: 'rgba(245,240,232,0.6)' }}>Taxminiy xarajat:</span>
          <span style={{ fontSize: 13, color: '#ff7b7b', fontWeight: 600 }}>${cost.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, color: '#69d59a', fontWeight: 700 }}>Yillik sof foyda:</span>
          <span style={{ fontSize: 16, color: '#69d59a', fontWeight: 700 }}>${profit.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

// ── TAYMER ────────────────────────────────────────────────────────────────────
function Taymer({ lang }) {
  const [seconds, setSeconds] = useState(5 * 60);
  const [running, setRunning] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (running && seconds > 0) {
      ref.current = setInterval(() => setSeconds(s => s - 1), 1000);
    } else {
      clearInterval(ref.current);
      if (seconds === 0) {
        setRunning(false);
        if (window._onTimerDone) window._onTimerDone();
      }
    }
    return () => clearInterval(ref.current);
  }, [running, seconds]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');
  const reset = () => { setRunning(false); setSeconds(5 * 60); };

  return (
    <div style={{
      background: '#0f2d1e', border: '1px solid rgba(105,213,154,0.2)',
      borderRadius: 20, padding: 16, marginBottom: 14,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#f5f0e8', marginBottom: 4 }}>
          ⏱ {t(lang, 'timer')}
        </div>
        <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.5)' }}>{t(lang, 'timerDesc')}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 28, fontWeight: 700, color: '#69d59a', fontFamily: 'monospace' }}>
          {mm}:{ss}
        </span>
        <button
          onClick={() => seconds === 0 ? reset() : setRunning(r => !r)}
          style={{
            background: running ? '#ff6b35' : '#69d59a',
            color: running ? 'white' : '#02150c',
            border: 'none', borderRadius: 10,
            padding: '8px 14px', cursor: 'pointer',
            fontSize: 13, fontWeight: 700,
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          {seconds === 0 ? '🔄' : running ? t(lang, 'stop') : t(lang, 'start')}
        </button>
      </div>
    </div>
  );
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
export default function DashboardTab({ onSelect, lang }) {
  return (
    <div style={{ padding: '12px 16px 0' }}>
      <KunlikMaslahat lang={lang} />
      <KasallikQidiruv onSelect={onSelect} lang={lang} />
      <AIScanner lang={lang} />
      <DaromadCalc lang={lang} />
      <Taymer lang={lang} />
      <div style={{ height: 24 }} />
    </div>
  );
}