//Javascript is a prototypial based language

function userDetails(username,password){
    this.username = username
    this.password = password
}

userDetails.prototype.username = function(){
    console.log(`${this.username}`)
};

userDetails.prototype.password = function(){
    console.log(`${this.password}`)
}

const obj1 = new userDetails("Vijay","V*Engine");
console.log(obj1);
console.log(obj1.username)

const obj2 = new userDetails("Ajay","V8Engine");
console.log(obj2);
console.log(obj2.password)

let myHeroes = ["Captain America","Iron-Man","Hulk"]

let heroPower = {
    CaptainAmerica:'Sheild',
    Iron_Man:'AI',
    Hulk:'Genom',

    getAmericaPower: function(){
        console.log(`Captain America Power: ${this.CaptainAmerica}`);
    }
}

Object.prototype.hitesh = function(){
    console.log("hitest is present in all objects");
}

Array.prototype.heyHitesh = function(){
    console.log("hitesh says hello");
}

myHeroes.heyHitesh();

// inheritance

const object1 = {
    username: "vijay",
}

const object2 = {
    password:"V8Engine",
}

Object.setPrototypeOf(object1,object2);

console.log(object1.password)

let anotherUserName = "Vijay   "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
}

anotherUserName.trueLength()
"Ajay".trueLength()

