// Scroll Reveal
import ScrollReveal from "scrollreveal";

// Базовые настройки
ScrollReveal({
    distance: "60px",
    duration: 2800,
    reset: true,
});

function scrollRevealFunc() {
    ScrollReveal().reveal(
        ".popular__title",
        {
            origin: "top",
            // delay: 500,
        }
    );

    ScrollReveal().reveal(
        ".discover__form, .discover__picture-img",
        {
            origin: "bottom",
            // delay: 500,
        }
    );

    ScrollReveal().reveal(
        ".discover__title, .discover__picture-hint, .hint-guide, .hint-embark",
        {
            origin: "left",
            // delay: 1000,
        }
    );

    ScrollReveal().reveal(
        ".discover__picture-scroll, .discover__text, .popular__controls, .hint-rate--explore",
        {
            origin: "right",
            // delay: 1500,
        }
    );
}

export default scrollRevealFunc;
