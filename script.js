// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2, .fade-in-delay-3, .slide-up, .fade-in-up, .fade-in-up-delay, .fade-in-up-delay-2, .fade-in-up-delay-3');

animatedElements.forEach(element => {
    observer.observe(element);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scroll for navigation links (for older browsers)
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

// Certificate Modal Functionality
const modal = document.getElementById('certificateModal');
const modalImage = document.getElementById('certificateImage');
const closeModal = document.querySelector('.close-modal');
const certificateBtns = document.querySelectorAll('.view-certificate-btn');

// Open modal when certificate button is clicked
certificateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const certificatePath = btn.getAttribute('data-certificate');
        modalImage.src = certificatePath;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal when X is clicked
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Gallery Modal Functionality
const galleryModal = document.getElementById('galleryModal');
const galleryModalImage = document.getElementById('galleryImage');
const closeGalleryModal = document.querySelector('.close-gallery-modal');
const galleryItems = document.querySelectorAll('.gallery-item');

// Open gallery modal when image is clicked
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.querySelector('img').src;
        galleryModalImage.src = imageSrc;
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close gallery modal when X is clicked
closeGalleryModal.addEventListener('click', () => {
    galleryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close gallery modal when clicking outside the image
galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close gallery modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && galleryModal.classList.contains('active')) {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
