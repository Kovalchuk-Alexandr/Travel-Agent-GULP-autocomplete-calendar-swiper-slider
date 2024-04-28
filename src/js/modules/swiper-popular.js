// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

function swiper () {
    const swiper = new Swiper("#swiper-popular", {
        // Optional parameters
        // direction: "vertical",
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        grabCursor: true,
        freeMode: true /* Плавная прокрутка */,

        breakpoints: {
            500: {
                slidesPerView: 2,
                // spaceBetween: 10,
            },

            800: {
                spaceBetween: 20,
                slidesPerView: 3,
            },

            1050: {
                spaceBetween: 32,
                slidesPerView: 4,
            },
        },

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".slider__btn-next",
            prevEl: ".slider__btn-prev",
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: ".swiper-scrollbar",
        // },
    });
}

export default swiper;