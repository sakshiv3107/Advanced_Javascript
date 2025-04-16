// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     } 
// }
// let obj= new ClassName("arg1","arg2");
// console.log(obj.prop1,obj.prop2); //object created using constructor function

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("Mario",20,"Brown","Labrador");
// console.log(dog.dogName,"is a",dog.breed,"of weight",dog.weight,"Kg", "and color",dog.color); //object created using constructor function

//Classes
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }

// let p=new Person("Sakshi","Vishnoi");
// console.log("Hi", p.firstname,p.lastname);

// class Person2{
//     constructor(firstname,lastname="Vishnoi"){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }

// let p2=new Person2("Sakshi");
// console.log("Hi", p2.firstname,p2.lastname); //default value of lastname is used

//Methods
//Functions on a class are called methods.

class Person{
        constructor(firstname,lastname){
            this.firstname=firstname;
            this.lastname=lastname;
        }
        greet(){
            console.log("Hello",this.firstname,this.lastname);
        }
    }
    let p=new Person("Sakshi","Vishnoi");
    p.greet(); //calling method greet on object p
