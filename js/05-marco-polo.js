"use strict";

let loopCount = 100;
let tripPoint1 = 3;
let tripPoint2 = 5;

for ( let num = 1; num <= loopCount; num++) {
  if (num % ( tripPoint1 * tripPoint2) === 0 ) {
    console.log("Marco Polo");
  }
   else if (num % tripPoint1 === 0) {
    console.log("Marco");
   }
  else if  (num % tripPoint2 === 0) {
    console.log("Polo");
  }
}