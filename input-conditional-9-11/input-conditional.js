document.write(`<h1 style ="text-align:center">USER INPUT & CONDITIONAL STATEMENT</h1>
    <h2 style="text-align:center">Ch # 9-11</h2>`);

/*1. Write a program to take “city” name as input from user. If 
user enters “Karachi”, welcome the user like this: 
“Welcome to city of lights”  */
var city = prompt("Enter A City Of Pakistan Here", "karachi").toLowerCase();
if(city==="karachi"){
    document.writeln("Welcome to city of lights");
}else{
    document.write("welcome to " +city);
}

/*2. Write a program to take “gender” as input from user. If the 
user is male, give the message: Good Morning Sir. If the 
user is female, give the message: Good Morning Ma’am. */
var gender = prompt("Enter your gender \nmale or female","female").toUpperCase();
if(gender === "MALE"){
    document.writeln("<br /> Good Morning Sir");
}else if(gender === "FEMALE"){
     document.writeln("<br /> Good Morning Ma’am.");
}else{
     document.writeln("<br /> Good Morning");
}

/*3. Write a program to take input color of road traffic signal 
from the user & show the message according to this table: 
Signal color  Message 
Red           Must Stop 
Yellow        Ready to move
Green         Move now */
var trafficLights = prompt("Enter Traffic Light Color \nRed \nYellow \nGreen").toLowerCase();
 if(trafficLights === "red"){
   document.writeln("<br /> Must Stop ");
}else if(trafficLights === "yellow"){
   document.writeln("<br /> Ready to move ");
}else if(trafficLights === "green"){
  document.writeln("<br /> Move now ");
}else{
    document.writeln("<br /> Instructions not found ");
}

/*4. Write a program to take input remaining fuel in car (in 
litres) from user. If the current fuel is less than 0.25litres, 
show the message “Please refill the fuel in your car”  */
var fuel = +prompt("Enter remaing fuel of car in litres" ,"0.15");
var currentFuel = 0.25;
if(fuel < currentFuel){
  document.writeln("<br /> Please refill the fuel in your car" );
}else{
    document.writeln("<br /> your fuel is sufficient");
}

/*5. Run this script, & check whether alert message would be 
displayed or not. Record the outputs. 
a. var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
} */
var a = 4;
if(++a === 5){
    alert("given condition for variable a is true"); 
}
document.write("<h4>Question no 5) a.</h4><p>Alert will be displayed since condition is true</p>");

/*b. var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} */
var b = 82;
if(b++ === 83){
    alert("given condition for variable a is true"); 
}
document.write("<h4>Question no 5) b.</h4><p>Alert will not be displayed since condition is false</p>");
/*c. var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
} */
var c = 12;
if (c++ === 13){ 
alert("condition 1 is true"); 
} //not true

if (c === 13){ 
alert("condition 2 is true"); 
} //true

if (++c < 14){ 
alert("condition 3 is true"); 
} //not true

if(c === 14){ 
alert("condition 4 is true"); 
}//true
document.write("<h4>Question no 5) c</h4><p>Conditions 2 and 4 are true</p>");

/*d. var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
}*/
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
}
document.write("<h4>Question no 5) d</h4><p>The total cost equals so alert will be displayed</p>");

/*e. if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
} */
if(true){
    alert("True")
}
if(false){
    alert("false")
}
document.write("<h4>Question no 5) e</h4><p>If statement only runs when the condition is true or value is truthy so true will be displayed</p>");

/*f. if("car" < "cat"){ 
alert("car is smaller than cat"); 
} */
if("car" < "cat"){
   alert("car is smaller than cat");  
}
document.write("<h4>Question no 5) f</h4><p>Car is smaller than cat</p>");

