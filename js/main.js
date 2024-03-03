let swiper = new Swiper(".gallery-swiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".gallery-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".gallery__btn-next",
    prevEl: ".gallery__btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1450: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
});

const element = document.getElementById('gallery-select');
const choices = new Choices(element, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    placeholder: true
})


let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = document.querySelectorAll('.nav__link');
let auth = document.querySelector('.header__btn-auth');

burger.addEventListener('click', 
  function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('nav--active');

    auth.classList.toggle('nav--active');

    document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function(el){
  el.addEventListener('click', function (){

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    auth.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form__show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form__show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})