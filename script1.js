document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
}); 