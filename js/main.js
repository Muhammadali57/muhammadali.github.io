/* ==========================================
   1. MULTILINGUAL DICTIONARY & TOGGLE SYSTEM
   ========================================== */
const dictionary = {
  uz: {
    "nav.about": "Men haqimda",
    "nav.skills": "Yo'nalishlar",
    "nav.games": "O'yinlar",
    "nav.music": "Musiqa",
    "nav.links": "Aloqa",
    "hero.status": "TIZIM // ONLAYN",
    "hero.tagline": "Game Programmer · Gamer · Tech Explorer",
    "hero.btn1": "Kashf qilish",
    "hero.btn2": "Bog'lanish",
    "about.title": "Men haqimda",
    "about.card1.title": "Dasturlash",
    "about.card1.desc": "Python, Telegram botlar va Web ilovalar yarataman. Asosiy maqsadim — Game Development sohasini chuqur egallash.",
    "about.card2.title": "O'yin Olamlari",
    "about.card2.desc": "Wuthering Waves va PGR kabi murakkab jang tizimiga hamda chuqur syujetga ega virtual olamlarni o'rganishni yoqtiraman.",
    "about.card3.title": "Atmosfera & Musiqa",
    "about.card3.desc": "Musiqa o'yin va hayotiy lahzalarga o'zgacha kayfiyat bag'ishlaydi. Soundtraklar — ilhom manbaim.",
    "games.title": "Sevimli O'yinlar & Qahramonlar",
    "music.title": "Sevimli Musiqa",
    "links.title": "Platformalar"
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Focus",
    "nav.games": "Games",
    "nav.music": "Music",
    "nav.links": "Connect",
    "hero.status": "SYSTEM // ONLINE",
    "hero.tagline": "Game Programmer · Gamer · Tech Explorer",
    "hero.btn1": "Explore World",
    "hero.btn2": "Get in Touch",
    "about.title": "About Me",
    "about.card1.title": "Programming",
    "about.card1.desc": "Building Telegram bots & Web apps with Python, moving forward to Game Development.",
    "about.card2.title": "Virtual Worlds",
    "about.card2.desc": "Exploring rich storylines and intricate combat mechanics in games like Wuthering Waves & PGR.",
    "about.card3.title": "Atmosphere & Sound",
    "about.card3.desc": "Music turns simple moments into memories. OSTs are my primary source of inspiration.",
    "games.title": "Favorite Games & Characters",
    "music.title": "Favorite Music",
    "links.title": "Find Me Online"
  }
};

let currentLang = 'uz';

function initLanguageSwitcher() {
  const langBtn = document.getElementById('langToggle');
  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'uz' ? 'en' : 'uz';
    langBtn.textContent = currentLang.toUpperCase();
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dictionary[currentLang] && dictionary[currentLang][key]) {
        el.textContent = dictionary[currentLang][key];
      }
    });
  });
}

/* ==========================================
   2. AUDIO PLAYER CONTROLLER
   ========================================== */
const playlist = [
  { 
    title: "Voyaging Star's Farewell", 
    artist: "Tarokiki · Wuthering Waves OST" 
  },
  { 
    title: "A Small Miracle", 
    artist: "Tarokiki · Wuthering Waves OST" 
  },
  { 
    title: "Unwavering Startorch", 
    artist: "Tarokiki · Wuthering Waves OST" 
  }
];

let currentTrackIndex = 0;
let isPlaying = false;

function initMusicPlayer() {
  const playBtn = document.getElementById('playBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const trackTitle = document.getElementById('trackTitle');
  const trackArtist = document.getElementById('trackArtist');

  if (!playBtn) return;

  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.textContent = isPlaying ? "Ⅱ" : "▶";
    playBtn.style.borderColor = isPlaying ? "var(--accent)" : "var(--border-color)";
  });

  nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    updateTrackDisplay(trackTitle, trackArtist);
  });

  prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    updateTrackDisplay(trackTitle, trackArtist);
  });
}

function updateTrackDisplay(titleEl, artistEl) {
  if (titleEl) titleEl.textContent = playlist[currentTrackIndex].title;
  if (artistEl) artistEl.textContent = playlist[currentTrackIndex].artist;
}

/* ==========================================
   3. UI INTERACTIVES & SCROLL ANIMATIONS
   ========================================== */
function initHeaderScrollEffect() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.background = 'rgba(7, 9, 14, 0.95)';
      header.style.borderBottomColor = 'rgba(112, 165, 255, 0.2)';
    } else {
      header.style.background = 'rgba(7, 9, 14, 0.85)';
      header.style.borderBottomColor = 'var(--border-color)';
    }
  });
}

/* ==========================================
   4. DOM INITIALIZATION
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initMusicPlayer();
  initHeaderScrollEffect();
});
