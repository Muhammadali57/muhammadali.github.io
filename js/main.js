(() => {
  'use strict';

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  // Loader
  window.addEventListener('load', () => {
    setTimeout(() => $('#pageLoader')?.classList.add('done'), 250);
  });

  // Mobile navigation — one menu only.
  const menuToggle = $('#menuToggle');
  const nav = $('#mainNav');
  const closeMenu = () => {
    nav?.classList.remove('open');
    menuToggle?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };
  menuToggle?.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
  $$('#mainNav a').forEach(a => a.addEventListener('click', closeMenu));

  // Language — a single source of truth, no duplicate handlers or API calls.
  const translations = {
    uz: {
      nav:{home:'Bosh sahifa',about:'Men haqimda',interests:'Qiziqishlar',games:'O‘yinlar',characters:'Qahramonlar',music:'Musiqa',programming:'Dasturlash',platforms:'Platformalar',contact:'Aloqa'},
      hero:{eyebrow:'SHAXSIY MAKON // 01',tagline:'Game Programmer · Gamer · Music Lover',intro:'Internetdagi kichik shaxsiy makonimga xush kelibsiz — men yaratadigan, o‘ynaydigan va tinglaydigan narsalar shu yerda.',cta:'Mening dunyomni ko‘rish'},
      about:{title:'Men haqimda',text:'Men Muhammadali — Game Programmer, Gamer va Music Lover. Kod orqali narsalar yaratishni, virtual olamlarni kashf qilishni va xotiraga aylanadigan musiqalarni topishni yoqtiraman.',note:'Bu mening shaxsiy makonim — yaratadigan, o‘ynaydigan va tinglaydigan narsalarimning kichik arxivi.',card1:{title:'Game Programming',text:'Hozir Telegram botlar va web applar yarataman, kelajakda esa game development tomon rivojlanmoqchiman.'},card2:{title:'Games',text:'Yangi olamlar, hikoyalar, qahramonlar va ular qoldiradigan xotiralarni kashf qilishni yaxshi ko‘raman.'},card3:{title:'Music',text:'Ba’zi qo‘shiqlar shunchaki musiqa bo‘lib qolmaydi — ular ma’lum bir lahzaning bir qismiga aylanadi.'}},
      interests:{title:'Qiziqishlar'},games:{title:'Sevimli o‘yinlar'},characters:{title:'Sevimli qahramonlar'},music:{title:'Sevimli musiqalar'},programming:{title:'Dasturlash'},platforms:{title:'Platformalar'},contact:{title:'Bog‘lanamiz.',text:'G‘oya, loyiha yoki shunchaki o‘yinlar, musiqa va dasturlash haqida suhbatlashmoqchimisiz?'}
    },
    en: {
      nav:{home:'Home',about:'About',interests:'Interests',games:'Games',characters:'Characters',music:'Music',programming:'Programming',platforms:'Platforms',contact:'Contact'},
      hero:{eyebrow:'PERSONAL SPACE // 01',tagline:'Game Programmer · Gamer · Music Lover',intro:'Welcome to my little corner of the internet — a place for the things I create, play and listen to.',cta:'Explore my world'},
      about:{title:'About Me',text:'I’m Muhammadali — a Game Programmer, Gamer and Music Lover. I enjoy creating things with code, exploring virtual worlds and finding music that becomes part of my memories.',note:'This is my personal space — a small archive of the things I create, play and listen to.',card1:{title:'Game Programming',text:'I currently build Telegram bots and web apps while moving toward game development.'},card2:{title:'Games',text:'I love discovering new worlds, stories, characters and the memories they leave behind.'},card3:{title:'Music',text:'Some songs become more than music — they become part of a particular moment.'}},
      interests:{title:'Interests'},games:{title:'Favorite Games'},characters:{title:'Favorite Characters'},music:{title:'Favorite Music'},programming:{title:'Programming'},platforms:{title:'Platforms'},contact:{title:'Let’s connect.',text:'Have an idea, project, or just want to talk about games, music or programming?'}
    },
    ru: {
      nav:{home:'Главная',about:'Обо мне',interests:'Интересы',games:'Игры',characters:'Персонажи',music:'Музыка',programming:'Программирование',platforms:'Платформы',contact:'Контакты'},
      hero:{eyebrow:'ЛИЧНОЕ ПРОСТРАНСТВО // 01',tagline:'Game Programmer · Gamer · Music Lover',intro:'Добро пожаловать в мой маленький уголок интернета — место для того, что я создаю, играю и слушаю.',cta:'Исследовать мой мир'},
      about:{title:'Обо мне',text:'Я Мухаммадали — Game Programmer, Gamer и Music Lover. Мне нравится создавать вещи с помощью кода, исследовать виртуальные миры и находить музыку, которая становится частью воспоминаний.',note:'Это моё личное пространство — небольшой архив того, что я создаю, играю и слушаю.',card1:{title:'Game Programming',text:'Сейчас я создаю Telegram-ботов и веб-приложения, постепенно двигаясь к разработке игр.'},card2:{title:'Games',text:'Мне нравится открывать новые миры, истории, персонажей и воспоминания, которые они оставляют.'},card3:{title:'Music',text:'Некоторые песни становятся чем-то большим — они становятся частью определённого момента.'}},
      interests:{title:'Интересы'},games:{title:'Любимые игры'},characters:{title:'Любимые персонажи'},music:{title:'Любимая музыка'},programming:{title:'Программирование'},platforms:{title:'Платформы'},contact:{title:'Давайте на связи.',text:'Есть идея, проект или просто хотите поговорить об играх, музыке или программировании?'}
    }
  };
  const get = (obj, path) => path.split('.').reduce((v, k) => v?.[k], obj);
  const languageButton = $('#languageButton');
  const languageMenu = $('#languageMenu');
  function applyLanguage(lang, save = true) {
    if (!translations[lang]) lang = 'uz';
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => {
      const value = get(translations[lang], el.dataset.i18n);
      if (value != null) el.textContent = value;
    });
    if (languageButton) languageButton.innerHTML = `${lang.toUpperCase()} <span>⌄</span>`;
    if (save) localStorage.setItem('site-language', lang);
    languageMenu?.classList.remove('open');
    languageButton?.setAttribute('aria-expanded', 'false');
  }
  languageButton?.addEventListener('click', e => {
    e.stopPropagation();
    const open = languageMenu.classList.toggle('open');
    languageButton.setAttribute('aria-expanded', String(open));
  });
  languageMenu?.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));
  document.addEventListener('click', () => languageMenu?.classList.remove('open'));
  const savedLang = localStorage.getItem('site-language');
  const browserLang = (navigator.language || '').toLowerCase();
  applyLanguage(savedLang || (browserLang.startsWith('ru') ? 'ru' : browserLang.startsWith('en') ? 'en' : 'uz'), false);

  // Scroll UI
  const progress = $('#scrollProgress');
  const back = $('#backToTop');
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = `${max > 0 ? scrollY / max * 100 : 0}%`;
    back?.classList.toggle('visible', scrollY > 600);
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  back?.addEventListener('click', () => scrollTo({ top:0, behavior:'smooth' }));

  // Reveal animations
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('show'); revealObserver.unobserve(entry.target); }
  }), { threshold:.12 });
  $$('.reveal').forEach(el => revealObserver.observe(el));

  // Music player
  const tracks = [
    {title:"Voyaging Star's Farewell",artist:'Wuthering Waves · Tarokiki',audio:"assets/music/Voyaging Stars Farewell - Wuthering Waves Jixwang Tarokiki Emi Evans.mp3",cover:"assets/music/Voyaging Star's Farewell.jpeg"},
    {title:'A Small Miracle',artist:'Wuthering Waves · Tarokiki',audio:'assets/music/A Small Miracle - Wuthering Waves.mp3',cover:'assets/music/A Small Miracle.jpeg'},
    {title:'Paper Plane',artist:'Wuthering Waves · Tarokiki',audio:'assets/music/Paper Plane - Wuthering Waves.mp3',cover:'assets/music/Paper Plane.jpg'},
    {title:'Unwavering Startorch',artist:'Wuthering Waves · Tarokiki',audio:'assets/music/Unwavering Startorch - Wuthering Waves.mp3',cover:'assets/music/Unwavering Startorch.jpg'},
    {title:'Brand New Sky',artist:'Wuthering Waves · Tarokiki',audio:'assets/music/Brand New Sky - Wuthering Waves.mp3',cover:'assets/music/Brand New Sky.jpg'}
  ];
  const audio = $('#audioPlayer');
  if (audio) {
    const cover = $('#nowCover'), title = $('#nowTitle'), artist = $('#nowArtist'), index = $('#nowIndex'), play = $('#playTrack'), progressBar = $('#progressBar'), current = $('#currentTime'), duration = $('#duration');
    const items = $$('.track-item'); let currentIndex = 0;
    const fmt = s => Number.isFinite(s) ? `${String(Math.floor(s/60)).padStart(2,'0')}:${String(Math.floor(s%60)).padStart(2,'0')}` : '00:00';
    const updateButtons = () => { play.textContent = audio.paused ? '▶' : 'Ⅱ'; items.forEach((item,i) => item.querySelector('.track-play').textContent = i === currentIndex && !audio.paused ? 'Ⅱ' : '▶'); };
    const load = (n, autoplay = false) => {
      currentIndex = (n + tracks.length) % tracks.length;
      const track = tracks[currentIndex]; audio.src = track.audio; cover.src = track.cover; title.textContent = track.title; artist.textContent = track.artist; index.textContent = String(currentIndex+1).padStart(2,'0'); progressBar.value = 0; current.textContent='00:00'; duration.textContent='00:00'; items.forEach((x,i)=>x.classList.toggle('active',i===currentIndex)); updateButtons();
      if (autoplay) audio.play().catch(()=>{});
    };
    play.addEventListener('click', () => audio.paused ? audio.play().catch(()=>{}) : audio.pause());
    $('#prevTrack')?.addEventListener('click', () => load(currentIndex-1,true));
    $('#nextTrack')?.addEventListener('click', () => load(currentIndex+1,true));
    items.forEach(item => item.addEventListener('click', () => load(Number(item.dataset.index), true)));
    audio.addEventListener('loadedmetadata', () => duration.textContent = fmt(audio.duration));
    audio.addEventListener('timeupdate', () => { current.textContent=fmt(audio.currentTime); progressBar.value=audio.duration ? audio.currentTime/audio.duration*100 : 0; });
    progressBar.addEventListener('input', () => { if(audio.duration) audio.currentTime = progressBar.value/100*audio.duration; });
    audio.addEventListener('play', updateButtons); audio.addEventListener('pause', updateButtons); audio.addEventListener('ended', () => load(currentIndex+1,true));
    load(0);
  }

  $('#year').textContent = new Date().getFullYear();
})();
