// ===== MOBILE MENU TOGGLE FUNCTIONALITY =====
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Add click event listener to toggle the mobile menu visibility
menuToggle.addEventListener('click', () => {
    // Toggle the 'hidden' class to show/hide the mobile menu
    mobileMenu.classList.toggle('hidden');
    
    // Update the menu icon based on whether the menu is open or closed
    // Show hamburger icon when menu is closed, X icon when menu is open
    menuToggle.innerHTML = mobileMenu.classList.contains('hidden') ? 
            '<i class="fas fa-bars text-2xl"></i>' : 
            '<i class="fas fa-times text-2xl"></i>';
});

// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
// Add click event listeners to all navigation links that link to page sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        e.preventDefault();
    
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if it's open
        mobileMenu.classList.add('hidden');
        
        // Update active navigation link
        // Remove 'active' class from all links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

// ===== UPDATE ACTIVE NAV LINK ON SCROLL =====
// Add scroll event listener to update which navigation link is active based on scroll position
window.addEventListener('scroll', () => {
    // Get all section elements and current scroll position (with 100px offset)
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    // Check each section to see if it's currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // If the scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Update navigation to highlight the current section's link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ===== BACK TO TOP BUTTON FUNCTIONALITY =====
const backToTopButton = document.getElementById('back-to-top');

// Add scroll event listener to show/hide the back-to-top button
window.addEventListener('scroll', () => {
    // Show button when scrolled more than 300px, hide otherwise
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

// Add click event listener to scroll back to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== REVEAL ANIMATION ON SCROLL =====
const reveals = document.querySelectorAll('.reveal');

// Function to check if elements are in viewport and add 'active' class
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        // If element is within 100px of the viewport bottom, make it active
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

// Add scroll event listener and run once on page load
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== TYPING ANIMATION FOR HERO TEXT =====
const typedText = document.getElementById('typed-text');
// Define phrases to cycle through in the typing animation
const phrases = ["Welcome to my Portfolio", "I am Wilmer Soriano", "Computer Scientist", "Cybersecurity", "AI and Tech Passionate"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

// Main typing animation function
function type() {
    // Loop back to first phrase if we've reached the end
    if (i >= phrases.length) i = 0;
    // Convert current phrase to array of characters
    currentPhrase = phrases[i].split("");
    
    if (!isDeleting) {
        // Typing phase: add next character
        typedText.innerHTML += currentPhrase[j];
        j++;
        // If we've reached the end of the phrase, pause then start deleting
        if (j === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        // Deleting phase: remove last character
        typedText.innerHTML = typedText.innerHTML.slice(0, -1);
        // If we've deleted the entire phrase, move to next phrase
        if (typedText.innerHTML.length === 0) {
            isDeleting = false;
            i++;
            j = 0;
        }
    }
    // Set timeout for next animation frame (faster deletion, slower typing)
    setTimeout(type, isDeleting ? 50 : 150);
}

type();

// ===== DARK MODE TOGGLE FUNCTIONALITY =====
const darkModeToggle = document.getElementById('dark-mode-toggle');
const updateToggleIcon = () => {
    if (document.body.classList.contains('dark')) {
        darkModeToggle.textContent = '🌞'; 
    } else {
        darkModeToggle.textContent = '🌚'; 
    }
};

// Add click event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    updateToggleIcon();
});
updateToggleIcon();