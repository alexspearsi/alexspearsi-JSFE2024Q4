document.addEventListener('DOMContentLoaded', () => {
    const scroll = document.querySelector('.scroll');

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768 && window.scrollY >= 300) {
            scroll.classList.add('visible')
        } else {
            scroll.classList.remove('visible');
        }
    })

    scroll.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    })
})