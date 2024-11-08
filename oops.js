
const class1 = {
    username:"Vijay",
    password: "Vijay2",
    email:"vkvhanuman@gmail.com",

    getUserDetails: function(){
        console.log(`${this.username} ${this.password} ${this.email}`)
    }
}

class1.getUserDetails();

function User(username,password){
    this.username = username,
    this.password = password

    function getUser(){
        console.log(`${this.username} ${this.password}`)
    }
}

const obj2 = new User("Vijay","V2Engine");
console.log();



// const user = {
//     username:"hitesh",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails: function(){
//         console.log(this);
//     }
// }

// user.getUserDetails();
// console.log(this)

// function User(username,loginCount,isLoggedIn){
//     this.username = username,
//     this.loginCount = loginCount,
//     this.isLoggedIn = isLoggedIn

//     this.funcs = function greeting(){
//         console.log('greetings');
//     }

//     return this;
// }

// const user1 = new User("Vijay",15,true);
// console.log(user1 instanceof User)