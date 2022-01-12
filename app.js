const fibo = require("./fibonacci");
const check = require("./check");
let number1 = 30;
let number2 = -15;
console.log(`fibonacci of ${number1} is`, fibo(number1));
console.log(`fibonacci of ${number2} is`, fibo(check(number2)));