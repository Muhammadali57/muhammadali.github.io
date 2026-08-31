const translations = {
  en: {
    nav: { about:"About", interests:"Interests", games:"Games", favorites:"Favorites", music:"Music", projects:"Programming", platforms:"Platforms", contact:"Contact" },
    hero: { eyebrow:"PERSONAL SPACE // 01", tagline:"Game Programmer · Gamer · Music Lover", intro:"Welcome to my little corner of the internet — a place for the things I create, play and listen to.", cta:"Explore my world" },
    about: { title:"About Me", text:"I'm Muhammadali, a Game Programmer, Gamer and Music Lover. I enjoy creating things with code, exploring virtual worlds and discovering music that becomes part of my memories.", note:"This is my personal space — a small archive of the things I create, play and listen to.", card1:{title:"Game Programming",text:"I build Telegram bots and web apps while growing toward game development."}, card2:{title:"Games",text:"I love discovering new worlds, stories, characters and the memories behind them."}, card3:{title:"Music",text:"Some songs become more than music — they become part of a moment."}, footer:"CREATING • PLAYING • LISTENING" },
    interests: { title:"Interests", card1:{label:"CREATION / CODE",title:"Game Programming",text:"Turning ideas into something that can actually run, react and be experienced."}, card2:{label:"EXPLORATION / PLAY",title:"Games",text:"Virtual worlds are places to explore — full of stories, characters, atmosphere and memories."}, card3:{label:"ATMOSPHERE / SOUND",title:"Music",text:"Music can change the feeling of a scene, a day or an entire memory."}, footer:"WHAT I CREATE • WHAT I PLAY • WHAT I HEAR" },
    anime:{title:"Favorite Anime & Donghua",anime:"Anime",donghua:"Donghua",footer:"STORIES I CARRY WITH ME."},
    tagline:"Game Programmer · Gamer · Music Lover", favoriteCharacters:"Favorite Characters", favoriteMusic:"Favorite Music", programming:"Programming", platforms:"Platforms", letsConnect:"Let's connect.", contactText:"Have an idea, project, or just want to talk about games, music or programming?"
  },
  uz: {
    nav: { about:"Men haqimda", interests:"Qiziqishlar", games:"O‘yinlar", favorites:"Sevimlilar", music:"Musiqa", projects:"Dasturlash", platforms:"Platformalar", contact:"Aloqa" },
    hero: { eyebrow:"SHAXSIY MAKON // 01", tagline:"Game Programmer · Gamer · Music Lover", intro:"Internetdagi kichik shaxsiy makonimga xush kelibsiz — men yaratadigan, o‘ynaydigan va tinglaydigan narsalar shu yerda.", cta:"Mening dunyomni ko‘rish" },
    about: { title:"Men haqimda", text:"Men Muhammadali — Game Programmer, Gamer va Music Lover. Kod orqali narsalar yaratishni, virtual olamlarni kashf qilishni va xotiraga aylanadigan musiqalarni topishni yoqtiraman.", note:"Bu mening shaxsiy makonim — yaratadigan, o‘ynaydigan va tinglaydigan narsalarimning kichik arxivi.", card1:{title:"Game Programming",text:"Hozir Telegram botlar va web applar yarataman, kelajakda esa game development tomon rivojlanmoqchiman."}, card2:{title:"Games",text:"Yangi olamlar, hikoyalar, qahramonlar va ular qoldiradigan xotiralarni kashf qilishni yaxshi ko‘raman."}, card3:{title:"Music",text:"Ba'zi qo‘shiqlar shunchaki musiqa bo‘lib qolmaydi — ular ma'lum bir lahzaning bir qismiga aylanadi."}, footer:"YARATISH • O‘YNASH • TINGLASH" },
    interests: { title:"Qiziqishlar", card1:{label:"YARATISH / KOD",title:"Game Programming",text:"G‘oyalarni ishlaydigan, javob beradigan va his qilinadigan narsaga aylantirish."}, card2:{label:"KASHFIYOT / O‘YIN",title:"Games",text:"Virtual olamlar — hikoyalar, qahramonlar, atmosfera va xotiralar bilan to‘la kashfiyot joylari."}, card3:{label:"ATMOSFERA / OVOZ",title:"Music",text:"Musiqa sahna, kun yoki butun bir xotiraning kayfiyatini o‘zgartira oladi."}, footer:"MEN YARATADIGAN • MEN O‘YNAYDIGAN • MEN TINGLAYDIGAN" },
    anime:{title:"Sevimli Anime va Donghua",anime:"Anime",donghua:"Donghua",footer:"MEN BILAN QOLGAN HIKOYA VA XOTIRALAR."},
    tagline:"Game Programmer · Gamer · Music Lover", favoriteCharacters:"Sevimli qahramonlar", favoriteMusic:"Sevimli musiqalar", programming:"Dasturlash", platforms:"Platformalar", letsConnect:"Bog‘lanamiz.", contactText:"G‘oya, loyiha yoki shunchaki o‘yinlar, musiqa va dasturlash haqida suhbatlashmoqchimisiz?"
  },
  ru: {
    nav: { about:"Обо мне", interests:"Интересы", games:"Игры", favorites:"Избранное", music:"Музыка", projects:"Программирование", platforms:"Платформы", contact:"Контакты" },
    hero: { eyebrow:"ЛИЧНОЕ ПРОСТРАНСТВО // 01", tagline:"Game Programmer · Gamer · Music Lover", intro:"Добро пожаловать в мой маленький уголок интернета — место для того, что я создаю, играю и слушаю.", cta:"Исследовать мой мир" },
    about: { title:"Обо мне", text:"Я Мухаммадали — Game Programmer, Gamer и Music Lover. Мне нравится создавать вещи с помощью кода, исследовать виртуальные миры и находить музыку, которая становится частью воспоминаний.", note:"Это моё личное пространство — небольшой архив того, что я создаю, играю и слушаю.", card1:{title:"Game Programming",text:"Сейчас я создаю Telegram-ботов и веб-приложения, постепенно двигаясь к разработке игр."}, card2:{title:"Games",text:"Мне нравится открывать новые миры, истории, персонажей и воспоминания, которые они оставляют."}, card3:{title:"Music",text:"Некоторые песни становятся чем-то большим — они становятся частью определённого момента."}, footer:"СОЗДАЮ • ИГРАЮ • СЛУШАЮ" },
    interests: { title:"Интересы", card1:{label:"СОЗДАНИЕ / КОД",title:"Game Programming",text:"Превращать идеи во что-то, что действительно работает, реагирует и ощущается."}, card2:{label:"ИССЛЕДОВАНИЕ / ИГРА",title:"Games",text:"Виртуальные миры — это истории, персонажи, атмосфера и воспоминания."}, card3:{label:"АТМОСФЕРА / ЗВУК",title:"Music",text:"Музыка может изменить настроение сцены, дня или целого воспоминания."}, footer:"ЧТО Я СОЗДАЮ • ВО ЧТО ИГРАЮ • ЧТО СЛУШАЮ" },
    anime:{title:"Любимое аниме и дунхуа",anime:"Аниме",donghua:"Дунхуа",footer:"ИСТОРИИ, КОТОРЫЕ ОСТАЛИСЬ СО МНОЙ."},
    tagline:"Game Programmer · Gamer · Music Lover", favoriteCharacters:"Любимые персонажи", favoriteMusic:"Любимая музыка", programming:"Программирование", platforms:"Платформы", letsConnect:"Давайте на связи.", contactText:"Есть идея, проект или просто хотите поговорить об играх, музыке или программировании?"
  }
};

