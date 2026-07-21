const accountId=123
let accountgmail="fcgvhj.com"
var password="3456" //block scope and functional scope issues.
city="jaipur" //javascript is safe language
let state;

//accountId=5678---assignment to constant variable: TypeError
accountgmail="fcvgbhsw.com"
console.log(accountgmail)

city="Delhi"
console.log(city)

password="3456tfg"
console.log(password)

console.table([accountId,accountgmail,password,city,state])