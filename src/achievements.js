// "Artifacts": a small achievement system, because the portfolio of a SmartHabbit dev should be gamified.
const LIST = [
  { id: 'first-step', name: 'First step', hint: 'Climb to the first level', icon: '𓂀' },
  { id: 'summit', name: 'Summit', hint: 'Reach the capstone', icon: '𓉴' },
  { id: 'poker', name: 'Poker face', hint: 'Poke mini-Adham 5 times', icon: '𓀀' },
  { id: 'moonwalker', name: 'Moonwalker', hint: 'Click the moon', icon: '𓇹' },
  { id: 'popper', name: 'Balloon popper', hint: 'Score 8+ in Balloon Rush', icon: '𓆣' },
  { id: 'red-team', name: 'Red team', hint: 'Max out the attack in Research', icon: '𓋹' },
  { id: 'root', name: 'Root access', hint: 'Open the terminal', icon: '𓏏' },
  { id: 'polyglot', name: 'Polyglot', hint: 'Make the guide speak Arabic', icon: '𓅓' },
  { id: 'dj', name: 'DJ', hint: 'Turn the sound on', icon: '𓊖' },
  { id: 'hired', name: '201 Created', hint: 'Send a real request', icon: '𓎛' },
];
const KEY = 'adham-artifacts';
let got = new Set();
try { got = new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch (e) {}
const listeners = [];

export const artifacts = {
  list: LIST,
  has: (id) => got.has(id),
  count: () => got.size,
  onUnlock: (fn) => listeners.push(fn),
  unlock(id) {
    if (got.has(id)) return false;
    const a = LIST.find((x) => x.id === id); if (!a) return false;
    got.add(id); try { localStorage.setItem(KEY, JSON.stringify([...got])); } catch (e) {}
    listeners.forEach((fn) => fn(a, got.size, LIST.length));
    return true;
  },
};
