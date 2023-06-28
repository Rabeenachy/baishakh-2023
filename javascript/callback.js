
let person = [
    {name: "ram"},
    {name: "shyam"},
    {name: "shyam"},
    {name: "shyam"},
    {name: "shyam"},
    {name: "shyam"},
    {name: "shyam"}
]

function doTaskOne(){
    console.log("do task One");
    doTaskTwo()
    console.log("after task one");
}
function doTaskTwo(){
    console.log("do task One");
}
doTaskOne()



function doSomething(){
    console.log("do something")
    return 1212
}

// console.log(doSomething())

person.forEach((el,index) => {
    console.log(el,index)
})

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);