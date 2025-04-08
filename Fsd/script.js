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

let addTwoNumbers=(x,y) => x+y;