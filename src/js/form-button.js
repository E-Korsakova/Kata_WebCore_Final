function formBth() {
  let isOpen = false
  let tabletSize = 748
  let desktopSize = 1360
  let currentwidth = document.body.clientWidth
  const feedback = document.querySelector('.form__feedback')
  const requestCall = document.querySelector('.form__request-call')

  let callBth = null
  let chatBtn = null
  let closeBth = null
  const mainPage = document.querySelector('.main-page')
  const sidemenu = document.querySelector('.sidemenu')

  if (currentwidth < tabletSize || currentwidth >= desktopSize) {
    callBth = document.querySelector('.sidemenu .support-button--call')
    chatBtn = document.querySelector('.sidemenu .support-button--chat')
  }
  if (currentwidth >= tabletSize && currentwidth < desktopSize) {
    callBth = document.querySelector('.main-page .support-button--call')
    chatBtn = document.querySelector('.main-page .support-button--chat')
  }

  function classToggle(form) {
    let currentwidth = document.body.clientWidth
    form.classList.toggle('form--hide')
    closeBth = form.querySelector('.form-button--close')

    if (currentwidth >= tabletSize) {
      mainPage.classList.toggle('main-page--low-opacity')
      sidemenu.classList.toggle('sidemenu--low-opacity')
    }
  }

  callBth.addEventListener('click', () => {
    classToggle(requestCall)

    closeBth.addEventListener('click', () => {
      classToggle(requestCall)
    })
  })
  chatBtn.addEventListener('click', () => {
    classToggle(feedback)

    closeBth.addEventListener('click', () => {
      classToggle(feedback)
    })
  })
}

export { formBth }
