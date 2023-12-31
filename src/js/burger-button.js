function btnBurgerOnClick() {
  let isOpen = false
  const sidemenu = document.querySelector('.sidemenu')
  const btnBurger = document.querySelector('.top-menu-button--burger-menu')
  const sidemenuBtnBurger = document.querySelector(
    '.top-menu-button--burger-menu--open'
  )
  const mainPage = document.querySelector('.main-page')
  const sitePage = document.querySelector('.site')

  function classToggle() {
    sidemenu.classList.toggle('sidemenu--hide')
    const sidemenuHide = document.querySelector('.sidemenu--hide')
    if (!sidemenuHide) {
      mainPage.classList.add('main-page--low-opacity')
    } else mainPage.classList.remove('main-page--low-opacity')
  }

  sitePage.addEventListener('click', (evt) => {
    if (evt.target === btnBurger) {
      classToggle()
      isOpen = true
    } else if (
      isOpen &&
      (evt.target === sidemenuBtnBurger || mainPage.contains(evt.target))
    ) {
      classToggle()
      isOpen = false
    }
  })
}

export { btnBurgerOnClick }
