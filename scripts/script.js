document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animations
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Contact Form Validation (for demo purposes)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted');
    });

    // Добавление параллакса для элементов
    window.addEventListener('scroll', function() {
        let parallaxElements = document.querySelectorAll('.parallax');

        parallaxElements.forEach(function(element) {
            let offset = window.pageYOffset;
            element.style.backgroundPosition = 'center ' + (offset * 0.5) + 'px';
        });
    });
});