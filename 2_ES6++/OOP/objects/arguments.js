/**
 * 
 * Ao passarmos mais parâmetros que um function necessita o restante é ignorado 
 * e salvo em arguments
 * 
 */

var soma = function(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(soma(2,3,4,5));

