/**
 * 
 * Toda função possiu os métodos call() e apply().
 * Eles são utilizados para indicar em qual escopo uma função deve ser executada.
 * 
 * A diferença é basicamente a forma como é utilizado:
 * 
 * 
 * function.call(escopo, parametro1, parametro2)
 * function.apply(escopo, [parametros])
 * 
 */

 var getIdade = function(extra) { return this.idade + extra;}

 var pessoa = {
    nome: "João",
    idade: 20,
    getIdade,
 };
console.log(
 pessoa.getIdade(2), //  22
 getIdade(2),    // NaN pois não tem o this.idade pra somar a extra
 getIdade.call(pessoa, 2), // 22   // conferiu o objeto pessoa ao this. da função getIdade
 getIdade.apply(pessoa,[2])); // 22 // mesmo que o call mas passa um array de args.