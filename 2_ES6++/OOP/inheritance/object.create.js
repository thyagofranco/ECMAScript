// Prototype
var homem = {
    sexo: "masculino"
}


//Criando joao já com homem como seu prototype: Pedro.prototype = Homem.prototype.
var pedro = Object.create(homem);
pedro.nome = 'Pedro';
pedro.idade = 18;

console.log(pedro);
console.log(pedro.sexo);