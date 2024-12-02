const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const line = document.querySelectorAll('.line');



burger.addEventListener('click', () => {
    Array.from(line).forEach(item => {
        item.classList.toggle('active')
    })
    menu.classList.toggle('menu-active')

    if (document.documentElement.style.overflowY === 'hidden') {
        document.documentElement.style.overflowY = 'auto'
    } else {
        document.documentElement.style.overflowY = 'hidden'
    }
    

    Array.from(menu.children).forEach(item => {
        item.addEventListener('click', () => {
            Array.from(line).forEach(item => {
                item.classList.remove('active')
            })
            menu.classList.remove('menu-active')
            document.documentElement.style.overflowY = ''
        })
    })
});
