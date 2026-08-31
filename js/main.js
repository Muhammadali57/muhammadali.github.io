const translations = {
  en: {nav:{about:"About",interests:"Interests",games:"Games",favorites:"Favorites",music:"Music",projects:"Projects",platforms:"Platforms"},
       hero:{status:"ONLINE / PERSONAL SPACE",eyebrow:"PERSONAL SPACE // 01",scroll:"Scroll to explore",tagline:"Game Programmer · Gamer · Music Lover",intro:"Welcome to my little corner of the internet — a place for the things I create, play and listen to.",cta:"Explore my world"},
       about:{title:"About Me",text:"I'm Muhammadali, a Game Programmer, Gamer and Music Lover. I enjoy creating things with code, exploring virtual worlds and discovering music that becomes part of my memories.",note:"This is my personal space — a small archive of the things I create, play and listen to.",card1:{title:"Game Programming",text:"I build Telegram bots and web apps while growing toward game development."},card2:{title:"Games",text:"I love discovering new worlds, stories, characters and the memories behind them."},card3:{title:"Music",text:"Some songs become more than music — they become part of a moment."},footer:"CREATING • PLAYING • LISTENING"},
       interests:{title:"Interests",card1:{label:"CREATION / CODE",title:"Game Programming",text:"Turning ideas into something that can actually run, react and be experienced."},card2:{label:"EXPLORATION / PLAY",title:"Games",text:"Virtual worlds are places to explore — full of stories, characters, atmosphere and memories."},card3:{label:"ATMOSPHERE / SOUND",title:"Music",text:"Music can change the feeling of a scene, a day or an entire memory."},footer:"WHAT I CREATE • WHAT I PLAY • WHAT I HEAR"}},
  uz: {nav:{about:"Men haqimda",interests:"Qiziqishlar",games:"O‘yinlar",favorites:"Sevimlilar",music:"Musiqa",projects:"Loyihalar",platforms:"Platformalar"},
       hero:{status:"ONLAYN / SHAXSIY MAKON",eyebrow:"SHAXSIY MAKON // 01",scroll:"Kashf qilish uchun pastga",tagline:"Game Programmer · Gamer · Music Lover",intro:"Internetdagi kichik shaxsiy makonimga xush kelibsiz — men yaratadigan, o‘ynaydigan va tinglaydigan narsalar shu yerda.",cta:"Mening dunyomni ko‘rish"},
       about:{title:"Men haqimda",text:"Men Muhammadali — Game Programmer, Gamer va Music Lover. Kod orqali narsalar yaratishni, virtual olamlarni kashf qilishni va xotiraga aylanadigan musiqalarni topishni yoqtiraman.",note:"Bu mening shaxsiy makonim — yaratadigan, o‘ynaydigan va tinglaydigan narsalarimning kichik arxivi.",card1:{title:"Game Programming",text:"Hozir Telegram botlar va web applar yarataman, kelajakda esa game development tomon rivojlanmoqchiman."},card2:{title:"Games",text:"Yangi olamlar, hikoyalar, qahramonlar va ular qoldiradigan xotiralarni kashf qilishni yaxshi ko‘raman."},card3:{title:"Music",text:"Ba'zi qo‘shiqlar shunchaki musiqa bo‘lib qolmaydi — ular ma'lum bir lahzaning bir qismiga aylanadi."},footer:"YARATISH • O‘YNASH • TINGLASH"},
       interests:{title:"Qiziqishlar",card1:{label:"YARATISH / KOD",title:"Game Programming",text:"G‘oyalarni ishlaydigan, javob beradigan va his qilinadigan narsaga aylantirish."},card2:{label:"KASHFIYOT / O‘YIN",title:"Games",text:"Virtual olamlar — hikoyalar, qahramonlar, atmosfera va xotiralar bilan to‘la kashfiyot joylari."},card3:{label:"ATMOSFERA / OVOZ",title:"Music",text:"Musiqa sahna, kun yoki butun bir xotiraning kayfiyatini o‘zgartira oladi."},footer:"MEN YARATADIGAN • MEN O‘YNAYDIGAN • MEN TINGLAYDIGAN"}},
  ru: {nav:{about:"Обо мне",interests:"Интересы",games:"Игры",favorites:"Избранное",music:"Музыка",projects:"Проекты",platforms:"Платформы"},
       hero:{status:"ОНЛАЙН / ЛИЧНОЕ ПРОСТРАНСТВО",eyebrow:"ЛИЧНОЕ ПРОСТРАНСТВО // 01",scroll:"Листать вниз",tagline:"Game Programmer · Gamer · Music Lover",intro:"Добро пожаловать в мой маленький уголок интернета — место для того, что я создаю, играю и слушаю.",cta:"Исследовать мой мир"},
       about:{title:"Обо мне",text:"Я Мухаммадали — Game Programmer, Gamer и Music Lover. Мне нравится создавать вещи с помощью кода, исследовать виртуальные миры и находить музыку, которая становится частью воспоминаний.",note:"Это моё личное пространство — небольшой архив того, что я создаю, играю и слушаю.",card1:{title:"Game Programming",text:"Сейчас я создаю Telegram-ботов и веб-приложения, постепенно двигаясь к разработке игр."},card2:{title:"Games",text:"Мне нравится открывать новые миры, истории, персонажей и воспоминания, которые они оставляют."},card3:{title:"Music",text:"Некоторые песни становятся чем-то большим — они становятся частью определённого момента."},footer:"СОЗДАЮ • ИГРАЮ • СЛУШАЮ"}}
};

