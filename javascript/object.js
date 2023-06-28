

let room1 = {
    color: "yellow",
    doorCount:2,
    dimension: {
        length: {
            value:10,
            unit: "meter"
        },
        width: {
            value: 100,
            unit: "feet"
        },
         height: {
            value: 100,
            unit: "meter"
    },
}
}

let room2 = {
    color: "red",
    doorCount:2,
    dimension: {
        length: {
            value:10,
            unit: "meter"
        },
        width: {
            value: 100,
            unit: "feet"
        },
         height: {
            value: 100,
            unit: "feet"
    },
}
}

// let courses = ["web", "mern", "python"]

let rooms = [
    {color: "yellow", dimension: "100 100 100"},
    {color: "red", dimension: "100 100 100"},
    {color: "red", dimension: "100 100 100"},
]

let fruit1 = {
    name : "apple",
    calories: 50
}

let teacher2 = {
    name: "ram",
    phone: 1222,
    address: "address-2"
}

let courses = [

    {
        title: "web",
     price: 15000,
      duration: 3, 
      teacher: {
        name: "xyz",
        phone: 111,
        address: "address",
      },
      shift: ["morning", "evening"]
    },

    {title: "mern",
     price: 15000, 
     duration: 3, 
     teacher: teacher2
    },

    {title: "python",
     price: 15000, 
     duration: 3, 
     teacher: teacher2,
     shift: ["morning"]
    },


]

// console.log(courses);

console.log(teacher2.name);
console.log(teacher2.phone);

console.log(teacher2.name + "s number is " + teacher2.phone);

let firstName = "ram"
let lastName = "shrestha"

let fullName = firstName + "" + lastName

console.log("his name is " + fullName);


let mylaptop = {
    brand: "acar",
    generation: "I5",
    processor: "I5",
    price: 1000
}
console.log("before",mylaptop.processor);

mylaptop.processor = "I7"
console.log("after",mylaptop.processor);
console.log("price",mylaptop.price);



let teal = {
    color: "white",
    hexValue: "#AAAAA",
    color: "teal",
    color: "teal-change",
    Color: "TEAL"
}
let colors = [
    {
    color: "white",
    hexValue: "FFFFFF"
    },
    {
        color: "orange",
        hexValue: "FFDEF"
    },
    teal

]
console.log(teal.hexValue);
console.log(teal.color);
console.log(teal.Color);



