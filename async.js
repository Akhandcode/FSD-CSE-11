function register() {
    setTimeout(()=>{
         console.log("rigester here")

    },1000)
}


function login() {

    setTimeout(() => {
        console.log("login here")

    },2000)
    
    
}
function getData() {
    setTimeout(() => {
        console.log("getData here")
        
    },5000)
    
}
function displayData() {
    setTimeout(() => {
        console.log("display here")
        
    },10000)
    
    
}
register()
login()
getData()
displayData()
console.log("run this")