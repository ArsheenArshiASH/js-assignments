// 1. Declare a variable called username.

var username; //declaration
username = "Arsheen"; //assigning value

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Arsheen Sultan Barak";
console.log(username);
console.log(myName);

/* 3. Write script to 
   a) Declare a JS variable, titled message. 
   b) Assign “Hello World” to variable message 
   c) Display the message in alert box. */ 

var message;
message = "Hello World";
alert(message); //using variable name to dispaly stored string in alert box

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var student = "ArsheenArshiAsh";
var age = 20;
var trade = "Modern Web Development";
alert(student);
alert(age +" Years old");//alert only accepts one argument so use no commas
alert(trade);

//5. Write a script to display the following alert using one JS variable:

//\u00A0 space in console and in alert in crome use \t for other browsers, but it was making it difficult to count spaces
var food = 
`                      pizza
                       pizz
                       piz
                       pi
                       p  `//could not think of anytjhing that would center the tax so i use template litral
               
alert(food);

// 6. Declare a variable called email and assign to it a string that represents your Email Address

var email;
email = "arsheen.sultan.barak@gmail.com";

alert("My Email is : " + email);

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”

var book = "A smarter way to learn JavaScript";
alert("I am learning from the book called "+ book);

//8. Write a script to display this in browser through JS 

document.write("<h1>Yup I can write HTML through JS</h1>");

/* 9. Store following string in a variable and show in alert and 
browser through JS 
“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” */

var emoji = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬" //can use emojis in strings
alert(emoji);

var greeting = "Bye 💚";
alert(greeting);

// alert("<h5> Hello</h5>\n<h5> Hell</h5>\n<h5> Hel</h5>\n<h5> He</h5>\n<h5> H</h5>") can not use htm;l tags in alert box;

