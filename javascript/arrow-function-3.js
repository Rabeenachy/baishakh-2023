

let numbers = [2, 3, 4, 5, 10, 20]

let doubleNumbers = []

// for (let i = 0 ; i < arr.length; i++) {
//     console.log(arr [i])
//     doubleArray.push(arr[i] * 2)
// }

// arr.forEach( (number) => {
//     doubleArray.push(number * 2)
// })

 let doubledNumbers = numbers.map( (number, index) => {
     console.log(number, "-", index)
     return number * 2
    })


console.log(numbers)
console.log(doubledNumbers)




let evenNumbers = []

for(let index = 0; i < number.length; i++) {
    console.log(numbers[index])
}
