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
    mainPage.classList.toggle('main-page--low-opacity')
  }

  sitePage.addEventListener('click', (evt) => {
    if (evt.target === btnBurger) {
      classToggle()
      isOpen = true
    } else if (
      isOpen &&
      (evt.target === sidemenuBtnBurger || !sidemenu.contains(evt.target))
    ) {
      classToggle()
      isOpen = false
    }
  })
}

function btnShowAll() {}

export { btnBurgerOnClick }
