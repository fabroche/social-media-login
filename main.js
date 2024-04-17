/*
* Exercice Login
*
* 1. El usuario debe poder ingresar su usuario y contraseña
*
* 2. El sistema debe ser capaz de validar si el usuario y
* contraseña ingresados por el usuario existen en la base
* de datos.
*
* 3. Si el usuario y contraseña son correctos, el sistema
* debe mostrar un mensaje de bienvenida y mostrar
* el timeline del usuario.
*
* 4. SI el usuario y contraseña son incorrectos, el sistema
* debe mostrar un mensaje de error y no mostrar ningun
* timeline
*
* */

function main() {

    // DOM Elements
    const welcomeMsgElement = document.getElementById('welcome-msg')
    const inputUsernameElement = document.getElementById('username-input')
    const inputPasswordElement = document.getElementById('password-input')
    const errorMsgElement = document.getElementById('error-msg')
    const buttonLoginElement = document.getElementById('button-login')

    const userDatabase = [
        {
            username: "fabroche",
            password: "123"
        },
        {
            username: "gresuto",
            password: "123"
        },
        {
            username: "betty",
            password: "123"
        },
        {
            username: "aby",
            password: "123"
        },
    ]

    // Event Listener
    let username
    inputUsernameElement.addEventListener('input', () => username = inputUsernameElement.value)
    let password
    inputPasswordElement.addEventListener('input', () => password = inputPasswordElement.value)

    buttonLoginElement.addEventListener('click', () => login(username, password, userDatabase))


    function login(username, password, userDatabase) {

        const user = userDatabase.find(
            (user) => user.username === username && user.password === password
        )

        if (user) {
            welcomeMsgElement.innerText = `Welcome, ${user.username}`
        } else {
            errorMsgElement.classList.remove('hidden')
            setTimeout(() => errorMsgElement.classList.add('hidden'), 3000)
        }


        inputUsernameElement.value = ''
        inputPasswordElement.value = ''
    }

}

document.addEventListener("DOMContentLoaded", main)