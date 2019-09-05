/*

Cuidado, __proto__ não é um padrão de todos navegadores.

__proto__ referencia para o protótipo do objeto

Com ela, podemos redirecionar o link de prototype de um objeto.

*/

var joao = {
    nome: 'João',
    idade: 20
}

var pedro = {
    nome: "Pedro",
    idade: 21
}

// Até este momento o prototype destes dois objetos é Object.prototype = null


//Podemos criar um prototype que adicione sexo aos objetos
var homem = {
    sexo: "masculino"
}

// E utilizando __proto__ linkar os objetos ao prototype homem.

joao.__proto__ = homem;
pedro.__proto__ = homem;

console.log(joao);
console.log(joao.sexo);
console.log(pedro);
console.log(pedro.sexo);
