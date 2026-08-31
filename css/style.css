/* =========================================
   1. ASOSIY O'ZGARUVCHILAR VA RESET
========================================= */
@font-face {
    font-family: 'WutheringWaves';
    src: url('../assets/fonts/wuthering-waves.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

:root {
    --bg-main: #0d0e15;
    --bg-card: rgba(20, 22, 33, 0.7);
    --text-main: #e2e8f0;
    --text-muted: #94a3b8;
    --primary: #7c5cff;
    --primary-glow: rgba(124, 92, 255, 0.4);
    --border: rgba(124, 92, 255, 0.2);
    --hover-bg: rgba(124, 92, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-main);
    color: var(--text-main);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4, .logo {
    font-family: 'WutheringWaves', sans-serif;
    letter-spacing: 1px;
}

/* =========================================
   2. NAVIGATSIYA (HEADER)
========================================= */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(13, 14, 21, 0.9);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    border-bottom: 1px solid var(--border);
    z-index: 1000;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.logo-accent {
    color: var(--primary);
    text-shadow: 0 0 10px var(--primary-glow);
}

.nav-links {
    display: flex;
    gap: 15px;
}

.nav-btn {
    background: transparent;
    border: none;
    color: var(--text-muted);
    font-size: 1rem;
    cursor: pointer;
    padding: 8px 15px;
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav-btn:hover {
    color: var(--primary);
    background: var(--hover-bg);
}

.nav-btn.active {
    color: #fff;
    background: var(--primary);
    box-shadow: 0 0 15px var(--primary-glow);
}

/* =========================================
   3. SPA (YAGONA SAHIFA) MANTIQI
========================================= */
.main-container {
    max-width: 1000px;
    margin: 100px auto 40px auto;
    padding: 0 20px;
}

.page-section {
    display: none;
    animation: fadeIn 0.4s ease-in-out forwards;
}

.page-section.active-section {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Umumiy Kartochka Stili */
.content-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.section-title {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.8rem;
    border-bottom: 1px solid var(--border);
    padding-bottom: 10px;
}

.subsection-title {
    color: #fff;
    margin-bottom: 15px;
    font-size: 1.4rem;
}

/* =========================================
   4. BOSH SAHIFA (HERO)
========================================= */
.hero-card {
    text-align: center;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 40px 20px;
    position: relative;
    overflow: hidden;
}

.avatar-wrapper {
    width: 150px;
    height: 150px;
    margin: 0 auto 20px auto;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(135deg, var(--primary), #3b82f6);
    box-shadow: 0 0 20px var(--primary-glow);
}

.avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--bg-main);
}

.hero-title {
    font-size: 2.2rem;
    color: #fff;
    margin-bottom: 5px;
}

.hero-subtitle {
    color: var(--primary);
    font-size: 1.1rem;
    margin-bottom: 20px;
}

.tag-group {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.tag {
    background: var(--hover-bg);
    color: var(--text-main);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    border: 1px solid var(--border);
}

.hero-bio {
    max-width: 600px;
    margin: 0 auto;
    color: var(--text-muted);
}

/* =========================================
   5. HAQIMDA VA LOYIHALAR GRIDLARI
========================================= */
.info-grid, .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.info-box, .project-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border);
    padding: 20px;
    border-radius: 12px;
    transition: transform 0.3s ease;
}

.info-box:hover, .project-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
}

.info-box h3, .project-card h3 {
    color: #fff;
    margin-bottom: 10px;
}

.info-box p, .project-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

.project-icon {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 15px;
}

.project-tag {
    display: inline-block;
    margin-top: 15px;
    font-size: 0.8rem;
    color: var(--primary);
    background: var(--hover-bg);
    padding: 3px 10px;
    border-radius: 5px;
}

/* =========================================
   6. SEVIMLILAR (PLAYER, CHARACTERS, GAMES)
========================================= */
/* Player */
.player-card {
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--border);
}

.cover-wrapper {
    width: 200px;
    height: 200px;
    margin: 0 auto 20px auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 20px var(--primary-glow);
}

.cover-art {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.player-card.playing .cover-art {
    transform: scale(1.05);
}

.track-info h3 { color: #fff; font-size: 1.2rem; }
.track-info p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px; }

.player-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
}

.control-btn {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s;
}

.control-btn:hover { color: var(--primary); }

.play-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px var(--primary-glow);
}

.play-btn:hover {
    background: #6a4deb;
    color: #fff;
}

.track-list {
    list-style: none;
    text-align: left;
    margin-top: 20px;
}

.track-item {
    padding: 10px 15px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: background 0.2s;
    border-radius: 8px;
}

.track-item:hover { background: var(--hover-bg); }
.track-item.active { background: var(--primary-glow); border-left: 4px solid var(--primary); color: #fff; }
.track-item .badge { font-size: 0.8rem; color: var(--text-muted); }

/* Personajlar va O'yinlar Gridi */
.characters-grid, .games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 15px;
}

.character-card, .game-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.character-card:hover, .game-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
}

.character-card img, .game-img {
    width: 100%;
    height: 140px;
    object-fit: cover;
}

.char-info, .game-info {
    padding: 12px;
    text-align: center;
}

.char-info h3, .game-info h4 {
    color: #fff;
    font-size: 1rem;
    margin-bottom: 4px;
}

.char-info p {
    color: var(--text-muted);
    font-size: 0.8rem;
}

.game-badge {
    font-size: 0.75rem;
    background: rgba(124, 92, 255, 0.15);
    color: #a78bfa;
    padding: 2px 8px;
    border-radius: 6px;
    border: 1px solid rgba(124, 92, 255, 0.3);
}

/* =========================================
   7. ALOQA (CONTACT)
========================================= */
.contact-links {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    margin-top: 20px;
}

.social-btn {
    text-decoration: none;
    padding: 12px 25px;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: transform 0.2s, box-shadow 0.2s;
}

.social-btn:hover {
    transform: translateY(-3px);
}

.telegram { background: #229ED9; }
.telegram:hover { box-shadow: 0 5px 15px rgba(34, 158, 217, 0.4); }

.github { background: #333; }
.github:hover { box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2); }

.youtube { background: #FF0000; }
.youtube:hover { box-shadow: 0 5px 15px rgba(255, 0, 0, 0.4); }

/* =========================================
   8. RESPONSIVLIK (MEDIA QUERIES)
========================================= */
@media screen and (max-width: 768px) {
    .navbar {
        flex-direction: column;
        padding: 15px;
    }
    
    .nav-links {
        margin-top: 15px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .nav-btn span {
        display: none; /* Telefonda faqat ikonkalar qoladi */
    }

    .nav-btn {
        padding: 10px;
        font-size: 1.2rem;
    }

    .main-container {
        margin-top: 120px; /* Navbar kattalashgani uchun */
    }

    .characters-grid, .games-grid {
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    }

    .character-card img, .game-img {
        height: 100px;
    }
}
