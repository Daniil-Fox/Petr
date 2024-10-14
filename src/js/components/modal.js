const modal = document.querySelector('.modal')
const modalBody = modal?.querySelector('.modal__body')
const modalClose = modal?.querySelector('.modal__close')

const modalButtons = document.querySelectorAll('[data-modal-btn]')
if(modalButtons.length > 0){
  modalButtons.forEach(btn => {
    const modalImgs = modal.querySelectorAll('.modal__img img')
    const titleTag = modal.querySelector('.modal__title')
    const descTag = modal.querySelector('.m-desc')
    const countryTag = modal.querySelector('.m-country')
    const smellTag = modal.querySelector('.m-smell')

    const appleTag = modal.querySelector('.modal__item--apple')
    const wbTag = modal.querySelector('.modal__item--wb')
    const ozonTag = modal.querySelector('.modal__item--ozon')

    const sertificateTag = modal.querySelector('.m-sertificate')
    const moreTag = modal.querySelector('.m-more')

    btn.addEventListener('click', e => {
      e.preventDefault()

      const imgs = btn.dataset.gallery.split(',') // Array of string (URLs)
      const title = btn.dataset.title // String
      const country = btn.dataset.country // String
      const smell = btn.dataset.smell // String
      const desc = btn.dataset.desc // String
      const sertificate = btn.dataset.sertificate // String
      const more = btn.dataset.more // String

      const apple = btn.dataset.apple // Object: Store - link
      const ozon = btn.dataset.ozon // Object: Store - link
      const wb = btn.dataset.wb // Object: Store - link


      modalImgs.forEach((el, indx) => {
        el.src = imgs[indx]
      })

      appleTag.src = apple
      wbTag.src = wb
      ozonTag.src = ozon


      titleTag.textContent = title
      countryTag.innerHTML = `<span>Страна производства:</span> ${country}`
      smellTag.innerHTML = `<span>Аромат:</span> ${smell}`
      descTag.innerHTML = desc

      sertificateTag.src = sertificate
      moreTag.src = more

      modal.classList.add('active')
      document.body.style.overflow = 'hidden'
    })
  })
}

modalBody?.addEventListener('click', e => {
  e.stopPropagation()
})

modal?.addEventListener('click', e => {
  modal.classList.remove('active')
  document.body.style.overflow = null
})

modalClose?.addEventListener('click', e => {
  modal.classList.remove('active')
  document.body.style.overflow = null
})
