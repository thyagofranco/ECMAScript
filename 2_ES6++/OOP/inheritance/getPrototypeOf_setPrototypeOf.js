/*

Utilizar estes operadores 
Object.setPrototypeOf(objeto, proto)
Object.getPrototypeOf(objeto, proto)
Não utilizar __proto__.

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

// Adicionando um prototype a um objeto.

Object.setPrototypeOf(joao, homem);
Object.setPrototypeOf(pedro, homem);

console.log(joao);
console.log(joao.sexo);
console.log(pedro);
console.log(pedro.sexo);
