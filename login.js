
function entrar() {
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let email = document.querySelector('#email')
    let emailLabel = document.querySelector('#emailLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: '',
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {

        if (email.value == item.emailCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }

    })

    if (email.value == userValid.email && senha.value == userValid.senha) {
        window.location.href = 'https://pablobakeneko.github.io/Site4/#home'

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))

    } else {
        emailLabel.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Email ou Senha incorretos'
        email.focus()
    }

}