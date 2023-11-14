import './scss/style.scss'

import { btnBurgerOnClick } from './scripts/ui/buttons'
import { windowResize } from './scripts/ui/window-resize'
import { swiper } from './scripts/modules/swiper'

function init() {
  btnBurgerOnClick()
  windowResize()
  window.addEventListener('DOMContentLoaded', swiper())
}

init()
