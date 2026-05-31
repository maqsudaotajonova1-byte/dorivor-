// Sevimlilar va premium holatini saqlash
// localStorage o'rniga xotirada saqlaydi (ixtiyoriy: localStorage ga o'tkazish mumkin)

const FAV_KEY = 'herbs:favs';
const PREM_KEY = 'herbs:premium';

export const favStore = {
  all() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[2,8]'); }
    catch { return [2, 8]; }
  },
  has(id) { return favStore.all().includes(id); },
  toggle(id) {
    const s = new Set(favStore.all());
    s.has(id) ? s.delete(id) : s.add(id);
    localStorage.setItem(FAV_KEY, JSON.stringify([...s]));
    return [...s];
  },
};

export const premiumStore = {
  get() { return localStorage.getItem(PREM_KEY) === '1'; },
  set(v) { localStorage.setItem(PREM_KEY, v ? '1' : '0'); },
};