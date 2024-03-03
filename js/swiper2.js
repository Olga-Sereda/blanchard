let gvfhnv = new Swiper(".events-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".events__btn-next",
    prevEl: ".events__btn-prev",
  },
  pagination: {
    el: ".events-pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 36,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
    },
    1450: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  },
});

