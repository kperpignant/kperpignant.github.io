//index.js

const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu');

const resumeButton = document.getElementById("resumeButton");

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
    //bug where the buttons don't come after reactivity
});

resumeButton.addEventListener('click', () => {
    const urlToOpen = '../karlee.perpignant_resume.pdf';
    console.log('open link');
    window.open(urlToOpen, '_blank', 'noopener, noreferrer');
});