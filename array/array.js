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
document.write("<h3>Colors Array</h3><b>The Original Array</b> <br />");
document.write(`${colors} <br />`);

/*a. Ask the user what color he/she wants to add to the 
beginning & add that color to the beginning of the array. 
Display the updated array in your browser*/
var newStartColor = prompt("what color do you want to add at the beginning of an array " + colors);
colors.unshift(newStartColor);
document.write(`<b>after adding user color to start :</b> <br />${colors} <br />`);

/*b. Ask the user what color he/she wants to add to the end 
& add that color to the end of the array. Display the 
updated array in your browser. */
var newEndColor = prompt("what color do you want to add at the End of an array " + colors);
colors.push(newEndColor);
document.write(`<b>after adding user color to End of an array :</b> <br /> ${colors} <br />`);

/*c. Add two more colors to the beginning of the array. 
Display the updated array in your browser. */
colors.unshift("lime green" , "gold" );
document.write(`<b>Adding 2 colors at the beginning of an array :</b> <br />${colors} <br />`);

/*d. Delete the first color in the array. Display the updated 
array in your browser. */
colors.shift();
document.write(`<b>Deleting the first color and showing the updated array :</b> <br />${colors} <br />`);

/*e. Delete the last color in the array. Display the updated 
array in your browser. */
colors.pop();
document.write(`<b>Deleting the Last color and showing the updated array :</b> <br />${colors} <br />`);

/*f. Ask the user at which index he/she wants to add a color 
& color name. Then add the color to desired 
position/index. . Display the updated array in your 
browser. */
var indexColor = +prompt("At what index you want to enter a color eg 1-10", 3);
var colorAtIndex = prompt("Enter a color name that you want to add previous mentioned message", "Black");
colors.splice(indexColor,0 , colorAtIndex);
document.write(`<b>Showing updated array by adding user's mentioned color to user's desired index :</b> <br />${colors} <br />`);

/*g. Ask the user at which index he/she wants to delete 
color(s) & how many colors he/she wants to delete. Then 
remove the same number of color(s) from user-defined 
position/index. . Display the updated array in your 
browser.  */
var deleteIndex = +prompt("From what index you want to delete a color eg 1-8", 2);
var deleteNum =  +prompt("How many items do you want to delete from this array eg 1-8", 3);
colors.splice(deleteIndex,deleteNum);
document.write(`<b>Showing updated after deleting user's mentioned color from user's mentioned index and user count:</b> <br />${colors} <br />`);

/*10. Write a program to store student scores in an array & 
sort the array in ascending order using Array’s sort 
method.  */
document.write("<h4>Original Array of Student's score</h4>");
var studentScores = [280, 250, 180, 120];
document.write(studentScores);
document.write("<h4>Array of Student's score after sorting it in ascending order</h4>");
studentScores.sort();
document.write(studentScores);


/*11. Write a program to initialize an array with city names. 
Copy 3 array elements from cities array to selectedCities 
array. */
document.write("<h4>Cities Q no 11</h4>");
var cities = ["Osaka", "Tokyo", "Kyoto", "Sapporo" ,"Yokohama" , "Nagoya"];
var selectedCities = cities.slice(1,4);
document.write("Original Cities list : "+ cities + "<br />");
document.write("Selected Cities list : "+ selectedCities + "<br />");

/*12.  Write a program to create a single string from the 
below mentioned array: 
var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
(Use array’s join method)  */
document.write("<h4>Array of Words into string</h4>");
 var wordArray = ["This" , "is", "my", "cat"];
 document.write("Array :" + wordArray + "<br />");
 var newWordArray = wordArray.join(" ");
 document.write("Array into String :" + newWordArray );

 /*13. Create a new array. Store values one by one in such a way 
that you can access the values in the order in which they 
were stored. (FIFO-First In First Out)  */
 document.write("<h4>Array of Devices : getting element a/c to FIFo (First In First Out) </h4>");
 var devices = ["Keyboard","Mouse","Printer","Monitor"];
 document.writeln("Devices : " + devices + "<br>");
 
 for(var i = 0 ; i < devices.length ; i++){
  document.writeln("Out:" + devices[i] + "<br>");
}

/*14. Create a new array. Store values one by one in such a way 
that you can access the values in reverse order. (Last In
First Out)  */
document.write("<h4>Array of Ingredients : getting element a/c to LIFO (Last In First Out) </h4>");
var ingredients = ["Salt" , "Pepper" ,"Chilli" ,"Ginger" , "Coram seeds"];
document.writeln("Ingredients : " + ingredients + "<br>");

 for(var i = ingredients.length -1  ; i >= 0 ; i--){
  document.writeln("Out:" + ingredients[i] + "<br>");
}

/*15. Write a program to store phone manufacturers (Apple, 
Samsung, Motorola, Nokia, Sony & Haier) in an array. 
Display the following dropdown/select menu in your 
browser using document.write() method:  */

document.write("<h4>Array of phones : drop down </h4>");
var phones = ["Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
document.writeln(`<select>
   <option> ${phones[0]} <option>  
   <option> ${phones[1]} <option> 
   <option> ${phones[2]} <option> 
   <option> ${phones[3]} <option>
   <option> ${phones[4]} <option>
   <option> ${phones[5]} <option> </select>`)
