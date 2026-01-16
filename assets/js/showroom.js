(function ($) {
  function type_slider() {
    new Swiper(".showroom-swiper", {
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
        768: { slidesPerView: 1 },
        992: { slidesPerView: 2 },
        1200: { slidesPerView: 2 },
        1400: { slidesPerView: 2 },
      },
    });
  }

  $(document).ready(function () {
    type_slider();
  });
})(jQuery);
