import React from 'react';
import plants from '../data/plants';

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ fontSize: 11 }}>{i <= count ? '⭐' : '☆'}</span>
      ))}
    </div>
  );
}

export default function SevimlTab({ onSelect, favs, onToggleFav }) {
  const favPlants = plants.filter(p => favs.includes(p.id));

  if (!favPlants.length) {
    return (
      <div style={{
        textAlign: 'center', padding: '60px 20px',
        fontFamily: "'DM Sans',sans-serif",
      }}>
        <div style={{ fontSize: 60, marginBottom: 16, opacity: 0.5 }}>🤍</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: '#f5f0e8', marginBottom: 8 }}>
          Sevimlilar bo'sh
        </div>
        <div style={{ color: 'rgba(245,240,232,0.5)', fontSize: 14 }}>
          O'simlikni yoqtirsangiz yurak belgisini bosing
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '0 20px', fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '22px 0 12px' }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: '#f5f0e8' }}>
          Sevimlilar ({favPlants.length})
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {favPlants.map(p => (
          <div
            key={p.id}
            onClick={() => onSelect(p)}
            style={{
              display: 'flex', gap: 12, alignItems: 'center',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(82,183,136,0.2)',
              borderRadius: 14, padding: 12, cursor: 'pointer',
              transition: 'transform .2s',
            }}
          >
            <img src={p.image} alt={p.name} style={{ width: 56, height: 56, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 700, color: '#f5f0e8' }}>
                {p.emoji} {p.name}
              </div>
              <div style={{ fontSize: 10, color: 'rgba(245,240,232,0.5)', fontStyle: 'italic' }}>{p.latin}</div>
              <Stars count={p.rating} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <button
                onClick={e => { e.stopPropagation(); onToggleFav(p.id); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, padding: 0 }}
              >
                ❤️
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