//console.log('hello');
// alert('yoo');

/*
//Variables

var b='smoothie';
console.log(b);

var someNumber=45;
console.log(someNumber);

//We can change code in html page using js
document.getElementById('Sometext').innerHTML="HEllo";

//prompt ask what is your age and age returns the o/p
var age= prompt('What is your age?');
document.getElementById('Sometext').innerHTML=age;

*/

/*
//Numbers in Javascript

var num1=10;
num1+=num1;
num1--;
num1++;
console.log(num1);
console.log(num1%2);

*/


/*
Functions 1.create function  2. call the function

 function fun() {} //create
 fun(); //call
*/

/*
//Lets create a function that take in a name and says hello followed by your name
 
//example 1
function greeting() {
    var name= prompt('What is your name?');
    var result ='Hello' + ' ' + name;  //string concatenation
    console.log(result);
}
greeting();

//How do arguments work in function?

function addTwoNumbers(a,b) {
    var result =a+b;
    console.log(result);
}
addTwoNumbers(10,10);


//example 1 is also correct but the way you actually do to make it clean is:
 function greeting(yourname) {
    var result = 'Hello' + ' ' + yourname;
    console.log(result);
 }
 var name = prompt('What is your name?');
 greeting(name);
 
 */

 /* while loop

 var num=0;
 while (num<10) {
     num+=1;
     console.log(num);
 }
*/

/* for loop
// INSTEAD OF var start writing let
for(let num=0;num<=10;num++) {
    console.log(num);
}

*/

/*
//Data Types
let yourAge =10; //numbers
let yourname='Bipana' //string
let name= {first:'Jane',last:'doe'}; //objects
let truth=false; //boolean
let groceries = ['apple','banana','oranges']; //array
let random; //undefined
let nothing =null; //value null

*/

/*
//strings in javascript(common methods)
let fruit ='banana,apple,blueberry';
let moreFruits ='banana\napple'; //   \n is new line
console.log(fruit.length);
console.log(fruit.indexOf('an')); // check whether something can be found inside 
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //split by a comma
 */

 /*Array 
 let fruits = ['apple','banana','pineapples'];
 // let fruits = new Array ('banana','apple','orange'); //this is also way to declare array
console.log(fruits[1]); //access value at index 1
fruits[0]='pear';
console.log(fruits);

for (let i=0;i<fruits.length;i++) {
    console.log(fruits[i]);
}

//array common methods
console.log('to string' ,fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop(),fruits); //pop removes last item
console.log(fruits.push('blackberries'),fruits); //add new item
console.log(fruits[4]);
fruits[fruits.length]='new fruit';
console.log(fruits);

let vegetables =['asparagus','tomato','broccoli'];
let allGroceries=fruits.concat(vegetables);
console.log(allGroceries); //two arrays 
console.log(allGroceries.reverse());
console.log(allGroceries.sort());  //sorts in alphabetical order


let someNumbers =[3,5,89,1,455,2,90,666,5,4,0];
console.log(someNumbers.sort(function(a,b){return a-b})); //sorted in ascending order
console.log(someNumbers.sort(function(a,b){return b-a})); //sorted in descending order

// let emptyArray = []; //this is also correct declaration
let emptyArray = new Array(); //we have empty array and we loop through and keep appending number and keep pushing to new array
for (let num=0;num<=10;num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

*/

/*
objects in js => dictionaries in pythons

let student = {
    first:'Shrijana',
    last:'karki',
    age:10,
    height:150, //keep comma its good practice
    studentInfo:function(){
        return this.first + '\n' + this.last;
    }
};
console.log(student.first);
// console.log(student[first]); this one is incorrect
student.first='notSk'; //change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());
*/


//conditionals,control flows(if esle)
//18-35 is my target demographic

/*
//here let wont work with prompt
var age = prompt('What is your age?');
if( (age>=18) && (age<=35) ) {
    status='target demo';
    console.log(status);
}else{
    status='not my audience';
    console.log(status);
}
*/

//switch statements
//differentiate between weekday vs. weekend
//day 0 --> sunday  -->weekend
//day 5 --> friday -->weekend
//day 6 --> saturday -->weekend
//day 1,2,3,4 --> Thrusday -->weekday

/*
switch(1){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
        break;
}

console.log(text);

*/












