function windowResize() {
  const mobileWidth = 320
  const tabletWidth = 768
  const desktopeWidth = 1360
  let currentWidth = document.body.clientWidth
  const sidemenu = document.querySelector('.sidemenu')
  const supportBtnDesktop = document.querySelector('.content__support-buttons')
  const mainPage = document.querySelector('.main-page')
  const mainPageHeader = document.querySelector('.main-page__header')
  const mainPageSupportBtns = document.querySelector('.header__support-buttons')
  const burgerMenuBth = document.querySelector(
    '.top-menu-button--burger-menu--open'
  )

  function isDesktop() {
    if (currentWidth >= desktopeWidth) {
      sidemenu.classList.remove('sidemenu--hide')
      burgerMenuBth.classList.add('hidden')
      supportBtnDesktop.classList.remove('hidden')
      mainPage.classList.remove('main-page--low-opacity')
      mainPageHeader.classList.add('hidden')
    } else {
      let sidemenuHide = document.querySelector('.sidemenu--hide')

      if (sidemenuHide) {
        mainPage.classList.remove('main-page--low-opacity')
      } else {
        sidemenu.classList.add('sidemenu--hide')
      }

      if (currentWidth >= tabletWidth) {
        mainPageSupportBtns.classList.remove('hidden')
      } else {
        mainPageSupportBtns.classList.add('hidden')
      }

      supportBtnDesktop.classList.add('hidden')
      mainPageHeader.classList.remove('hidden')
      burgerMenuBth.classList.remove('hidden')
    }
  }

  isDesktop()

  window.addEventListener('resize', () => {
    currentWidth = document.body.clientWidth
    isDesktop()
  })
}

export { windowResize }
