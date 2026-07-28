function register(cb) {
    setTimeout(()=>{
         console.log("rigester here")
         cb();

    },1000)
}

function login(cb) {

    setTimeout(() => {
        console.log("login here")
        cb();

    },2000)
    
    
}
function getData(cb) {
    setTimeout(() => {
        console.log("getData here")
        cb();
        
    },5000)
    
}
function displayData(cb) {
    setTimeout(() => {
        console.log("display here")
        
    },10000)
    
    
}

//callback hell
register(() => {
    login( () => {
        getData( () => {
            displayData();
        }
        );
    }
    );
}
);
console.log("run this")