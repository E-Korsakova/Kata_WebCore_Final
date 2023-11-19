function deletePriceSwiper() {
  const swiper = document.querySelector('.price__swiper')
  if (swiper) {
    swiper.classList.add('hidden')
    const priceGrid = document.querySelector('.price-grid')
    priceGrid.classList.remove('hidden')
  }
  return
}

export { deletePriceSwiper }
