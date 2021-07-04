class Person {
    constructor(name, login, password) {
        this.name = name
        this.login = login
        this.password = password
    }
}

const students = [
    new Person("Samara", "samar", "sama1"),
    new Person("Айжана", "aijana", "jana02"),
    new Person("Бегимай", "bema", "bema02"),
]

let logIn = document.querySelector("#logIn")
logIn.onclick = () => {
    let inputLoin = document.querySelector("#input-login").value
    let inputPassword = document.querySelector("#input-password").value
    let student = students.find(st => {
        if (st.login === inputLoin && st.password === inputPassword) {
            return st
        }
    })
    if (inputLoin.length <= 0 || inputPassword.length <= 0) {
        console.log('%c заполните все поля', 'background: #222; color: red');
    } else if (student === undefined) {
        console.log('%c Студент с таким логином не авторизован ', 'background: #222; color: red');
    }else {
        console.log(`%c${student.name} Добро пожаловать в личный кабинет`, 'color: green')
    }
}

