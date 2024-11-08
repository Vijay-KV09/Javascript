class v1{
    constructor(username){
        this.username = username
    }
}

class v2 extends v1{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

   getUserDetails(){
    console.log(`${this.username} ${this.email} ${this.password}`)
    }
};

const object1 = new v2("Vijay","V8engine@gmail.com","v8engine");
object1.getUserDetails();


//though you instanciated with v2 class, since v2 extends v1
//so the object is directly instanciated with v1 class
if(object1 instanceof v1){
    console.log("You can access both v1 and v2 class");
}