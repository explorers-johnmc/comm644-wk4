"use strict";

let investment; 
let rate; 
let years;
{
// .... previous body of Future Value Calaculator
// ....

do { 
    investment = parseFloat(prompt("Enter investment amount as xxxxx.xx", 10000) );
    console.log("proposed investment is " + investment);
    investment = investment.toFixed(2);
}
while ( isNaN(investment) ||  (investment <= 0) ) ;
console.log("investment is " + investment);

//----
do { 
    rate = parseFloat(prompt("Enter the interest rate amount as xx.x", 3.5) );
    console.log("proposed rate is " + rate);
    rate = rate.toFixed(1);
}
while ( isNaN(rate)  ||  (rate <= 0) || (rate > 6.0) ) ;
console.log("rate is " + rate);

//----
do { 
    years = parseInt(prompt("Enter the number of year", 10) );
    console.log("proposed years is " + years);
}
while ( isNaN(years)  ||  (years < 1) || (years > 30) ) ;
console.log("years is " + years);



}