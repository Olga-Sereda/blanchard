let swiper3 = new Swiper(".projects-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".projects__btn-next",
    prevEl: ".projects__btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1450: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});
