//Start of carousel script

let currentSlide = 1;
let isTransitioning = false;

function moveSlide(direction) {
    if (isTransitioning) return;

    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateCarousel(true);

    if (currentSlide === 0) {
        setTimeout(() => {
            currentSlide = slides.length - 2; // jump to real last slide
            updateCarousel(false); // false = no animation on the jump
        }, 400); // matches your 0.4s CSS transition
    }

    if (currentSlide === slides.length - 1) {
        setTimeout(() => {
            currentSlide = 1; // jump to real first slide
            updateCarousel(false);
        }, 400);
    }
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