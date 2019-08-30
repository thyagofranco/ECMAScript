/**
 * Stings em javascript são imutáveis
 * Podemos utilizar '' ou ""
 * 
 * 
 * 
 */

var nome = "AgileCode"
nome.charAt(2); // "i"
nome.charCodeAt(0); // 65
nome.concat("!"); // "AgileCode!", não altera nome e sim retorna uma nova String
nome.indexOf('e'); // 4
nome.replace('Code','!'); //"Agile!"
nome.split('e'); // ['Agil','Cod', '']

//concatenação de string só usar +

var nome = "Thyago";
var idade = 28  //tipagem fraca, converte number 28 em string automaticamente para dar o console.log()

console.log(nome + " tem " + idade + " anos.");


//métodos de strings

//.replace()
var frase = "Japão é o melhor time do mundo."
console.log(frase.replace("Japão","Brasil").toUpperCase());

/**
 * 
 * String API
 * 
 * .charAt - 
 * .charCodeAt -
 * .concat - 
 * .indexOf -
 * .lastIndexOf -
 * .length -
 * .match - Retorna um array resultante da busca com RegExp
 * .reaplace -
 * .search -
 * .split -
 * .substring - 
 * .toLowerCase -
 * .toUpperCase -
 * .trim - Remove os espaços em branco do início e do fim da String
 * .valueOf - Retorna o valor primitivo da String
 * 
 * 
 */


