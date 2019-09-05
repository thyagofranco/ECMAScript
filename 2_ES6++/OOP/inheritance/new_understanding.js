/*

New didático, o new de verdade faz mais coisas.

*/

var Homem = function(nome, idade) {
    this.nome = nome;
    this.idade = idade;
   
}
Homem.prototype.sexo = 'masculino';


var _new = function (f) {
    var obj = {};
    obj.setPrototypeOf = f.prototype;
    f.apply(obj,Array.prototype.slice.call(arguments, 1));  // Homem.apply(pedro,"Pedro", 18)  já que arguments é {0: Homem, 1: "Pedro", 2: 18}
    return obj;
}

var pedro = _new(Homem, "Pedro", 18)

console.log(pedro)