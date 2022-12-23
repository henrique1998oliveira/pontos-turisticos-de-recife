const title = document.getElementsByClassName('title')
const error_text = document.getElementsByClassName('error_text')
const username_input = document.getElementById('login-usuario')
const password_input = document.getElementById('login-senha')

title[0].getElementsByClassName.color =  'blue'

function validaForms() {
    if (username_input.value) != 'Henrique' {
        error_text[0].classList.add('visible')
    }
    if (password_input.value != '123') {
        error_text[1].classList.add(visible)
    }
}

validaForms()