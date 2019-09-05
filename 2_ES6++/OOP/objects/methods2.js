
// Método dentro do objeto
var pessoa = {
    nome: "João",
    idade: 20,
    getIdade: function() {return this.idade;}
}
console.log(pessoa.getIdade());


// Função fora do objeto, retornando this. do objeto que a invoca.
var getIdade = function() {return this.idade}; // Quem é diz ? depende, quem vai invocar ?

var pessoa2 = {
    nome: "Thyago",
    idade: 21,
    getIdade:getIdade

};

console.log(pessoa2.getIdade());
console.log(getIdade()); // undefined , está buscando this.idade no escopo global.