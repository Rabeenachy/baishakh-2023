let todos = [
    {
        "id": 1,
        "title": "html",
        "completed": true,
    },
    {
        "id": 2,
        "title": "css",
        "completed": true,
    },
    {
        "id": 3,
        "title": "js",
        "completed": false,
    },
    {
        "id": 4,
        "title": "node",
        "completed": false,
    },
    {
        "id": 5,
        "title": "react",
        "completed": false,
    },
    {
        "id": 6,
        "title": "express",
        "completed": false,
    },
    {
        "id": 7,
        "title": "mondob",
        "completed": false,
    },
]



/* 
    html is complte
    css is complte
    js is pending

*/


// if(true) {
//     console.log("do some true task.");

// }else{
//     console.log("do something else");
// }

todo3 = todos[2]




// if(todo1.completed) {
//     console.log(`${todo1.title} is completed`)
// }else {
//     console.log(`${todo1.title} is pending`)
// }

// if(todo2.completed) {
//     console.log(`${todo2.title} is completed`)
// }else {
//     console.log(`${todo2.title} is pending`)
// }
// if(todo3.completed) {
//     console.log(`${todo3.title} is completed`)
// }else {
//     console.log(`${todo3.title} is pending`)
// }





function printTodoStatus(todo_obj) {
    if(todo_obj.completed) {
        console.log(` ${todo_obj.title} is completed `)
    }else {
        console.log(` ${todo_obj.title} is pending `)
    }
}

// printTodoStatus(todos[0])
// printTodoStatus(todos[1])
// printTodoStatus(todo3)


for( let index = 0 ; index <= 6; index++ ) {
    let todo_obj = todos [index]
    if(todo_obj.completed) {
        console.log(` ${todo_obj.title} is completed ${index} `)
    }else {
        console.log(` ${todo_obj.title} is pending ${index} `)
    }
}
