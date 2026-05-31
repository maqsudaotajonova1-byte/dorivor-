import React, { useState } from 'react';
import plants, { CATEGORIES } from '../data/plants';

const EMPTY_PLANT = {
  name: '', latin: '', emoji: '🌿', short: '', description: '',
  category: 'hazm', rating: 4, premium: false,
  benefits: ['', '', ''],
  warnings: [''],
  usage: { steps: ['', '', '', ''] },
  image: '',
};

export default function AdminPanel({ onClose }) {
  const [tab, setTab]         = useState('list'); // list | add | edit
  const [list, setList]       = useState(plants);
  const [form, setForm]       = useState(EMPTY_PLANT);
  const [editId, setEditId]   = useState(null);
  const [search, setSearch]   = useState('');
  const [saved, setSaved]     = useState(false);

  const filtered = list.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = () => {
    if (!form.name.trim()) return alert("O'simlik nomi kerak!");
    if (editId) {
      setList(prev => prev.map(p => p.id === editId ? { ...form, id: editId } : p));
    } else {
      setList(prev => [...prev, { ...form, id: Date.now() }]);
    }
    setForm(EMPTY_PLANT);
    setEditId(null);
    setTab('list');
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleEdit = (plant) => {
    setForm(plant);
    setEditId(plant.id);
    setTab('add');
  };

  const handleDelete = (id) => {
    if (window.confirm("O'chirishni tasdiqlaysizmi?")) {
      setList(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#02150c',
      zIndex: 1000, overflowY: 'auto', fontFamily: "'DM Sans',sans-serif",
      color: '#f5f0e8',
    }}>

      {/* Header */}
      <div style={{
        background: 'rgba(0,0,0,0.4)', padding: '16px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 10, backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(82,183,136,0.2)',
      }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: '#52b788' }}>
          ⚙️ Admin Panel
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {saved && (
            <div style={{ background: '#52b788', color: '#0f2d1e', padding: '6px 12px', borderRadius: 10, fontSize: 12, fontWeight: 700 }}>
              ✅ Saqlandi!
            </div>
          )}
          <button
            onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#f5f0e8', padding: '8px 14px', borderRadius: 10, cursor: 'pointer', fontSize: 13 }}
          >✕ Yopish</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, padding: '12px 16px' }}>
        {[
          { key: 'list', label: `📋 Ro'yxat (${list.length})` },
          { key: 'add',  label: editId ? '✏️ Tahrirlash' : "➕ Qo'shish" },
        ].map(t => (
          <button
            key={t.key}
            onClick={() => { setTab(t.key); if (t.key === 'list') { setForm(EMPTY_PLANT); setEditId(null); } }}
            style={{
              flex: 1, padding: '10px 0', borderRadius: 12, border: 'none',
              background: tab === t.key ? '#52b788' : 'rgba(255,255,255,0.08)',
              color: tab === t.key ? '#0f2d1e' : '#f5f0e8',
              fontWeight: 600, fontSize: 13, cursor: 'pointer',
              fontFamily: "'DM Sans',sans-serif",
            }}
          >{t.label}</button>
        ))}
      </div>

      {/* RO'YXAT */}
      {tab === 'list' && (
        <div style={{ padding: '0 16px' }}>
          {/* Search */}
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Qidirish..."
            style={{
              width: '100%', padding: '10px 14px', borderRadius: 12,
              border: '1px solid rgba(82,183,136,0.2)',
              background: 'rgba(255,255,255,0.07)', color: '#f5f0e8',
              fontSize: 13, outline: 'none', marginBottom: 12,
              fontFamily: "'DM Sans',sans-serif", boxSizing: 'border-box',
            }}
          />
          {filtered.map(p => (
            <div key={p.id} style={{
              display: 'flex', gap: 10, alignItems: 'center',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12, padding: 10, marginBottom: 8,
            }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{p.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.5)', fontStyle: 'italic' }}>{p.latin}</div>
                <div style={{ fontSize: 11, color: '#52b788', marginTop: 2 }}>{p.category} • ⭐{p.rating}</div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button
                  onClick={() => handleEdit(p)}
                  style={{ background: 'rgba(82,183,136,0.2)', border: 'none', color: '#52b788', padding: '6px 10px', borderRadius: 8, cursor: 'pointer', fontSize: 12 }}
                >✏️</button>
                <button
                  onClick={() => handleDelete(p.id)}
                  style={{ background: 'rgba(255,100,100,0.15)', border: 'none', color: '#ff6b6b', padding: '6px 10px', borderRadius: 8, cursor: 'pointer', fontSize: 12 }}
                >🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FORMA */}
      {tab === 'add' && (
        <div style={{ padding: '0 16px' }}>
          {[
            { label: 'Nomi *', key: 'name', type: 'text' },
            { label: 'Lotincha nomi', key: 'latin', type: 'text' },
            { label: 'Emoji', key: 'emoji', type: 'text' },
            { label: 'Qisqa tavsif', key: 'short', type: 'text' },
          ].map(field => (
            <div key={field.key} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.6)', marginBottom: 4 }}>{field.label}</div>
              <input
                value={form[field.key]}
                onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                style={{
                  width: '100%', padding: '10px 12px', borderRadius: 10,
                  border: '1px solid rgba(82,183,136,0.2)',
                  background: 'rgba(255,255,255,0.07)', color: '#f5f0e8',
                  fontSize: 13, outline: 'none', fontFamily: "'DM Sans',sans-serif",
                  boxSizing: 'border-box',
                }}
              />
            </div>
          ))}

          {/* Tavsif */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.6)', marginBottom: 4 }}>Batafsil tavsif</div>
            <textarea
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              rows={3}
              style={{
                width: '100%', padding: '10px 12px', borderRadius: 10,
                border: '1px solid rgba(82,183,136,0.2)',
                background: 'rgba(255,255,255,0.07)', color: '#f5f0e8',
                fontSize: 13, outline: 'none', resize: 'none',
                fontFamily: "'DM Sans',sans-serif", boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Kategoriya */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.6)', marginBottom: 4 }}>Kategoriya</div>
            <select
              value={form.category}
              onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
              style={{
                width: '100%', padding: '10px 12px', borderRadius: 10,
                border: '1px solid rgba(82,183,136,0.2)',
                background: '#1e5c3a', color: '#f5f0e8',
                fontSize: 13, outline: 'none', fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {CATEGORIES.filter(c => c.key !== 'all').map(c => (
                <option key={c.key} value={c.key}>{c.icon} {c.label}</option>
              ))}
            </select>
          </div>

          {/* Reyting */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.6)', marginBottom: 4 }}>Reyting</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[1,2,3,4,5].map(i => (
                <button
                  key={i}
                  onClick={() => setForm(f => ({ ...f, rating: i }))}
                  style={{
                    width: 36, height: 36, borderRadius: 8, border: 'none',
                    background: i <= form.rating ? '#c9a84c' : 'rgba(255,255,255,0.1)',
                    color: i <= form.rating ? '#2a1a00' : '#f5f0e8',
                    fontSize: 16, cursor: 'pointer',
                  }}
                >★</button>
              ))}
            </div>
          </div>

          {/* Foydalar */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.6)', marginBottom: 4 }}>Foydalar</div>
            {form.benefits.map((b, i) => (
              <input
                key={i}
                value={b}
                onChange={e => {
                  const arr = [...form.benefits];
                  arr[i] = e.target.value;
                  setForm(f => ({ ...f, benefits: arr }));
                }}
                placeholder={`Foyda ${i+1}`}
                style={{
                  width: '100%', padding: '8px 12px', borderRadius: 8, marginBottom: 6,
                  border: '1px solid rgba(82,183,136,0.15)',
                  background: 'rgba(255,255,255,0.06)', color: '#f5f0e8',
                  fontSize: 12, outline: 'none', fontFamily: "'DM Sans',sans-serif",
                  boxSizing: 'border-box',
                }}
              />
            ))}
          </div>

          {/* Premium */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <input
              type="checkbox"
              checked={form.premium}
              onChange={e => setForm(f => ({ ...f, premium: e.target.checked }))}
              style={{ width: 18, height: 18, cursor: 'pointer' }}
            />
            <span style={{ fontSize: 13 }}>⭐ Premium o'simlik</span>
          </div>

          {/* Saqlash */}
          <button
            onClick={handleSave}
            style={{
              width: '100%', padding: 14, borderRadius: 14, border: 'none',
              background: 'linear-gradient(135deg,#52b788,#3d9e6e)',
              color: '#0f2d1e', fontWeight: 700, fontSize: 15,
              cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
              marginBottom: 24,
            }}
          >
            {editId ? '✅ Saqlash' : "➕ Qo'shish"}
          </button>
        </div>
      )}
    </div>
  );
}