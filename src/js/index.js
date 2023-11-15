import '../scss/style.scss'

import { btnBurgerOnClick } from './burger-button'
import { btnShowAll } from './buttons-show-all'
import { windowResize } from './window-resize'
import { swiper } from './slider'

function init() {
  btnBurgerOnClick()
  btnShowAll()
  windowResize()
  window.addEventListener('DOMContentLoaded', swiper())
}

init()
