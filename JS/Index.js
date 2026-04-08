window.addEventListener('DOMContentLoaded', () => {
    updateCarousel(false);
});

const darkToggle = document.getElementById('darkToggle');
const moonIcon   = document.getElementById('moonIcon');
const sunIcon    = document.getElementById('sunIcon');

let currentSlide = 1;
let isTransitioning = false;

// Restore saved preference on load
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display  = 'block';
}
 
darkToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    moonIcon.style.display = isDark ? 'none'  : 'block';
    sunIcon.style.display  = isDark ? 'block' : 'none';
    localStorage.setItem('darkMode', isDark);
});
 
 
/* ─── HAMBURGER MENU ─── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
 
hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});
 
// Close mobile nav when a link is tapped
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
});
 
 
/* ─── SCROLL TO TOP ─── */
const scrollTopBtn = document.getElementById('scrollTop');
 
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});
 
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//Start of carousel script



function moveSlide(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateCarousel(true);

}

function goToSlide(index) {
currentSlide = index + 1;
updateCarousel(true);
}


function updateCarousel(animate) {
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');

    track.style.transition = animate ? 'transform 0.4s ease' : 'none';
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide - 1));
}

document.querySelector('.carousel-track').addEventListener('transitionend', () => {
    const slides = document.querySelectorAll('.slide');

    if (currentSlide === 0) {
        // jumped to clone of last - silently snap to real last slide
        currentSlide = slides.length - 2;
        updateCarousel(false);
    }

    if (currentSlide === slides.length - 1) {
        // jumped to clone of first - silently snap to real first slide
        currentSlide = 1;
        updateCarousel(false);
    }

    isTransitioning = false; // allow input again
});


// Auto-advance every 5 seconds
setInterval(() => moveSlide(1), 5000);

//End of carousel script