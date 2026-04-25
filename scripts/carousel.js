// Carousel Script
let currentSlide = 0;
let slides = [];

function initCarousel() {
  slides = document.querySelectorAll('.carousel-slide');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  // Criar dots
  slides.forEach((slide, index) => {
    const dot = document.createElement('button');
    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('data-index', index);
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });
  
  // Auto-advance slides a cada 5 segundos
  if (slides.length > 0) {
    setInterval(() => {
      moveCarousel(1);
    }, 5000);
  }
}

function moveCarousel(direction) {
  currentSlide += direction;
  
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function updateCarousel() {
  // Atualizar slides
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
  
  // Atualizar dots
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlide) {
      dot.classList.add('active');
    }
  });
}

// Inicializar quando documento está pronto
document.addEventListener('DOMContentLoaded', initCarousel);
