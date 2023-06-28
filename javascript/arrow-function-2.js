
let db_users = []

// function sinupUser(name,email,password){
//     console.log("add new user");
//     db_users.push({
//         "name": name,
//         "email": email,
//         "password": password
//     })
// }

// const hashPassword = (password) =>  {
//     return password = Date.now()
//     }

const hashPassword = (password) => password + Date.now() 
     
    


let sinupUser = (name,email,password) =>  {
    
        db_users.push({
            "name": name,
            "email": email,
            "password": hashPassword(password)
})
        }

sinupUser("ram", "emil", "password")
sinupUser("shyam", "emil", "password")
sinupUser("hari", "hari@123", "1234567")

// console.log(db_users)



// function hashPassword(password){
    
// return password + Date.now()
// return "ASDQRDFA@#$"
// return hased_password

// console.log("ASDQRDFA@#$")
// }



// hashPassword(124578)
// hashPassword(124578)
// hashPassword("password")

function sum(num1, num2) {
    // console.log(num1 + num2)
    return num1 + num2
}

// let result = sum(1,2)
// console.log("sum of 1 and 2 is", result)
// console.log("sum is", sum(10,2))
// sum(10,2)


// function deleteUser(){
//     console.log("user has been delete..");
// }

const deleteUser = () => {
    console.log("user has been delete.."); 
}

deleteUser()

// console.log({name})
// var name = "ram"