


// console.log("10 - 2  * 2 =",(10 - 2) * 2);
// console.log("(10 - 10)  x 2 =",(10 - 10));
// console.log("(10 - 5)  x 2 =",(10 - 5) * 2);
// console.log("(10 - 6)  x 2 =",(10 - 6) * 2);

function diffAndMultiply(num1, num2, multiplyBy){
    // console.log("num1", num1);
    // console.log("num2", num2);
    // console.log("(10 - 6)  x 2 =",(10 - 6) * 2);
    console.log(`( ${num1} - ${num2} * ${multiplyBy} = ${(num1 -num2) * multiplyBy})` ,);
    console.log("\n")
}
// diffAndMultiply(8,5, 3)
// diffAndMultiply(10,5, 2)
// // diffAndDouble(4,5)
// // diffAndDouble(10,5)


// console.log("hello");

// calculateSum(1,2,3,4,5,6)
// calculateSum(1,2)
// calculateSum(1,2,3)


let db_users = []
    // db_users[0] = "ram"
    // db_users[1] = "shyam"

    // console.log(db_users.length);
    // db_users[db_users.length] = "shyam"

    // console.log(db_users);






// singupUser("ram", "r@m.com")
// singupUser("rambdr", "r@mbdr.com")


function signupUser(name, email) {
    console.log("add user to db_users");
    let user = {
"name": name,
"email": email
    }

db_users.push (user)
}

signupUser("ram","r@m.com")
signupUser("hari","r@hari.com")
signupUser("shyam","shyam@.com")

console.log(db_users);

