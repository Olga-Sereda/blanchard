let swiperHero = new Swiper(".hero-swiper", {
  slidesPerView: 1,
});

tippy('#myButton', {
  content: 'Глава 2, страница 176',
});

let tabsBtn = document.querySelectorAll('.catalog__link');
let tabsContent = document.querySelectorAll('.catalog__block');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('catalog__link--active')});
    e.currentTarget.classList.add('catalog__link--active');

    tabsContent.forEach(function(element){element.classList.remove('catalog__block--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__block--active');
  });
});
