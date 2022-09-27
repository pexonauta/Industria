(function(){
    let form = document.querySelector('#form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    let btn_login = document.querySelector("#logar")
    let email = document.querySelector('#email')
    let senha = document.querySelector('#senha')
    btn_login.addEventListener('click', () => {   
        if(email.value.length > 0 && senha.value.length > 0) {
            if(email.value == 'admin@admin.com' && senha.value == 'admin'){
                window.location.href = 'App/admin/index.html'
            }
            else { window.location.href = 'App/abas/index.html' } 
        }
    }) 
})()