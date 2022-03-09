"use strict";

let coinFlip;


do  {
    coinFlip = (Math.floor(Math.random()  * 10 ) % 2);
    if (coinFlip === 0) {
        console.log("heads");    
    }
    else {
        console.log("tails");
        // or break;
    }
}
while( coinFlip === 0) ;
