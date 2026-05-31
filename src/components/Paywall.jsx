import React from 'react';
import { premiumStore } from '../lib/storage';

export default function Paywall({ onClose, onUnlocked }) {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 200,
    }}>
      <div style={{
        background: '#1e5c3a',
        border: '1px solid rgba(82,183,136,0.2)',
        borderRadius: 20, padding: 24,
        maxWidth: 360, width: '90%',
        color: '#f5f0e8',
        fontFamily: "'DM Sans',sans-serif",
      }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", marginBottom: 10 }}>⭐ Premium bo'lim</h2>
        <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.65)', marginBottom: 6, lineHeight: 1.5 }}>
          Batafsil ma'lumotlar va maxsus kontentlar obuna orqali ochiladi.
        </p>
        <p style={{ fontSize: 11, color: 'rgba(245,240,232,0.4)' }}>
          Demo rejim: vaqtincha ochib sinab ko'rishingiz mumkin.
        </p>
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <button
            style={{
              flex: 1, border: 'none', borderRadius: 12, padding: 10,
              cursor: 'pointer', fontSize: 13, fontWeight: 700,
              background: '#c9a84c', color: '#2a1a00',
            }}
            onClick={() => { premiumStore.set(true); onUnlocked?.(); onClose(); }}
          >
            Demo ochish
          </button>
          <button
            style={{
              flex: 1, border: 'none', borderRadius: 12, padding: 10,
              cursor: 'pointer', fontSize: 13,
              background: 'rgba(255,255,255,0.1)', color: '#f5f0e8',
            }}
            onClick={onClose}
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
}