/*6. Write a program to take input the marks obtained in three 
subjects & total marks. Compute & show the resulting 
percentage on your page. Take percentage & compute 
grade as per following table:*/
document.write("<h4>Marks Sheet</h4>");
var totalMarks = +prompt("Enter Total marks in 3 Subjects", "300");
var marksObtained = +prompt("Enter your obtained marks in 3 subjects", "219");
var percentage = marksObtained/totalMarks*100;
document.write(`<p>Total Marks : ${totalMarks}</p><p>Marks Obtained : ${marksObtained}</p>`);
if(marksObtained <= totalMarks){
    if(percentage  >= 80){
    document.write(`<p>Percentage : ${percentage}%</p><p>Grade : A-one</p> <p>Remarks : Excellent</p>`);
    }else if(percentage >= 70){
    document.write(`<p>Percentage : ${percentage}%</p><p>Grade : A</p> <p>Remarks : Good </p>`);
    }else if(percentage >= 60){
    document.write(`<p>Percentage : ${percentage}%</p><p>Grade : B</p> <p>Remarks : You need to improve </p>`);
    } else{
    document.write(`<p>Percentage : ${percentage}%</p><p>Grade : Fail</p> <p>Remarks : Sorry </p>`);
   }
}else{
    alert("Enter valid number");
    document.write(`<p> Marks obtained can not be greater than Total Marks</p>`);
}

/*7. Guess game: 
Store a secret number (ranging from 1 to 10) in a variable. 
Prompt user to guess the secret number. 
a. If user guesses the same number, show “Bingo! Correct 
answer”. 
b. If the guessed number +1 is the secret number, show 
“Close enough to the correct answer”.  */

document.write("<h3>Guess Game</h3> <p>The answer was 6</p>");
var secretNum = 6;
var guessedNum = +prompt("Guess a number from 1 to 10");
if(guessedNum === secretNum){
    alert("Bingo! Correct answer");
}else if(guessedNum + 1 === secretNum){
    alert("Close enought to Correct answer");
}else{
    alert("Try latter");
}

/*8. Write a program to check whether the given number is 
divisible by 3. Show the message to the user if the number 
is divisible by 3.  */
var userNum = +prompt("Enter a number of your choice", "6");
if(userNum % 3 === 0){
    alert(`${userNum} is Divisible by 3`);
} else{
    alert(`${userNum} is not Divisible by 3`);
}

/*9. Write a program that checks whether the given input is an 
even number or an odd number.  */
var inputNum = +prompt("Enter a number to check if it is even or odd");
if(inputNum % 2 === 0){
 alert(`${inputNum} is even number`);
}else{
    alert(`${inputNum} is odd number`); 
}

/*10. Write a program that takes temperature as input and 
shows a message based on following criteria 
a. T > 40 then “It is too hot outside.” 
b. T > 30 then “The Weather today is Normal.” 
c. T > 20 then “Today’s Weather is cool.” 
d. T > 10 then “OMG! Today’s weather is so Cool.”  */
var temp = +prompt("Enter temperatue in Celcius", "44");
if(temp > 40){
   alert("It is too hot outside.");
}else if(temp > 30){
    alert("The Weather today is Normal");
}else if(temp > 20){
    alert("Today’s Weather is cool.");
}else if(temp > 10){
    alert("OMG! Today’s weather is so Cool.");
}else {
    alert("IT IS FREEZING OUTSIDE");
}

/*11. 
Write a program to create a calculator for +,-,*, / & % 
using if statements. Take the following input: 
a. First number 
b. Second number 
c. Operation (+, -, *, /, %) 
Compute & show the calculated result to user.  */
document.write("<h3>Calculating Result of User input numbers</h3> <p>result of your both numbers is below:</p>");
var firstNum = +prompt("Enter a number" , "55");
var secondNum = +prompt("Enter second number" , "5");
document.write(`<p>The addition of ${firstNum} + ${secondNum} = ${firstNum + secondNum}</p>
         <p>The Multiplication of ${firstNum} x ${secondNum} = ${firstNum * secondNum}</p>
         <p>The Subtraction of ${firstNum} - ${secondNum} = ${firstNum - secondNum}</p>
         <p>The division of ${firstNum} / ${secondNum} = ${firstNum / secondNum}</p>
         <p>The remainder of ${firstNum} / ${secondNum} = ${firstNum % secondNum}</p> `);
