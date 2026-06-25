document.addEventListener("DOMContentLoaded", function () {
  // Team Member Slider Functions
  new Swiper('[data-swiper-element-id="team"]', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '[data-swiper-navigation-id="team-next"]',
      prevEl: '[data-swiper-navigation-id="team-prev"]',
    },
  });
  // Testimonial Slider Functions
  new Swiper('[data-swiper-element-id="testimoial"]', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2.4,
      },
    },
    navigation: {
      nextEl: '[data-swiper-navigation-id="team-next"]',
      prevEl: '[data-swiper-navigation-id="team-prev"]',
    },
  });
});
