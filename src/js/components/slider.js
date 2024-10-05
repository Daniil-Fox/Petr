import { Swiper } from "swiper";
import { FreeMode, Thumbs } from "swiper/modules";

Swiper.use([Thumbs, FreeMode]);
window.addEventListener("DOMContentLoaded", (e) => {
  // new Swiper(".gallery__slider", {
  //   slidesPerView: "auto",
  //   loop: true,
  //   speed: 5000,
  //   autoplay: {
  //     delay: 0,
  //   },
  //   easing: "linear",
  //   centeredSlides: true,
  //   spaceBetween: 10,
  // });
  const thumbsSlider = new Swiper(".interview__thumbs", {
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 8,
        freeMode: {
          enabled: true,
        },
      },
      769: {
        freeMode: false,
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
  const interviewSlider = new Swiper(".interview__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    thumbs: {
      swiper: thumbsSlider,
    },
  });
});
