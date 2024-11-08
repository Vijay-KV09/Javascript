function setUser(username){
    this.username = username;
}

function userDetails(username,email,password){
    setUser.call(this,username)

    this.email = email
    this.password = password
}

const obj1 = new userDetails("Vijay","v8Engine@gmail.com","V8engine");
console.log(obj1)