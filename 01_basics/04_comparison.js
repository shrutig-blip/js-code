//console.log(2>2);
// > , < , == , != , >= , <= 

console.log("2">1); //true---typescrtypes and such results can be very unpredictablept ensures not to compare between different datas
console.log("02">=2); //true

console.log(null>0); //false 
console.log(null==0); //false
console.log(null>=0); //true
//unpredictable results...thus, avoid such comparisons...

//the reason is that the comparisons >,<,>=,<= and equality check == works differently
//comparisions convert null to a number, treating it as 0
//that's why null>=0 is true but null>0 is false



//comparing undefined using any of these results in false.

// === strict check, which checks value as well as data type
console.log("2"==2); //true
console.log("2"===2); //false
