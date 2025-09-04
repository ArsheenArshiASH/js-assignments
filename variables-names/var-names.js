document.write("<h1>Legal and Illegal Variables Names</h1>");
//1. Declare 3 variables in one statement. 

var firstName = "Ash", id = 1234 , trade = "web development";

//2. Declare 5 legal & 5 illegal variable names. 

//illegal variables
// var 1student; illegal variable
//var first name; illegal variable , variable name shouldn't have space
// var student-id ; no hyphens and other symbols are allowed except $ and _
//var person-1 ;
//var 34city;

//legal variables
var student_id;
var city2;
var myClass;
var $dollar;
var _rollNo;
var UserName;
var clientDetails;
console.log(student_id);

/*3. Display this in your browser 
a)  A heading stating “Rules for naming JS variables” 
b)  Variable names can only contain ______, ______, 
______ and ______. 
For example $my_1stVariable 
c) Variables must begin with a ______, ______ or 
_____. For example $name, _name or name 
d) Variable names are case _________ 
e) Variable names should not be JS _________   */

document.write("<h2>Rules for Naming JS variables</h2>");
document.write('<ol type="A"> <li>Variable name can only contain $ , _ , numbers and letter for example <b>$doller,student1, my_name etc</b></li><li> Variable must begin with $ sign , _ underscore or alphabet for example: <b> $name , _name, name</b></li> <li>Variable names are case sensitive </li><li>Variable names should not be JavaScript Keywords </li> </ol>');
