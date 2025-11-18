// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Open external link
function openLink(url) {
    if (url !== '#') {
        window.open(url, '_blank');
    }
}

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Add animation delays to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add animation delays to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
    
    // Add animation delays to contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.section-header, .project-card, .skill-card, .contact-card, .about-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    const track = document.querySelector('.skills-track');
const leftBtn = document.querySelector('.carousel-arrow.left');
const rightBtn = document.querySelector('.carousel-arrow.right');

let currentPosition = 0;
const cardWidth = document.querySelector('.skill-card').offsetWidth + 16; // includes gap

rightBtn.addEventListener('click', () => {
  if(currentPosition < track.scrollWidth - track.parentElement.offsetWidth) {
    currentPosition += cardWidth;
  } else {
    currentPosition = 0; // loop back
  }
  track.style.transform = `translateX(-${currentPosition}px)`;
});

leftBtn.addEventListener('click', () => {
  if(currentPosition > 0) {
    currentPosition -= cardWidth;
  } else {
    currentPosition = track.scrollWidth - track.parentElement.offsetWidth; // loop to end
  }
  track.style.transform = `translateX(-${currentPosition}px)`;
});


document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to the button and the navigation menu
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    // Check if both elements were found
    if (menuToggle && nav) {
        // 2. Add the click event listener to the hamburger button
        menuToggle.addEventListener('click', () => {
            // 3. Toggle the 'open' class on the <nav> element
            nav.classList.toggle('open');
        });

        // 4. OPTIONAL: Close the menu if a link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('open')) {
                    nav.classList.remove('open');
                }
            });
        });
    } else {
        console.error("Error: Could not find .menu-toggle or nav elements.");
    }
});


function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Avaneesh J CV.pdf';  // Just your filename
    link.download = 'Avaneesh_CV.pdf';
    link.click();
}



});