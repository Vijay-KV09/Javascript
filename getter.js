//class based getters and setters
class User{
    constructor(username,password,email){
        this.username = username
        this.password = password
        this.email = email
    }
    
    get email(){
        return this._email.toLowerCase()
    }

    set email(mail){
        this._email = mail
    }

    get password(){
        return this._password.toLowerCase()
    }

    set password(value){
        this._password = value
    }
}

const object = new User("Vijay","V8Engine","V8engine@gmail.com")
console.log(object.password)
console.log(object.email);

//function based getter and setters
function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(User,"email",{
        get: function(){ return this._email.toUpperCase()},
        set: function(value){ this._email = value}
    })
    Object.defineProperty(User,"_password",{
        get: function(){ return this._password.toUpperCase()},
        set: function(value){ this._password = value}
    })
}

const object2 = new User("V8engine@gmail.com","V8engine");
console.log(object2._email)

//object based setter and getter
const User = {
    _email: 'v8engine@gmail.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const object1 = Object.create(User);
console.log(object1.email)