function getPath(obj, path){ return path.split(".").reduce((o,k)=>o?.[k],obj); }
function setLanguage(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const value=getPath(translations[lang],el.dataset.i18n);
    if(value) el.textContent=value;
  });
  document.getElementById("languageButton").textContent=lang.toUpperCase();
  localStorage.setItem("preferredLanguage",lang);
}
function detectCountryLanguage(){
  const saved=localStorage.getItem("preferredLanguage");
  if(saved && translations[saved]) return saved;
  const browser=(navigator.language||"en").toLowerCase();
  if(browser.startsWith("uz")) return "uz";
  if(browser.startsWith("ru")) return "ru";
  return "en";
}
document.getElementById("languageButton").addEventListener("click",()=>{
  const langs=Object.keys(translations), current=document.documentElement.lang||"en";
  setLanguage(langs[(langs.indexOf(current)+1)%langs.length]);
});
document.getElementById("year").textContent=new Date().getFullYear();
setLanguage(detectCountryLanguage());

/* Favorite music player */
const musicTracks=[
{title:"Voyaging Star's Farewell",artist:"Wuthering Waves · Tarokiki",audio:"assets/music/Voyaging Stars Farewell - Wuthering Waves Jixwang Tarokiki Emi Evans.mp3",cover:"assets/music/Voyaging Star's Farewell.jpeg"},
{title:"A Small Miracle",artist:"Wuthering Waves · Tarokiki",audio:"assets/music/A Small Miracle - Wuthering Waves.mp3",cover:"assets/music/A Small Miracle.jpeg"},
{title:"Paper Plane",artist:"Wuthering Waves · Tarokiki",audio:"assets/music/Paper Plane - Wuthering Waves.mp3",cover:"assets/music/Paper Plane.jpg"},
{title:"Unwavering Startorch",artist:"Wuthering Waves · Tarokiki",audio:"assets/music/Unwavering Startorch - Wuthering Waves.mp3",cover:"assets/music/Unwavering Startorch.jpg"},
{title:"Brand New Sky",artist:"Wuthering Waves · Tarokiki",audio:"assets/music/Brand New Sky - Wuthering Waves.mp3",cover:"assets/music/Brand New Sky.jpg"}];
const ap=document.getElementById("audioPlayer");
if(ap){const c=document.getElementById("nowCover"),t=document.getElementById("nowTitle"),a=document.getElementById("nowArtist"),ix=document.getElementById("nowIndex"),pb=document.getElementById("playTrack"),pr=document.getElementById("progressBar"),cur=document.getElementById("currentTime"),dur=document.getElementById("duration"),items=[...document.querySelectorAll(".track-item")];let i=0;
const fmt=s=>Number.isFinite(s)?String(Math.floor(s/60)).padStart(2,"0")+":"+String(Math.floor(s%60)).padStart(2,"0"):"00:00";
function load(n,auto=false){i=(n+musicTracks.length)%musicTracks.length;let x=musicTracks[i];ap.src=x.audio;c.src=x.cover;t.textContent=x.title;a.textContent=x.artist;ix.textContent=String(i+1).padStart(2,"0");items.forEach((e,k)=>e.classList.toggle("active",k===i));pr.value=0;cur.textContent="00:00";dur.textContent="00:00";if(auto)ap.play().catch(()=>{});update()}
function update(){pb.textContent=ap.paused?"▶":"Ⅱ";items.forEach((e,k)=>e.querySelector(".track-play").textContent=k===i&&!ap.paused?"Ⅱ":"▶")}
pb.onclick=()=>ap.paused?ap.play().catch(()=>{}):ap.pause();document.getElementById("prevTrack").onclick=()=>load(i-1,true);document.getElementById("nextTrack").onclick=()=>load(i+1,true);items.forEach((e,k)=>e.onclick=()=>load(k,true));
ap.onloadedmetadata=()=>dur.textContent=fmt(ap.duration);ap.ontimeupdate=()=>{cur.textContent=fmt(ap.currentTime);pr.value=ap.duration?ap.currentTime/ap.duration*100:0};pr.oninput=()=>{if(ap.duration)ap.currentTime=pr.value/100*ap.duration};ap.onplay=update;ap.onpause=update;ap.onended=()=>load(i+1,true);load(0)}


