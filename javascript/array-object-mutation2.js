

let students = [
    {
        index:0,
        name: "ram",
        phone: 111,
        country: "usa"
    },
    {
        index:1,
        name: "hari",
        phone: 256,
        country: "uk"
    },
    {
        index:2,
        name: "shyam",
        phone:123,
        country: "pakistan"
    }
]

console.log("before", students);
console.log(students[0].name);

students[0].name = "ram bahadur"
students[2].name = "shyam sharma"

console.log("after", students);

console.log(students[3]);
students[3] = {
    index: 3,
    name: "hari",
    phone:222
}

console.log(students);


console.log(students[0] .name + " 's phone is " + students[0].phone + " and his country is " + students[0].country);
console.log(students[1] .name + " 's phone is " + students[1].phone + " and his country is " + students[1].country);
console.log(students[2] .name + " 's phone is " + students[2].phone + " and his country is " + students[2].country);


console.log(`${students[2] .name} 's phone is  ${students[2].phone}  and his country is  ${students[2].country}`);





