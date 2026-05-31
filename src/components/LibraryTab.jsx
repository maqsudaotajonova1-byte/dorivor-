import React, { useState } from 'react';

const BOOKS = [
  {
    id: 1,
    title: "Tib Qonuni — 1-jild",
    author: "Ibn Sino",
    year: "1025",
    emoji: "📖",
    cover: "1️⃣",
    color: "#2a1a00",
    border: "rgba(201,168,76,0.3)",
    category: "ibnsino",
    description: "Ibn Sinoning buyuk tibbiy ensiklopediyasi. 1-jild: Tibbiyot nazariyasi asoslari.",
    pdf: require('../assets/books/Tib-Qonuni1.pdf'),
    pages: [
      { title: "1-jild haqida", content: "Tib Qonunining 1-jildi tibbiyotning umumiy nazariyasini o'z ichiga oladi.\n\nMavzular:\n• Tibbiyot ta'rifi va maqsadi\n• Inson tanasining tuzilishi\n• Mizojlar nazariyasi\n• Kasalliklarning sabablari\n• Davolash usullari" },
      { title: "Mizojlar", content: "Ibn Sino 4 ta asosiy mizojni ajratadi:\n\n🔴 Safroviy mizoj — issiq va quruq\nBelgilari: tez g'azablanish, kuchli iroda\n\n🔵 Balgamli mizoj — sovuq va nam\nBelgilari: sekinlik, sabr-toqat\n\n🟡 Qonli mizoj — issiq va nam\nBelgilari: xushchaqchaqlik, faollik\n\n⚫ Savdoviy mizoj — sovuq va quruq\nBelgilari: o'ylangan, tahlilchi" },
    ]
  },
  {
    id: 2,
    title: "Tib Qonuni — 2-jild",
    author: "Ibn Sino",
    year: "1025",
    emoji: "📖",
    cover: "2️⃣",
    color: "#2a1a00",
    border: "rgba(201,168,76,0.3)",
    category: "ibnsino",
    description: "2-jild: Oddiy dorilar — 760 dan ortiq dorivor o'simlik tavsifi.",
    pdf: require('../assets/books/Tib-Qonuni2.pdf'),
    pages: [
      { title: "2-jild haqida", content: "2-jild 760 dan ortiq oddiy dorilarni — asosan o'simliklarni — tasvirlaydi.\n\nHar bir o'simlik uchun:\n• Arabcha va forscha nomlari\n• Tashqi ko'rinishi\n• Shifobaxsh xususiyatlari\n• Qo'llash usuli va dozasi\n• Zararli ta'sirlari" },
      { title: "Mashhur O'simliklar", content: "2-jildda tasvirlangan asosiy o'simliklar:\n\n🌿 Zira — hazm yaxshilaydi\n🌹 Namatak — yurak uchun\n🟡 Zafaron — ruhni ko'taradi\n🌱 Yalpiz — bosh og'riqda\n🌼 Moychechak — tinchlantiradi\n💜 Lavanda — uyquni yaxshilaydi" },
    ]
  },
  {
    id: 3,
    title: "Tib Qonuni — 3-jild",
    author: "Ibn Sino",
    year: "1025",
    emoji: "📖",
    cover: "3️⃣",
    color: "#2a1a00",
    border: "rgba(201,168,76,0.3)",
    category: "ibnsino",
    description: "3-jild: Organlar kasalliklari — bosh, ko'z, quloqdan tortib ichki organlargacha.",
    pdf: require('../assets/books/Tib-Qonuni3.pdf'),
    pages: [
      { title: "3-jild haqida", content: "3-jild organlar bo'yicha kasalliklarni tizimli tasvirlaydi:\n\n• Bosh va miya kasalliklari\n• Ko'z, quloq, burun kasalliklari\n• Og'iz va tomoq kasalliklari\n• Nafas yo'llari kasalliklari\n• Yurak va qon tomirlar\n• Oshqozon va ichak kasalliklari" },
      { title: "Davolash Usullari", content: "Ibn Sinoning davolash tamoyillari:\n\n1. Parhez — birinchi navbatda ovqatni tuzatish\n2. Dori o'simliklar — tabiiy vositalar\n3. Jismoniy ta'sir — massaj, vannalar\n4. Jarrohlik — so'nggi chora\n\n'Shifokor avval tabiiy usullarni sinab ko'rsin'" },
    ]
  },
  {
    id: 4,
    title: "Tib Qonuni — 4-jild",
    author: "Ibn Sino",
    year: "1025",
    emoji: "📖",
    cover: "4️⃣",
    color: "#2a1a00",
    border: "rgba(201,168,76,0.3)",
    category: "ibnsino",
    description: "4-jild: Umumiy kasalliklar — isitma, o'lat, zaharlanish va boshqalar.",
    pdf: require('../assets/books/Tib-Qonuni4.pdf'),
    pages: [
      { title: "4-jild haqida", content: "4-jild umumiy kasalliklarni o'rganadi:\n\n• Isitma turlari va davolash\n• Yuqumli kasalliklar\n• Zaharlanishlar\n• Suyak sinishi va chiqishi\n• Teri kasalliklari\n• Ruhiy kasalliklar" },
      { title: "Isitma Haqida", content: "Ibn Sino isitmaning sabablarini tushuntiradi:\n\n🌡️ Isitma turlari:\n• Bir kunlik isitma — stressdan\n• Chirituvchi isitma — infektsiyadan\n• Surunkali isitma — a'zolar kasalligidan\n\n🌿 Davolash:\n• Limon va namatak suvi\n• Moychechak choy\n• Tanani sovutish" },
    ]
  },
  {
    id: 5,
    title: "Tib Qonuni — 5-jild",
    author: "Ibn Sino",
    year: "1025",
    emoji: "📖",
    cover: "5️⃣",
    color: "#2a1a00",
    border: "rgba(201,168,76,0.3)",
    category: "ibnsino",
    description: "5-jild: Murakkab dorilar — bir necha o'simliklardan tayyorlangan dori retseptlari.",
    pdf: require('../assets/books/Tib-Qonuni5.pdf'),
    pages: [
      { title: "5-jild haqida", content: "5-jild murakkab dori retseptlarini o'z ichiga oladi:\n\n• Pishirilgan dorilar\n• Tabletkalar va kapsulalar\n• Moy va balzamlar\n• Choy aralashmalari\n• Tashqi qo'llash vositalari\n\nHar bir retsept sinovdan o'tgan va samarali." },
      { title: "Mashhur Retseptlar", content: "Ibn Sinoning mashhur retseptlari:\n\n🍯 Asalli zanjabil:\nZanjabil + asal + limon\nImmunitet va hazm uchun\n\n🌹 Atirgul sharbati:\nAtir gul + shakar + suv\nYurak va ruh uchun\n\n💜 Lavanda yogi:\nLavanda + zaytun moyi\nBosh og'riq va uyqu uchun" },
    ]
  },
  {
    id: 6,
    title: "O'zbekiston Qizil Kitobi",
    author: "O'zbekiston FA",
    year: "2019",
    emoji: "📕",
    cover: "🌿",
    color: "#1a0a0a",
    border: "rgba(220,50,50,0.3)",
    category: "ekologiya",
    description: "O'zbekistonda yo'q bo'lib ketish xavfi ostidagi o'simliklar va hayvonlar ro'yxati.",
    pdf: require('../assets/books/Qizil kitob.pdf'),
    pages: [
      { title: "Kirish", content: "O'zbekiston Qizil Kitobi — respublikamizda yo'q bo'lib ketish xavfi ostidagi o'simlik va hayvon turlarini o'z ichiga olgan rasmiy hujjat.\n\nQizil kitobga kiritilgan turlarni:\n• Ovlash va terish taqiqlanadi\n• Muhit buzilishidan himoya qilinadi\n• Sun'iy ko'paytirish dasturlari olib boriladi\n\nO'zbekistonda 163 ta o'simlik turi muhofaza ostiga olingan." },
      { title: "Dorivor O'simliklar", content: "Qizil kitobga kiritilgan dorivor o'simliklar:\n\n🟡 Zafaron — Juda xavfli\n💜 Tog' lavandasi — Xavfli\n🌸 Turkiston lolasi — Juda xavfli\n🌿 Qizilmiya — Kam uchraydi" },
    ]
  },
  {
    id: 7,
    title: "Dorivor O'simliklar Atlasi",
    author: "Prof. K. Tojimatov",
    year: "2021",
    emoji: "🗺️",
    cover: "🌍",
    color: "#0a1f10",
    border: "rgba(82,183,136,0.3)",
    category: "qollanma",
    description: "O'rta Osiyo dorivor o'simliklarining rangli atlasi. 500+ o'simlik rasmi va tavsifi.",
    pdf: require('../assets/books/Dorivor o\'simliklar atlasi.pdf'),
    pages: [
      { title: "Atlas haqida", content: "Dorivor O'simliklar Atlasi — O'rta Osiyoda o'sadigan 500 dan ortiq dorivor o'simlikning rangli tasvirlarini va batafsil tavsiflarini o'z ichiga oladi.\n\nAtlasda:\n• Rangli fotosuratlar\n• Botanik tavsif\n• Tarqalish xaritasi\n• Shifobaxsh xususiyatlari\n• To'plash va saqlash qoidalari" },
      { title: "Foydalanish", content: "Atlasdan foydalanish bo'yicha ko'rsatmalar:\n\n🔍 O'simlikni aniqlash:\n1. Barglarning shaklini kuzating\n2. Gul va mevalarni solishtiring\n3. O'sish joyini hisobga oling\n\n⚠️ Eslatma:\nO'simlikni to'liq aniqlamasdan iste'mol qilmang. Ikki marta tekshiring!" },
    ]
  },
  {
    id: 8,
    title: "Dorivor O'simliklarni Yetishtirish Texnologiyasi",
    author: "Dr. B. Nazarov",
    year: "2022",
    emoji: "🌱",
    cover: "🚜",
    color: "#0f2d1e",
    border: "rgba(82,183,136,0.25)",
    category: "qollanma",
    description: "Dorivor o'simliklarni sanoat miqyosida yetishtirish, qayta ishlash va sotish texnologiyasi.",
    pdf: require('../assets/books/Dorivor o\'simliklarni yetishtirish texnologiyasi.pdf'),
    pages: [
      { title: "Kirish", content: "Bu qo'llanma dorivor o'simliklarni tijorat maqsadida yetishtirish texnologiyasini o'rgatadi.\n\nMavzular:\n• Tuproq tayyorlash\n• Urug' va ko'chat\n• Parvarish qilish\n• Yig'ish va quritish\n• Qayta ishlash\n• Bozorga chiqarish" },
      { title: "Daromadli O'simliklar", content: "Eng daromadli dorivor o'simliklar:\n\n🟡 Zafaron — 1 kg: $3000+\n💜 Lavanda — efir moyi: $100/kg\n🟠 Curcuma — export: $50/kg\n🌿 Yalpiz — choy: $20/kg\n🌼 Moychechak — $15/kg\n\nYer maydoni: 10 sotix\nDaromad: $5000-15000/yil" },
    ]
  },
  {
    id: 9,
    title: "Farmakognoziya",
    author: "Prof. M. Salimov",
    year: "2020",
    emoji: "🔬",
    cover: "⚗️",
    color: "#1a0a2a",
    border: "rgba(155,143,204,0.3)",
    category: "tibbiyot",
    description: "Dorivor o'simliklarning kimyoviy tarkibi va farmakologik xususiyatlari haqida darslik.",
    pdf: require('../assets/books/Farmakognoziya.pdf'),
    pages: [
      { title: "Farmakognoziya nima?", content: "Farmakognoziya — dorivor o'simliklarni o'rganuvchi fan.\n\nU quyidagilarni o'rganadi:\n• O'simliklarning kimyoviy tarkibi\n• Biologik faol moddalar\n• Standartlashtirish usullari\n• Sifat nazorati\n• Xalqaro standartlar" },
      { title: "Biologik Faol Moddalar", content: "Dorivor o'simliklardagi asosiy moddalar:\n\n🧪 Alkaloidlar — kuchli biologik ta'sir\n🍃 Flavonoidlar — antioxidant\n🌿 Efir moylari — antimikrob\n🫙 Glikozidlar — yurak, hazm\n🌱 Saponinlar — balg'am haydovchi\n🍯 Polisakkaridlar — immunitet" },
    ]
  },
];

