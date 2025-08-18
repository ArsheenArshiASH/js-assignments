document.writeln(`<h1 style="text-align : center">MATH EXPRESSIONS Ch# 6-9</h1>`);
/*1. Write a program to take a number in a variable, do the 
required arithmetic to display the following result in your 
browser: */ 
var x = +prompt("Enter a number", "5");
document.writeln("The value of x is : " + x);
document.writeln(`<br /><p>----------------</p><p>The value of ++x is : ${++x}</p><p>Now the value of x is : ${x}</p></p><p>The value of x++ is : ${x++}</p><p>Now the value of x is : ${x}</p><p>The value of --x is : ${--x}</p><p>Now the value of x is : ${x}</p><p>The value of x-- is : ${x--}</p><p>Now the value of x is : ${x}</p>`);

/*2. What will be the output in variables a, b & result after 
execution of the following script: 
var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
Explain the output at each stage:
 --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;  */
var a = 2; //1
var b = 1; //0
var result = --a - --b + ++b + b--; //3
//steps
// --a = 1 
// --a - --b = 1 - 0;
//--a - --b + ++b = 1 - 0 + 1 
// --a - --b + ++b + b--  = 1 - 0 + 1 + 1 = 3
document.write("<h4>Question no 2</h4><p>The final value of a is : 1</p><p>The final value of b is : 0</p><p>The final value of result variable is : 3</p>")
console.log(a, b , result);

// 3. Write a program that takes input a name from user & greet the user. 
var userName = prompt("Hi Dear User ! Enter Your Name");
alert("Welcome " + userName);

//4.  not found in book

/*5. Write a program to take input a number from user & 
display it’s multiplication table on your browser. If user 
does not enter a new number, multiplication table of 5 
should be displayed by default. */
document.writeln(`<h3>Table From User Input</h3>`);
var table = +prompt("Enter a number to get\nMultiplication Table Of A Number", "5");
for(var i = 1; i <= 10; i++){
  document.writeln(`${table} x ${i} = ${table * i} <br/>`);
}

/*6. Take 
a) Take three subjects name from user and store them in 3 
different variables. 
b) Total marks for each subject is 100, store it in another 
variable. 
c) Take obtained marks for first subject from user and 
stored it in different variable. 
d) Take obtained marks for remaining 2 subjects from user 
and store them in variables. 
e) Now calculate total marks and percentage and show the 
result in browser like this.(Hint: user table)  */

var subject1 = prompt("Enter a Subject Name" , "Urdu");
var subject1Marks = +prompt("Enter your " +subject1 + " Marks");
var subject2 = prompt("Enter the Second Subject Name", "English");
var subject2Marks = +prompt("Enter your " +subject2 + " Marks");
var subject3 = prompt("Enter the Third Subject Name" , "Physics");
var subject3Marks = +prompt("Enter your " +subject3 + " Marks");

var totalMarks = 100;
document.writeln(`<table style="width:600px ; text-align:center">
    <tr>
    <th>Subjects </th>
    <th>Total Marks </th>
    <th>Marks Obtained </th>
    <th>Percentage </th>
    </tr> 
    <tr>
    <td>${subject1}</td> <td>${totalMarks}</td> <td>${subject1Marks}</td> 
    <td>${subject1Marks/totalMarks*100}%</td>
    </tr>
    <tr>
    <td>${subject2}</td> <td>${totalMarks}</td> <td>${subject2Marks}</td>
    <td>${subject2Marks/totalMarks*100}%</td>
    </tr>
    <tr>
    <td>${subject3}</td> <td>${totalMarks}</td> <td>${subject3Marks}</td>
    <td>${subject3Marks/totalMarks*100}%</td>
    </tr>
    <tr>
    <td><td> <td>${totalMarks*3}</td> <td>${subject1Marks+subject2Marks+subject3Marks}</td> <td></td>
    </tr>
    </table>`)
// console.log(subject1,subject2,subject3); checking if prompt is working