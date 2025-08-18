document.writeln(
  `<h1 style="text-align:center">IF…ELSE & ELSE IF STATEMENT</h1><h2 style ="text-align:center">Chapter # 12-13</h2>`
);

/*1. Write a program that takes a character (number or string) 
in a variable & checks whether the given input is a 
number, uppercase letter or lower case letter. (Hint: ASCII 
codes:- A=65, Z=90, a=97, z=122).  */
document.writeln(`<h3>Question no 1</h3>`);
var givenInput = prompt("Enter alphabetical letter in either lowercase or uppercase" ,"L");
if( givenInput !== "" && givenInput !== null){
  givenInput = givenInput.charCodeAt();
  if(givenInput >= 65 && givenInput <= 90){
  document.writeln("Your input was in Uppercase");
}else if(givenInput >= 97 && givenInput <= 122){
  document.writeln("Your input was in Lowercase");
}else{
  document.writeln("Your input was number");
}
}else{
  document.writeln("Your input Field was empty");
}

/*2. Write a JavaScript program that accept two integers and 
display the larger. Also show if the two integers are equal.  */
document.writeln(`<h3>Question no 2</h3>`);
var interger1 = +prompt("Enter any number", "5");
var interger2 = +prompt("Enter another number");
if (interger1 > interger2) {
  document.write(interger1 + " is greater than " + interger2);
} else if (interger1 === interger2) {
  document.write("both numbers are equal");
} else {
  document.write(interger2 + " is greater than " + interger1);
}

/*3. Write a program that takes input a number from user & 
state whether the number is positive, negative or zero.  */
document.writeln(`<h3>Question no 3</h3>`);
var inputNum = +prompt(
  "Enter a number , it can be positive interger or negative"
);
if (inputNum < 0) {
  document.write("Your input number is negative integer");
} else if (inputNum === 0) {
  document.write("Your input number is 0");
} else {
  document.write("Your input number is positive integer");
}

/*4. Write a program that takes a character (i.e. string of 
length 1) and returns true if it is a vowel, false otherwise  */
var char = prompt("Enter an alphabet", "a").toLowerCase();
document.writeln(`<h3>Question no 4</h3>`);

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  document.write("Your input is true");
} else {
  document.write("Your input is false");
}

/*5. Write a program that 
a. Store correct password in a JS variable. 
b.  Asks user to enter his/her password 
c.  Validate the two passwords: 
i. 
Check if user has entered password. If not, then 
give message “ Please enter your password” 
ii. 
Check if both passwords are same. If they are 
same, show message “Correct! The password you 
entered matches the original password”. Show 
“Incorrect password” otherwise.  */
document.writeln(`<h3>Question no 5</h3>`);
var password = prompt(`Enter your Password\nYou can use letters , numbers and special characters`);
if(password === "" || password === null ){
  alert("Password is required");
}
var interPassword = prompt(`Enter Your Previous Password`);
if(interPassword === "" || interPassword === null ){
  alert("Please enter your password");
}
if(password === interPassword){
  document.writeln(`Correct! The password you entered matches the original password`);
}else {
  document.writeln(`<h5 style = " color: red">Incorrect Password </h5>`);
}

/*6. This if/else statement does not work. Try to fix it: 
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
else 
greeting = "Good evening"; 
}  */
document.writeln(`<h3>Question no 6</h3>`);
var hour = 13;
if(hour < 18){
  document.write("<h5>Good Day</h5>");
}else{
  document.write("<h5>Good Good Evening</h5>");
}

/*7. Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements */
document.writeln(`<h3>Question no 7</h3>`);
var time = +prompt("Enter time in 24 hours format", "15");
if(time >= 0 && time <= 24){
  if(time >= 0 && time <= 12){
  document.write('<h4 style = "color :blue">Good Morning!</h4>');
  }else if(time >= 12 && time <= 17){
  document.write('<h4 style = "color :orange">Good Afternoon!</h4>');
  }else if(time >=17 && time <= 21){
  document.write('<h4 style = "color :violet">Good Evening!</h4>');
  }else{
  document.write('<h4 style = "color : grey">Good Night!</h4>');
  }
}else {
  document.write('<h4 style = "color : Red">Wrong Clock Time</h4>');
}