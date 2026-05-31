import React from 'react';

const premiumPlants = [
  { emoji: "🟡", name: "Za'faron (Safron)", desc: "1 kg narxi: $3000+. Dunyodagi eng qimmat o'simlik." },
  { emoji: "🌿", name: "Lavanda", desc: "Efir moyi ishlab chiqarish uchun ideal. Katta talab." },
  { emoji: "🟠", name: "Zirvak (Turmeric)", desc: "Xalqaro bozorda yuqori talab, oson yetishtiriladi." },
  { emoji: "🫐", name: "Elderberry", desc: "Gripp mavsumida talabi keskin oshadi." },
];

export default function OstirishTab() {
  return (
    <div style={{ padding: '0 20px', fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ height: 16 }} />

      {/* Premium Banner */}
      <div style={{
        background: 'linear-gradient(135deg,#2a1a00,#3d2800)',
        border: '1px solid rgba(201,168,76,0.3)',
        borderRadius: 20, padding: 20,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ fontSize: 11, color: '#c9a84c', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>
          Premium Biznes
        </div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: '#f5f0e8' }}>
          Za'faron O'stirish Siri
        </div>
        <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.65)', margin: '8px 0 14px', lineHeight: 1.5 }}>
          Obuna bo'ling va yuqori daromadli dorivor o'simliklar yetishtirish sirlarini o'rganing. Har bir o'simlik uchun batafsil agrotexnika va daromad hisob-kitobi.
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'linear-gradient(135deg,#c9a84c,#e8c97a)',
          color: '#2a1a00', fontSize: 13, fontWeight: 700,
          padding: '10px 20px', borderRadius: 99, cursor: 'pointer',
        }}>
          🔓 Obuna bo'lish — $9.99/oy
        </div>
        <div style={{ position: 'absolute', right: 16, bottom: 12, fontSize: 40, opacity: 0.5 }}>🌾</div>
      </div>

      {/* Premium o'simliklar ro'yxati */}
      {premiumPlants.map((p, i) => (
        <div key={i} style={{
          display: 'flex', gap: 12, alignItems: 'center',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(82,183,136,0.2)',
          borderRadius: 14, padding: 14, marginTop: 10,
        }}>
          <span style={{ fontSize: 32 }}>{p.emoji}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, color: '#f5f0e8' }}>{p.name}</div>
            <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.5)', marginTop: 2 }}>{p.desc}</div>
          </div>
          <div style={{
            background: 'rgba(201,168,76,0.2)', color: '#c9a84c',
            fontSize: 10, padding: '4px 10px', borderRadius: 99,
            border: '1px solid rgba(201,168,76,0.3)', whiteSpace: 'nowrap',
          }}>
            🔒 Premium
          </div>
        </div>
      ))}

      <div style={{ height: 20 }} />
    </div>
  );
}