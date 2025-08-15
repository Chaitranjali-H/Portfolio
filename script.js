// Portfolio JavaScript functionality

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
}

// Open external links
function openLink(url) {
    window.open(url, '_blank');
}

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('[data-section]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});
