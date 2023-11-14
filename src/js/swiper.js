// import Swiper from '../../node_modules/swiper'
// import { Pagination } from '../../node_modules/swiper/modules'
// import '../../node_modules/swiper/swiper.scss'
// import '../../node_modules/swiper/modules/pagination.scss'

function swiper() {
  let swiperResize = function (breakpoint, swiperClass, swiperSettings) {
    let swiper = new Swiper(swiperClass, swiperSettings, {
      modules: [Pagination]
    })

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

  swiperResize('(max-width: 767px)', '.swiper', {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1.25,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoint: {
      768: {
        enable: false
      }
    }
  })
}

export { swiper }
