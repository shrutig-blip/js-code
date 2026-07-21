/**
primitive data type: call by value => original reference ni diya jata, value copy krke di daati h..or jo bhi changes hote hain, vo copy m hi hote h..
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

non-primitive : reference type 
arrays, objects, Functions

JavaScript is a dynamically typed language. 
This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.

**/

const score=100;
const scoreval=100.3;
const temp= null; //typeof (temp i.e. null)=object
let useremail=undefined;
let bool=true;
const bigNum=45678456568n;

const id=Symbol('123');
const anotherid=Symbol('123'); 
console.log(id==anotherid); //false


const heros=["batman","ironman","captain america"];
let myobj={
    name: "shruti",
    age: 19,
    course:"B.Tech IT"
}
const myfun= function(){
    console.log("welcome!!");
}

console.log(typeof bigNum)
console.log(typeof myfun);