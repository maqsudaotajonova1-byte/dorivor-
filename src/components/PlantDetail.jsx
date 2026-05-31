import React, { useState } from "react";

export default function PlantDetail({ plant, onBack, lang = 'uz' }) {
  const [showImg,  setShowImg]  = useState(false);
  const [reviews,  setReviews]  = useState([
    { id:1, name:"Aziz", text:"Juda foydali o'simlik, sinab ko'rdim!", rating:5, date:"2026-05-20" },
    { id:2, name:"Malika", text:"Tavsiya qilaman, natijasi yaxshi.", rating:4, date:"2026-05-22" },
  ]);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5);

  if (!plant) return null;

  const addReview = () => {
    if (!newReview.trim()) return;
    setReviews(prev => [...prev, {
      id: Date.now(), name: "Siz", text: newReview, rating: newRating,
      date: new Date().toISOString().split('T')[0],
    }]);
    setNewReview('');
  };

  return (
    <div style={{
      position:"fixed", inset:0, background:"#02150c",
      overflowY:"auto", zIndex:999, color:"white",
      fontFamily:"'DM Sans',sans-serif",
    }}>

      {/* IMAGE */}
      <div style={{ position:"relative", cursor:"zoom-in" }} onClick={() => setShowImg(true)}>
        <img src={plant.image} alt={plant.name} style={{ width:"100%", height:"300px", objectFit:"cover", display:"block" }} />
        <button
          onClick={e => { e.stopPropagation(); onBack(); }}
          style={{
            position:"absolute", top:"20px", left:"20px",
            background:"rgba(0,0,0,0.5)", border:"none", color:"white",
            padding:"10px 16px", borderRadius:"14px", fontSize:"16px", cursor:"pointer",
          }}
        >← Orqaga</button>
        <div style={{
          position:"absolute", bottom:12, right:12,
          background:"rgba(0,0,0,0.5)", borderRadius:10,
          padding:"4px 10px", fontSize:11, color:"white",
        }}>🔍 Kattalashtirish</div>
      </div>

      {/* CONTENT */}
      <div style={{ padding:"20px" }}>

        {/* Nom va Premium */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"start" }}>
          <div>
            <div style={{ fontSize:"30px", fontWeight:"700", fontFamily:"'Playfair Display',serif" }}>
              {plant.emoji} {plant.name}
            </div>
            <div style={{ color:"#d4af37", marginTop:"4px", fontStyle:"italic", fontSize:"15px" }}>
              {plant.latin}
            </div>
            {/* Reyting */}
            <div style={{ display:'flex', gap:2, marginTop:6 }}>
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{ fontSize:14, color: i <= plant.rating ? '#d4af37' : 'rgba(255,255,255,0.2)' }}>★</span>
              ))}
            </div>
          </div>
          {plant.premium && (
            <div style={{ background:"#d4af37", color:"#111", padding:"6px 12px", borderRadius:"12px", fontWeight:"700", fontSize:12 }}>
              PRO
            </div>
          )}
        </div>

        {/* Tavsif */}
        <div style={{ marginTop:"18px", lineHeight:"1.7", color:"#ccc", fontSize:"15px" }}>
          {plant.description}
        </div>

        {/* Foydalari */}
        <div style={{ marginTop:"24px" }}>
          <div style={{ fontSize:"18px", fontWeight:"700", marginBottom:"12px" }}>🌿 Foydalari</div>
          {plant.benefits?.map((b, i) => (
            <div key={i} style={{ background:"rgba(105,213,154,0.08)", padding:"12px 14px", borderRadius:"12px", marginBottom:"8px", fontSize:14, color:'#f5f0e8', border:'1px solid rgba(105,213,154,0.15)' }}>
              ✅ {b}
            </div>
          ))}
        </div>

        {/* Ogohlantirishlar */}
        <div style={{ marginTop:"24px" }}>
          <div style={{ fontSize:"18px", fontWeight:"700", marginBottom:"12px", color:"#ffb86c" }}>⚠ Ogohlantirish</div>
          {plant.warnings?.map((w, i) => (
            <div key={i} style={{ background:"rgba(255,140,0,0.1)", padding:"12px 14px", borderRadius:"12px", marginBottom:"8px", color:"#ffd59e", fontSize:13, border:'1px solid rgba(255,140,0,0.2)' }}>
              ⚠ {w}
            </div>
          ))}
        </div>

        {/* Tayyorlash */}
        <div style={{ marginTop:"24px" }}>
          <div style={{ fontSize:"18px", fontWeight:"700", marginBottom:"12px" }}>☕ Tayyorlash usuli</div>
          {plant.usage?.steps?.map((s, i) => (
            <div key={i} style={{ display:"flex", gap:"12px", marginBottom:"12px", alignItems:"center" }}>
              <div style={{
                width:"30px", height:"30px", borderRadius:"50%",
                background:"#69d59a", color:"#02150c",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontWeight:"700", fontSize:13, flexShrink:0,
              }}>{i + 1}</div>
              <div style={{ color:"#ddd", lineHeight:"1.5", fontSize:14 }}>{s}</div>
            </div>
          ))}
        </div>

        {/* SHARHLAR */}
        <div style={{ marginTop:"28px" }}>
          <div style={{ fontSize:"18px", fontWeight:"700", marginBottom:"14px" }}>💬 Sharhlar ({reviews.length})</div>

          {reviews.map(r => (
            <div key={r.id} style={{
              background:"rgba(255,255,255,0.05)", borderRadius:14,
              padding:"12px 14px", marginBottom:10,
              border:'1px solid rgba(255,255,255,0.07)',
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
                <span style={{ fontWeight:600, fontSize:13, color:'#f5f0e8' }}>👤 {r.name}</span>
                <span style={{ fontSize:11, color:'rgba(245,240,232,0.4)' }}>{r.date}</span>
              </div>
              <div style={{ display:'flex', gap:2, marginBottom:6 }}>
                {[1,2,3,4,5].map(i => (
                  <span key={i} style={{ fontSize:12, color: i <= r.rating ? '#d4af37' : 'rgba(255,255,255,0.2)' }}>★</span>
                ))}
              </div>
              <div style={{ fontSize:13, color:'rgba(245,240,232,0.75)', lineHeight:1.5 }}>{r.text}</div>
            </div>
          ))}

          {/* Yangi sharh */}
          <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:14, padding:14, border:'1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize:13, fontWeight:600, color:'#f5f0e8', marginBottom:8 }}>Sharh qoldiring</div>
            <div style={{ display:'flex', gap:4, marginBottom:10 }}>
              {[1,2,3,4,5].map(i => (
                <span
                  key={i}
                  onClick={() => setNewRating(i)}
                  style={{ fontSize:22, cursor:'pointer', color: i <= newRating ? '#d4af37' : 'rgba(255,255,255,0.2)' }}
                >★</span>
              ))}
            </div>
            <textarea
              value={newReview}
              onChange={e => setNewReview(e.target.value)}
              placeholder="Fikringizni yozing..."
              rows={3}
              style={{
                width:'100%', background:'rgba(255,255,255,0.07)',
                border:'1px solid rgba(255,255,255,0.1)', borderRadius:10,
                padding:10, color:'#f5f0e8', fontSize:13,
                fontFamily:"'DM Sans',sans-serif", resize:'none', outline:'none',
                boxSizing:'border-box',
              }}
            />
            <button
              onClick={addReview}
              style={{
                marginTop:8, background:'#52b788', border:'none',
                borderRadius:10, padding:'9px 20px', color:'#0f2d1e',
                fontWeight:700, fontSize:13, cursor:'pointer',
                fontFamily:"'DM Sans',sans-serif",
              }}
            >✅ Yuborish</button>
          </div>
        </div>

        <div style={{ height:40 }} />
      </div>

      {/* FULLSCREEN RASM */}
      {showImg && (
        <div onClick={() => setShowImg(false)} style={{
          position:"fixed", inset:0, zIndex:9999,
          background:"rgba(0,0,0,0.96)",
          display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:12,
        }}>
          <img src={plant.image} alt={plant.name} style={{ maxWidth:"95%", maxHeight:"80vh", objectFit:"contain", borderRadius:16 }} />
          <div style={{ color:"rgba(255,255,255,0.5)", fontSize:13 }}>{plant.emoji} {plant.name} — yopish uchun bosing</div>
          <button style={{ position:"absolute", top:20, right:20, background:"rgba(255,255,255,0.15)", border:"none", color:"white", width:40, height:40, borderRadius:"50%", fontSize:20, cursor:"pointer" }}>✕</button>
        </div>
      )}
    </div>
  );
}