const myNumber = 3.141592;

//  Transformar número para string
const numberAsString = myNumber.toString();

//  Retornar número com um número de casas decimais 

const fixedTwoDecimals = myNumber.toFixed(2);

//  Transformar uma string em float

const parsedStrFloat = parseFloat('12.32');

// Transformar uma string em int

const parsedStrInt = parseInt('12.32');


console.log(myNumber);
console.log(numberAsString + typeof(numberAsString))
console.log(fixedTwoDecimals);
console.log(parsedStrFloat);
console.log(parsedStrInt);
