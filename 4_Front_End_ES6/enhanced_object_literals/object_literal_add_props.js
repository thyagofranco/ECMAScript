//ES5=======================================================================
var propName = 'nome';

var obj = {};

obj[propName + 'Completo'] = 'Thyago Franco';

console.log(obj)

//ES6=======================================================================

var propName = 'nome';

var obj = {
    [propName + 'Completo']: 'Thyago Franco'
};

console.log(obj);

