
let db_users = [
    { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0'},
    
    { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2'},
    { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1'},
    { name: 'Urlima', email: 'urmila@gmail.com', password: 'urmila37'},
    { name: 'Yogesh', email: 'yogesh@gmail.com', password: 'yogesh38'}


]
const loginUser = (email, password) => {
    

    let matched = false;
    // for(let index = 0; index < db_users.length; index++){
    //     let user = db_users[index]
    //     if(user.email == email && user.password == password ){
    //       console.log("matched...")
    //          matched = true
        
    //     }
    //     console.log("loop-index",index)
    // }

db_users.forEach(user => {
    if(user.email == email && user.password == password ){
           matched = true
         
      
      }
})


    if (matched) {
        console.log("login success.")
    } else {
        console.log("invalid");
    }


return matched
}

// loginUser("yogesh@gmail.com", "yogesh38") // login successful
const result = loginUser ("yogesh@gmail.com", "yogesh38") // login successful
// console.log({result})


let fruits = ["apple", "orange", "kiwi"]
// for (let index = 0; index < fruits.length; index++){
//     console.log(`in index ${index} we have ${fruits[index]}`);
// }



fruits[3] = "banana"
fruits.push("peach")
fruits.unshift("pear")

function printInfo(element,index){
console.log(element, index);

}

// fruits.forEach(printInfo)

// fruits.forEach((fruit, index) => console.log(fruit, index))

console.log(fruits)
fruits.pop()
fruits.shift()
fruits.splice(1,2)
fruits.splice(1,0,"mango")
console.log(fruits)