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

// class Person{
//         constructor(firstname,lastname){
//             this.firstname=firstname;
//             this.lastname=lastname;
//         }
//         greet(){
//             console.log("Hello",this.firstname,this.lastname);
//         }
//     }
//     let p=new Person("Sakshi","Vishnoi");
//     p.greet(); //calling method greet on object p

    // class Person{
        //     constructor(firstname,lastname){
        //         this.firstname=firstname;
        //         this.lastname=lastname;
        //     }
        //     greet(){
        //         console.log("Hi there!");
        //     }
        //     compliment(name,object){
        //         return "That's wonderful "+ object +", "+name;
        //     }
        // }
        //     let p =new Person("Saloni","Singh");
        //     let compliment=p.compliment("Harry","hat");
        //     console.log(compliment);
        
        //Properties sometimes aslso called fields hold the data of the class.
        
        // class Person{
        //     #firstname;
        //     #lastname;
        //     constructor(firstname,lastname){
        //         this.#firstname=firstname;
        //         this.#lastname=lastname;
        //     }
        // }
        // let p=new Person("Saloni","Singh");
        // console.log(p.firstname);
        
        // class Person{
        //     #firstname;
        //     #lastname;
        //     constructor(firstname,lastname){
        //         if(firstname.startsWith("S")){
        //         this.#firstname=firstname;
        //         }
        //         else{
        //             this.#firstname="S"+firstname;
        //         }
        //         this.#lastname=lastname;
        //     }
        // }
        // let p=new Person("Saloni","Singh");
        // console.log(p.firstname);
        
        // class Person{
        //     #firstname;
        //     #lastname;
            // constructor(firstname,lastname){
            //     this.#firstname=firstname;
            //     this.#lastname=lastname;
            // }
            // get firstname(){
            //     return this.#firstname;
            // }
            // set firstname(firstname){
            //     this.#firstname=firstname;
            // }
            // get lastname(){
            //     return this.#lastname;
        //     }
        //     set lastname(lastname){
        //         this.#lastname=lastname;
        //     }
        
        // }
        // let p=new Person("Saloni","Singh");
        // console.log(p.firstname);
        // p.firstname="Ananya";
        // p.lastname="Singh";
        // console.log(p.firstname);
    // }

    //Inhertiance

    // class Vehicle{
    //     constructor(color,currentSpeed,maxSpeed){
    //         this.color=color;
    //         this.currentSpeed=currentSpeed;
    //         this.maxSpeed=maxSpeed;
    //     }
    //     move(){
    //         console.log("Moving at speed",this.currentSpeed,"km/h");
    //     }
    //     accelerate(amount){
    //         this.currentSpeed+=amount;
    //     }
    // }
    // class motorcycle extends Vehicle{
    //     constructor(color,currentSpeed,maxSpeed,fuel){
    //         super(color,currentSpeed,maxSpeed);
    //         this.fuel=fuel;
    //     }
    //     doWheelie(){
    //         console.log("Doing on one wheel!");
    //     }
    // }    
    // let motor=new motorcycle("red",0,200,"petrol",);
    // console.log(motor.color);
    // motor.accelerate(50);
    // motor.move();

    //Prototypes
    class Person{
                constructor(firstname,lastname){
                    this.firstname=firstname;
                    this.lastname=lastname;
                }
                greet(){
                    console.log("Hello",this.firstname,this.lastname);
                }
            }
            Person.prototype.introduce=function(){
                console.log("Hi, I'm",this.firstname,this.lastname);
            }
            Person.prototype.favouritecolor="blue";

            let p=new Person("Sakshi","Vishnoi");
            console.log(p.favouritecolor); 
            p.introduce(); 