import React, { useState } from 'react';
import { premiumStore } from '../lib/storage';
import plants from '../data/plants';

export default function ProfilTab({ favs, onSelect, onToggleFav, dark, setDark, lang, setLang, onOpenAdmin }) {
  const [section, setSection] = useState('profil');

  const favPlants = plants.filter(p => favs.includes(p.id));

  return (
    <div style={{ padding: '0 20px', fontFamily: "'DM Sans',sans-serif" }}>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, marginTop: 16, marginBottom: 4 }}>
        {[
          { key: 'profil',  label: '👤 Profil' },
          { key: 'sevimli', label: `❤️ Sevimlilar (${favPlants.length})` },
        ].map(s => (
          <button
            key={s.key}
            onClick={() => setSection(s.key)}
            style={{
              flex: 1, padding: '10px 0', borderRadius: 12, border: 'none',
              background: section === s.key ? '#52b788' : 'rgba(255,255,255,0.08)',
              color: section === s.key ? '#0f2d1e' : 'rgba(245,240,232,0.7)',
              fontWeight: 600, fontSize: 13, cursor: 'pointer',
              fontFamily: "'DM Sans',sans-serif",
            }}
          >{s.label}</button>
        ))}
      </div>

      {/* PROFIL */}
      {section === 'profil' && (
        <>
          {/* Avatar */}
          <div style={{ textAlign: 'center', padding: '28px 0 16px' }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'linear-gradient(135deg,#c9a84c,#e8c97a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 36, margin: '0 auto 12px',
              boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
            }}>👤</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: '#f5f0e8' }}>Foydalanuvchi</div>
            <div style={{ color: 'rgba(245,240,232,0.5)', fontSize: 12, marginTop: 4 }}>
              Dorivor o'simliklar ixlosmandi
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
            {[
              { num: favPlants.length, label: 'Sevimli'  },
              { num: plants.length,    label: "O'simlik" },
              { num: 3,                label: 'Premium'  },
            ].map((s, i) => (
              <div key={i} style={{
                flex: 1, background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(82,183,136,0.2)',
                borderRadius: 12, padding: '10px 6px', textAlign: 'center',
              }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: '#52b788' }}>{s.num}</div>
                <div style={{ fontSize: 10, color: 'rgba(245,240,232,0.5)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Menu */}
          {[
            { icon: '⚙️', label: 'Admin Panel',    action: () => onOpenAdmin?.(),                        val: '→'          },
            { icon: '🌙', label: 'Tungi rejim',     action: () => setDark && setDark(d => !d),           val: dark ? 'Yoqiq' : "O'chiq" },
            { icon: '⭐', label: 'Premium obuna',   action: null,                                         val: premiumStore.get() ? 'Faol ✅' : "Yo'q" },
            { icon: '🔔', label: 'Bildirishnomalar',action: null,                                         val: 'Yoqilgan'   },
            { icon: '🌐', label: 'Til',             action: null,                                         val: lang?.toUpperCase() || 'UZ' },
            { icon: '📱', label: 'Ilova versiyasi', action: null,                                         val: 'v2.0'       },
            { icon: 'ℹ️', label: 'Ilova haqida',   action: null,                                         val: '→'          },
          ].map((item, i) => (
            <div
              key={i}
              onClick={item.action}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                cursor: item.action ? 'pointer' : 'default',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <span style={{ fontSize: 14, color: '#f5f0e8' }}>{item.label}</span>
              </div>
              <span style={{ color: 'rgba(245,240,232,0.5)', fontSize: 13 }}>{item.val}</span>
            </div>
          ))}
        </>
      )}

      {/* SEVIMLILAR */}
      {section === 'sevimli' && (
        <>
          {favPlants.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ fontSize: 56, marginBottom: 14, opacity: 0.5 }}>🤍</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, color: '#f5f0e8', marginBottom: 6 }}>
                Sevimlilar bo'sh
              </div>
              <div style={{ color: 'rgba(245,240,232,0.5)', fontSize: 13 }}>
                O'simlikni yoqtirsangiz ❤️ bosing
              </div>
            </div>
          ) : (
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {favPlants.map(p => (
                <div
                  key={p.id}
                  onClick={() => onSelect?.(p)}
                  style={{
                    display: 'flex', gap: 12, alignItems: 'center',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(82,183,136,0.2)',
                    borderRadius: 14, padding: 12, cursor: 'pointer',
                  }}
                >
                  <img src={p.image} alt={p.name} style={{ width: 52, height: 52, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 700, color: '#f5f0e8' }}>
                      {p.emoji} {p.name}
                    </div>
                    <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.5)', fontStyle: 'italic' }}>{p.latin}</div>
                    <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.6)', marginTop: 2 }}>{p.short}</div>
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); onToggleFav?.(p.id); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, padding: 0 }}
                  >❤️</button>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <div style={{ height: 30 }} />
    </div>
  );
}