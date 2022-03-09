"use strict";

let again; 
let repeatQuestion; 
{
// .... previous body of MPG
// ....

do {
    // .... previous body of MPG
    // ....
    // prompt; enter numbers
    //calulate
    console.log("input new numbers ...");
    console.log("new numbers entered...");

    do { //again?
        
    again = prompt("Repeat entries? (y or n)", "y");
    again = again.toLowerCase() ;

    repeatQuestion = true;

    if ( (again === "y") || (again === "yes") ) {
        repeatQuestion = false;
        continue;
        }
    if ( (again === "n") || (again === "no") ) {
        repeatQuestion = false;
        break;
        }
    else {
        repeatQuestion = true;
        }
    }
    while (repeatQuestion == true);


}
while ( (again === "y")  || (again === "yes") );  //continue the do loop block
alert("Thank You, until next time .... Good-by")
}