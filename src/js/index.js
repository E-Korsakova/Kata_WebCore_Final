import '../scss/style.scss'

import { btnBurgerOnClick } from './buttons'
import { windowResize } from './window-resize'
import { swiper } from './swiper'

function init() {
  btnBurgerOnClick()
  windowResize()
  window.addEventListener('DOMContentLoaded', swiper())
}

init()
