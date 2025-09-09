document.write(`<h1 style = "text-align:center">Date Methods</h1>`);
document.write(`<h2 style = "text-align:center">Ch 31 - 34</h2>`);

/*1. Write a program that displays current date and time in 
your browser.  */

var currentDate = new Date();
document.write(`<h2>Question no 1</h2>`);
document.writeln(`<b>The current date </b>: ${currentDate}`);

/*2. Write a program that alerts the current month in words. 
For example December. */

var months = ["January","February","March","April","May","Jun","July","August","September","October","November","December"]
var month = currentDate.getMonth();
var monthInWords = months[month];
alert(`The Current Month is ${monthInWords}`);

/*3. Write a program that alerts the first 3 letters of the current 
day, for example if today is Sunday then alert will show 
Sun.  */

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = currentDate.getDay();
console.log(day);
var dayInWords = days[day].slice(0,3);
alert(`Today is ${dayInWords}`);

/* 4. Write a program that displays a message “It’s Fun day” if 
its Saturday or Sunday today.  */

document.write(`<h2>Question no 4</h2>`);
if(dayInWords === "Sun" || dayInWords === "Sat") {
 document.write(`Today is a Fun day`);
}else{
    document.write(`Today is ${dayInWords}`);
}

/*5. Write a program that shows the message “First fifteen 
days of the month” if the date is less than 16th of the month 
else shows “Last days of the month”.  */

document.write(`<h2>Question no 5</h2>`);
var dateOfMonth = currentDate.getDate();
if(dateOfMonth < 16) {
    document.write(`The First Fifteen Days of the Month`);
}else{
      document.write(`The Last Fifteen Days of the Month`);
}

/*6. Write a program that determines the minutes since 
midnight, Jan. 1, 1970 and assigns it to a variable that 
hasn't been declared beforehand. Use any variable you like 
to represent the Date object.  */

document.write(`<h2>Question no 6</h2>`);
var milliSecond = currentDate.getTime();
var min = milliSecond/(1000*60);
document.writeln(`The Current Time is : ${currentDate} <br />`);
document.writeln(`The Milliseconds Sice 1970 : ${milliSecond} <br />`);
document.writeln(`The Minutes Sice 1970 : ${min} `);

/*7. Write a program that tests whether it's before noon and 
alert “Its AM” else “its PM”.  */

document.write(`<h2>Question no 7</h2>`);
var hours = currentDate.getHours();
console.log(hours);
if(hours < 12) {
    document.writeln(`It's AM`);
}else{
    document.writeln(`It's PM`);
}

/*8. Write a program that creates a Date object for the last day 
of the last month of 2020 and assigns it to variable named 
laterDate. */

document.write(`<h2>Question no 8</h2>`);
var laterDate = new Date(2020 , 12 ,0);
document.writeln(`It's ${laterDate}`);

/*9. Create a date object of the starting date of this Ramadan 
and alert the number of days past since 1st Ramadan? 
Note: 1st Ramadan was on June 18, 2015  */

document.write(`<h2>Question no 9</h2>`);
var ramadan = new Date(2015 , 5 , 18);
var ramadanTime = ramadan.getTime();
var now = currentDate.getTime();
var differenceInTime = now - ramadanTime;
var daysPast = Math.floor(differenceInTime / (1000*60*60*24));
document.writeln(`${daysPast} days past since First Ramadan 2015`);

/*10. Write a program that displays in your browser the 
seconds that elapsed between the reference date and the 
beginning of 2015.  */

document.write(`<h2>Question no 10</h2>`);
var refDate = new Date(2015, 11 , 5 , 22 , 50 , 16);
var refDateInSecs = refDate.getTime() / (1000*60);
var beginningDate = new Date(2015 , 0 , 1);
var beginningDateInSec = beginningDate.getTime() / (1000*60);
var diffInSecs = Math.floor(refDateInSecs - beginningDateInSec);
document.writeln(`One Reference date : ${refDate} , <br /> ${diffInSecs} seconds has been passed since the beginning of 2015.`);

/*11. Create a Date object for the current date and time. 
Extract the hours, reset the date object an hour ahead and 
finally display the date object in your browser.  */

document.write(`<h2>Question no 11</h2>`);
var theHour= currentDate.getHours();
document.write(`The Current Date : ${currentDate} <br /> `);
currentDate.setHours(theHour +1);
document.write(`The Current Date after an hour : ${currentDate}`);

/*12. Write a program that creates a date object and show the 
date in an alert box that is reset to 100 years back? */

var todayDate = new Date();
var NowYear = todayDate.getFullYear();
var Year100 = NowYear - 100;
todayDate.setFullYear(Year100);
alert("Date 100 years before : "+ todayDate);

/*13. Write a program to ask the user about his age. Calculate 
and show his birth year in your browser.  */

document.write(`<h2>Question no 13</h2>`);
var ageNow = +prompt("How old are you" , 20);
document.write(`Your Age is : ${ageNow}`);
var now = new Date();
var birthYear = now.getFullYear()- ageNow;
document.write(` <br /> Your Birth Year is : ${birthYear}`);

/*14. Write a program to generate your K-Electric bill in your 
browser. All the amounts should be rounded off to 2 
decimal places. Display the following fields: 
a. Customer Name 
b. Current Month 
c. Number of units 
d. Charges per unit 
e. Net Amount Payable (within Due Date) 
f. Late Payment Surcharge 
g. Gross Amount Payable (after Due Date) 
Where,  */