const getPath = (obj, path) => path.split(".").reduce((value, key) => value?.[key], obj);
const languageButton = document.getElementById("languageButton");
const languageMenu = document.getElementById("languageMenu");

function applyLanguage(lang, save = true) {
  if (!translations[lang]) lang = "en";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = getPath(translations[lang], el.dataset.i18n);
    if (value) el.textContent = value;
  });
  if (languageButton) languageButton.firstChild.textContent = lang.toUpperCase() + " ";
  if (save) localStorage.setItem("site-language", lang);
  languageMenu?.classList.remove("open");
  languageButton?.setAttribute("aria-expanded", "false");
}

if (languageButton && languageMenu) {
  languageButton.addEventListener("click", event => {
    event.stopPropagation();
    const open = languageMenu.classList.toggle("open");
    languageButton.setAttribute("aria-expanded", String(open));
  });
  languageMenu.querySelectorAll("[data-lang]").forEach(item => item.addEventListener("click", () => applyLanguage(item.dataset.lang)));
  document.addEventListener("click", () => languageMenu.classList.remove("open"));
  const saved = localStorage.getItem("site-language");
  const browser = (navigator.language || "en").toLowerCase();
  applyLanguage(saved && translations[saved] ? saved : browser.startsWith("uz") ? "uz" : browser.startsWith("ru") ? "ru" : "en", false);
}

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", event => {
  event.stopPropagation();
  nav?.classList.toggle("open");
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const musicTracks = [
  {title:"Voyaging Star's Farewell",artist:"Wuthering Waves · Tarokiki",audio:"assets/music/Voyaging Stars Farewell - Wuthering Waves Jixwang Tarokiki Emi Evans.mp3",cover:"assets/music/Voyaging Star's Farewell.jpeg"},
  {title:"A Small Miracle",artist:"Wuthering Waves · Tarokiki",audio:"assets/music/A Small Miracle - Wuthering Waves.mp3",cover:"assets/music/A Small Miracle.jpeg"},
  {title:"Paper Plane",artist:"Wuthering Waves · Tarokiki",audio:"assets/music/Paper Plane - Wuthering Waves.mp3",cover:"assets/music/Paper Plane.jpg"},
  {title:"Unwavering Startorch",artist:"Wuthering Waves · Tarokiki",audio:"assets/music/Unwavering Startorch - Wuthering Waves.mp3",cover:"assets/music/Unwavering Startorch.jpg"},
  {title:"Brand New Sky",artist:"Wuthering Waves · Tarokiki",audio:"assets/music/Brand New Sky - Wuthering Waves.mp3",cover:"assets/music/Brand New Sky.jpg"}
];

