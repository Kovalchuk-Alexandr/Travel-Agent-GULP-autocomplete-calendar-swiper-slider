// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

let swiper1, swiper2, swiper3, swiperHorizontal;

const configVertical = {
    // Optional parameters
    direction: "vertical",
    loop: true,
    // slidesPerView: 4,
    slidesPerView: "auto",
    // spaceBetween: 32,
    grabCursor: true,
    ally: false,
    freeMode: true /* Плавная прокрутка */,
    speed: 12000,
    // centeredSlides: true,
    autoplay: {
        delay: 0.5,
        disableOnInteraction: false,
    },

    // breakpoints: {
    //     820: {
    //         spaceBetween: 24,
    //     },
    // },
};

const configVerticalReverse = {
    // Optional parameters
    direction: "vertical",
    loop: true,
    // slidesPerView: 4,
    slidesPerView: "auto",
    // spaceBetween: 32,
    grabCursor: true,
    a11y: false,
    freeMode: true /* Плавная прокрутка */,
    speed: 15000,
    // centeredSlides: true,
    autoplay: {
        delay: 0.5,
        disableOnInteraction: false,
        reverseDirection: true,
    },
};

const configHorizontal = {
    direction: "horizontal",
    slidesPerView: 1,
    // slidesPerView: 'auto',
    spaceBetween: 18,
    grabCursor: true,
    a11y: false,
    freeMode: true,
    speed: 12000,
    loop: true,
    autoplay: {
        delay: 0.0,
        disableOnInteraction: false,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 18,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 26,
        },

        1000: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },
};



// Удаляем swipers при BP-1250px
const breakpoint = window.matchMedia('(max-width:1250px)');

// Ф-я которая проверяет срабатываение медиа запроса в breakpoint
const breakpointChecker = function () {
    if (breakpoint.matches === true) {
        swiperHorizontal = new Swiper('#testimonials-horizontal-swiper', configHorizontal);
        if (swiper1 !== undefined) swiper1.destroy(true, true);
        if (swiper2 !== undefined) swiper2.destroy(true, true);
        if (swiper3 !== undefined) swiper3.destroy(true, true);
        return;
    } else if (breakpoint.matches === false) {
        swiper1 = new Swiper('#testimonials-col-1', configVertical);
        swiper2 = new Swiper('#testimonials-col-2', configVerticalReverse);
        swiper3 = new Swiper('#testimonials-col-3', configVertical);
        if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);
        return;
    }
}

breakpoint.addListener(breakpointChecker);
breakpointChecker();

// export default swiper;