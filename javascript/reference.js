

let age1 = 10

let age2 = age1
console.log(age1);
console.log(age2);


let fruit1 = "apple"
let fruit2 = fruit1
fruit2 = "orange"
console.log({fruit2});
console.log({fruit1});


let person1 = {
    name: "ram",
    dob: "1999",
    address: "ktm"
}
let person2 = person1
person2.name = "hari"

console.log(person1);
console.log(person2);

let person3 = {...person1}
person3.name = "shyam"

console.log(person1);
console.log(person2);
console.log(person3);



function calculateSum(num1, num2, ...rest) {
console.log(num1)
// console.log(num2)
console.log(rest)
}

calculateSum(1,2)
calculateSum(1, 2, 3, 4, 5, 6, 7, 1000)