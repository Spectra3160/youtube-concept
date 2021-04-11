const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
     slidesPerView: 6 
    },
    1600: {
      slidesPerView: 5
    },
    1200: {
     slidesPerView: 4 
    },
    992: {
     slidesPerView: 3 
    },
    760: {
     slidesPerView: 2 
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});

const swiper2 = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
     slidesPerView: 3 
    },
    1200: {
     slidesPerView: 2 
    },
    760: {
     slidesPerView: 1 
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

});

const swiper3 = new Swiper('.recommended-channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
     slidesPerView: 6 
    },
    1600: {
      slidesPerView: 5
    },
    1200: {
     slidesPerView: 4 
    },
    992: {
     slidesPerView: 3 
    },
    760: {
     slidesPerView: 2 
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-channel-button-next',
    prevEl: '.recommended-channel-button-prev',
  },

});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open')
});

if (document.documentElement.scrollWidth <= 640) {
  myChannelSlider.destroy();
}