/* LANGUAGE SYSTEM */
(function(){
  const button=document.getElementById("languageButton");
  const menu=document.getElementById("languageMenu");
  const translations={
    en:{tagline:"Game Programmer · Gamer · Music Lover",favoriteMusic:"Favorite Music",programming:"Programming",platforms:"Platforms",favoriteCharacters:"Favorite Characters",letsConnect:"Let's connect.",contactText:"Have an idea, project, or just want to talk about games, music or programming?",home:"HOME",about:"ABOUT",games:"GAMES",music:"MUSIC",programmingNav:"PROGRAMMING",platformsNav:"PLATFORMS",contactNav:"CONTACT"},
    uz:{tagline:"Game Programmer · Gamer · Music Lover",favoriteMusic:"Sevimli musiqalar",programming:"Dasturlash",platforms:"Platformalar",favoriteCharacters:"Sevimli qahramonlar",letsConnect:"Bog‘lanamiz.",contactText:"G‘oya, loyiha yoki shunchaki o‘yinlar, musiqa va dasturlash haqida suhbatlashmoqchimisiz?",home:"BOSH SAHIFA",about:"MEN HAQIMDA",games:"O‘YINLAR",music:"MUSIQA",programmingNav:"DASTURLASH",platformsNav:"PLATFORMALAR",contactNav:"ALOQA"},
    ru:{tagline:"Game Programmer · Gamer · Music Lover",favoriteMusic:"Любимая музыка",programming:"Программирование",platforms:"Платформы",favoriteCharacters:"Любимые персонажи",letsConnect:"Давайте на связи.",contactText:"Есть идея, проект или просто хотите поговорить об играх, музыке или программировании?",home:"ГЛАВНАЯ",about:"ОБО МНЕ",games:"ИГРЫ",music:"МУЗЫКА",programmingNav:"ПРОГРАММИРОВАНИЕ",platformsNav:"ПЛАТФОРМЫ",contactNav:"КОНТАКТЫ"}
  };
  function applyLanguage(lang,save=true){
    lang=translations[lang]?lang:"en";
    document.documentElement.lang=lang;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const value=translations[lang][el.dataset.i18n];
      if(value) el.textContent=value;
    });
    if(button) button.firstChild.textContent=lang.toUpperCase()+" ";
    if(save) localStorage.setItem("site-language",lang);
    menu?.classList.remove("open");
    button?.setAttribute("aria-expanded","false");
  }
  if(button&&menu){
    button.addEventListener("click",e=>{
      e.stopPropagation();
      const open=menu.classList.toggle("open");
      button.setAttribute("aria-expanded",String(open));
    });
    menu.querySelectorAll("[data-lang]").forEach(item=>item.addEventListener("click",()=>applyLanguage(item.dataset.lang)));
    document.addEventListener("click",()=>menu.classList.remove("open"));
    const saved=localStorage.getItem("site-language");
    if(saved) applyLanguage(saved,false);
    else{
      const browser=(navigator.language||"en").toLowerCase();
      applyLanguage(browser.startsWith("uz")?"uz":browser.startsWith("ru")?"ru":"en",false);
      fetch("https://ipapi.co/json/").then(r=>r.json()).then(data=>{
        if(!localStorage.getItem("site-language")&&data.country_code==="UZ") applyLanguage("uz",false);
      }).catch(()=>{});
    }
  }
})();
