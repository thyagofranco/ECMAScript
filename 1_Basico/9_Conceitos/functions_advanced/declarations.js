
/**
 * 
 * Function declaration
 *  
 * A única que podemos chamá-la antes de declarar.
 */


console.log(soma); //[Function : soma]
console.log(soma(2, 2)); // 4

function soma(a,b) {
    return a + b;
}




/**
 * 
 * function expression
 * 
 * Facilita o debug para rastrear a vareável que contem a função
 */

var soma = function(a, b) {
    return a + b;
}

console.log(soma); // [Function]
console.log(soma(2, 2)); // 4

/**
 * 
 * Named function expression
 * 
 */

var soma = function soma(a, b) {
    return a + b;
}

console.log(soma); //[Function: soma]
console.log(soma(2, 2)); // 4

/** 
 * 
 * Anonymous function
 * 
 */

var soma = (a,b) => a+b;
console.log(soma);
console.log(soma(2,2));