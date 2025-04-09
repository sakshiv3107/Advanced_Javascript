// function sayHello(){
//     let you=prompt("Enter your name");
//     console.log("Hello "+ you +"! How are you?")
// }
// sayHello()

// let varContainingFunction = function(){
//     let varInFunction="I'm inside a function";
//     console.log("hi There",varInFunction);
// };
// varContainingFunction(); 

// function addNumbers(num1,num2){
    
//     let result=Number(num1)+Number(num2);
//     console.log(result); 
    
// }
// let num1=prompt("Enter first number");
// let num2=prompt("Enter second number");
// addNumbers(num1,num2);

// function tester(para1,para2){
//     return para1+' '+para2;
// }
// const arg1="argument 1";
// const arg2="argument 2";
// console.log(tester(arg1,arg2));  

// function addNumbers(num1,num2){
    
//         let result=Number(num1)+Number(num2);
//         console.log(result); 
        
//     }
//     addNumbers(5,10,45,23) //extra arguments ignored

    // Arrow functions are used for short functions that can be written in a more concise way.

// x =>{
//     console.log(x);
// }   
// let doingArrowFunction=(x)=>{ 
//     console.log(x);
// }
// doingArrowFunction(45);

// let addNumbers=(x,y) => console.log(x+y);
// addNumbers(10,20);

//ARRAY

// const arr=['squireel','cat','dog','parrot'];
// arr.forEach(e=>console.log(e)); //forEach method is used to iterate over the array and perform an action on each element.

// let spread=[1,2,3,4,5];
// let spread2=[...spread,6,7,8,9,10]; //spread operator(...) is used to expand an array into its elements.
// console.log(spread2); 

// let addNumbers=(x,y) => console.log(x+y);
// let arr=[10,20]
// addNumbers(...arr);

// function someFunction(para1,para2){
//     console.log(para1,para2);
// }
// someFunction(1,2,3,4,5); 

// function someFunction(para1,...para2){
//     console.log(para1,para2);
// }
// someFunction(1,2,3,4,5); 

// let favouritesubject=prompt("Enter your favourite subject");


// let addTwoNumbers=(x,y) => x+y;

// let resultarr=[];
// for(let i=0;i<10;i++){
//     let result=addTwoNumbers(i,2*i);
//     resultarr.push(result);
// }
// console.log(resultarr);



// Returning with arrow function

// let addTwoNumbers=(x,y) => x+y;

// Variable SCope in Function

// function testAvailablity(x){
//     console.log("Inside function",x); // x is not defined here
// }
// testAvailablity("Hi!")
// // console.log("Outside function",x); // x is not defined here

// function testAvailablity(x){
//     let y=10; // y is defined here
//     console.log("Inside function",y); // y is not defined here
//     return y;
// }
// let z=testAvailablity();
// console.log("Outside function",z); // y is not defined here
// console.log("Not available:",y); 

// function doingStuff(){
//     if(true){
//         var x="Local";
//     }
//     console.log("Inside function",x); // x is defined here
// }
// doingStuff();
// console.log("Outside function",x); // x is not defined here

// function doingStuff(){
//     if(true){
//         console.log("Inside function",x); 
//         var x="Local"; 
//         // let x="Local"; // This will throw an error because x is not defined here
//     }
// }
// doingStuff();

// // Const Scope Same as let scope
// function doingStuff(){
//     if(true){
//         const x="Local";
//     }
//     console.log("Inside function",x); // x is not defined here
// }
// doingStuff();

// let globalVar="Accesible EVerywhere"; // Global variable
// console.log("Global variable",globalVar); // Global variable

// function creaingNewScope(x){
//     console.log("Access to global vars inside function",globalVar); 
// }
// creaingNewScope("Local variable"); // Local variable
// console.log("Access to global vars outside function",globalVar); 

// let x="Global";
// function doingStuff(){
//     let x="Local"; // Local variable
//     console.log("Inside function",x); // Local variable
// }
// doingStuff(); // Local variable
// console.log("Outside function",x); // Global variable

// let x="Global";
// function doingStuff(){
//     x="Local"; // Local variable
//     console.log("Inside function",x); // Local variable
// }
// doingStuff(); // Local variable
// console.log("Outside function",x); // Global variable

// let x="Global";
// function doingStuff(x){
//     console.log("Inside function",x); // Local variable
// }
// doingStuff("Local"); // Local variable

// function confuseReader(){
//     x="Guess my scope";
//     console.log("Inside function",x); // Local variable
// }
// confuseReader();
// console.log("Outside function",x); // Global variable

//immediately invoked function expression (IIFE) is a function that is executed as soon as it is defined. It is a common pattern in JavaScript to create a new scope and avoid polluting the global scope.

// (function(){
//     console.log("I am an IIFE"); // Local variable
// })();

// (function(x,y){
//     console.log("Sum is:",x+y); // Local variable
// })(10,5);

// (()=> {
//     console.log("I am an IIFE"); // Local variable
// })();

//Recursive functions

// function getRecusive(nr){
//     console.log(nr);
//     if(nr>0)
//     getRecusive(--nr); // Recursive function

// }
// getRecusive(3);

function logRecursive(nr){
    console.log(nr);
    if(nr>0)
    logRecursive(--nr); 
    else
    console.log("End of recursion"); // Base case
console.log("End of recursion",nr); 
}
logRecursive(3);