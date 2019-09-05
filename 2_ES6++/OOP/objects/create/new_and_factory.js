/**
 * Quando a necessidade de instanciar vários objetos
 * para evitar a criação de vários objetos in_line
 * utilizamos new.
 * 
 * new só funciona com funções Construtoras, 
 * Funções Factory tem o return que fabrica um novo objeto. 
 * 
 * 
 * var pessoaA {nome:"thyago", idade: 29}
 * var pessoaB {nome:"Camila", idade: 29}
 * ...
 * 
 * var Pessoa(nome, idade) {
 *      this.nome = nome,
 *      this.idade = idade
 * }
 * 
 * var thyago = new Pessoa('Thyago', 29);
 */

 // Funções Construtoras vs Funções Fabrica.

 //Factory

 var criarPessoa = function(nome, idade) {
     return {
         nome: nome,
         idade: idade
    };
 };

 console.log(criarPessoa('Pedro',20));
 console.log(criarPessoa('Maria',20));


 // Construtora utilizando new 
// Convenção da função construtora iniciar com Maiusculo
 var Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
 }

 console.log(new Pessoa('Pedro',20));
 console.log(new Pessoa('Maria',30));

 // É isso que o new faz.
 var pedro = {};
 Pessoa.call(pedro, "Pedro", 20);
 console.log(pedro);


 

