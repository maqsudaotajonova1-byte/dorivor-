import React, { useState } from 'react';

const ARTICLES = [
  {
    id: 1,
    title: "Ibn Sino — Tabobat sultoni",
    subtitle: "980-1037 yillar",
    emoji: "👨‍⚕️",
    content: `Abu Ali al-Husayn ibn Abdulloh ibn Sino — o'rta asr islom dunyosining eng buyuk tabib va faylasufi. Uning asosiy asari "Al-Qonun fit-Tibb" (Tibb qonunlari) asrlar davomida Yevropa va Sharq universitetlarida asosiy darslik bo'lib kelgan.

Ibn Sino 18 yoshida allaqachon mashhur tabib bo'lgan va Buxoro amirini davolagan. U 450 dan ortiq asar yozgan, shulardan 240 tasi bizgacha yetib kelgan.`,
    color: '#1a4a2e',
    border: 'rgba(105,213,154,0.3)',
  },
  {
    id: 2,
    title: "Al-Qonun fit-Tibb",
    subtitle: "Tibbiyot ensiklopediyasi",
    emoji: "📖",
    content: `"Tibb qonunlari" — Ibn Sinoning besh jildlik buyuk asari. Bu asar:

• 760 dan ortiq dorivor o'simliklarni tasvirlaydi
• Kasalliklarni aniqlash usullarini ko'rsatadi  
• Jarrohlik amaliyotlarini tushuntiradi
• Yuqumli kasalliklarning tarqalishini izohlaydi

Bu asar XII asrda lotinchaga tarjima qilinib, XVII asrgacha Yevropa universitetlarida o'qitilgan.`,
    color: '#2a1a00',
    border: 'rgba(201,168,76,0.3)',
  },
  {
    id: 3,
    title: "Ibn Sino dorivor o'simliklari",
    subtitle: "Qadimiy tabobat sirlari",
    emoji: "🌿",
    content: `Ibn Sino o'z asarlarida quyidagi o'simliklarni alohida ta'kidlagan:

🌹 Namatak — yurak kasalliklarida
🌾 Zanjabil — hazm va isitma uchun  
💜 Lavanda — asab tizimi uchun
🟡 Zafaron — kayfiyat ko'tarish uchun
🌱 Yalpiz — bosh og'riq va hazm uchun
🌼 Moychechak — tinchlantiruvchi sifatida

U har bir o'simlikning to'g'ri dozasini ham ko'rsatgan.`,
    color: '#0f2d1e',
    border: 'rgba(105,213,154,0.2)',
  },
  {
    id: 4,
    title: "Ibn Sino parhez haqida",
    subtitle: "Sog'lom ovqatlanish",
    emoji: "🍽️",
    content: `Ibn Sino sog'liqni saqlashda parhezni birinchi o'ringa qo'ygan:

"Ovqat — eng yaxshi dori. To'g'ri ovqatlansang, dori kerak bo'lmaydi."

Uning tavsiyalari:
• Erta tongda iliq suv iching
• Ovqatdan keyin yurish qiling
• Kechqurun og'ir ovqat yemang
• Mavsum o'simliklarini iste'mol qiling
• Har kuni 7-8 soat uxlang`,
    color: '#1a2a3a',
    border: 'rgba(82,150,200,0.3)',
  },
];

export default function IbnSinoTab() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <div style={{ padding: '16px', color: '#f5f0e8', fontFamily: "'DM Sans',sans-serif" }}>
        <button
          onClick={() => setSelected(null)}
          style={{
            background: 'rgba(255,255,255,0.1)', border: 'none',
            color: '#f5f0e8', padding: '10px 16px', borderRadius: 12,
            cursor: 'pointer', fontSize: 14, marginBottom: 16,
            fontFamily: "'DM Sans',sans-serif",
          }}
        >← Orqaga</button>
        <div style={{
          background: selected.color, border: `1px solid ${selected.border}`,
          borderRadius: 20, padding: 20,
        }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>{selected.emoji}</div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, marginBottom: 4 }}>
            {selected.title}
          </div>
          <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.6)', marginBottom: 16 }}>
            {selected.subtitle}
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(245,240,232,0.85)', whiteSpace: 'pre-line' }}>
            {selected.content}
          </div>
        </div>
        <div style={{ height: 30 }} />
      </div>
    );
  }

  return (
    <div style={{ padding: '16px', fontFamily: "'DM Sans',sans-serif" }}>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg,#1a3a2a,#0f2d1e)',
        borderRadius: 20, padding: 20, marginBottom: 16,
        border: '1px solid rgba(105,213,154,0.2)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>👨‍⚕️</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: '#f5f0e8' }}>
          Ibn Sino Bo'limi
        </div>
        <div style={{ fontSize: 13, color: 'rgba(245,240,232,0.6)', marginTop: 6, lineHeight: 1.5 }}>
          "Tibbiyot sultoni" — Abu Ali ibn Sino<br />
          <em style={{ color: '#c9a84c' }}>980 — 1037</em>
        </div>
      </div>

      {/* Maqolalar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {ARTICLES.map(a => (
          <div
            key={a.id}
            onClick={() => setSelected(a)}
            style={{
              background: a.color, border: `1px solid ${a.border}`,
              borderRadius: 16, padding: 16, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 14,
              transition: 'transform .2s',
            }}
          >
            <span style={{ fontSize: 32, flexShrink: 0 }}>{a.emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 700, color: '#f5f0e8' }}>
                {a.title}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.55)', marginTop: 3 }}>
                {a.subtitle}
              </div>
            </div>
            <span style={{ color: '#69d59a', fontSize: 20 }}>›</span>
          </div>
        ))}
      </div>

      {/* Iqtibos */}
      <div style={{
        marginTop: 16, background: 'rgba(201,168,76,0.08)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: 16, padding: 16, textAlign: 'center',
      }}>
        <div style={{ fontSize: 20, marginBottom: 8 }}>💬</div>
        <div style={{ fontStyle: 'italic', color: '#e8c97a', fontSize: 14, lineHeight: 1.6 }}>
          "Ilm ikki xil: badanning sog'ligi va ruhning sog'ligi."
        </div>
        <div style={{ color: 'rgba(245,240,232,0.5)', fontSize: 12, marginTop: 8 }}>— Ibn Sino</div>
      </div>
      <div style={{ height: 24 }} />
    </div>
  );
}