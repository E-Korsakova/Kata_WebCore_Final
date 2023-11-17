function deletePriceSwiper() {
  const swiper = document.querySelector('.price__swiper')
  if (swiper) {
    swiper.remove()
    const priceGrid = document.querySelector('.price--grid')
    const gridHeader = document.querySelector('.grid__header')
    priceGrid.classList.remove('hidden')
    gridHeader.classList.remove('hidden')
  }
  return
}

export { deletePriceSwiper }
