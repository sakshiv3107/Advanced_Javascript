// function sayHello(){
//     let you=prompt("Enter your name");
//     console.log("Hello "+you+"! How are you?")
// }
// sayHello()

// let varContainingFunction = function(){
//     let varInFunction="I'm inside a function";
//     console.log("hi There",varInFunction);
// };
// varContainingFunction(); 

function addNumbers(num1,num2){
    
    let result=Number(num1)+Number(num2);

    return result;
}
console.log(addNumbers(3,4)); 
