//Print Hello In Console
console.log("Hello");
//Show Hi its me on AlertDialog
//alert("hi its me");
// Variables

//1 - String
var b = 'Smoothie'
console.log(b);
//2 - Number
var num= 45.5;
console.log(num);

// this is an input
var age = prompt('what is your age');

//Change element on html so it will print hello as H1
document.getElementById('someText').innerHTML =age;

//Function
function fun(){
    alert('this is a function')
}
//Calling The function
fun();

// While Loop
var num = 0;
while(num<5){
    num++;
    console.log("num");
}

// For loop
for(let num = 0; num<=5 ; num++){
    console.log(num);
}

// DataTypes
let ye= 19; //number
let name = "dams"; //string
let fullname = { first: 'Younes', last:'Adams'};//Object
let truth = false; //Boolean
let groceries = ['orange', 'apple', 'banana']; //array
let random; //undefined
let nothing = null; //null

// String in Javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,5));
console.log(fruit.replace('ban','123'));

//Array 
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');
console.log(fruits[1]);

fruits[0] = 'pearra';
console.log(fruits);
for(let i=0; i< fruits.length; i++){
    console.log(fruits[i]);
}

//Array common methods
fruits.pop();//Removes last item
fruits.push('blackberries'); //Add blackberries
fruits.shift(); //Removes first element from a list
fruits.unshift('kiwi'); //Adds first element to an array

//Objects In Javascript
//Dictionaries in Python
let student = { 
    first : 'Younext', 
    last: 'Adams', 
    age:19, 
    height: 170
};
console.log(student.first); //Prints Younext
console.log(student.last); //Prints Adams