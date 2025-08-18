document.write("<h1>MATH EXPRESSIONS</h1>");

/*1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.*/

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("sum of ", num1, " and ", num2, " is ", sum);
console.log(sum);

/*2. Repeat task1 for subtraction, multiplication, division & 
modulus.  */

var subtract = num2 - num1;
console.log(subtract); //method 1
console.log(num2 - num1); // method 2.. directly

var multiply = num1 * num2;
console.log(multiply);
document.write("<br />");
document.write(num1, " multiply by ", num2, " is = ", multiply);

var division = num2 / num1;
console.log(division);
document.write("<br />");
document.write(num2, " divided by ", num1, " is = ", division);

var modulus = num2 % num1;
console.log(modulus);
document.write("<br />");
document.write(num2, " divided by ", num1, " reminder is = ", modulus);

//3. Do the following using JS Mathematic Expressions

//a. Declare a variable.
var users;

/*b. Show the value of variable in your browser like “Value 
after variable declaration is: ??”.  */
document.write("<br /> the value after declaring the variable is ", users);

//c. Initialize the variable with some number.
users = 5;
//d. Show the value of variable in your browser like “Initial value: 5”
document.write("<br /> the initial value of variable is = ", users);

//e. Increment the variable.
users++;

//f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("<br /> variable value after increment is : ", users);
//g. Add 7 to the variable.
users += 7;

//h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("<br /> variable value after adding 7 is: ", users);

//i. Decrement the variable.
users--;

//j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("<br /> variable value after decrement is: ", users);

//k. Show the remainder after dividing the variable’s value by 3.

//  document.write("<br />", users % 3);//outputing it directly
var remainder = users % 3; // by storing

//l. Output : “The remainder is : 0”.
document.write(
  "<br /> after dividing variable by 3 the remainder is : ",
  remainder
);

/*4. Cost of one movie ticket is 600 PKR. Write a script to 
store 
ticket price in a variable & calculate the cost of buying 5 
tickets  */

var cost = 600;
document.write(
  "<br /> The cost of 1 movie ticket is ",
  cost,
  "PKR so the cost of 5 tickets = ",
  cost * 5,
  "PKR"
);

/*5. Write a script to display multiplication table of any 
number in your browser. E.g */

var table = +prompt(
  "enter your favourite number \nsee the table of it in browser",
  2
);
//static
document.write("<br />", table, " x ", 1, " = ", table * 1);
document.write("<br />", table, " x ", 2, " = ", table * 2);
document.write("<br />", table, " x ", 3, " = ", table * 3);
document.write("<br />", table, " x ", 4, " = ", table * 4);
document.write("<br />", table, " x ", 5, " = ", table * 5);
document.write("<br />", table, " x ", 6, " = ", table * 6);
document.write("<br />", table, " x ", 7, " = ", table * 7);
document.write("<br />", table, " x ", 8, " = ", table * 8);
document.write("<br />", table, " x ", 9, " = ", table * 9);
document.write("<br />", table, " x ", 10, " = ", table * 10);

//loop
document.write("<br /> by loop");
for (var i = 1; i <= 10; i++) {
  document.write("<br />" + table + " x " + i + " = " + table * i);
}

/*6. The Temperature Converter: It’s hot out! Let’s make a 
converter based on the steps here. 
a.  Store a Celsius temperature into a variable. 
b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
c. Now store a Fahrenheit temperature into a variable. 
d. Convert it to Celsius & output “NNoF is NNoC”.*/

var celcius = 25;
var tempInFahrenheit = (celcius * 9 /5)  + 32;
console.log(celcius + "°C is " + tempInFahrenheit + "°F");
var fahrenheit = 70;
tempInCelcius = (fahrenheit - 32) * 5/9;
console.log(fahrenheit + "°F in celcius is  " + tempInCelcius + "°C");

/*7.  Write a program to implement checkout process of a 
shopping cart system for an e-commerce website. Store 
the following in variables
a. Price of item 1 
b. Price of item 2 
c. Ordered quantity of item 1 
d. Ordered Quantity of item 2 
e. Shipping charges 
Compute the total cost & show the receipt in your browser.  */
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;

