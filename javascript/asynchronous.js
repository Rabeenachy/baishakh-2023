


function showPop(){
    console.log("show popup");
    return undefined
        }

// setTimeout(showPop, 3000)
setTimeout (() => {
    console.log("show popup using arrow function")
},3000)

console.log(1);
console.log(2);
console.log(3);
console.log(4);

function doTaskOne() {
    console.log("task one");
    for (let index = 0; index < 10; index++){
        console.log("index", index);
    }
    doTaskTwo()
    }


    const doTaskTwo = () => {
        console.log("task two");
    }
    console.log("before function")
    doTaskOne()



    
   
    
        
        