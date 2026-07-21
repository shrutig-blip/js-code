"use strict";//treat all js code as newer version(also if we skip, then its by default treated like that)

//alert(3+3)//we are using nodejs, not browser, therefore ReferenceError: alert is not defined

console.log(3+3)
console.log(78)
//code readability should be high
//ecma script decides standards for js.

//mdn documentation is very useful(search) and tc39


let name="ghj";
let age=67;
let state=null;


/**data types
number => 2^53
bigint
string =>" "
boolean => true/false
null(standalone value)
undefined
symbol =>unique

object
 
**/
console.log(typeof 45); //number
console.log(typeof "56") //string
console.log(typeof age); //number
console.log(typeof null); //object
console.log(typeof undefined); //undefined