document.write("<br /> <h2>Shopping Cart</h2>");
document.write(` Price of item 1 is :  ${item1Price}`);
document.write(`<br /> Price of item 2 is :  ${item2Price}`);
document.write(`<br /> quantity of item 1 is :  ${item1Quantity}`);
document.write(`<br /> quantity of item 2 is :  ${item2Quantity}`);
document.write(`<br /> ship[ping chareges :  ${shippingCharges}`);
document.write(`<br /> <br /> Total Cost Of Your Order is : 
    ${
      item1Price * item1Quantity + item2Price * item2Quantity + shippingCharges
    }`);

/*8. Store total marks & marks obtained by a student in 2 
variables. Compute the percentage & show the result in 
your browser  */
document.writeln(`<h3> Marks Sheet </h3>`);
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks/totalMarks)*100;
document.writeln(`<p> Total Marks are : ${totalMarks} </p>`);
document.writeln(`<p> Marks Obtained are : ${obtainedMarks} </p>`);
document.writeln(`<p> Percentage is : ${percentage}%</p>`);

/*9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression. 
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
and 1 Saudi Riyal = 28 Pakistani Rupee) */
var currencyInDollars = 10;
var currencyInRiyals = 25;
var pakCurrency = currencyInDollars*104.80 + currencyInRiyals*28;
document.write(`<h4>Currency In PKR </h4><p>Total Currency in PKR ${pakCurrency}</p>`);

/*10. Write a program to initialize a variable with some 
number and do arithmetic in following sequence: 
a. Add 5 
b. Multiply by 10 
c. Divide the result by 2 
Perform all calculations in a single expression  */
var basicNum = 20;
console.log((basicNum+5)*10/2);

/*11. The Age Calculator: Forgot how old someone is? 
Calculate it! 
a. Store the current year in a variable. 
b. Store their birth year in a variable. 
c. Calculate their 2 possible ages based on the stored 
values.  */
//with prompt
var currentYear = +prompt("Enter Current Year to know your age", "2025");
var birthyear = +prompt("Enter your Birth Year to know your age");
document.writeln(`<h3>Age Calculation with prompt</h3>`);
document.writeln(`<li>Current Year is : ${currentYear}</li><li>Birth Year is : ${birthyear}</li><li>Your age is :${currentYear-birthyear} </li>`);
//without prompt static

var year = 2025;
var yearOfBirth = 2003;
document.writeln(`<h3>Age calculation static </h3>`);
document.writeln(`<li>Current Year is : ${year}</li><li>Birth Year is : ${yearOfBirth}</li><li>Your age is :${year-yearOfBirth} </li>`);

/*12. The Geometrizer: Calculate properties of a circle. 
a. Store a radius into a variable. 
b. Calculate the circumference based on the radius, and 
output “The circumference is NN”. 
(Hint : Circumference of a circle = 2 π r , π = 3.142) 
Calculate the area based on the radius, and output “The 
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)  */
document.writeln(`<h3>Properties of a circle</h3>`);
var radis = 20;
var circumferenceOfCircle = 2*3.142*radis;
var areaOfCircle = 3.142*radis**2;
document.writeln(`<p>Radius of a circle is : ${radis}</p><p>The circumference is : ${circumferenceOfCircle}</p><p>Area of Circle is : ${areaOfCircle}</p>`);

/*13. The Lifetime Supply Calculator: Ever wonder how 
much a “lifetime supply” of your favorite snack is? 
Wonder no more. 
a. Store your favorite snack into a variable 
b. Store your current age into a variable. 
c. Store a maximum age into a variable. 
d. Store an estimated amount per day (as a number). 
e. Calculate how many would you eat total for the rest of 
your life.  */
document.writeln(`<h3>The Lifetime Supply Calculator</h3>`);
var snack = "Lays";
var exampleAge = 15;
var maxAge = 65;
var snackPerDay = 3;
document.writeln(`<ol type ="A" ><li>Favourite Snack : ${snack}</li><li>Current age : ${exampleAge}</li><li>Maximum age : ${maxAge}</li><li>Amount of Snack per day : ${snackPerDay}</li><li>You will need : ${(maxAge-exampleAge)*365*3} ${snack} for whole Life</li><li>If you eat 3 Lays in Year then the amount will be : ${(maxAge-exampleAge)*3}</li></ol>`); //book example calculated supply by year not days 

