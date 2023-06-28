

let color = "white"


let watchPrice;


let student1 = 
    {
        name: "ram",
        phone: 111
    }
    
let student2 = 
    {
        name: "hari",
        phone: 256
    }
    
let student3 = 
    {
        name: "shyam",
        phone: 123
    }

    let students = [student1,student2,student3]

    
   

    let students_1 = [
        {
            name: "ram",
            phone: 111
        },
        {
            name: "hari",
            phone: 256
        },
        {
            name: "shyam",
            phone:123
        }
    ]

    console.log(students)

    let person = {
        name: "john doe",
        country: "usa",
        phone: 145
    }
    let person_2 = {
        name: "mary jane",
        country: "uk",
        phone: 126
    }

    console.log(person_2.phone);

    console.log("person_2 :", person_2);
    person_2 = "mary jane"
    person_2.phone = 126
    person_2.isMarried = false
    
    console.log("after person_2 :", person_2);
    console.log("unknown age property", person_2.age);

    let browsers = ["chrome", "firebox", "ms-word"]
    console.log("before", browsers);
    console.log(browsers[2]);
    browsers[2] = "ms-edge"
    console.log("after", browsers);
    console.log("unknown index in array", browsers[3]);
    browsers[3] = "brave"

    console.log("after", browsers);    


   