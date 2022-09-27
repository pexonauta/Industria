(function() {
    let navbar = document.querySelector('.navbar')
    let navbarMenu = document.querySelector('.navbar-hamburguer')
    navbarMenu.addEventListener('click', () => {    
        navbar.classList.toggle('on')
    })

    let usera = document.querySelector('.user')
    let userMenu = document.querySelector('#perfil')
    userMenu.addEventListener('click', () => {
        usera.classList.toggle('on')
    })
})()