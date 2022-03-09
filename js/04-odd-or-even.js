"use strict";
let loopCount = 15;

for (let num = 0; num <= loopCount; num++ ) {
    console.log( num + " is " + ( (num % 2 === 0)? "even" : "odd") );
}