const CATEGORIES = [
  { key: 'all',       label: 'Hammasi',   icon: '📚' },
  { key: 'ibnsino',   label: 'Ibn Sino',  icon: '👨‍⚕️' },
  { key: 'tibbiyot',  label: 'Tibbiyot',  icon: '🏥' },
  { key: 'ekologiya', label: 'Ekologiya', icon: '🌱' },
  { key: 'qollanma',  label: "Qo'llanma", icon: '📋' },
];

export default function LibraryTab() {
  const [cat,      setCat]      = useState('all');
  const [selected, setSelected] = useState(null);
  const [page,     setPage]     = useState(0);

  const filtered = cat === 'all' ? BOOKS : BOOKS.filter(b => b.category === cat);

  if (selected) {
    const book = selected;
    const currentPage = book.pages[page];
    return (
      <div style={{ fontFamily: "'DM Sans',sans-serif", color: '#f5f0e8' }}>
        <div style={{
          position: 'sticky', top: 0, zIndex: 10,
          background: 'rgba(10,31,20,0.95)', backdropFilter: 'blur(10px)',
          padding: '12px 16px', borderBottom: '1px solid rgba(82,183,136,0.2)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <button
            onClick={() => { setSelected(null); setPage(0); }}
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#f5f0e8', padding: '8px 12px', borderRadius: 10, cursor: 'pointer', fontSize: 13 }}
          >← Orqaga</button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#52b788' }}>{book.title}</div>
            <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.5)' }}>{book.author}</div>
          </div>
          {book.pdf && (
            <a
              href={book.pdf}
              download
              style={{
                background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.3)',
                color: '#c9a84c', padding: '7px 12px', borderRadius: 10,
                fontSize: 12, fontWeight: 600, textDecoration: 'none',
              }}
            >⬇️ PDF</a>
          )}
          <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.5)' }}>{page+1}/{book.pages.length}</div>
        </div>

        <div style={{ height: 3, background: 'rgba(255,255,255,0.1)' }}>
          <div style={{ height: '100%', background: '#52b788', width: `${((page+1)/book.pages.length)*100}%`, transition: 'width .3s' }} />
        </div>

        <div style={{ padding: '20px 20px 0' }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, marginBottom: 16, color: '#f5f0e8' }}>
            {currentPage.title}
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(245,240,232,0.85)', whiteSpace: 'pre-line' }}>
            {currentPage.content}
          </div>
        </div>

        <div style={{ padding: '24px 16px' }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
            {book.pages.map((p, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                style={{
                  padding: '6px 12px', borderRadius: 20, border: 'none',
                  background: i === page ? '#52b788' : 'rgba(255,255,255,0.08)',
                  color: i === page ? '#0f2d1e' : 'rgba(245,240,232,0.6)',
                  fontSize: 11, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
                }}
              >{i+1}. {p.title}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => setPage(p => Math.max(0, p-1))}
              disabled={page === 0}
              style={{
                flex: 1, padding: 12, borderRadius: 12, border: 'none',
                background: page === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(82,183,136,0.2)',
                color: page === 0 ? 'rgba(245,240,232,0.3)' : '#52b788',
                fontSize: 13, fontWeight: 600, cursor: page === 0 ? 'default' : 'pointer',
                fontFamily: "'DM Sans',sans-serif",
              }}
            >← Oldingi</button>
            <button
              onClick={() => setPage(p => Math.min(book.pages.length-1, p+1))}
              disabled={page === book.pages.length-1}
              style={{
                flex: 1, padding: 12, borderRadius: 12, border: 'none',
                background: page === book.pages.length-1 ? 'rgba(255,255,255,0.05)' : '#52b788',
                color: page === book.pages.length-1 ? 'rgba(245,240,232,0.3)' : '#0f2d1e',
                fontSize: 13, fontWeight: 700, cursor: page === book.pages.length-1 ? 'default' : 'pointer',
                fontFamily: "'DM Sans',sans-serif",
              }}
            >Keyingi →</button>
          </div>
        </div>
        <div style={{ height: 24 }} />
      </div>
    );
  }

  return (
    <div style={{ padding: '16px', fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{
        background: 'linear-gradient(135deg,#1a0a00,#2a1500)',
        borderRadius: 20, padding: 18, marginBottom: 14,
        border: '1px solid rgba(201,168,76,0.25)', textAlign: 'center',
      }}>
        <div style={{ fontSize: 36, marginBottom: 6 }}>📚</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: '#f5f0e8' }}>
          Elektron Kutubxona
        </div>
        <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.55)', marginTop: 4 }}>
          9 ta kitob • PDF yuklab olish imkoniyati
        </div>
      </div>

      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: 8, marginBottom: 12 }}>
        {CATEGORIES.map(c => (
          <button
            key={c.key}
            onClick={() => setCat(c.key)}
            style={{
              flexShrink: 0, padding: '7px 14px', borderRadius: 50, fontSize: 11,
              border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
              background: cat === c.key ? '#52b788' : 'rgba(255,255,255,0.08)',
              color: cat === c.key ? '#0f2d1e' : 'rgba(245,240,232,0.7)',
              whiteSpace: 'nowrap',
            }}
          >{c.icon} {c.label}</button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.map(book => (
          <div
            key={book.id}
            onClick={() => { setSelected(book); setPage(0); }}
            style={{
              background: book.color, border: `1px solid ${book.border}`,
              borderRadius: 18, padding: 16, cursor: 'pointer',
              display: 'flex', gap: 14, alignItems: 'center',
            }}
          >
            <div style={{
              width: 64, height: 80, borderRadius: 10, flexShrink: 0,
              background: 'rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 32, border: `1px solid ${book.border}`,
            }}>{book.cover}</div>

            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 700, color: '#f5f0e8', marginBottom: 4 }}>
                {book.emoji} {book.title}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.6)', marginBottom: 4 }}>
                ✍️ {book.author} • {book.year}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.5)', lineHeight: 1.4 }}>
                {book.description}
              </div>
              <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 10, color: 'rgba(245,240,232,0.4)' }}>📄 {book.pages.length} bob</span>
                <span style={{ fontSize: 10, background: 'rgba(82,183,136,0.2)', color: '#52b788', padding: '2px 8px', borderRadius: 99, border: '1px solid rgba(82,183,136,0.2)' }}>O'qish →</span>
                {book.pdf && (
                  <a
                    href={book.pdf}
                    download
                    onClick={e => e.stopPropagation()}
                    style={{ fontSize: 10, background: 'rgba(201,168,76,0.2)', color: '#c9a84c', padding: '2px 8px', borderRadius: 99, border: '1px solid rgba(201,168,76,0.2)', textDecoration: 'none' }}
                  >⬇️ PDF</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ONLINE KUTUBXONALAR */}
      <div style={{ marginTop: 24 }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: '#f5f0e8', marginBottom: 12 }}>
          🌐 Online Kutubxonalar
        </div>
        {[
          { name: 'ZiyoNET', desc: "O'zbekiston milliy ta'lim tarmog'i kutubxonasi", url: 'https://ziyonet.uz', emoji: '🏛️', color: '#1a2a3a', border: 'rgba(82,150,200,0.3)' },
          { name: 'Kutubxona.uz', desc: "O'zbek tilidagi kitoblar va maqolalar", url: 'https://kutubxona.uz', emoji: '📚', color: '#0f2d1e', border: 'rgba(82,183,136,0.3)' },
          { name: 'E-Kutubxona', desc: "Elektron darsliklar va ilmiy ishlar", url: 'https://el.tuit.uz', emoji: '💻', color: '#1a0a2a', border: 'rgba(155,143,204,0.3)' },
          { name: 'NUUz Kutubxona', desc: "Milliy universitet elektron kutubxonasi", url: 'https://lib.nuu.uz', emoji: '🎓', color: '#2a1a00', border: 'rgba(201,168,76,0.3)' },
          { name: 'Farmatsevtika portali', desc: "Dorivor o'simliklar va farmatsevtika", url: 'https://www.tibbiyot.uz', emoji: '💊', color: '#1a0a0a', border: 'rgba(220,80,80,0.3)' },
        ].map((site, i) => (
          <a
            key={i}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'block', marginBottom: 10 }}
          >
            <div style={{
              background: site.color, border: `1px solid ${site.border}`,
              borderRadius: 14, padding: '14px 16px',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>{site.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#f5f0e8' }}>{site.name}</div>
                <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.55)', marginTop: 2 }}>{site.desc}</div>
              </div>
              <span style={{ color: '#52b788', fontSize: 18 }}>↗</span>
            </div>
          </a>
        ))}
      </div>

      <div style={{ height: 24 }} />
    </div>
  );
}