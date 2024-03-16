window.addEventListener('scroll', () => {
    const headerEl = document.querySelector('.header')
    const scrollPos = scrollY > 250
    headerEl.classList.toggle('sticky-header', scrollPos)
})