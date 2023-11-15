function btnShowAll() {
  const brandsBtn = document.querySelector('.repairable-brands__button')
  const equipBtn = document.querySelector('.equipment-brands__button')
  const equipment = document.querySelector('.equipment__wrapper')
  const brands = document.querySelector('.brands__wrapper')

  function toggleClass(button, wrapper) {
    const expand = button.querySelector('.expand')
    const textShowAll = button.querySelector('.section-button--show-all')
    const textHide = button.querySelector('.section-button--hide')

    wrapper.classList.toggle('cards-wrapper--show-all')
    expand.classList.toggle('expand--open')
    textShowAll.classList.toggle('hidden')
    textHide.classList.toggle('hidden')
  }

  brandsBtn.addEventListener('click', () => {
    toggleClass(brandsBtn, brands)
  })
  equipBtn.addEventListener('click', () => {
    toggleClass(equipBtn, equipment)
  })
}

export { btnShowAll }
