let excursions = document.querySelector('.excursions__body');
if(!!excursions) {
  if (document.documentElement.clientWidth < 479.98) {
    excursions.classList.add('_swiper')
  }
}
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
  startSwiper()
  sliders_bild_callback();
}

function startSwiper() {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains('swiper-bild')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-bild');

      if (slider.classList.contains('_swiper_scroll')) {
        let sliderScroll = document.createElement('div');
        sliderScroll.classList.add('swiper-scrollbar');
        slider.appendChild(sliderScroll);
      }
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('lightGallery').destroy(true);
    }
  }
}

function sliders_bild_callback(params) {
}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
  for (let index = 0; index < sliderScrollItems.length; index++) {
    const sliderScrollItem = sliderScrollItems[index];
    const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
    const sliderScroll = new Swiper(sliderScrollItem, {
      observer: true,
      observeParents: true,
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: sliderScrollBar,
        draggable: true,
        snapOnRelease: false
      },
      mousewheel: {
        releaseOnEdges: true,
      },
    });
    sliderScroll.scrollbar.updateSize();
  }
}


function sliders_bild_callback(params) {
}

let feedbackSlider = document.querySelector('.feedback__body')
let sliderPopup = document.querySelectorAll('.slider-popup')
let thumbsSliders = document.querySelectorAll(".thumbsSlider")
let swipersThumbs = []
let swipers = []

if (!!feedbackSlider) {
  feedbackSlider = new Swiper('.feedback__body', {

    // effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    observer: true,
    observeParents: true,
    slidesPerView: 2,
    spaceBetween: 45,
    // autoHeight: true,
    loop: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows
    // navigation: {
    //   nextEl: '.about__more .more__item_next',
    //   prevEl: '.about__more .more__item_prev',
    // },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
      },
      750: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1268: {
        slidesPerView: 2,
        spaceBetween: 45,
      },
    },
    on: {
      lazyImageReady: function () {
        ibg();
      },
    }

    // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},
  });
}
if (!!sliderPopup) {
  let dotts = document.querySelectorAll('.more-popup__dotts')
  sliderPopup.forEach((item, index) => {
    swipersThumbs.push(new Swiper(thumbsSliders[index], {
        slidesPerView: 3,
        watchSlidesProgress: true,
        centeredSlides: true,
        spaceBetween: 30,
        breakpoints: {
          320: {
            // autoHeight: true,
          },
          550: {
            spaceBetween: 10,
          },
          1080: {
            spaceBetween: 20,
          },
          1268: {
            spaceBetween: 30,
          },
        },
      }))
    swipers.push(new Swiper(item, {

      // effect: 'fade',
      // autoplay: {
      // 	delay: 3000,
      // 	disableOnInteraction: false,
      // },
      // freeMode: true,
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
      speed: 800,
      initialSlide: 2,
      // width: 567,
      // height: 433,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      lazy: true,
      //Dotts
      pagination: {
        el: dotts[index],
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        479.98: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
      on: {
        lazyImageReady: function () {
          ibg();
        },
      },
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
      thumbs: {
        swiper: swipersThumbs[index],
      },
    }))
  })
}

if(!!excursions) {
  if (document.documentElement.clientWidth < 479.98) {
    new Swiper('.excursions__body', {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
      speed: 800,
      on: {
        lazyImageReady: function () {
          ibg();
        },
      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
    });
  }
}


let slider1 = document.querySelector('.sliderGroup__slider')
if(!!slider1) {
  feedbackSlider = new Swiper(slider1, {

    // effect: 'fade',
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },

    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 45,
    // autoHeight: true,
    loop: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows
    // navigation: {
    //   nextEl: '.about__more .more__item_next',
    //   prevEl: '.about__more .more__item_prev',
    // },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
      },
      750: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1268: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
    on: {
      lazyImageReady: function () {
        ibg();
      },
    }

    // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},
  });
}

