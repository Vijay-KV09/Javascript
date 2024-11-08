const promise1 = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network call
    setTimeout(function(){
        console.log('Aync task is completed');
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("async passed")
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai",email:"chai@chaiaurcodeGmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"hitest",password:"123"})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

const username = promise4
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)  
})
.finally(function(){
    console.log("The promise is either resolved or rejected");
})

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

/* async await */

async function consumePromise5(){
    try{
        const response = await promise5
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromise5();

/*async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data[0])
    }catch(err){
        console.log(err);
    }
}*/

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(response){
    const data = response;
    console.log(data[0])
})
.catch(function(error){
    console.log(error)
})