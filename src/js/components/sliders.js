const portSlider = document.querySelector(".portfolio-section__items");
const testimonialsSlider = document.querySelector(".testimonials__items");
const relatedSlider = document.querySelector(".related-projects__items");
const heroSlider = document.querySelector(".hero-slider");

if (portSlider) {
  const portfolio = new Swiper(portSlider, {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,

    loop: true,

    navigation: {
      nextEl: ".portfolio-section__next",
      prevEl: ".portfolio-section__prev",
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    }
  });
}

if (testimonialsSlider) {
  const tesimonials = new Swiper(testimonialsSlider, {
    slidesPerView: 1,
    watchSlidesProgress: true,

    loop: true,
    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },
  });
}

if (relatedSlider) {
  const related = new Swiper(relatedSlider, {
    slidesPerView: 3,
    spaceBetween: 30,
    watchSlidesProgress: true,

    loop: true,
    navigation: {
      nextEl: ".related-projects__next",
      prevEl: ".related-projects__prev",
    },
  });
}

if (heroSlider) {

  const bodyStyles = window.getComputedStyle(document.body);
  const heroSliderSpeed = bodyStyles.getPropertyValue('--hero-slider-speed'); //get

  document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');

  const hero = new Swiper(heroSlider, {
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".hero__next",
      prevEl: ".hero__prev",
    },

    pagination: {
      el: '.hero__pag',
      type: 'bullets',
      clickable: true,
    },

    speed: heroSliderSpeed + 'ms',

    on: {
      init: function () {
        const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet');
        paginationBullets.forEach(el => {
          el.innerHTML = '<span class="hero__bar"></span>'
        })
      }
    }

  });
}
