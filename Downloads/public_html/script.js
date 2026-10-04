// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Collections grid auto-scroll
document.addEventListener('DOMContentLoaded', function () {
    const collectionsGrid = document.querySelector('.collections-grid');
    let scrollAmount = 0;

    function autoScrollCollections() {
        if (collectionsGrid && !isMobileDevice()) {
            const maxScroll = collectionsGrid.scrollWidth - collectionsGrid.clientWidth;

            // Scroll by 300px or reset to the start if at the end
            if (scrollAmount >= maxScroll) {
                scrollAmount = 0;
            } else {
                scrollAmount += 300;
            }

            collectionsGrid.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    }

    // Auto-scroll every 5 seconds for desktop only
    if (!isMobileDevice() && collectionsGrid) {
        setInterval(autoScrollCollections, 5000);
    }
});

// Instagram reel scroll functionality
document.addEventListener('DOMContentLoaded', function () {
    const instagramReel = document.querySelector('.instagram-reel');
    const instagramPrevBtn = document.querySelector('.instagram-prev-btn');
    const instagramNextBtn = document.querySelector('.instagram-next-btn');
    const scrollStep = 300;

    if (!instagramReel) return;

    // Auto scroll logic
    function autoScrollInstagramReel() {
        if (instagramReel) {
            const maxScroll = instagramReel.scrollWidth - instagramReel.clientWidth;
            let currentScroll = instagramReel.scrollLeft;

            if (currentScroll + scrollStep >= maxScroll) {
                instagramReel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                instagramReel.scrollBy({ left: scrollStep, behavior: 'smooth' });
            }
        }
    }

    // Manual scroll buttons
    instagramNextBtn?.addEventListener('click', () => {
        instagramReel.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });

    instagramPrevBtn?.addEventListener('click', () => {
        instagramReel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });

    // Auto-scroll every 5 seconds
    setInterval(autoScrollInstagramReel, 5000);
});

// Workshop slider functionality
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.slider-btn.next');
    const prevBtn = document.querySelector('.slider-btn.prev');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    if (nextBtn && prevBtn && slides.length > 0) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        // Auto-slide every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 5000);
    }
});

// Reviews carousel
window.onload = function () {
    const reviewsContainer = document.querySelector('.reviews-container');
    const reviewsWrapper = document.querySelector('.reviews-wrapper');
    const scrollStep = 320;

    if (!reviewsContainer || !reviewsWrapper) {
        console.warn('Reviews container or wrapper not found:', { reviewsContainer, reviewsWrapper });
        return;
    }

    // Button click scroll
    reviewsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('prev-btn')) {
            reviewsWrapper.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        } else if (event.target.classList.contains('next-btn')) {
            reviewsWrapper.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
    });
    
    // Auto scroll for reviews
    setInterval(() => {
        const maxScroll = reviewsWrapper.scrollWidth - reviewsWrapper.clientWidth;
        let currentScroll = reviewsWrapper.scrollLeft;
        
        if (currentScroll + scrollStep >= maxScroll) {
            reviewsWrapper.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            reviewsWrapper.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
    }, 5000);
};

// Video handling
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('heroVideo');
    const muteToggle = document.getElementById('muteToggle');
    
    if (!video) return;
    
    // Start with video muted (to satisfy autoplay requirements)
    video.muted = true;
    
    // Play video when it's ready
    video.addEventListener('loadedmetadata', function() {
        // Use play() as a promise to handle autoplay restrictions
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Video is playing successfully
                console.log('Video playing successfully');
            })
            .catch(error => {
                // Auto-play was prevented - add a play button or other UI
                console.log('Autoplay was prevented:', error);
            });
        }
    });
    
    // Toggle mute on button click
    if (muteToggle) {
        muteToggle.addEventListener('click', function() {
            video.muted = !video.muted;
            muteToggle.textContent = video.muted ? '🔇' : '🔊';
        });
    }
    
    // Set video to loop
    video.loop = true;
});

// Typewriter effect
document.addEventListener('DOMContentLoaded', function () {
    const typewriterElement = document.querySelector('.typewriter');
    if (!typewriterElement) return;
    
    const text = "Join Our Instagram Family Over 5K";
    let index = 0;

    function typeWriterEffect() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriterEffect, 100);
        } else {
            setTimeout(() => {
                typewriterElement.textContent = "";
                index = 0;
                typeWriterEffect();
            }, 2000);
        }
    }

    typeWriterEffect();
});
const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const offset = -(currentIndex - 1) * cardWidth; // center active card
    track.style.transform = `translateX(${offset}px)`;

    cards.forEach((card, i) => {
      card.classList.toggle('active', i === currentIndex);
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  }

  nextBtn.addEventListener('click', nextCard);
  prevBtn.addEventListener('click', prevCard);

  // Auto scroll every 4s
  setInterval(nextCard, 4000);

  // Init first
  updateCarousel();