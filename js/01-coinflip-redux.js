"use strict";

let coinFlip;


let flipCount = prompt("Heads or Tails? \n\t Enter the number of time you want to flip the coin");

for ( ; flipCount !== 0; flipCount--) {
    coinFlip = (Math.floor(Math.random()  * 10 ) % 2);
    if (coinFlip === 0) {
        console.log("heads");    
    }
    else {
        console.log("tails");
    }
}
