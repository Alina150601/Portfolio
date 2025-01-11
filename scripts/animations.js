document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Анимация секций
    gsap.utils.toArray(".animated-section").forEach(section => {
        gsap.fromTo(section,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, scrollTrigger: { trigger: section, start: "top 80%" } }
        );
    });

    // Параллакс для фона
    gsap.to(".header", {
        scrollTrigger: {
            trigger: ".header",
            start: "top top",
            scrub: true
        },
        backgroundPosition: "50% 100%"
    });
});