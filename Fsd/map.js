// const fruit= new Map(
//     [['banana', 300],
//     ['apple', 200],
//     ['orange', 100],]
// )
// console.log(fruit);

// const fruits= new Map();
// fruits.set('banana', 300);
// fruits.set('apple', 200);
// fruits.set('orange', 100);

// console.log(fruits);

// // console.log(fruits.get('banana'));

// // console.log(fruits.size);

// // fruits.delete('banana');
// console.log(fruits);
// // fruits.clear();
// fruits.has('banana')?console.log("Yes"):console.log("No");

// let text="";
// fruits.forEach(function(value, key){
//     text+=key+" "+value+" ";
// }
// )
// console.log(text);

// let text1="";
// for(const x of fruits.entries()){
//     text1+=x+" ";
// }
// console.log(text1);

// let text1="";
// for(const x of fruits.keys()){
//     text1+=x+" ";
// }
// console.log(text1);

// let text1="";
// for(const x of fruits.keys()){
//     text1+=x+" ";
// }
// console.log(text1);

//sum all values
// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }

// console.log(total);

// const apples={name:"apple"};
// const bananas={name:"banana"};
// const oranges={name:"orange"};

// const fruits= new Map();

// fruits.set(apples, 300);
// fruits.set(bananas, 200);   
// fruits.set(oranges, 100);
// console.log(fruits);


// const person={
//     firstname:"Saloni",
//     lastname:"Singh",
//     age:20
// };
// let{firstname,lastname}=person;
// console.log(firstname);
// console.log(lastname);

//Alias

const person={
    firstname:"Saloni",
    lastname:"Singh",
    age:20
};
let{lastname:name}=person;
console.log(name);

