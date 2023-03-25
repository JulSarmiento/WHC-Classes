// llamamos a la depdenencia is-odd y la guardamos en una constante, lo que nos permite usar la funcion isOdd
const isOdd = require('is-odd');

console.log(isOdd(1)); // true
console.log(isOdd(2)); // false
console.log(isOdd('1')); // true
