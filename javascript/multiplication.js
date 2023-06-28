
// for ( let startingPoint = 1 ; startingPoint < 10; startingPoint++)
// {
//     console.log( `5 x ${startingPoint} = ${5 * startingPoint }`);
// }
console.log("end of loop");

function findMultiplication(number, startFrom, endAt){
    // console.log( ` calculate....multiplicate of  ${number} from ${startFrom} to ${endAt} `);

    for (startFrom; startFrom < endAt; startFrom++){
       console.log( `${number} x ${startFrom} = ${number * startFrom} `);
    }
}
findMultiplication(4,1,10)
findMultiplication(10,7,10)