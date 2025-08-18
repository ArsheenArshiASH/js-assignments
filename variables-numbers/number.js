document.write("<h1>VARIABLES FOR NUMBERS</h1>");
//1. Declare a variable called age & assign to it your age. Show your age in an alert box. 
var age = 20;
alert("I am " +age + " years old" );

var visted = 12;
alert("you have visted this page "+ visted +" times")
document.write("you have visted this page ", visted ," times");
visted += 2;
alert("you have visted this page "+ visted +" times");
visted++;
alert("you have visted this page "+ visted +" times");

var birthYear = 2004;
document.write("<br />");
document.write("My birth year is ", birthYear);
document.write("<br />");
document.write("data type of my declared variable is ", typeof birthYear);

/*4. A visitor visits an online clothing store 
www.xyzClothing.com . Write a script to store in variables 
the following information: 
b. Product title 
c. Quantity i.e. how many products a visitor wants to 
order 
Show the following message in your browser: “John 
Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */

var store = "www.xyz Clothing.com";
var vister = prompt("Enter Your Name");
var product = prompt("Select product\nT-Shirt\nBags\nDress","T-Shirt");
var quantity = +prompt("add quentity of selected item");

document.write("<br />");
document.write(vister," ordered ",quantity," " ,product, " from ", store);
 