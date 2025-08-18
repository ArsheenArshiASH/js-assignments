document.writeln(
  "<h1 style='text-align:center'>Arrays</h1><h2 style='text-align:center'>Ch # 14-16</h2>"
);

/*1. Declare an empty array using JS literal notation to store 
student names in future.  */
var students = [];

/*2. Declare an empty array using JS object notation to store 
student names in future. */

//3. Declare and initialize a strings array.
var cartoons = ["Winx Club", "Spider Man", "Generator Rex", "Dragon Tails"];

//4.  Declare and initialize a numbers array.
var numbers = [1, 2, 3, 4, 5, 6, 7];

//5.  Declare and initialize a boolean array.
var ispresent = [true, false];

//6. Declare and initialize a mixed array.

var groups = ["group A", "Ali", "Zain", 14, 16, true];

/*7. Declare and Initialize an array and store available 
education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
BS, BCOM, MS, M. Phil., PhD). Show the listed 
qualifications in your browser like:  */
var qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil",
  "PhD",
];
for (var i = 0; i < qualifications.length; i++) {
  document.write(`<p>${i+1} ) ${qualifications[i]}</p>`);
}
/*8. Write a program to store 3 student names in an array.Take 
another array to store score of these three students. 
Assume that total marks are 500 for each student, display 
the scores & percentages of students like:  */
var students = ["Ali","Zain","Moiz"];
var score = [320,230,480];
var totalScore = 500;
document.write("<h3>Array of students and score</h3>");
//dynamic by loop
for(var i = 0 ; i< students.length ; i++){
document.write(`score of student ${students[i]} is ${score[i]}. Percentage: ${score[i]/totalScore*100}% <br />`)
}
//static
// document.write(`score of student ${students[0]} is ${score[0]}. Percentage: ${score[0]/totalScore*100}% <br />
// score of student ${students[1]} is ${score[1]}. Percentage: ${score[1]/totalScore*100}% <br />
// score of student ${students[2]} is ${score[2]}. Percentage: ${score[2]/totalScore*100}%`);


/*9. Initialize an array with color names. Display the array 
elements in your browser. */
var colors = ["red","pink","green","blue","yellow"];
document.write("<h3>Colors Array</h3>");
document.write(`${colors} <br />`);

/*a. Ask the user what color he/she wants to add to the 
beginning & add that color to the beginning of the array. 
Display the updated array in your browser*/
var newStartColor = prompt("what color do you want to add at the beginning of an array " + colors);
colors.unshift(newStartColor);
document.write(`${colors} <br />`);

/*b. Ask the user what color he/she wants to add to the end 
& add that color to the end of the array. Display the 
updated array in your browser. */
var newEndColor = prompt("what color do you want to add at the End of an array " + colors);
colors.push(newEndColor);
document.write(`${colors} <br />`);

/*c. Add two more colors to the beginning of the array. 
Display the updated array in your browser. */
colors.unshift("lime green" , "gold" );
document.write(`${colors} <br />`);

/*d. Delete the first color in the array. Display the updated 
array in your browser. */
colors.shift();
document.write(`${colors} <br />`);

/*e. Delete the last color in the array. Display the updated 
array in your browser. */
colors.pop();
document.write(`${colors} <br />`);

/*f. Ask the user at which index he/she wants to add a color 
& color name. Then add the color to desired 
position/index. . Display the updated array in your 
browser. */





/*g. Ask the user at which index he/she wants to delete 
color(s) & how many colors he/she wants to delete. Then 
remove the same number of color(s) from user-defined 
position/index. . Display the updated array in your 
browser.  */