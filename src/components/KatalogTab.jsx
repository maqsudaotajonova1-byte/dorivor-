import React, { useState } from 'react';
import plants from '../data/plants';
import { t } from '../lib/i18n';

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ fontSize: 11 }}>{i <= count ? '⭐' : '☆'}</span>
      ))}
    </div>
  );
}

export default function KatalogTab({ onSelect, favs, onToggleFav, lang }) {
  const [search, setSearch] = useState('');

  const filtered = plants.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.latin.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '0 20px' }}>
      {/* Qidiruv */}
      <div style={{ paddingTop: 16, position: 'relative' }}>
        <span style={{ position: 'absolute', left: 15, top: '50%', transform: 'translateY(-50%)', fontSize: 17, opacity: 0.5 }}>🔍</span>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={t(lang, 'search')}
          style={{
            width: '100%', padding: '13px 18px 13px 46px',
            borderRadius: 14, border: '1.5px solid rgba(82,183,136,0.2)',
            background: 'rgba(255,255,255,0.07)', color: '#f5f0e8',
            fontFamily: "'DM Sans',sans-serif", fontSize: 14,
            outline: 'none', boxSizing: 'border-box',
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '22px 0 12px' }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: '#f5f0e8' }}>
          {t(lang, 'katalog')} ({filtered.length})
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filtered.map(p => (
          <div
            key={p.id}
            onClick={() => onSelect(p)}
            style={{
              display: 'flex', gap: 12,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(82,183,136,0.2)',
              borderRadius: 14, padding: 12,
              cursor: 'pointer', alignItems: 'center',
              transition: 'transform .2s',
            }}
          >
            <img src={p.image} alt={p.name} style={{ width: 56, height: 56, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 700, color: '#f5f0e8' }}>{p.emoji} {p.name}</div>
              <div style={{ fontSize: 10, color: 'rgba(245,240,232,0.5)', fontStyle: 'italic' }}>{p.latin}</div>
              <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.7)', marginTop: 3, lineHeight: 1.4 }}>{p.short}</div>
              <Stars count={p.rating} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <button
                onClick={e => { e.stopPropagation(); onToggleFav(p.id); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, padding: 0 }}
              >
                {favs.includes(p.id) ? '❤️' : '🤍'}
              </button>
              <span style={{ color: '#52b788', fontSize: 18 }}>›</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 20 }} />
    </div>
  );
}