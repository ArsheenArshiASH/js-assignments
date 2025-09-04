document.writeln(`<h1 style = "text-align:center"> Arrays and Loops </h1>`);
document.writeln(`<h2 style = "text-align:center"> Ch # 17 - 20</h2>`);

/*1. Declare and initialize an empty multidimensional array. 
(Array of arrays)   */

var multiDiArray = []; // declaring multi dimensional array
var arrayRows = 3 ;
//initializing empty array with multiple arrays
for(var i = 0 ; i < arrayRows ; i++ ) {
    multiDiArray[i] = [];
}
// console.log(multiDiArray)
document.writeln(`<h3> Question no 1 </h3> See Code`);

/*2. Declare and initialize a multidimensional array 
representing the following matrix 
 0 1 2 3
 1 0 1 2
 2 1 0 1     */

var matrixArray = [[0 , 1, 2 , 3], [1 , 0 , 1 , 2], [2 , 1 , 0 , 1]]; //using nested array literals.
// console.log(matrixArray);
document.writeln(`<h3> Question no 2 </h3> See Code`);


/*3. Write a program to print numeric counting from 1 to 10.  */

document.writeln(`<h3> Question no 3</h3> counting: <br />`);
for(var i = 1 ; i <= 10 ; i++) {
 document.writeln(`${i} <br />`);
}

/*4.  Write a program to print multiplication table of any 
number using for loop. Table number & length should be 
taken as an input from user.   */

document.writeln(`<h3> Question no 4</h3>`);
document.writeln(`<p> <label for = "table">Enter a number to get its multiplicarion table</label> <br /> <input type = "number" id= "table" > </p>`);
document.writeln(`<label for = "tableEnd">Enter an ending number for multiplicarion table</label> <br /> <input type = "number" id= "tableEnd" >`);
document.writeln(` <br /> <br /> <button onclick = "generateTable()"> Generate Table</button> <br />`);


var table = document.getElementById("table");
var tableEnd = document.getElementById("tableEnd");

function generateTable() {
    var tableNum = table.value ;
    var tableLength = tableEnd.value;
    for(var i = 1 ; i <= tableLength ; i++) {
       document.writeln(`${tableNum} x ${i} = ${tableNum * i} <br />`)
    }
}

/*5. Write a program to print items of the following array 
using for loop: 
fruits = [“apple”, “banana”, “mango”, “orange”, 
“strawberry”]  */

document.writeln(`<h3> Question no 5</h3>`);
var fruits = ["apple" , "banana" , "mango" , "orange" ,"strawberry"];
document.writeln(` array of fruits : ${fruits} <br />`);
for(var i =0 ; i < fruits.length ; i++) {
    document.writeln(`Element at index ${i} is ${fruits[i]} <br />`);
}

/*6. Generate the following series in your browser. See 
example output. 
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k  */

document.writeln(`<h3> Question no 6</h3>`);
document.writeln(`<b>Counting :</b> <br />`);
for (var i = 1 ; i <=15 ; i++) {
document.writeln(`${i},`);
}
document.writeln(`<br /> <b>Reverse Counting :</b> <br />`);
for (var i = 10 ; i > 0 ; i--) {
document.writeln(`${i},`);
}
document.writeln(`<br /> <b>Even Numbers :</b> <br />`);
for (var i = 0 ; i <= 20 ; i++) {
 if(i % 2 === 0) {
  document.writeln(`${i},`);
 }

}
document.writeln(`<br /> <b>Odd Numbers :</b> <br />`);
for (var i = 1 ; i <= 20 ; i++) {
 if(i % 2 !== 0) {
  document.writeln(`${i},`);
 }

}
document.writeln(`<br /> <b>Series :</b> <br />`);
for (var i = 1 ; i <= 20 ; i++) {
 if(i % 2 === 0) {
  document.writeln(`${i}K ,`);
 }
}

/*7. You have an array 
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an 
array. 
After searching, prompt the user whether the given item is 
found in the list or not. Example:  */

document.writeln(`<h3> Question no 7</h3>`);
document.writeln(`See Code`);

var foods = ["cake" , "apple pie" , "cookie" , "chips" ,"patties"]
var userItem = prompt("Welcome to Ash Bakery . What do you want to order?");
var isFound = false;
if(userItem !== "" && userItem !== null) {
userItem = userItem.toLowerCase();
for(var i = 0 ; i < foods.length ; i++) {
    if(userItem === foods[i]) {
        isFound = true;      
    break;  
}
}
if(isFound) {
    alert(`${userItem} is found at our bakery at index ${i}`)
}else{
    alert(`We are sorry! ${userItem} is not found at our bakery .`)
}

}else{
    alert("Please order item of your choice");
}

/*8. Write a program to identify the largest number in the 
given array. 
A = [24, 53, 78, 91, 12].  */

document.writeln(`<h3> Question no 8</h3>`);
var largeArr = [24 , 53 , 78 , 91 , 12];
var largestNum = 0;
document.writeln(`Array items : ${largeArr} <br />`);
//largeArr.sort((a , b) => a - b) ; // by sort() method...
// console.log(largeArr)
//document.writeln(`The largest number in array is ${largeArr[largeArr.length-1]}`)

//by loop
for(var i = 0 ; i < largeArr.length ; i++) {
  if(largeArr[i] > largestNum) {
    largestNum = largeArr[i]
    // console.log(largestNum)
  }
}
document.writeln(`The Largest Number is : ${largestNum} <br />`);

/*9. Write a program to identify the smallest number in the 
given array. 
A = [24, 53, 78, 91, 12] */

document.writeln(`<h3> Question no 9</h3>`);
var smArray = [24 , 53 , 78 , 91 , 12] ;
document.writeln(`Array items : ${smArray} <br />`);
// smallest number by sort method
// smArray.sort((a , b) => a - b);
// document.writeln(`The smallest number in array is ${smArray[0]}`);

//by loop
var smallestNum = smArray[0];
for(var i = 0 ; i < smArray.length ; i++) {
    if(smArray[i] < smallestNum) {
        smallestNum = smArray[i]
       }
}
document.writeln(`The smallest number in array : ${smallestNum} `);

/*10. Write a program to print multiples of 5 ranging 1 to 
100.  */
document.writeln(`<h3> Question no 10</h3>`);
document.writeln(`Multiples of 5 : <br />`);
for(var i = 1 ; i <= 100 ; i++) {
    if(i%5 === 0) {
      document.writeln(`${i}`);
    }
}