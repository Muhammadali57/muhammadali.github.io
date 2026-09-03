(() => {
  'use strict';

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  // Loader — never wait for every image/audio/network request.
  // The page can continue loading in the background while the loader disappears quickly.
  const hideLoader = () => {
    const loader = $('#pageLoader');
    if (!loader) return;
    loader.classList.add('done');
    setTimeout(() => loader.remove(), 260);
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(hideLoader, 80), { once: true });
  } else {
    setTimeout(hideLoader, 80);
  }
  // Safety fallback in case DOM events are interrupted.
  setTimeout(hideLoader, 900);

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

  // Language / i18n — every user-facing UI string is translated from one source.
  const translations = {
    uz: {
      loader:{loading:'MUHAMMADALI / YUKLANMOQDA'}, ui:{menu:'Menyuni ochish',backTop:'Yuqoriga qaytish'},
      nav:{home:'Bosh sahifa',about:'Men haqimda',interests:'Qiziqishlar',games:'O\'yinlar',characters:'Qahramonlar',music:'Musiqa',programming:'Dasturlash',platforms:'Platformalar',contact:'Aloqa'},
      hero:{home:'01 / BOSH SAHIFA',languages:'UZ · EN · RU · JA · ZH',eyebrow:'SHAXSIY MAKON // 01',tagline:'O\'yin dasturchisi · O\'yinchi · Musiqa ishqibozi',intro:'Internetdagi kichik shaxsiy makonimga xush kelibsiz — men yaratadigan, o\'ynaydigan va tinglaydigan narsalar shu yerda.',cta:'Mening dunyomni ko\'rish',bottom1:'O\'YIN DASTURLASH',bottom2:'YARATISH · O\'YNASH · TINGLASH',bottom3:'PASTGA AYLANING ↓',avatarAlt:'Muhammadalining portreti'},
      about:{eyebrow:'PROFIL / 02',title:'Men haqimda',code:'MM / PROFIL',text:'Men Muhammadali — o\'yin dasturchisi, o\'yinchi va musiqa ishqibozi. Kod orqali narsalar yaratishni, virtual olamlarni kashf qilishni va xotiraga aylanadigan musiqalarni topishni yoqtiraman.',noteLabel:'HAQIDA / ESLATMA',note:'Bu mening shaxsiy makonim — yaratadigan, o\'ynaydigan va tinglaydigan narsalarimning kichik arxivi.',card1:{label:'YARATISH / KOD',title:'O\'yin dasturlash',text:'Hozir Telegram botlar va web applar yarataman, kelajakda esa o\'yin ishlab chiqish tomon rivojlanmoqchiman.'},card2:{label:'KASHFIYOT / O\'YIN',title:'O\'yinlar',text:'Yangi olamlar, hikoyalar, qahramonlar va ular qoldiradigan xotiralarni kashf qilishni yaxshi ko\'raman.'},card3:{label:'ATMOSFERA / OVOZ',title:'Musiqa',text:'Ba\'zi qo\'shiqlar shunchaki musiqa bo\'lib qolmaydi — ular ma\'lum bir lahzaning bir qismiga aylanadi.'}},
      interests:{eyebrow:'ASOS / 03',title:'Qiziqishlar',code:'UCH YO\'NALISH',item1:{label:'YARATISH / KOD',title:'O\'yin dasturlash',text:'G\'oyalarni ishlaydigan, javob beradigan va his qilinadigan narsaga aylantirish.',code:'KOD'},item2:{label:'KASHFIYOT / O\'YIN',title:'O\'yinlar',text:'Virtual olamlar — hikoyalar, qahramonlar, atmosfera va xotiralar bilan to\'la kashfiyot joylari.',code:'O\'YIN'},item3:{label:'ATMOSFERA / OVOZ',title:'Musiqa',text:'Musiqa sahna, kun yoki butun bir xotiraning kayfiyatini o\'zgartira oladi.',code:'OVOZ'},tags:{telegram:'TELEGRAM BOTLAR',web:'WEB ILOVALAR',gamedev:'GAME DEV / KEYIN',worlds:'OLAMLAR',stories:'HIKOYALAR',characters:'QAHRAMONLAR',listening:'TINGLASH',memories:'XOTIRALAR',favorites:'SEVIMLILAR'}},
      games:{eyebrow:'O\'YIN / 07',title:'Sevimli o\'yinlar',code:'O\'YINLAR / 07'},
      characters:{eyebrow:'REZONATORLAR / 04',title:'Sevimli qahramonlar',code:'SEVIMLILAR / 04'},
      anime:{eyebrow:'TOMOSHA RO\'YXATI / 04',title:'Sevimli Anime va Donghua',code:'04 TA NOM',animeLabel:'01 / ANIME',animeTitle:'Anime',donghuaLabel:'02 / DONGHUA',donghuaTitle:'Donghua',titles2:'02 TA NOM',donghuaLabel2:'02 / DONGHUA',donghuaTitle2:'Donghua',item1Label:'01 / ANIME',item2Label:'02 / ANIME',item3Label:'03 / DONGHUA',item4Label:'04 / DONGHUA',growth:'Bu joy yangi narsalarni yaratib, nashr qilganim sari kengayadi.'},
      music:{eyebrow:'TINGLASH / 05',title:'Sevimli musiqalar',code:'05 TA TREK',nowPlaying:'HOZIR IJRODA',previous:'Oldingi trek',play:'Ijro etish',next:'Keyingi trek',progress:'Trek jarayoni'},
      programming:{eyebrow:'QURISH / O\'RGANISH / YARATISH',title:'Dasturlash',code:'FAOL / 03',directionLabel:'HOZIRGI YO\'NALISHIM',directionTitle:'G\'oyalarni haqiqatga aylantirish.',directionText:'O\'yin dasturlash — mening asosiy qiziqishim. Hozircha Telegram botlar va web ilovalar ham yaratmoqdaman.',card1:{label:'ASOSIY QIZIQISH',title:'O\'yin dasturlash',text:'O\'yin ishlab chiqish, tizimlar, mexanikalar va g\'oyalarni o\'ynaladigan tajribaga aylantirish jarayonini o\'rganish.',tag:'O\'YIN DASTURLASH'},card2:{label:'HOZIR ISHLAYAPMAN',title:'Telegram botlar',text:'Turli g\'oyalarni o\'rganish va sinash davomida foydali hamda interaktiv Telegram botlar yaratish.',tag:'TELEGRAM'},card3:{label:'HOZIR ISHLAYAPMAN',title:'Web ilovalar',text:'Web tajribalarini yaratish, frontend g\'oyalari, interfeyslar va funksionallikni sinab ko\'rish.',tag:'WEB'},card4:{label:'KEYINROQ',title:'Loyihalar',text:'Ulashishga arziydigan loyihalarni yaratganim sari GitHub loyihalari shu yerda paydo bo\'ladi.',tag:'TEZ ORADA'}},
      projects:{eyebrow:'ISH / 09',title:'Loyihalar',code:'YARATILMOQDA / KEYIN',archive:'LOYIHALAR ARXIVI / 001',coming:'Yana loyihalar tez orada.',text:'Bu joy yangi narsalarni yaratib, nashr qilganim sari kengayadi.'},
      platforms:{eyebrow:'INTERNETNING BOSHQA JOYLARIDA',title:'Platformalar',code:'MENI TOPING / 15',introTitle:'Turli platformalar. <br><span>Bitta identitet.</span>',introText:'15 ta joy, bitta raqamli identitet.',discord:'Hamjamiyat / Taklifnoma',profile:'Profil'},
      contact:{eyebrow:'11 / ALOQA',title:'Bog\'lanamiz.',text:'G\'oya, loyiha yoki shunchaki o\'yinlar, musiqa va dasturlash haqida suhbatlashmoqchimisiz?',email:'EMAIL',telegram:'TELEGRAM',github:'GITHUB'},
      account:{eyebrow:'WUTHERING WAVES / HISOB',title:'Rezonator profilim',code:'O\'YINCHI / 605549481',playerName:'O\'YINCHI NOMI',unionLevel:'UNION DARAJASI',server:'SERVER',favorite:'ASOSIY / SEVIMLI REZONATORLAR'},
      footer:{tagline:'O\'yin dasturchisi · O\'yinchi · Musiqa ishqibozi',backTop:'YUQORIGA ↑'},
      page:{title:'Muhammadali — Shaxsiy makon',description:'Muhammadali — O\'yin dasturchisi · O\'yinchi · Musiqa ishqibozi. O\'yinlar, musiqa, dasturlash va men sevgan narsalar.'}
    },
    en: {
      loader:{loading:'MUHAMMADALI / LOADING'}, ui:{menu:'Open menu',backTop:'Back to top'},
      nav:{home:'Home',about:'About Me',interests:'Interests',games:'Games',characters:'Characters',music:'Music',programming:'Programming',platforms:'Platforms',contact:'Contact'},
      hero:{home:'01 / HOME',languages:'UZ · EN · RU · JA · ZH',eyebrow:'PERSONAL SPACE // 01',tagline:'Game Programmer · Gamer · Music Lover',intro:'Welcome to my little corner of the internet — a place for the things I create, play and listen to.',cta:'Explore my world',bottom1:'GAME PROGRAMMING',bottom2:'CREATING · PLAYING · LISTENING',bottom3:'SCROLL ↓',avatarAlt:'Portrait of Muhammadali'},
      about:{eyebrow:'PROFILE / 02',title:'About Me',code:'MM / PROFILE',text:'I\'m Muhammadali — a game programmer, gamer and music lover. I enjoy creating things with code, exploring virtual worlds and finding music that becomes part of my memories.',noteLabel:'ABOUT / NOTE',note:'This is my personal space — a small archive of the things I create, play and listen to.',card1:{label:'CREATION / CODE',title:'Game Programming',text:'I currently build Telegram bots and web apps while moving toward game development.'},card2:{label:'EXPLORATION / PLAY',title:'Games',text:'I love discovering new worlds, stories, characters and the memories they leave behind.'},card3:{label:'ATMOSPHERE / SOUND',title:'Music',text:'Some songs become more than music — they become part of a particular moment.'}},
      interests:{eyebrow:'CORE / 03',title:'Interests',code:'THREE DIRECTIONS',item1:{label:'CREATION / CODE',title:'Game Programming',text:'Turning ideas into something that works, responds and feels alive.',code:'CODE'},item2:{label:'EXPLORATION / PLAY',title:'Games',text:'Virtual worlds filled with stories, characters, atmosphere and memories waiting to be discovered.',code:'PLAY'},item3:{label:'ATMOSPHERE / SOUND',title:'Music',text:'Music can change the mood of a scene, a day or an entire memory.',code:'SOUND'},tags:{telegram:'TELEGRAM BOTS',web:'WEB APPS',gamedev:'GAME DEV / NEXT',worlds:'WORLDS',stories:'STORIES',characters:'CHARACTERS',listening:'LISTENING',memories:'MEMORIES',favorites:'FAVORITES'}},
      games:{eyebrow:'PLAY / 07',title:'Favorite Games',code:'GAMES / 07'}, characters:{eyebrow:'RESONATORS / 04',title:'Favorite Characters',code:'FAVORITES / 04'},
      anime:{eyebrow:'WATCHLIST / 04',title:'Favorite Anime & Donghua',code:'04 TITLES',animeLabel:'01 / ANIME',animeTitle:'Anime',donghuaLabel:'02 / DONGHUA',donghuaTitle:'Donghua',titles2:'02 TITLES',donghuaLabel2:'02 / DONGHUA',donghuaTitle2:'Donghua',item1Label:'01 / ANIME',item2Label:'02 / ANIME',item3Label:'03 / DONGHUA',item4Label:'04 / DONGHUA',growth:'This space will grow as I build and publish new things.'},
      music:{eyebrow:'LISTENING / 05',title:'Favorite Music',code:'05 TRACKS',nowPlaying:'NOW PLAYING',previous:'Previous track',play:'Play',next:'Next track',progress:'Track progress'},
      programming:{eyebrow:'BUILD / LEARN / CREATE',title:'Programming',code:'ACTIVE / 03',directionLabel:'MY CURRENT DIRECTION',directionTitle:'Turning ideas into something real.',directionText:'Game Programming is my main interest. For now, I am also building Telegram bots and web applications.',card1:{label:'CORE INTEREST',title:'Game Programming',text:'Exploring game development, systems, mechanics and the process of turning ideas into playable experiences.',tag:'GAME DEV'},card2:{label:'CURRENTLY WORKING WITH',title:'Telegram Bots',text:'Creating useful and interactive Telegram bots while learning and experimenting with different ideas.',tag:'TELEGRAM'},card3:{label:'CURRENTLY WORKING WITH',title:'Web Applications',text:'Building web experiences and experimenting with frontend ideas, interfaces and functionality.',tag:'WEB'},card4:{label:'COMING LATER',title:'Projects',text:'GitHub projects will appear here as I build things worth sharing.',tag:'SOON'}},
      projects:{eyebrow:'WORK / 09',title:'Projects',code:'BUILDING / NEXT',archive:'PROJECT ARCHIVE / 001',coming:'More projects are coming.',text:'This space will grow as I build and publish new things.'},
      platforms:{eyebrow:'ELSEWHERE ON THE INTERNET',title:'Platforms',code:'FIND ME / 15',introTitle:'Different platforms.<br><span>One identity.</span>',introText:'15 places, one digital identity.',discord:'Community / Invite',profile:'Profile'},
      contact:{eyebrow:'11 / CONTACT',title:'Let\'s connect.',text:'Have an idea, project, or just want to talk about games, music or programming?',email:'EMAIL',telegram:'TELEGRAM',github:'GITHUB'},
      account:{eyebrow:'WUTHERING WAVES / ACCOUNT',title:'My Resonator Profile',code:'PLAYER / 605549481',playerName:'PLAYER NAME',unionLevel:'UNION LEVEL',server:'SERVER',favorite:'MAIN / FAVORITE RESONATORS'}, footer:{tagline:'Game Programmer · Gamer · Music Lover',backTop:'BACK TO TOP ↑'},
      page:{title:'Muhammadali — Personal Space',description:'Muhammadali — Game Programmer · Gamer · Music Lover. Games, music, programming and things I love.'}
    },
    ru: {
      loader:{loading:'MUHAMMADALI / ЗАГРУЗКА'}, ui:{menu:'Открыть меню',backTop:'Наверх'},
      nav:{home:'Главная',about:'Обо мне',interests:'Интересы',games:'Игры',characters:'Персонажи',music:'Музыка',programming:'Программирование',platforms:'Платформы',contact:'Контакты'},
      hero:{home:'01 / ГЛАВНАЯ',languages:'UZ · EN · RU · JA · ZH',eyebrow:'ЛИЧНОЕ ПРОСТРАНСТВО // 01',tagline:'Разработчик игр · Геймер · Любитель музыки',intro:'Добро пожаловать в мой маленький уголок интернета — место для того, что я создаю, играю и слушаю.',cta:'Исследовать мой мир',bottom1:'РАЗРАБОТКА ИГР',bottom2:'СОЗДАЮ · ИГРАЮ · СЛУШАЮ',bottom3:'ПРОКРУТИТЬ ↓',avatarAlt:'Портрет Мухаммадали'},
      about:{eyebrow:'ПРОФИЛЬ / 02',title:'Обо мне',code:'MM / ПРОФИЛЬ',text:'Я Мухаммадали — разработчик игр, геймер и любитель музыки. Мне нравится создавать вещи с помощью кода, исследовать виртуальные миры и находить музыку, которая становится частью воспоминаний.',noteLabel:'О ПРОФИЛЕ / ЗАМЕТКА',note:'Это моё личное пространство — небольшой архив того, что я создаю, играю и слушаю.',card1:{label:'СОЗДАНИЕ / КОД',title:'Разработка игр',text:'Сейчас я создаю Telegram-ботов и веб-приложения, постепенно двигаясь к разработке игр.'},card2:{label:'ИССЛЕДОВАНИЕ / ИГРЫ',title:'Игры',text:'Мне нравится открывать новые миры, истории, персонажей и воспоминания, которые они оставляют.'},card3:{label:'АТМОСФЕРА / ЗВУК',title:'Музыка',text:'Некоторые песни становятся чем-то большим — они становятся частью определённого момента.'}},
      interests:{eyebrow:'ОСНОВА / 03',title:'Интересы',code:'ТРИ НАПРАВЛЕНИЯ',item1:{label:'СОЗДАНИЕ / КОД',title:'Разработка игр',text:'Превращать идеи во что-то работающее, отзывчивое и живое.',code:'КОД'},item2:{label:'ИССЛЕДОВАНИЕ / ИГРЫ',title:'Игры',text:'Виртуальные миры, наполненные историями, персонажами, атмосферой и воспоминаниями.',code:'ИГРЫ'},item3:{label:'АТМОСФЕРА / ЗВУК',title:'Музыка',text:'Музыка может изменить настроение сцены, дня или целого воспоминания.',code:'ЗВУК'},tags:{telegram:'TELEGRAM-БОТЫ',web:'ВЕБ-ПРИЛОЖЕНИЯ',gamedev:'GAME DEV / ДАЛЬШЕ',worlds:'МИРЫ',stories:'ИСТОРИИ',characters:'ПЕРСОНАЖИ',listening:'ПРОСЛУШИВАНИЕ',memories:'ВОСПОМИНАНИЯ',favorites:'ИЗБРАННОЕ'}},
      games:{eyebrow:'ИГРЫ / 07',title:'Любимые игры',code:'ИГРЫ / 07'}, characters:{eyebrow:'РЕЗОНАТОРЫ / 04',title:'Любимые персонажи',code:'ИЗБРАННОЕ / 04'},
      anime:{eyebrow:'СПИСОК ПРОСМОТРА / 04',title:'Любимое аниме и дунхуа',code:'04 НАЗВАНИЯ',animeLabel:'01 / АНИМЕ',animeTitle:'Аниме',donghuaLabel:'02 / ДУНХУА',donghuaTitle:'Дунхуа',titles2:'02 НАЗВАНИЯ',donghuaLabel2:'02 / ДОНХУА',donghuaTitle2:'Дунхуа',item1Label:'01 / АНИМЕ',item2Label:'02 / АНИМЕ',item3Label:'03 / ДОНХУА',item4Label:'04 / ДОНХУА',growth:'Это пространство будет расти по мере того, как я создаю и публикую новые вещи.'},
      music:{eyebrow:'ПРОСЛУШИВАНИЕ / 05',title:'Любимая музыка',code:'05 ТРЕКОВ',nowPlaying:'СЕЙЧАС ИГРАЕТ',previous:'Предыдущий трек',play:'Воспроизвести',next:'Следующий трек',progress:'Прогресс трека'},
      programming:{eyebrow:'СОЗДАЮ / УЧУСЬ / РАЗВИВАЮСЬ',title:'Программирование',code:'АКТИВНО / 03',directionLabel:'МОЁ ТЕКУЩЕЕ НАПРАВЛЕНИЕ',directionTitle:'Превращаю идеи во что-то реальное.',directionText:'Разработка игр — мой главный интерес. Сейчас я также создаю Telegram-ботов и веб-приложения.',card1:{label:'ГЛАВНЫЙ ИНТЕРЕС',title:'Разработка игр',text:'Изучаю разработку игр, системы, механики и процесс превращения идей в игровой опыт.',tag:'РАЗРАБОТКА ИГР'},card2:{label:'СЕЙЧАС РАБОТАЮ С',title:'Telegram-боты',text:'Создаю полезных и интерактивных Telegram-ботов, изучая и проверяя разные идеи.',tag:'TELEGRAM'},card3:{label:'СЕЙЧАС РАБОТАЮ С',title:'Веб-приложения',text:'Создаю веб-проекты и экспериментирую с frontend-идеями, интерфейсами и функциональностью.',tag:'ВЕБ'},card4:{label:'ПОЗЖЕ',title:'Проекты',text:'Проекты GitHub будут появляться здесь по мере того, как я буду создавать вещи, которыми стоит поделиться.',tag:'СКОРО'}},
      projects:{eyebrow:'РАБОТА / 09',title:'Проекты',code:'СОЗДАЮ / ДАЛЬШЕ',archive:'АРХИВ ПРОЕКТОВ / 001',coming:'Новые проекты скоро появятся.',text:'Это пространство будет расти по мере того, как я создаю и публикую новые вещи.'},
      platforms:{eyebrow:'В ДРУГИХ МЕСТАХ ИНТЕРНЕТА',title:'Платформы',code:'НАЙТИ МЕНЯ / 15',introTitle:'Разные платформы.<br><span>Одна идентичность.</span>',introText:'15 мест, одна цифровая идентичность.',discord:'Сообщество / Приглашение',profile:'Профиль'},
      contact:{eyebrow:'11 / КОНТАКТЫ',title:'Давайте на связи.',text:'Есть идея, проект или просто хотите поговорить об играх, музыке или программировании?',email:'ПОЧТА',telegram:'TELEGRAM',github:'GITHUB'},
      account:{eyebrow:'WUTHERING WAVES / АККАУНТ',title:'Мой профиль резонаторов',code:'ИГРОК / 605549481',playerName:'ИМЯ ИГРОКА',unionLevel:'УРОВЕНЬ СОЮЗА',server:'СЕРВЕР',favorite:'ОСНОВНЫЕ / ЛЮБИМЫЕ РЕЗОНАТОРЫ'}, footer:{tagline:'Разработчик игр · Геймер · Любитель музыки',backTop:'НАВЕРХ ↑'},
      page:{title:'Muhammadali — Личное пространство',description:'Muhammadali — разработчик игр · геймер · любитель музыки. Игры, музыка, программирование и то, что я люблю.'}
    },
    ja: {
      loader:{loading:'MUHAMMADALI / 読み込み中'}, ui:{menu:'メニューを開く',backTop:'トップへ戻る'},
      nav:{home:'ホーム',about:'私について',interests:'興味',games:'ゲーム',characters:'キャラクター',music:'音楽',programming:'プログラミング',platforms:'プラットフォーム',contact:'連絡先'},
      hero:{home:'01 / ホーム',languages:'UZ · EN · RU · JA · ZH',eyebrow:'パーソナルスペース // 01',tagline:'ゲームプログラマー · ゲーマー · 音楽好き',intro:'インターネット上にある小さな自分の空間へようこそ。ここには、私が作るもの、遊ぶもの、聴くものがあります。',cta:'私の世界を見る',bottom1:'ゲームプログラミング',bottom2:'作る · 遊ぶ · 聴く',bottom3:'スクロール ↓',avatarAlt:'Muhammadaliのプロフィール写真'},
      about:{eyebrow:'プロフィール / 02',title:'私について',code:'MM / プロフィール',text:'私はMuhammadali。ゲームプログラマー、ゲーマー、そして音楽好きです。コードで何かを作り、仮想世界を探索し、思い出の一部になる音楽を見つけることが好きです。',noteLabel:'概要 / メモ',note:'ここは私が作り、遊び、聴いているものを集めた小さな個人アーカイブです。',card1:{label:'制作 / コード',title:'ゲームプログラミング',text:'現在はTelegramボットやWebアプリを作りながら、将来のゲーム開発へ進んでいます。'},card2:{label:'探索 / プレイ',title:'ゲーム',text:'新しい世界、物語、キャラクター、そしてそこに残る思い出を見つけるのが好きです。'},card3:{label:'雰囲気 / サウンド',title:'音楽',text:'曲の中には、ただの音楽ではなく、ある瞬間そのものになるものがあります。'}},
      interests:{eyebrow:'コア / 03',title:'興味',code:'3つの方向性',item1:{label:'制作 / コード',title:'ゲームプログラミング',text:'アイデアを、動き、反応し、感じられるものへ変えていくこと。',code:'コード'},item2:{label:'探索 / プレイ',title:'ゲーム',text:'物語、キャラクター、雰囲気、思い出に満ちた仮想世界を探索すること。',code:'プレイ'},item3:{label:'雰囲気 / サウンド',title:'音楽',text:'音楽は、場面や一日、あるいは記憶全体の雰囲気を変えることがあります。',code:'サウンド'},tags:{telegram:'TELEGRAM BOTS',web:'WEB APPS',gamedev:'GAME DEV / NEXT',worlds:'WORLDS',stories:'STORIES',characters:'CHARACTERS',listening:'LISTENING',memories:'MEMORIES',favorites:'FAVORITES'}},
      games:{eyebrow:'プレイ / 07',title:'好きなゲーム',code:'ゲーム / 07'}, characters:{eyebrow:'レゾネーター / 04',title:'好きなキャラクター',code:'お気に入り / 04'},
      anime:{eyebrow:'ウォッチリスト / 04',title:'好きなアニメ＆ドンファ',code:'04 タイトル',animeLabel:'01 / アニメ',animeTitle:'アニメ',donghuaLabel:'02 / ドンファ',donghuaTitle:'ドンファ',titles2:'02 タイトル',donghuaLabel2:'02 / ドンファ',donghuaTitle2:'ドンファ',item1Label:'01 / アニメ',item2Label:'02 / アニメ',item3Label:'03 / ドンファ',item4Label:'04 / ドンファ',growth:'新しいものを作って公開するたびに、この場所も成長していきます。'},
      music:{eyebrow:'リスニング / 05',title:'好きな音楽',code:'05 TRACKS',nowPlaying:'再生中',previous:'前の曲',play:'再生',next:'次の曲',progress:'曲の進行状況'},
      programming:{eyebrow:'BUILD / LEARN / CREATE',title:'プログラミング',code:'ACTIVE / 03',directionLabel:'現在の方向性',directionTitle:'アイデアを現実へ。',directionText:'ゲームプログラミングが私の主な関心です。現在はTelegramボットやWebアプリも作っています。',card1:{label:'主な関心',title:'ゲームプログラミング',text:'ゲーム開発、システム、メカニクス、そしてアイデアを遊べる体験へ変えるプロセスを探究しています。',tag:'ゲーム開発'},card2:{label:'現在取り組んでいること',title:'Telegramボット',text:'さまざまなアイデアを試しながら、便利でインタラクティブなTelegramボットを作っています。',tag:'TELEGRAM'},card3:{label:'現在取り組んでいること',title:'Webアプリ',text:'Web体験を作り、フロントエンドのアイデア、インターフェース、機能を試しています。',tag:'WEB'},card4:{label:'今後',title:'プロジェクト',text:'共有する価値のあるものを作るにつれて、GitHubのプロジェクトがここに増えていきます。',tag:'近日公開'}},
      projects:{eyebrow:'WORK / 09',title:'プロジェクト',code:'BUILDING / NEXT',archive:'PROJECT ARCHIVE / 001',coming:'さらにプロジェクトを公開予定です。',text:'新しいものを作って公開するたびに、この場所も成長していきます。'},
      platforms:{eyebrow:'インターネット上の別の場所',title:'プラットフォーム',code:'FIND ME / 15',introTitle:'さまざまな場所。<br><span>ひとつのアイデンティティ。</span>',introText:'15の場所、ひとつのデジタルアイデンティティ。',discord:'コミュニティ / 招待',profile:'プロフィール'},
      contact:{eyebrow:'11 / 連絡先',title:'つながりましょう。',text:'アイデアやプロジェクト、またはゲーム、音楽、プログラミングについて話したいですか？',email:'メール',telegram:'TELEGRAM',github:'GITHUB'},
      account:{eyebrow:'WUTHERING WAVES / アカウント',title:'レゾネータープロフィール',code:'PLAYER / 605549481',playerName:'プレイヤー名',unionLevel:'ユニオンレベル',server:'サーバー',favorite:'メイン / お気に入りレゾネーター'}, footer:{tagline:'ゲームプログラマー · ゲーマー · 音楽好き',backTop:'トップへ戻る ↑'},
      page:{title:'Muhammadali — パーソナルスペース',description:'Muhammadali — ゲームプログラマー · ゲーマー · 音楽好き。ゲーム、音楽、プログラミング、そして好きなもの。'}
    },
    zh: {
      loader:{loading:'MUHAMMADALI / 加载中'}, ui:{menu:'打开菜单',backTop:'返回顶部'},
      nav:{home:'首页',about:'关于我',interests:'兴趣',games:'游戏',characters:'角色',music:'音乐',programming:'编程',platforms:'平台',contact:'联系'},
      hero:{home:'01 / 首页',languages:'UZ · EN · RU · JA · ZH',eyebrow:'个人空间 // 01',tagline:'游戏程序员 · 游戏玩家 · 音乐爱好者',intro:'欢迎来到我在互联网中的小小空间——这里记录着我创造、游玩和聆听的东西。',cta:'探索我的世界',bottom1:'游戏编程',bottom2:'创造 · 游玩 · 聆听',bottom3:'向下滚动 ↓',avatarAlt:'Muhammadali的头像'},
      about:{eyebrow:'个人资料 / 02',title:'关于我',code:'MM / 个人资料',text:'我是Muhammadali——游戏程序员、游戏玩家和音乐爱好者。我喜欢用代码创造东西、探索虚拟世界，以及寻找那些会成为记忆一部分的音乐。',noteLabel:'关于 / 备注',note:'这里是我的个人空间，也是我创造、游玩和聆听之物的小型档案。',card1:{label:'创造 / 代码',title:'游戏编程',text:'目前我在制作Telegram机器人和Web应用，同时朝游戏开发方向发展。'},card2:{label:'探索 / 游戏',title:'游戏',text:'我喜欢探索新的世界、故事、角色，以及它们留下的回忆。'},card3:{label:'氛围 / 声音',title:'音乐',text:'有些歌曲不只是音乐——它们会成为某个特定瞬间的一部分。'}},
      interests:{eyebrow:'核心 / 03',title:'兴趣',code:'三个方向',item1:{label:'创造 / 代码',title:'游戏编程',text:'把想法变成真正能够运行、回应并产生感觉的东西。',code:'代码'},item2:{label:'探索 / 游戏',title:'游戏',text:'充满故事、角色、氛围和回忆的虚拟世界，是值得探索的地方。',code:'游戏'},item3:{label:'氛围 / 声音',title:'音乐',text:'音乐可以改变一个场景、一天，甚至一整段记忆的氛围。',code:'声音'},tags:{telegram:'TELEGRAM 机器人',web:'WEB 应用',gamedev:'GAME DEV / 未来',worlds:'世界',stories:'故事',characters:'角色',listening:'聆听',memories:'回忆',favorites:'收藏'}},
      games:{eyebrow:'游戏 / 07',title:'喜欢的游戏',code:'游戏 / 07'}, characters:{eyebrow:'共鸣者 / 04',title:'喜欢的角色',code:'收藏 / 04'},
      anime:{eyebrow:'观看列表 / 04',title:'喜欢的动画与动漫',code:'04 部作品',animeLabel:'01 / 动画',animeTitle:'动画',donghuaLabel:'02 / 国创动画',donghuaTitle:'国创动画',titles2:'02 部作品',donghuaLabel2:'02 / 国创动画',donghuaTitle2:'国创动画',item1Label:'01 / 动画',item2Label:'02 / 动画',item3Label:'03 / 国创动画',item4Label:'04 / 国创动画',growth:'随着我不断创作并发布新作品，这个空间也会不断成长。'},
      music:{eyebrow:'聆听 / 05',title:'喜欢的音乐',code:'05 首曲目',nowPlaying:'正在播放',previous:'上一首',play:'播放',next:'下一首',progress:'播放进度'},
      programming:{eyebrow:'构建 / 学习 / 创造',title:'编程',code:'进行中 / 03',directionLabel:'我目前的方向',directionTitle:'把想法变成现实。',directionText:'游戏编程是我最主要的兴趣。目前我也在制作Telegram机器人和Web应用。',card1:{label:'核心兴趣',title:'游戏编程',text:'探索游戏开发、系统、机制，以及把想法变成可玩的体验这一过程。',tag:'游戏开发'},card2:{label:'目前正在做',title:'Telegram 机器人',text:'在学习和尝试不同想法的同时，制作实用且互动的Telegram机器人。',tag:'TELEGRAM'},card3:{label:'目前正在做',title:'Web 应用',text:'构建Web体验，并尝试前端创意、界面和功能。',tag:'WEB'},card4:{label:'未来',title:'项目',text:'随着我持续制作值得分享的作品，GitHub项目会陆续出现在这里。',tag:'即将上线'}},
      projects:{eyebrow:'作品 / 09',title:'项目',code:'构建中 / 未来',archive:'项目档案 / 001',coming:'更多项目即将到来。',text:'随着我创建并发布新的作品，这个空间也会不断成长。'},
      platforms:{eyebrow:'互联网的其他角落',title:'平台',code:'找到我 / 15',introTitle:'不同的平台。<br><span>同一个身份。</span>',introText:'15个地方，一个数字身份。',discord:'社区 / 邀请',profile:'个人资料'},
      contact:{eyebrow:'11 / 联系',title:'与我联系。',text:'有想法、项目，或者只是想聊聊游戏、音乐和编程吗？',email:'邮箱',telegram:'TELEGRAM',github:'GITHUB'},
      account:{eyebrow:'WUTHERING WAVES / 账号',title:'我的共鸣者档案',code:'玩家 / 605549481',playerName:'玩家名称',unionLevel:'联觉等级',server:'服务器',favorite:'主力 / 喜爱共鸣者'}, footer:{tagline:'游戏程序员 · 游戏玩家 · 音乐爱好者',backTop:'返回顶部 ↑'},
      page:{title:'Muhammadali — 个人空间',description:'Muhammadali — 游戏程序员 · 游戏玩家 · 音乐爱好者。游戏、音乐、编程以及我喜欢的一切。'}
    }
  };
  const get = (obj, path) => path.split('.').reduce((v, k) => v?.[k], obj);
  const languageButton = $('#languageButton');
  const languageMenu = $('#languageMenu');
  const SUPPORTED = Object.keys(translations);
  const COUNTRY_LANGUAGE = {UZ:'uz',RU:'ru',BY:'ru',KZ:'ru',KG:'ru',TJ:'ru',JP:'ja',CN:'zh',TW:'zh',HK:'zh',MO:'zh'};

  const normalizeLanguage = value => {
    const code = String(value || '').trim().toLowerCase().replace('_','-').split('-')[0];
    return SUPPORTED.includes(code) ? code : null;
  };
  const detectByBrowser = () => {
    const list = navigator.languages?.length ? navigator.languages : [navigator.language];
    return list.map(normalizeLanguage).find(Boolean) || null;
  };

  async function detectByIP() {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 2500);
      const response = await fetch('https://ipapi.co/json/', {
        headers: {Accept:'application/json'}, signal: controller.signal, cache:'no-store'
      });
      clearTimeout(timer);
      if (!response.ok) return null;
      const data = await response.json();
      return COUNTRY_LANGUAGE[String(data.country_code || '').toUpperCase()] || 'en';
    } catch (_) {
      return 'en';
    }
  }

  function readSavedLanguage() {
    try { return normalizeLanguage(localStorage.getItem('site-language')); }
    catch (_) { return null; }
  }

  function saveLanguage(lang) {
    try { localStorage.setItem('site-language', lang); } catch (_) {}
  }

  function applyLanguage(lang, save = true) {
    lang = normalizeLanguage(lang) || 'en';
    document.documentElement.lang = lang;
    document.documentElement.dataset.language = lang;

    $$('[data-i18n]').forEach(el => {
      const value = get(translations[lang], el.dataset.i18n);
      if (value != null) el.innerHTML = value;
    });
    $$('[data-i18n-aria-label]').forEach(el => {
      const value = get(translations[lang], el.dataset.i18nAriaLabel);
      if (value != null) el.setAttribute('aria-label', value);
    });
    $$('[data-i18n-alt]').forEach(el => {
      const value = get(translations[lang], el.dataset.i18nAlt);
      if (value != null) el.setAttribute('alt', value);
    });

    const page = translations[lang].page;
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', page.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', page.description);
    if (languageButton) languageButton.innerHTML = `${lang.toUpperCase()} <span>⌄</span>`;
    if (save) saveLanguage(lang);
    languageMenu?.classList.remove('open');
    languageButton?.setAttribute('aria-expanded', 'false');
  }

  languageButton?.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const open = !languageMenu?.classList.contains('open');
    languageMenu?.classList.toggle('open', open);
    languageButton.setAttribute('aria-expanded', String(open));
  });

  // Event delegation makes all five language choices reliable even if the menu is re-rendered.
  languageMenu?.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang]');
    if (!btn || !languageMenu.contains(btn)) return;
    e.preventDefault();
    e.stopPropagation();
    applyLanguage(btn.dataset.lang, true);
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.language-wrap')) {
      languageMenu?.classList.remove('open');
      languageButton?.setAttribute('aria-expanded', 'false');
    }
  });

  // Manual choice always wins. On a first visit, browser locale wins when supported;
  // otherwise the visitor\'s IP country is checked. Unsupported countries fall back to English.
  const savedLang = readSavedLanguage();
  if (savedLang) {
    applyLanguage(savedLang, false);
  } else {
    const browserLang = detectByBrowser();
    if (browserLang) {
      applyLanguage(browserLang, false);
    } else {
      applyLanguage('en', false);
      detectByIP().then(ipLang => {
        if (!readSavedLanguage() && !detectByBrowser()) applyLanguage(ipLang || 'en', false);
      });
    }
  }


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

  // Music player + synced lyrics (LRC line sync / TTML word sync)
  const tracks = [
    {title:"Voyaging Star\'s Farewell",artist:'Wuthering Waves · Tarokiki',audio:"assets/music/Voyaging Stars Farewell - Wuthering Waves Jixwang Tarokiki Emi Evans.mp3",cover:"assets/music/Voyaging Star\'s Farewell.jpeg"},
    {title:'A Small Miracle',artist:'Wuthering Waves · Tarokiki',audio:'assets/music/A Small Miracle - Wuthering Waves.mp3',cover:'assets/music/A Small Miracle.jpeg'},
    {title:'Paper Plane',artist:'Wuthering Waves · Tarokiki',audio:'assets/music/Paper Plane - Wuthering Waves.mp3',cover:'assets/music/Paper Plane.jpg'},
    {title:'Unwavering Startorch',artist:'Wuthering Waves · Tarokiki',audio:'assets/music/Unwavering Startorch - Wuthering Waves.mp3',cover:'assets/music/Unwavering Startorch.jpg'},
    {title:'Brand New Sky',artist:'Wuthering Waves · Tarokiki',audio:'assets/music/Brand New Sky - Wuthering Waves.mp3',cover:'assets/music/Brand New Sky.jpg'}
  ];

  const audio = $('#audioPlayer');
  if (audio) {
    const cover = $('#nowCover'), title = $('#nowTitle'), artist = $('#nowArtist'), index = $('#nowIndex');
    const play = $('#playTrack'), progressBar = $('#progressBar'), current = $('#currentTime'), duration = $('#duration');
    const lyricsBox = $('#lyrics');
    const items = $$('.track-item');
    let currentIndex = 0;
    let lyricsData = null;
    let lyricsRequestId = 0;
    let lyricsCache = new Map();
    let lyricsRaf = 0;

    const fmt = s => Number.isFinite(s) ? `${String(Math.floor(s/60)).padStart(2,'0')}:${String(Math.floor(s%60)).padStart(2,'0')}` : '00:00';
    const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

    const parseTime = value => {
      if (!value) return null;
      const v = String(value).trim();
      if (/^\d+(?:\.\d+)?ms$/i.test(v)) return parseFloat(v) / 1000;
      if (/^\d+(?:\.\d+)?s$/i.test(v)) return parseFloat(v);
      if (/^\d+(?:\.\d+)?m$/i.test(v)) return parseFloat(v) * 60;
      if (/^\d+(?:\.\d+)?h$/i.test(v)) return parseFloat(v) * 3600;
      const parts = v.split(':').map(Number);
      if (parts.some(Number.isNaN)) return null;
      if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
      if (parts.length === 2) return parts[0] * 60 + parts[1];
      return Number.isFinite(parts[0]) ? parts[0] : null;
    };

    const parseLrc = text => {
      const lines = [];

      text.split(/\r?\n/).forEach(raw => {
        const matches = [...raw.matchAll(/\[(\d{1,3}):(\d{2})(?:[.:](\d{1,3}))?\]/g)];
        if (!matches.length) return;

        const timeOf = m => Number(m[1]) * 60 + Number(m[2]) + (m[3] ? Number(`0.${m[3]}`) : 0);
        const firstStart = timeOf(matches[0]);

        if (matches.length > 1) {
          const words = matches.map((m, i) => ({
            text: raw.slice(m.index + m[0].length, i + 1 < matches.length ? matches[i + 1].index : raw.length).trim(),
            start: timeOf(m),
            end: i + 1 < matches.length ? timeOf(matches[i + 1]) : Infinity
          })).filter(word => word.text);

          if (words.length) {
            lines.push({start:firstStart, end:Infinity, text:words.map(w => w.text).join(' '), words});
          }
        } else {
          const lyric = raw.replace(/\[[^\]]+\]/g, '').trim();
          if (lyric) lines.push({start:firstStart, end:Infinity, text:lyric, words:null});
        }
      });

      lines.sort((a,b) => a.start - b.start);
      lines.forEach((line, i) => { if (!line.words) line.end = lines[i + 1]?.start ?? Infinity; });

      return {type:lines.some(line => line.words) ? 'lrc-word' : 'lrc', lines};
    };

    const parseTtml = text => {
      const doc = new DOMParser().parseFromString(text, 'application/xml');
      if (doc.querySelector('parsererror')) return null;
      const timed = [...doc.getElementsByTagNameNS('http://www.w3.org/ns/ttml', 'p')];
      const lines = [];
      const getAttr = (el, name) => el.getAttribute(name) || el.getAttributeNS('http://www.w3.org/ns/ttml', name);

      const parentOffset = el => {
        let total = 0;
        let parent = el.parentElement;
        while (parent) {
          const begin = parseTime(getAttr(parent, 'begin'));
          if (begin != null) total += begin;
          parent = parent.parentElement;
        }
        return total;
      };

      timed.forEach(p => {
        const base = parentOffset(p);
        const begin = parseTime(getAttr(p, 'begin')) ?? 0;
        const start = base + begin;
        const rawEnd = parseTime(getAttr(p, 'end'));
        const rawDur = parseTime(getAttr(p, 'dur'));
        const end = rawEnd != null ? base + rawEnd : (rawDur != null ? start + rawDur : Infinity);
        const wordNodes = [...p.getElementsByTagNameNS('http://www.w3.org/ns/ttml', 'span')].filter(el => el.textContent.trim());
        const words = wordNodes.map(span => {
          const spanBase = parentOffset(span);
          const ws = spanBase + (parseTime(getAttr(span, 'begin')) ?? 0);
          const weRaw = parseTime(getAttr(span, 'end'));
          const wdRaw = parseTime(getAttr(span, 'dur'));
          const we = weRaw != null ? spanBase + weRaw : (wdRaw != null ? ws + wdRaw : null);
          return {text: span.textContent.trim(), start: ws, end: we ?? ws};
        });
        const textValue = p.textContent.replace(/\s+/g, ' ').trim();
        if (textValue) lines.push({start, end, text:textValue, words});
      });
      lines.sort((a,b) => a.start - b.start);
      return {type:'ttml', lines};
    };

    const lyricCandidates = track => {
      const audioBase = track.audio.split('/').pop().replace(/\.[^.]+$/, '');
      const titleBase = track.title;
      const bases = [...new Set([audioBase, titleBase])];
      // One lyrics file per track: .lrc may contain either normal LRC or full TTML XML.
      return bases.map(base => `assets/music/${base}.lrc`);
    };

    const renderEmptyLyrics = () => {
      if (lyricsBox) lyricsBox.innerHTML = '<span class="lyrics-empty">—</span>';
    };

    const renderCurrentLyric = time => {
      if (!lyricsBox || !lyricsData?.lines?.length) return;
      const lines = lyricsData.lines;
      let active = -1;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (time >= line.start && time < line.end) { active = i; break; }
      }

      if (active < 0) {
        if (!lyricsBox.querySelector('.lyrics-empty')) renderEmptyLyrics();
        return;
      }

      const line = lines[active];

      if (lyricsData.type === 'lrc') {
        const existing = lyricsBox.querySelector('.lrc-line');
        if (!existing || existing.dataset.index !== String(active)) {
          lyricsBox.innerHTML = `<span class="lyrics-line lrc-line" data-index="${active}">${escapeHtml(line.text)}</span>`;
        }
        return;
      }

      let el = lyricsBox.querySelector('.word-sync');
      if (!el || el.dataset.index !== String(active)) {
        el = document.createElement('span');
        el.className = 'lyrics-line word-sync';
        el.dataset.index = String(active);
        el.innerHTML = line.words.map((word, i) => `<span class="lyrics-word" data-word="${i}">${escapeHtml(word.text)}</span>`).join(' ');
        lyricsBox.replaceChildren(el);
      }

      [...el.querySelectorAll('.lyrics-word')].forEach((wordEl, i) => {
        const word = line.words[i];
        if (!word) return;
        const span = Math.max(0.001, word.end - word.start);
        const fill = Math.max(0, Math.min(100, (time - word.start) / span * 100));
        wordEl.style.setProperty('--fill', fill.toFixed(2));
      });
    };

    const animateLyrics = () => {
      renderCurrentLyric(audio.currentTime || 0);
      if (!audio.paused) lyricsRaf = requestAnimationFrame(animateLyrics);
    };

    const loadLyrics = async track => {
      const requestId = ++lyricsRequestId;
      lyricsData = null;
      renderEmptyLyrics();
      const candidates = lyricCandidates(track);
      if (lyricsCache.has(track.audio)) { lyricsData = lyricsCache.get(track.audio); renderCurrentLyric(audio.currentTime || 0); return; }
      for (const url of candidates) {
        try {
          const response = await fetch(url, {cache:'no-cache'});
          if (!response.ok) continue;
          const text = await response.text();
          const data = parseLrc(text);
          if (data?.lines?.length) {
            lyricsCache.set(track.audio, data);
            if (requestId !== lyricsRequestId) return;
            lyricsData = data;
            renderCurrentLyric(audio.currentTime || 0);
            return;
          }
        } catch (_) {}
      }
    };

    const updateButtons = () => {
      play.textContent = audio.paused ? '▶' : 'Ⅱ';
      items.forEach((item,i) => item.querySelector('.track-play').textContent = i === currentIndex && !audio.paused ? 'Ⅱ' : '▶');
    };

    const load = (n, autoplay = false) => {
      currentIndex = (n + tracks.length) % tracks.length;
      const track = tracks[currentIndex];
      audio.src = track.audio;
      cover.src = track.cover;
      title.textContent = track.title;
      artist.textContent = track.artist;
      index.textContent = String(currentIndex+1).padStart(2,'0');
      progressBar.value = 0;
      current.textContent = '00:00';
      duration.textContent = '00:00';
      items.forEach((x,i) => x.classList.toggle('active',i===currentIndex));
      updateButtons();
      loadLyrics(track);
      if (autoplay) audio.play().catch(()=>{});
    };

    play.addEventListener('click', () => audio.paused ? audio.play().catch(()=>{}) : audio.pause());
    $('#prevTrack')?.addEventListener('click', () => load(currentIndex-1,true));
    $('#nextTrack')?.addEventListener('click', () => load(currentIndex+1,true));
    items.forEach(item => item.addEventListener('click', () => load(Number(item.dataset.index), true)));
    audio.addEventListener('loadedmetadata', () => duration.textContent = fmt(audio.duration));
    audio.addEventListener('timeupdate', () => { current.textContent=fmt(audio.currentTime); progressBar.value=audio.duration ? audio.currentTime/audio.duration*100 : 0; renderCurrentLyric(audio.currentTime); });
    audio.addEventListener('play', () => { updateButtons(); cancelAnimationFrame(lyricsRaf); lyricsRaf=requestAnimationFrame(animateLyrics); });
    audio.addEventListener('pause', () => { updateButtons(); cancelAnimationFrame(lyricsRaf); renderCurrentLyric(audio.currentTime); });
    audio.addEventListener('ended', () => load(currentIndex+1,true));
    progressBar.addEventListener('input', () => { if(audio.duration) { audio.currentTime = progressBar.value/100*audio.duration; renderCurrentLyric(audio.currentTime); } });
    load(0);
  }

  $('#year').textContent = new Date().getFullYear();
})();
