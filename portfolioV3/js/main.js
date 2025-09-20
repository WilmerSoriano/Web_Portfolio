// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
        menuToggle.innerHTML = mobileMenu.classList.contains('hidden') ? 
                '<i class="fas fa-bars text-2xl"></i>' : 
                '<i class="fas fa-times text-2xl"></i>';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Typing animation
const typedText = document.getElementById('typed-text');
const phrases = ["Welcome to my Portfolio", "I am Wilmer Soriano", "Computer Scientist", "Cybersecurity", "AI and Tech Passionate"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function type() {
    if (i >= phrases.length) i = 0;
    currentPhrase = phrases[i].split("");
    if (!isDeleting) {
        typedText.innerHTML += currentPhrase[j];
        j++;
        if (j === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        typedText.innerHTML = typedText.innerHTML.slice(0, -1);
        if (typedText.innerHTML.length === 0) {
            isDeleting = false;
            i++;
            j = 0;
        }
    }
    setTimeout(type, isDeleting ? 50 : 150);
}
type();

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');


// Initialize icon based on current body class
const updateToggleIcon = () => {
    if (document.body.classList.contains('dark')) {
        darkModeToggle.textContent = '🌞'; 
    } else {
        darkModeToggle.textContent = '🌚'; 
    }
};

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    updateToggleIcon();
});

// Initialize on page load
updateToggleIcon();