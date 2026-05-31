import React, { useState } from 'react';

const PRODUCTS = [
  { id:1, name:"Zanjabil kukuni", emoji:"🫚", price:"35,000", unit:"100g", seller:"Toshkent fermer bozori", rating:4.8, badge:"Sifatli", category:"quritilgan" },
  { id:2, name:"Lavanda moyi", emoji:"💜", price:"85,000", unit:"30ml", seller:"Samarqand organik", rating:4.9, badge:"Premium", category:"moy" },
  { id:3, name:"Moychechak guli", emoji:"🌼", price:"18,000", unit:"50g", seller:"Farg'ona vodiysi", rating:4.7, badge:"Yangi", category:"quritilgan" },
  { id:4, name:"Zafaron (original)", emoji:"🟡", price:"450,000", unit:"1g", seller:"Qashqadaryo fermeri", rating:5.0, badge:"Original", category:"ziravorlar" },
  { id:5, name:"Aloe Vera jeli", emoji:"🌵", price:"42,000", unit:"200ml", seller:"Andijon organik", rating:4.6, badge:"Tabiiy", category:"moy" },
  { id:6, name:"Curcuma kukuni", emoji:"🟠", price:"28,000", unit:"100g", seller:"Namangan bozori", rating:4.5, badge:"Arzon", category:"ziravorlar" },
  { id:7, name:"Yalpiz choy", emoji:"🌱", price:"15,000", unit:"30 paket", seller:"Toshkent organik", rating:4.7, badge:"Mashhur", category:"choy" },
  { id:8, name:"Qizilmiya ildizi", emoji:"🌿", price:"22,000", unit:"100g", seller:"Buxoro shifokor", rating:4.6, badge:"Shifobaxsh", category:"quritilgan" },
  { id:9, name:"Namatak mevasi", emoji:"🌹", price:"32,000", unit:"100g", seller:"Toshkent fermer", rating:4.8, badge:"Vitamini ko'p", category:"quritilgan" },
  { id:10, name:"Valerian choy", emoji:"🌸", price:"20,000", unit:"20 paket", seller:"Samarqand shifo", rating:4.5, badge:"Uyqu uchun", category:"choy" },
];

const CATS = [
  { key:'all', label:'Hammasi', emoji:'🛒' },
  { key:'quritilgan', label:'Quritilgan', emoji:'🌿' },
  { key:'moy', label:'Moylar', emoji:'💧' },
  { key:'choy', label:'Choylar', emoji:'☕' },
  { key:'ziravorlar', label:'Ziravorlar', emoji:'🧂' },
];

const BADGE_COLORS = {
  'Premium':    '#c9a84c',
  'Original':   '#c9a84c',
  'Sifatli':    '#52b788',
  'Yangi':      '#52b788',
  'Tabiiy':     '#52b788',
  'Mashhur':    '#52b788',
  'Arzon':      '#69d59a',
  'Shifobaxsh': '#69d59a',
  'Vitamini ko\'p': '#69d59a',
  'Uyqu uchun': '#9b8fcc',
};

export default function MarketTab() {
  const [cat, setCat]       = useState('all');
  const [cart, setCart]     = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  const addToCart = (product) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? {...i, qty: i.qty+1} : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div style={{ padding: '16px', fontFamily: "'DM Sans',sans-serif" }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: '#f5f0e8' }}>
          🛒 Eko Market
        </div>
        <button
          onClick={() => setShowCart(!showCart)}
          style={{
            background: totalItems > 0 ? '#52b788' : 'rgba(255,255,255,0.1)',
            border: 'none', borderRadius: 20, padding: '8px 14px',
            color: totalItems > 0 ? '#0f2d1e' : '#f5f0e8',
            fontSize: 13, fontWeight: 700, cursor: 'pointer',
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          🛒 {totalItems > 0 ? `Savatcha (${totalItems})` : 'Savatcha'}
        </button>
      </div>

      {/* Savatcha */}
      {showCart && cart.length > 0 && (
        <div style={{
          background: '#0f2d1e', border: '1px solid rgba(105,213,154,0.2)',
          borderRadius: 16, padding: 14, marginBottom: 14,
        }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#f5f0e8', marginBottom: 10 }}>📦 Buyurtma</div>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: 13, color: '#f5f0e8' }}>
              <span>{item.emoji} {item.name} x{item.qty}</span>
              <span style={{ color: '#69d59a' }}>{item.price} so'm</span>
            </div>
          ))}
          <button style={{ marginTop: 12, width: '100%', background: '#52b788', border: 'none', borderRadius: 12, padding: 10, color: '#0f2d1e', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
            ✅ Buyurtma berish
          </button>
        </div>
      )}

      {/* Kategoriyalar */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: 8, marginBottom: 12 }}>
        {CATS.map(c => (
          <button
            key={c.key}
            onClick={() => setCat(c.key)}
            style={{
              flexShrink: 0, padding: '7px 14px', borderRadius: 50,
              fontSize: 12, fontWeight: 500, cursor: 'pointer',
              border: '1.5px solid',
              background: cat === c.key ? '#52b788' : 'rgba(255,255,255,0.06)',
              color: cat === c.key ? '#0f2d1e' : 'rgba(245,240,232,0.8)',
              borderColor: cat === c.key ? '#52b788' : 'rgba(255,255,255,0.1)',
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {c.emoji} {c.label}
          </button>
        ))}
      </div>

      {/* Mahsulotlar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {filtered.map(p => (
          <div key={p.id} style={{
            background: '#0f2d1e', border: '1px solid rgba(105,213,154,0.15)',
            borderRadius: 16, padding: 12, position: 'relative',
          }}>
            {/* Badge */}
            <div style={{
              position: 'absolute', top: 8, right: 8,
              background: BADGE_COLORS[p.badge] || '#52b788',
              color: '#0f2d1e', fontSize: 9, fontWeight: 700,
              padding: '2px 7px', borderRadius: 99,
            }}>{p.badge}</div>

            <div style={{ fontSize: 36, marginBottom: 8, textAlign: 'center' }}>{p.emoji}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 700, color: '#f5f0e8', marginBottom: 2 }}>{p.name}</div>
            <div style={{ fontSize: 10, color: 'rgba(245,240,232,0.5)', marginBottom: 4 }}>{p.unit} • {p.seller}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 8 }}>
              <span style={{ fontSize: 11, color: '#c9a84c' }}>⭐ {p.rating}</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#69d59a', marginBottom: 8 }}>{p.price} so'm</div>
            <button
              onClick={() => addToCart(p)}
              style={{
                width: '100%', background: 'rgba(82,183,136,0.15)',
                border: '1px solid rgba(82,183,136,0.3)',
                borderRadius: 10, padding: '7px 0',
                color: '#52b788', fontSize: 12, fontWeight: 600,
                cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
              }}
            >+ Savatchaga</button>
          </div>
        ))}
      </div>
      <div style={{ height: 24 }} />
    </div>
  );
}