function init() {
    let name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    displayName();
  }
  init();

function outerFunction(){
    let username = "vijay"
    function innerFunction(){
        let password = "abc"
        console.log("inner Function: " + username + " " + password)
        function innerTwoFunction(){
            console.log("inner Two Function: " + username +  " " + password)
        }
        innerTwoFunction()
    }
    innerFunction()
}

try{
    outerFunction();
    console.log("outer function" + username)
}catch(error){
    console.log(error)
}
  
