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
]



let todo1 = {
    "id": 1,
    "title": "hyper text markup language",
    "completed": true,
}


let todo2 = {
    "id": 2,
    "title": "html",
    "completed": true,
}


let todo3 = {
    "id": 3,
    "title": "css",
    "completed": false,
}

/* 
    html is complte
    css is complte
    js is pending

*/


if(true) {
    console.log("do some true task.");

}else{
    console.log("do something else");
}

if(todo1.completed) {
    console.log(`${todo1.title} is completed`)
}else {
    console.log(`${todo1.title} is pending`)
}

if(todo2.completed) {
    console.log(`${todo2.title} is completed`)
}else {
    console.log(`${todo2.title} is pending`)
}
if(todo3.completed) {
    console.log(`${todo3.title} is completed`)
}else {
    console.log(`${todo3.title} is pending`)
}


// todo1 = todos[0]
// todo2 = todos[1]
// todo3 = todos[2]



// function printTodoStatus(todo_obj) {
//     if(todo2.completed) {
//         console.log(`${todo_obi.todo} is completed`)
//     }else {
//         console.log(`${todo_obj.todo} is pending`)
//     }
// }

// printTodoStatus(todo[0])
// printTodoStatus(todo[1])
// printTodoStatus(todo3)

