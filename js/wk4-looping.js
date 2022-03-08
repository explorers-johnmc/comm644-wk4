/* Comm644 Spring 2022; John McDaniel, Wk4, Assignment 3
** Testing Looping constructs in javaScript, 
** the early essentials
*/

"use strict"
// #1; Larger or Smaller
// let value1;
// let value2;

// value1 = parseInt(prompt("Choose/Input two integrer numbers, for finding the largest \n Input your first number") );
// value2 = parseInt(prompt("Input your second number") );


// if (isNaN(value1)) {
//     value1 = 0;
// }

// if (isNaN(value2)) {
//     value2 = 0;
// }


// if (value1 === value2) {
//     document.write("Both values are the same, and thus the largest; " + value1 + ", " + value2);
// } else {
//        if (value1 > value2) {
//        document.write("Your first value1, is the largest; " + value1);
//        }
//        else {
//        document.write("Your second value, is the largest; " + value2);
//        }
// }

// #2; Word Translator
// let langChoice;

// langChoice = prompt("Please Choose your preferred language as  'DE' , 'EN' , 'ES', 'FR' \n Input your choice");

// switch (langChoice.toUpperCase()) {

// case "DE":
//     document.write("Hallo Welt!");
//     break;

// case "EN":
//     document.write("Hello World");
//     break;

// case "ES":
//     document.write("¡Hola Mundo!");
//     break;


// case "FR":
//     document.write("Bonjour le monde");
//     break;

// default:
//     document.write("... Hello World");

// }

// #3; Coin Flip
// let coinFlip;
// let userChoice;

// coinFlip = Math.round(Math.random() );
// coinFlip = coinFlip % 2; //force to be odd or even; or tails and heads
// console.log("random flip is: " + coinFlip);
// if ( coinFlip == 0) {
//     coinFlip = "heads";
// }
// else { coinFlip = "tails" }
// console.log("random flip is: " + coinFlip);

// userChoice = prompt("Heads or Tails?, You pick; please enter 'heads' or tails" );

// if (coinFlip == "heads") {
//     if (coinFlip == userChoice) {alert("This flip was heads, and you chose heads...you Win!"); }
//     else {alert("This flip was heads, and you chose tails...you lose!"); }
// }
// else {
//     if (coinFlip == userChoice) {alert("This flip was tails, and you chose tails...you Win!"); }
//     else {alert("This flip was tails, and you chose heads...you lose!"); }    
// }




// #4; Grade Assigner
// let gradeScore;

// gradeScore = parseInt(prompt("Please Enter in your score value; This will show you your grade. \n Input your score") );
// if ( (isNaN(gradeScore))  || (gradeScore < 1) || (gradeScore > 100) ){
//     gradeScore = parseInt(prompt("Please, Only numbers ... from '1' to '100'. \n Input your score") );
// }

// if ( (isNaN(gradeScore))  || (gradeScore < 1) || (gradeScore > 100) ){
//     alert("Please hit page stop / refresh and start over") ;
// }

// if (  (gradeScore >= 90) &&  (gradeScore <= 100) ) {
//     document.write("...A is your grade; good job");
//     console.log("....A is your grade; good job");
// }

// else if ( (gradeScore >= 80) &&  (gradeScore <= 89)  ) {
//     document.write("...B is your grade; keep improving");
//     console.log("....B is your grade; keep improving");
// }

// else if ( (gradeScore >= 70) &&  (gradeScore <= 79) ) {
//     document.write("...C is your grade; keep going, keep trying to get better");
//     console.log("....C is your grade; keep going, keep trying to get better");
// }

// else if ( (gradeScore >= 60) &&  (gradeScore <= 69) ) {
//     document.write("...D is your grade; you've failed");
//     console.log("....D is your grade; you've failed");
// }

// else {
//     document.write("... You've Failed, you didn't even make it to the D level");
//     console.log(".... You've Failed, you didn't even make it to the D level");
// }

// #5; Hitchhikers Guide
// let prompt1Choice;
// let prompt2Choice;

// alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");
// prompt1Choice = prompt("Which direction would you like to head? \(please enter 'forward', 'left', or 'right' \) ");

// switch (prompt1Choice.toLowerCase() ) {
// case "forward": {
//     alert("You walk 100 yards and safely make your way out of the cave.")
//     break;
//     }
// case "left": {
//     alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
//     break;
//     }
// case "right": {
//     alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
//     break;
//     }
// default:  {
//     alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
//     }
// }

// prompt2Choice = parseInt(prompt("GAME OVER!!! Please rate the game between 1 and 10") );
// if ( ( prompt2Choice >= 6 ) && ( prompt2Choice <= 10 ) ) {
//     alert("thank you for playing and feedback; Please play the game again; just hit 'page refresh' to start over");
// }
// else if ( ( prompt2Choice >= 1 ) && ( prompt2Choice <= 5 ) ) {
// alert("thank you for playing and feedback; we are working hard to improve the game");
// }
// else {
//     alert("thank you for playing the game");
// }