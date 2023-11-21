function swiper() {
  let swiperResize = function (breakpoint, swiperClass, swiperSettings) {
    let swiper = new Swiper(swiperClass, swiperSettings)

    breakpoint = window.matchMedia(breakpoint)

    let check = function () {
      if (breakpoint.matches) {
        return swiper
      } else {
        if (swiper !== undefined) swiper.destroy
        return
      }
    }

    breakpoint.addEventListener('change', check)
    return check()
  }

  swiperResize('(min-width: 320px)', '.repairable-brands__swiper', {
    loop: true,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination--brands',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3
      },
      340: {
        slidesPerView: 1.4
      },
      375: {
        slidesPerView: 1.5
      },
      400: {
        slidesPerView: 1.6
      },
      425: {
        slidesPerView: 1.7
      },
      450: {
        slidesPerView: 1.8
      },
      475: {
        slidesPerView: 1.9
      },
      500: {
        slidesPerView: 2
      },
      530: {
        slidesPerView: 2.1
      },
      560: {
        slidesPerView: 2.2
      },
      600: {
        slidesPerView: 2.3
      },
      650: {
        slidesPerView: 2.5
      },
      700: {
        slidesPerView: 2.7
      },
      750: {
        slidesPerView: 2.9
      },
      768: {
        enabled: false
      }
    }
  })

  swiperResize('(min-width: 320px)', '.repairable-equipment__swiper', {
    loop: true,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination--equipment',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3
      },
      340: {
        slidesPerView: 1.4
      },
      375: {
        slidesPerView: 1.5
      },
      400: {
        slidesPerView: 1.6
      },
      425: {
        slidesPerView: 1.7
      },
      450: {
        slidesPerView: 1.8
      },
      475: {
        slidesPerView: 1.9
      },
      500: {
        slidesPerView: 2
      },
      530: {
        slidesPerView: 2.1
      },
      560: {
        slidesPerView: 2.2
      },
      600: {
        slidesPerView: 2.3
      },
      650: {
        slidesPerView: 2.5
      },
      700: {
        slidesPerView: 2.7
      },
      750: {
        slidesPerView: 2.9
      },
      768: {
        enabled: false
      }
    }
  })

  swiperResize('(min-width: 320px)', '.price__swiper', {
    loop: true,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination--price',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2
      },
      340: {
        slidesPerView: 1.3
      },
      375: {
        slidesPerView: 1.4
      },
      400: {
        slidesPerView: 1.5
      },
      425: {
        slidesPerView: 1.6
      },
      450: {
        slidesPerView: 1.7
      },
      475: {
        slidesPerView: 1.8
      },
      500: {
        slidesPerView: 1.9
      },
      530: {
        slidesPerView: 2
      },
      560: {
        slidesPerView: 2.1
      },
      600: {
        slidesPerView: 2.2
      },
      650: {
        slidesPerView: 2.4
      },
      700: {
        slidesPerView: 2.6
      },
      750: {
        slidesPerView: 2.8
      },
      768: {
        enabled: false
      }
    }
  })
}

export { swiper }
