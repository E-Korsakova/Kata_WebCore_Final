import '../scss/style.scss'

import { formBth } from './form-button'
import { btnBurgerOnClick } from './burger-button'
import { btnShowAll } from './buttons-show-all'
import { windowResize } from './window-resize'
import { swiper } from './slider'

function init() {
  btnBurgerOnClick()
  formBth()
  btnShowAll()
  window.addEventListener('DOMContentLoaded', swiper())
  windowResize()
}

init()
