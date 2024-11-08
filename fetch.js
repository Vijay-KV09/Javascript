
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


async function getAllUsers(){
    try{
        return await fetch('https://jsonplaceholder.typicode.com/users')
    }catch(err){
        console.log(err);
    }
}

getAllUsers()
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data[0]);
})
