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

  swiperResize('(max-width: 374px)', '.swiper', {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1.2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  swiperResize('(max-width: 424px)', '.swiper', {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1.5,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  swiperResize('(max-width: 767px)', '.swiper', {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1.75,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

export { swiper }
