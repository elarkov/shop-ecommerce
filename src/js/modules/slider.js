import Swiper, { Navigation } from "swiper";


export function renderSlider() {
  const sliders = document.querySelectorAll('.js-slider-1');
  sliders.forEach(function (slider) {
    initSlider(slider);
  });

  function initSlider(item) {
    const sliderItem = item.querySelector('.slider__swiper');

    var swiper1 = new Swiper(sliderItem, {
      modules: [Navigation],
      slidesPerView: 1,
      loop: false,
      spaceBetween: 10,
      navigation: {
        nextEl: ".slider__arrow--next",
        prevEl: ".slider__arrow--prev",
      },
    });
  }
}