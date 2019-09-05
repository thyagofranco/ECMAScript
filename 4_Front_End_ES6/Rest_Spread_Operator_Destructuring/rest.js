//ES5 ===============================
// Função soma, com número desconhecido de parâmetros.

function sum(a, b) {

    var value = 0;
    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value
}

console.log(sum(5,5,5,5));


//ES6=========================================
//Rest operator (...)  Retorna um array 


function sum1(...args) {
    console.log(args);
    return args.reduce((acc, value)=> {
        acc += value;
        return acc;
    },0)
 
   
}

console.log(sum1(5,5,5,5));