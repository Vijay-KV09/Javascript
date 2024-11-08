class UserDetails{
    constructor(username,password){
        this.username = username
        this.password = password
    }

    showUsername(){
        console.log(this.username)
    }

    //hide your data
    static hidePassword(){
        console.log(this.password)
    }
}

try{
    const object1 = new UserDetails("Vijay","V8engine");
    object1.showUsername();
    object1.hidePassword();
}catch(err){
    console.log(err);
}
