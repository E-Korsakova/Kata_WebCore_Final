function formBth() {
  let isOpen = false
  let tabletSize = 748
  let desktopSize = 1360
  let currentwidth = document.body.clientWidth
  const feedback = document.querySelector('.form__feedback')
  const requestCall = document.querySelector('.form__request-call')

  let callBth = null
  let callBtnSidemenu = null
  let chatBtn = null
  let chatBtnSidemenu = null
  let closeBth = null

  const mainPage = document.querySelector('.main-page')
  const sidemenu = document.querySelector('.sidemenu')

  if (currentwidth < tabletSize || currentwidth >= desktopSize) {
    callBth = document.querySelector('.sidemenu .support-button--call')
    chatBtn = document.querySelector('.sidemenu .support-button--chat')
    callBthListener()
  } else {
    callBth = document.querySelector('.main-page .support-button--call')
    chatBtn = document.querySelector('.main-page .support-button--chat')
    callBtnSidemenu = document.querySelector('.sidemenu .support-button--call')
    chatBtnSidemenu = document.querySelector('.sidemenu .support-button--chat')
    callBthListener()
    callBtnSidemenu.addEventListener('click', () => {
      isOpen = true
      sidemenu.classList.add('sidemenu--hide')
      classToggle(requestCall)

      closeBth.addEventListener('click', () => {
        isOpen = false
        sidemenu.classList.remove('sidemenu--hide')
        classToggle(requestCall)
        mainPage.classList.add('main-page--low-opacity')
      })
    })
    chatBtnSidemenu.addEventListener('click', () => {
      isOpen = true
      sidemenu.classList.add('sidemenu--hide')
      classToggle(feedback)

      closeBth.addEventListener('click', () => {
        isOpen = false
        sidemenu.classList.remove('sidemenu--hide')
        classToggle(feedback)
        mainPage.classList.add('main-page--low-opacity')
      })
    })
  }

  function classToggle(form) {
    let currentwidth = document.body.clientWidth
    form.classList.toggle('form--hide')
    closeBth = form.querySelector('.form-button--close')

    if (currentwidth >= tabletSize) {
      if (isOpen) {
        mainPage.classList.add('main-page--low-opacity')
      } else {
        mainPage.classList.remove('main-page--low-opacity')
      }
    }
  }

  function callBthListener() {
    callBth.addEventListener('click', () => {
      isOpen = true
      classToggle(requestCall)

      closeBth.addEventListener('click', () => {
        isOpen = false
        classToggle(requestCall)
      })
    })
    chatBtn.addEventListener('click', () => {
      isOpen = true
      classToggle(feedback)

      closeBth.addEventListener('click', () => {
        isOpen = false
        classToggle(feedback)
      })
    })
  }
}

export { formBth }
