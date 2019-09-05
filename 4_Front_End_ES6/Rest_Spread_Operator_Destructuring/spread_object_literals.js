// Spread pode ser utilizado em object literal apenas para criar novos objetos.

const obj = {
    prop1: 123
};

const obj2 = {
    ...obj,
    prop2: 456
}

console.log(obj2);

/*
Não consigo fazer em Objetos literais:

const arr = [...obj];  // object is not iterable (cannot read property Symbol(Symbol.iterator))

*/

//================ a ordem importa , o último prevalece quando há propriedades iguais
const obj3 = {
    prop1: 789
}

const objMerged = {
    
    ...obj,
    ...obj2,
    ...obj3
    
   
}

console.log(objMerged); // 123, 456
const objMerged2 = {
  
    
    ...obj2,
    ...obj3,
    ...obj
    
   
}
console.log(objMerged2); // 123, 456