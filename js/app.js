const aboutMeBtn = document.getElementById('aboutMe');
const overlay = document.querySelector('.overlay');
const aboutMeDialog = document.getElementById('aboutMeDialog');
const aboutMeCloseBtn = document.getElementById('aboutMeCloseBtn');

const mySkillsBtn = document.getElementById('mySkills');
const mySkillsDialog = document.getElementById('mySkillsDialog');
const mySkillCloseBtn = document.getElementById('mySkillCloseBtn');

const contactBtn = document.getElementById('howToContact');
const contactDialog = document.getElementById('contact');
const contactCloseBtn = document.getElementById('contactCloseBtn');

const myProjectBtn = document.getElementById('myProject');
const backToHomeBtn = document.getElementById('backToHome');

if (aboutMeBtn && aboutMeDialog && aboutMeCloseBtn) {
    aboutMeBtn.addEventListener('click', () => {
        aboutMeDialog.style.display = 'block';
        overlay.style.display = 'flex';
    });

    aboutMeCloseBtn.addEventListener('click', () => {
        aboutMeDialog.style.display = 'none';
        overlay.style.display = 'none';
    });
}

if (mySkillsBtn && mySkillsDialog && mySkillCloseBtn) {
    mySkillsBtn.addEventListener('click', () => {
        mySkillsDialog.style.display = 'flex';
        overlay.style.display = 'flex';
    });

    mySkillCloseBtn.addEventListener('click', () => {
        mySkillsDialog.style.display = 'none';
        overlay.style.display = 'none';
    });
}

if (contactBtn && contactDialog && contactCloseBtn) {
    contactBtn.addEventListener('click', () => {
        contactDialog.style.display = 'flex';
        overlay.style.display = 'flex';
    });

    contactCloseBtn.addEventListener('click', () => {
        contactDialog.style.display = 'none';
        overlay.style.display = 'none';
    });
}

if (myProjectBtn) {
    myProjectBtn.addEventListener('click', () => {
        window.location.href = "projects.html";
    });
}

if (backToHomeBtn) {
    backToHomeBtn.addEventListener('click', () => {
        window.location.href = "index.html";
    });
}
