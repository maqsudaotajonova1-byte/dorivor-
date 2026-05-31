import React, { useState } from 'react';

export default function TTSControls({ narrative }) {
  const [speaking, setSpeaking] = useState(false);

  const speak = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(narrative);
    utter.lang = 'uz-UZ';
    utter.rate = 0.9;
    setSpeaking(true);
    utter.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utter);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  const btnStyle = {
    border: 'none', borderRadius: 20, padding: '9px 20px',
    cursor: 'pointer', fontSize: 13,
    fontFamily: "'DM Sans',sans-serif", marginTop: 12,
    color: 'white',
  };

  return speaking
    ? <button style={{ ...btnStyle, background: '#ff6b35' }} onClick={stop}>⏹ To'xtatish</button>
    : <button style={{ ...btnStyle, background: '#2d6a2d' }} onClick={speak}>🔊 Ovozli o'qish</button>;
}