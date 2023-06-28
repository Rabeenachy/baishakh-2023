let persons = [
    {
        first_name: "john",
        last_name: "doe",
        age: 10
    },
    {
        first_name: "rajesh",
        last_name: "hamal",
        age: 20
    },

    {
        first_name: "john",
        last_name: "wick",
        age: 30
    },
]

// console.log(`name is ${persons[0].first_name} ${persons[0].last_name} and age is ${persons[0].age}`)
// console.log(`name is ${persons[1].first_name} ${persons[1].last_name} and age is ${persons[1].age}`)
// console.log(`name is ${persons[2].first_name} ${persons[2].last_name} and age is ${persons[2].age}`)



function printPersonInfo(index) {
    console.log(`name is ${persons[index].first_name} ${persons[index].last_name} and age is ${persons[index].age}`)
    
}

printPersonInfo(0)
printPersonInfo(1)
printPersonInfo(2)

// console.log(10 / 3)
// console.log(9 % 3)






