/*

Symbol() é um identificador unico 

Não pode ser invocado pelo new

um Symbol() nunca é igual a outro

pode receber parâmetro para identifica-lo em debug, mas não está atrelado ao seu valor de fato : Symbol('ID')



*/

const uniqueId = Symbol('ID');
const uniqueId2 = Symbol('ID');

console.log(uniqueId === uniqueId2);  // false

const obj = {
    [uniqueId]: 'Hello'
}

console.log(obj)
console.log(Object.keys(obj)); //não mostra as propriedades Symbols, mas não é uma propriedade privada pois podemos acessar
console.log(Object.getOwnPropertySymbols(obj));


// Criando um Symbol soma
Symbol(Symbol.sum);
Symbol.sum = function(a, b) { return a + b };

console.log(Symbol.sum(2,3));


// Well Know symbols
/*
Symbol.iterator // é uma interface para se consumir passo a passo um iteravel, retornando a cada iteração um objeto com o valor 
Symbol.split
Symbol.toStringTag
*/


const arr = [1,2,3,4]
console.log(arr[Symbol.iterator]().next(), '_-----');  // Symbol.iterator é uma propriedade dos arrays
const it = arr[Symbol.iterator](); //gera uma interface built-in responsável pela iteração no array



// Por baixo dos panos o que uma estrutura de dados faz para iterar é :

while(true) {
    let {value, done } = it.next();

    if (done) {
        break;
    }
    console.log(value)
}

for (let value of arr) {
    console.log(value ,'nativo')
}

const it1 = arr[Symbol.iterator](); 
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())
console.log(it1.next())


