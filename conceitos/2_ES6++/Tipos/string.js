// Strings '' 

const  str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

//  Métodos de string

//  Retornar o tamanho de uma string 

const textSize = str.length;

//  Retorna um array quebrando a string por um delimitador

const splittedText = str.split(' ');

// Busca por um valor e substitui por outro

const replacedText = str.replace('Lorem','Loraine');

//  Retorna a "fatia" de um valor

const lastChar = str.slice(-1);

const allWithoutLastChar = str.slice(0, -1);

const secondToEnd = str.slice(1);

// Retorna N caracteres a partir de uma posição

const twoCharsBeforeFistPos = str.substr(0, 2);



console.log(str);
console.log(textSize);
console.log(splittedText);
console.log(replacedText);
console.log(lastChar);
console.log(allWithoutLastChar);
console.log(secondToEnd);
console.log(twoCharsBeforeFistPos);