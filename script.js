const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Botones
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Contador
let counter = 0;
const size = images[0].clientWidth;

// Inicializar carrusel
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Event Listeners para botones
nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

// Reiniciar al llegar al final/inicio
carouselSlide.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = images.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if (images[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = images.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});