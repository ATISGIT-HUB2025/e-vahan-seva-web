(function ($) {
  function type_slider() {
    new Swiper(".brands-swiper", {
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
        0: { slidesPerView: 2 },
        360: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
        1400: { slidesPerView: 6 },
      },
    });
  }

  $(document).ready(function () {
    type_slider();
  });
})(jQuery);
