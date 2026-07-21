//for multiple comment out-> select->ctrl+/
let score = "99sd";
console.log(typeof score); 
console.log(typeof (score));

let valueInNumber= Number(score);
console.log(typeof valueInNumber); //number
console.log( valueInNumber); //NaN

//NaN for mixed,strings and undefined value, typeof is still number after the conversion but number itself becomes NaN
//1 for true
//0 for null and false


let isLoggedIn =1;
let a="";
let booleanIsLoggedIn=Boolean(isLoggedIn);
let booleanA= Boolean(a);
console.log(typeof booleanIsLoggedIn); //boolean
console.log(booleanIsLoggedIn) //true
console.log(booleanA) //false

//false for empty String, otherwise true

let num=65;
let stringnum= String(num);
console.log(typeof stringnum);
console.log(stringnum)