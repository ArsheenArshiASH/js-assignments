document.write("<h1 style = 'text-align:center'>Sting Methods</h1>");

/*1. Write a program that takes two user inputs for first and 
last name using prompt and merge them in a new variable 
titled fullName. Greet the user using his full name.  */

//6. Repeat Q1 using string concat() method. 
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName; method 1 q no 1
var fullName = firstName.concat(" " +lastName); // method 1 Q no 6
alert(`Hello ${fullName}`);

/*2. Write a program to take a user input about his favorite 
mobile phone model. Find and display the length of user 
input in your browser */
document.write("<h2>Question no 2</h2>");

var favMobile = prompt("Enter your Favourite Mobile Brand Name" ,"Samsung Z-fold");
document.write(favMobile , "<br /> Length of above sting is :", favMobile.length);

/*3. Write a program to find the index of letter “n” in the word 
“Pakistani” and display the result in your browser .  */
document.write("<h2>Question no 3</h2>");
var word = "Pakistani";
document.write(`<p>${word}</p>`);
document.write(`<p>The index of letter 'n' in ${word} is : ${word.indexOf("n")}</p>`);

/*4. Write a program to find the last index of letter “l” in the 
word “Hello World” and display the result in your browser.  */
document.write("<h2>Question no 4</h2>");
var greetWorld = "Hello World";
document.write(`<p>${greetWorld}</p>`);
document.write(`<p>The Last index of letter 'l' in ${greetWorld} is : ${greetWorld.lastIndexOf("l")}</p>`);

/*5. Write a program to find the character at 3rd index in the 
word “Pakistani” and display the result in your browser.*/
document.write("<h2>Question no 5</h2>");
document.write(`<p>${word}</p>`);
document.write(`<p>The character at 3rd index of ${word} is : ${word.charAt(3)}</p>`);

/*7. Write a program to replace the “Hyder” to “Islam” in the 
word “Hyderabad” and display the result in your browser.  */
document.write("<h2>Question no 7</h2>");
var city = "Hyderabad";
var revisedCity = city.replace("Hyder", "Islam")
document.write(`<p>${city}</p>`);
document.write(`<p>After replacing Hyder in <b>${city}</b> with Islam it became : <b>${revisedCity}</b></p>`);

/*8. Write a program to replace all occurrences of “and” in the 
string with “&” and display the result in your browser.  */
document.write("<h2>Question no 8</h2>");
var message = "Ali and Sami are best friends. They play cricket and football together"; 
var newMessage = message.replace(/and/g , "&");
document.write(`<p>${message}</p>`);
document.write(`<p>After replacing <b>and</b> with <b>&</b> the above statement is : <br />${newMessage}</p>`);

/*9. Write a program that converts a string “472” to a number 
472. Display the values & types in your browser.  */
document.write("<h2>Question no 9</h2>");
var stringNum = "472";
var convertNum = parseInt(stringNum);
// var convertNum = Number(stringNum); 2nd mwethod
document.write(`<p>${stringNum}</p>`);
document.write(`<p> the type of above number is : ${typeof stringNum}</p>`);
document.write(`<p>${convertNum}</p>`);
document.write(`<p> the type of above number is : ${typeof convertNum}</p>`);

/*10. Write a program that takes user input. Convert and 
show the input in capital letters.  */
document.write("<h2>Question no 10</h2>");
var input = prompt("Enter your favourite snack" , "oreo");
var newInput = input.toUpperCase();
document.write(`<p> User input : ${input}</p>`);
document.write(`<p> user input after capitalization is : ${newInput}</p>`);

/*11. Write a program that takes user input. Convert and 
show the input in title case.  */
document.write("<h2>Question no 11</h2>");
var lang = prompt("Enter your Favourite programming language", "javascript");
var newLang = lang.charAt(0).toUpperCase()+lang.slice(1);
document.write(`<p> User favourite programming language : ${lang}</p>`);
document.write(`<p> User favourite programming language in title case : ${newLang}</p>`);

/*12. Write a program that converts the variable num to 
string. 
Remove the dot to display “3536” display in your browser. */
document.write("<h2>Question no 12</h2>");
var number = 35.36 ; 
var numberString = number.toString();
var resultNum = numberString.replace(".", "")
document.write(`<p> number : ${number} <br /> The type of above value is :   ${typeof number}</p>`);
document.write(`<p> number to string and removing "." :  ${resultNum} <br /> The type of above value is :   ${typeof resultNum}</p>`);

/*13. Write a program to take user input and store username 
in a variable. If the username contains any special symbol 
among [@ . , !], prompt the user to enter a valid username. 
For character codes of [@ . 
Note: 
ASCII code of ! is 33 
ASCII code of , is 44 
ASCII code of . is 46 
ASCII code of @ is 64  */
var userName = prompt("Enter your User Name");
var userNameWord;
for (var i = 0 ; i < userName.length ; i++) {
 userNameWord = userName[i].charCodeAt();
 if((userNameWord >= 65 && userNameWord <= 90) || (userNameWord >= 97 && userNameWord <= 122) ){
} else if(userNameWord >= 48 && userNameWord <= 57) {
}else{
  alert("Invalid username");
}
}  // in above code anything other than alphabets and numbers are invalid

