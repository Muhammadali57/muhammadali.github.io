// js/main.js

function switchTab(sectionId, event) {
    // 1. Barcha sektsiyalardan 'active-section' klasini olib tashlaymiz (yashiramiz)
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.remove('active-section'));

    // 2. Tanlangan sektsiyaga 'active-section' klasini qo'shamiz (ko'rsatamiz)
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }

    // 3. Menyudagi tugmalarning 'active' holatini yangilaymiz
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));
    
    // Agar event berilgan bo'lsa, bosilgan tugmani faollashtiramiz
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}
