//ES5===========================
var prop2 = 'Proriedade 2'

var obj = {
    prop1: 'Propriedade 1',
    prop2: prop2
};

console.log(obj);

//ES6 ============================
// Caso a propriedade tenha o mesmo nome da varíavel ou function é possivel omitir o : variável ou function
var prop2 = 'Proriedade 2'
var obj = {
    prop1: 'Propriedade 1',
    prop2  // = a prop2: prop2
};

console.log(obj);

