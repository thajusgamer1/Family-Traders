 const swiper = new Swiper(".specialOffersSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3.5,
      }
    }
  });
