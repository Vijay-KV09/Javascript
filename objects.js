const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor)

const Objects = Object.create(null);
console.log(Objects);

const object1 = {
    username: "Vijay",

    get: function(){
        console.log("Vijay");
    }
}

console.log(Object.getOwnPropertyDescriptor(object1,"username"))

Object.defineProperty(object1,"username",{
    writable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(object1,"username"))

object1.username = "Ajay";
console.log(object1)

for(let [key,value] of Object.entries(object1)){
    if(typeof value == 'function'){
        continue;
    }
    console.log(`${key}: ${value}`)
}

const array_of_obj = [
    {
        username: "vijay",
        password: "V8engine"
    },
    {
        username: "ajay",
        password: "V9engine"
    }
]

console.log(Object.getOwnPropertyDescriptor(array_of_obj,0))

Object.defineProperty(array_of_obj,0,{
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(array_of_obj,0))

for(let index in array_of_obj){
    console.log(array_of_obj[index])
}