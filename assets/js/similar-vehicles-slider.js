(function ($) {
  function type_slider() {
    new Swiper(".vehicles-swiper", {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".impl_type_slider .swiper-button-next",
        prevEl: ".impl_type_slider .swiper-button-prev",
      },
      spaceBetween: 20,
      breakpoints: {
        0: { slidesPerView: 1 },
        360: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
        1400: { slidesPerView: 3 },
      },
    });
  }

  $(document).ready(function () {
    type_slider();
  });
})(jQuery);
