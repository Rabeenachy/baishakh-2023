


let vehicle1 = {
    name: "bmw",
    drive: () => {
        console.log("driving..")
    }
}
let vehicle2 = {
    name: "audi",
    drive: () => {
        console.log("driving..")
    }
}
vehicle1.drive()
vehicle2.drive()


class Vechile {
    constructor(name){
       this.name = name 
    }
   drive(){
    console.log("driving..")
   }
}

let vechile3 = new Vechile("ferarri")
let vechile4 = new Vechile("bnnz")
vechile3.drive()


console.log("vechile3",vechile3)
console.log("vechile4",vechile4)
vechile4.drive()





let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("server error")
        // resolve("the promise has been complete/fulfilled/resolved")
            
        
        },3000)
    })




console.log(promise1)

promise1.then((response) => {
    console.log("response")
}).catch(err =>{
    console.log(err)
})


console.log("after promise..");