/*14. You have an array 
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an 
array. After searching, prompt the user whether the given 
item is found in the list or not. 
Note: Perform case insensitive search. Whether the user 
enters cookie, Cookie, COOKIE or coOkIE, program 
should inform about its availability. Example:  */
document.write("<h2>Question no 14</h2>");
var Arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties' , 'brownie'] ;
document.write("Available Goods in Bakery :" , Arr);
var userOrder = prompt("Welcom to Ash\'s Bakery \nChoose an item of your choice: \n1)cookie \n2)cake \n3)apple pie \n4)chips \n5)chocolate \n6)patties etc").toLowerCase();
// var available ;
// for (var i = 0 ; i < Arr.length ; i++){
// if (Arr[i] === userOrder){
//     available = userOrder;
//     document.write(`<p>${available} is available </p>`);
//     break;
// }} // only good if you find it .. not good code😂

var isFound = false;
for (var i = 0 ; i < Arr.length ; i++) {
  if(Arr[i] === userOrder){
    isFound = true;
    document.write(`<p>${userOrder} is available  at shelf ${i}</p>`);
    break;
  }
}
  if(isFound === false) {
     document.write(`<p>${userOrder} is not available at our Bakery right now</p>`);
}

/*15. Write a program to take password as an input from 
user. The password must qualify these requirements: 
a. It should contain alphabets and numbers 
b. It should not start with a number 
c. It must at least 6 characters long 
If the password does not meet above requirements, 
prompt the user to enter a valid password. 
For character codes of a-z, A-Z & 0-9, refer to ASCII 
table at the end of this document.  */

// var isvalid = false;  doesnot work well
// var hasAlpha = false;
// var hasNum = false;

// function validPassword(){
//   if(password === null || password.length < 6)
//     alert("Password must be atlest 6 digits long");

//   for(var i = 0 ; i < password.length ; i++){
//     var ascii = password.charCodeAt(i);
//     if((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
//       hasAlpha = true;
//     }else if(ascii >= 48 && ascii <=57){
//       hasNum = true;
//     }
//   }
//   if(!(hasAlpha && hasNum)){
//     alert("Password must have both alphabet and numbers")
//   }
//   var firstChar = password.charCodeAt(0);
//   if( firstChar >= 48 && firstChar <= 57 ){
//     alert("Password Must Not Start with Numbers");
//   }
//    isvalid = true;

//    alert("valid password")
// }
// do{
// var password = prompt("Enter a password \nnote: password must have alphabets and numbers");
// validPassword() ;
// }while(!(isvalid)); not good 




function validatePassword() {
  var password;
  var isValid = false;

  do {
    password = prompt("Please enter a password:");

    // Requirement c: It must be at least 6 characters long
    if (password === null || password.length < 6) {
      alert("Password must be at least 6 digits long.");
      continue;
    }

    var hasAlphabet = false;
    var hasNumber = false;

    // Check for alphabets and numbers (Requirement a)
    for (var i = 0; i < password.length; i++) {
      var ascii = password.charCodeAt(i);

      // Check for alphabets (a-z, A-Z)
      if ((ascii >= 97 && ascii <= 122) || (ascii >= 65 && ascii <= 90)) {
        hasAlphabet = true;
      }
      // Check for numbers (0-9)
      else if (ascii >= 48 && ascii <= 57) {
        hasNumber = true;
      }
    }

    if (!(hasAlphabet && hasNumber)) {
      alert("Password must contain both alphabets and numbers.");
      continue;
    }

    // Requirement b: It should not start with a number
    var firstChar = password.charCodeAt(0);
    if (firstChar >= 48 && firstChar <= 57) {
      alert("Password cannot start with a number.");
      continue;
    }

    isValid = true; // All requirements met
  } while (!isValid);

  alert("Valid password entered!");
}

validatePassword();

/*16. Write a program to convert the following string to an 
array using string split method. 
var university = “University of Karachi”; 
Display the elements of array in your browser */
document.write("<h2>Question no 16</h2>");
var uni = "University of Karachi";
var uniArray = uni.split("");
document.writeln(`<h4>Converting string into an array</h4>`);
document.writeln("string : " + uni + "<br />");
document.writeln("<h4>Array:</h4>");
for(var i = 0; i < uniArray.length ; i++) {
  document.writeln(uniArray[i] +'</br>');
}

/*17. Write a program to display the last character of a user 
input.  */
document.write("<h2>Question no 17</h2>");
document.writeln(`<h4>Dispalying Last Character Of Your Input</h4>`);
var display = prompt("Enter your Favourite Movie Name");
document.writeln("Your input was : " + display + "<br />");
var lastChar = display.charAt(display.length-1);
document.writeln("Your input Last characters is : " + lastChar);
