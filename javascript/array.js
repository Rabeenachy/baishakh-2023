
let fruits = ["apple", "banana", "orange"]

console.log( "in 0th index we have" ,fruits[0]);
console.log("in 1th index we have" ,fruits[1]);
console.log(" before - in 2th index we have" ,fruits[2]);


fruits[2] = "kiwi"
console.log("after - in 2nd index we have", fruits[2]);
console.log("before - in 3nd index we have", fruits[3]);

fruits[3] = "pinepapple"
console.log("after in 3nd index we have", fruits[3]);


let colors = [
    {
    color: "white",
    hexValue: "#00000"
    },
    {
        color: "orange",
        hexValue: "#FFA500"
    },
    {
        color: "teal",
        hexValue: "##008080"

        
        
        
    }


]

let response = {
    data: [
        {
            color: "white",
            hexValue: "#00000"
            },
            {
                color: "orange",
                hexValue: "#FFA500"
            },
            {
                color: "teal",
                hexValue: "##008080"
        
                  }
        
        
    ]
}

colors[0]
colors[0].rgb = "rgb(255,255,255)"
colors[1].rgb = "rgb(255,0,255)"

colors[3] = {
    color:"black",
    hexValue: "#00000"
}

console.log(colors);

console.log(colors[2].color);
console.log(colors[2].hexValue);
        console.log("after hexValue of " + colors[0].color + " is  " + colors[0].hexValue);
         console.log("0th",colors[0]);

        console.log("hexValue of " + colors[1].color + " is  " + colors[1].hexValue);
        console.log("hexValue of " + colors[2].color + " is  " + colors[2].hexValue);


        let person = {
            name: "ram"
        }

        person.name = "hari"
        console.log(person.phone);
        person.phone = 1111;
        console.log(person.phone);
