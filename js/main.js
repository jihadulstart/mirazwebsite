// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// DOM Elements
const preloader = document.querySelector('.preloader');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.querySelector('.scroll-top');

// Preloader
window.addEventListener('load', () => {
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', body.dataset.theme);
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.dataset.theme = savedTheme;
}

// Mobile Navigation
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('active');
  } else {
    scrollTopBtn.classList.remove('active');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Particles.js Configuration
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#6c63ff'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#6c63ff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// Typing Effect
const typingText = document.querySelector('.typing-text');
const text = 'Miraj Initializing';
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect when page loads
window.addEventListener('load', typeWriter);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add hover effect to profile image
const profileImage = document.querySelector('.profile-image');
profileImage.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = profileImage.getBoundingClientRect();
  const x = (e.clientX - left) / width;
  const y = (e.clientY - top) / height;

  profileImage.style.transform = `
        perspective(1000px)
        rotateY(${(x - 0.5) * 10}deg)
        rotateX(${(y - 0.5) * -10}deg)
    `;
});

profileImage.addEventListener('mouseleave', () => {
  profileImage.style.transform = 'none';
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Add animation to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.5
});

timelineItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'all 0.5s ease';
  observer.observe(item);
}); 