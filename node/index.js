

// console.log("javascript")
// console.log(__filename);
// console.log(__dirname);




const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '12345678';


bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    // Store hash in your password DB.
console.log(hash)
});