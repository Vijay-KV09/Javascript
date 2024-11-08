class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptedPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

// behind the scene

// function User(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptedPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

const chai = new User("Vijay","V8Engine@gmail.com","V8engine");
console.log(chai.encryptedPassword())
console.log(chai.changeUsername())

