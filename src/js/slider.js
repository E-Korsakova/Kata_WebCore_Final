// import Swiper from 'swiper'
// import { Pagination } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/pagination'

function swiper() {
  let swiperResize = function (breakpoint, swiperClass, swiperSettings) {
    let swiper = new Swiper(swiperClass, swiperSettings)

    breakpoint = window.matchMedia(breakpoint)

    let check = function () {
      if (breakpoint.matches) {
        return swiper
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', check)
    return check()
  }

  swiperResize('(max-width: 374px)', '.swiper', {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1.25,
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
