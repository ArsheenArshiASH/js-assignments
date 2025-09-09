document.writeln(`<h1 style ="text-align:center">Math Methods</h1>`)

/*1. Write a program that takes a positive integer from user & 
display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number   */

var userNum = +prompt("Enter a positive decimal number" , 3.54);
document.writeln(`<h2>Question no 1 output</h2>`);
document.writeln(`User Input Number : ${userNum}`);
var roundNum = Math.round(userNum);
document.writeln(`<br /> User Input Number Round OFF Value: ${roundNum}`);
var floorNum = Math.floor(userNum);
document.writeln(`<br /> Floor Number : ${floorNum}`);
var ceilNum = Math.ceil(userNum);
document.writeln(`<br /> Ceil Number : ${ceilNum}`);

/*2. Write a program that takes a negative floating point 
number from user & display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number  */

document.writeln(`<h2>Question no 2 output</h2>`);
var negativeNum = +prompt("Enter a negative decimal number" , -1.24);
document.writeln(`User Input Number : ${negativeNum}`);
var negRoundNum = Math.round(negativeNum);
document.writeln(`<br /> User Input Number Round OFF Value: ${negRoundNum}`);
var negFloorNum = Math.floor(negativeNum);
document.writeln(`<br /> Floor Number : ${negFloorNum}`);
var negCeilNum = Math.ceil(negativeNum);
document.writeln(`<br /> Ceil Number : ${negCeilNum}`);

/*3. Write a program that displays the absolute value of a 
number. 
E.g. absolute value of -4 is 4 & absolute value of 5 is 5  */

document.writeln(`<h2>Question no 3 </h2>`);
var value1 = 12.5;
var absoluteValue1 = Math.abs(value1);
document.writeln(`Number 1 : ${value1}`);
document.writeln(`<br />The absolute value of Number 1 : ${absoluteValue1}`);
var value2 = -12.5;
var negAbsolute = Math.abs(value2);
document.writeln(`<br /> Number 2 : ${value2}`);
document.writeln(`<br />The absolute value of Number 2 : ${negAbsolute}`);

/*4. Write a program that simulates a dice using random() 
method of JS Math class. Display the value of dice in your 
browser.:  */

document.writeln(`<h2>Question no 4 </h2>`);
var randomDice = Math.random()*6;
var dice = Math.floor(randomDice)+1;
document.writeln(`Random dice number : <b>${dice}</b>`);

/*5. Write a program that simulates a coin toss using random() 
method of JS Math class. Display the value of coin in your 
browser  */

document.writeln(`<h2>Question no 5 </h2>`);
var coin = Math.round(Math.random());
if(coin === 0) {
    document.writeln(`Random Coin Value : ${coin} = <b> Heads </b>`)
}else {
   document.writeln(`Random Coin Value : ${coin}  = <b> Tails </b>`)
}

/*6. Write a program that shows a random number between 1 
and 100 in your browser.  */

document.writeln(`<h2>Question no 6 </h2>`);
var num100 = Math.floor(Math.random()*100)+1;
document.writeln(`Random number from 1 to 100 is : <b>${num100}</b>`);

/*7. Write a program that asks the user about his weight. Parse 
the user input and display his weight in your browser. 
Possible user inputs can be: 
a. 50 
b. 50kgs 
c. 50.2kgs 
d. 50.2kilograms  */

document.writeln(`<h2>Question no 7 </h2>`);
var weight = prompt("Enter your weight in kgs" , "52.5kgs");
var parseWeight = parseFloat(weight);
if(!isNaN(parseWeight)){
    document.writeln(`The Weight of User is : <b>${parseWeight} Kilograms</b> `);
}else{
    document.writeln("Invalid input");
}

/*8. Write a program that stores a random secret number from 
1 to 10 in a variable. Ask the user to input a number 
between 1 and 10. If the user input equals the secret 
number, congratulate the user.  */

var secretNum = Math.floor(Math.random()*10)+1;
// console.log(secretNum); check secret number in console
var guessedNum = +prompt("Enter any number between 1 to 10");
if(guessedNum === 0 ) {
    alert("Input in required");
}else if(guessedNum === secretNum){
    alert("congratulation You Won the Game")
}else{
    alert("Sorry! Try Again");
}

// ch 26-30 finished