var Homem = function(nome, idade) {
    this.nome = nome;
    this.idade = idade;
   // this.sexo = "masculino"; colocando sexo no prototype
}

Homem.prototype.sexo = "masculino";

var joao = new Homem("João", 20);
console.log(joao);
console.log(joao.sexo);


// Criação sem new não link ao .prototype de Homem
var pedro = {}
Homem.apply(pedro, ["Pedro", 18]);
console.log(pedro);
console.log(pedro.sexo);
pedro.__proto__ = Homem.prototype;
console.log(pedro.sexo);