const audio = document.getElementById("audioPlayer");
if (audio) {
  const cover = document.getElementById("nowCover");
  const title = document.getElementById("nowTitle");
  const artist = document.getElementById("nowArtist");
  const index = document.getElementById("nowIndex");
  const play = document.getElementById("playTrack");
  const progress = document.getElementById("progressBar");
  const current = document.getElementById("currentTime");
  const duration = document.getElementById("duration");
  const items = [...document.querySelectorAll(".track-item")];
  let currentIndex = 0;
  const formatTime = seconds => Number.isFinite(seconds) ? `${String(Math.floor(seconds / 60)).padStart(2,"0")}:${String(Math.floor(seconds % 60)).padStart(2,"0")}` : "00:00";

  function updateButtons() {
    play.textContent = audio.paused ? "▶" : "Ⅱ";
    items.forEach((item, itemIndex) => {
      item.classList.toggle("active", itemIndex === currentIndex);
      item.querySelector(".track-play").textContent = itemIndex === currentIndex && !audio.paused ? "Ⅱ" : "▶";
    });
  }

  function loadTrack(trackIndex, autoplay = false) {
    currentIndex = (trackIndex + musicTracks.length) % musicTracks.length;
    const track = musicTracks[currentIndex];
    audio.src = track.audio;
    cover.src = track.cover;
    title.textContent = track.title;
    artist.textContent = track.artist;
    index.textContent = String(currentIndex + 1).padStart(2, "0");
    progress.value = 0;
    current.textContent = "00:00";
    duration.textContent = "00:00";
    updateButtons();
    if (autoplay) audio.play().catch(() => {});
  }

  play?.addEventListener("click", () => audio.paused ? audio.play().catch(() => {}) : audio.pause());
  document.getElementById("prevTrack")?.addEventListener("click", () => loadTrack(currentIndex - 1, true));
  document.getElementById("nextTrack")?.addEventListener("click", () => loadTrack(currentIndex + 1, true));
  items.forEach((item, itemIndex) => item.addEventListener("click", () => loadTrack(itemIndex, true)));
  audio.addEventListener("loadedmetadata", () => duration.textContent = formatTime(audio.duration));
  audio.addEventListener("timeupdate", () => { current.textContent = formatTime(audio.currentTime); progress.value = audio.duration ? audio.currentTime / audio.duration * 100 : 0; });
  progress?.addEventListener("input", () => { if (audio.duration) audio.currentTime = progress.value / 100 * audio.duration; });
  audio.addEventListener("play", updateButtons);
  audio.addEventListener("pause", updateButtons);
  audio.addEventListener("ended", () => loadTrack(currentIndex + 1, true));
  loadTrack(0);
}

const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");
function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollProgress) scrollProgress.style.width = `${max > 0 ? window.scrollY / max * 100 : 0}%`;
  backToTop?.classList.toggle("show", window.scrollY > 500);
}
window.addEventListener("scroll", updateScrollUI, {passive:true});
backToTop?.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
updateScrollUI();

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

function hidePageLoader() {
  const loader = document.getElementById("pageLoader");
  if (!loader) return;
  loader.classList.add("done");
  loader.setAttribute("aria-hidden", "true");
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", hidePageLoader, {once:true});
else hidePageLoader();
window.addEventListener("load", hidePageLoader, {once:true});
setTimeout(hidePageLoader, 1500);
