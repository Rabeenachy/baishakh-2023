

 numbers = [2, 3, 4, 5, 10, 20]

console.log(numbers)

 

let evenNumbers = []

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
//     if(numbers[i] %2 == 0){
//         evenNumbers.push(numbers[i])
//     }
// }


// numbers.forEach((numbers) => {
//     if (numbers % 2 == 0){

    
//     evenNumbers.push(numbers)
//     }
// })

evenNumbers = numbers.filter((number) => { 
    if(number %2 == 0) {
        return true;
    }
} )
evenNumbers = numbers.filter((number) => (number % 2 == 0 ))
   



console.log(evenNumbers)



let ages = [10, 20, 30, 40, 40, 23]
// let str = ["age is 10", "age is 20"]

agesStr = ages.map ((age) => {
    return "age is" + age})

// agesStr = ages.map ((age) => { "age is" + age})
// console.log(agesStr)
