

let students = [
    {
        roll: 1,
        courses: ["Web", "Mobile"]
    },
    {
        roll: 2,
        courses: ["Web", "Graphic"]
    }
]

console.log(students[1].courses[1]);
students[1].courses[1] = "Mobile"
console.log(students)
