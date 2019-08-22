//concatenação de string só usar +

var nome = "Thyago";
var idade = 28  //tipagem fraca, converte number 28 em string automaticamente para dar o console.log()

console.log(nome + " tem " + idade + " anos.");


//métodos de strings

//.replace()
var frase = "Japão é o melhor time do mundo."
console.log(frase.replace("Japão","Brasil").toUpperCase());
