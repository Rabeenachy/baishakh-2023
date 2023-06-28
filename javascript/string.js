
let person = {
    name: "ram",
    phone: 1112
}
console.log(" phone num of " + person.name + " is " + person.phone);

console.log("this is string");
console.log('this is string');
console.log(`this is string`);

console.log(`phone num of ${person.name} is ${person.phone}`);


let courses = ["web", "mern"]
console.log(`before in 0th index we have ${courses[1]}`);
courses[1] = "mern-stack"
courses[2] = "python"
console.log(`after in 0th index we have ${courses[1]}`);