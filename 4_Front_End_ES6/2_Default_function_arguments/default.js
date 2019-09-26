/*

Em ES6 podemos passar valores padrão para argumentos de funções caso eles sejam
omitidos na chamada da função,
function fn(a = 1, b = 2) {} ;
function fn(a , b = a) {} ;


*/

function fn(a = 1, b = 2) { return console.log(a, b)};
fn();   // 1 2


function multiplyES6(a, b = 1) {    //default function arguments (a =1, b=2)
    return a * b;
}
console.log(multiply2(5));    // 5 x 1;
console.log(multiply2(5, 0))   // 5 x 0;


//==========================Forma antiga ===========================================
function multiply (a, b) {
    return a * b;
}

console.log(multiply(5)); // 5 x undefined = NaN


// Como os desenvolvedores resolviam este erro
function multiply1 (a, b) {
    b = b || 1;
    return a * b;
}

console.log(multiply1(5)); // 5 x 1 = 5
console.log(multiply1(5, 0)); // 5 x 1 = 5: o problema é que 0 é convertido para false no operador lógico b = b || 1; 


// Fazendo validação 
function multiply2 (a, b) {
    b = typeof b === 'undefined' ? 1 : b;
    /* if (typeof b === 'undefined') {
        b = 1;
    }
    */
    return a * b;
}
console.log(multiply2(5));    // 5 x 1;
console.log(multiply2(5, 0))   // 5 x 0;

