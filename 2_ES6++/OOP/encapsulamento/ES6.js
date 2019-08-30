'use strict'

function Person(initialName) {
    var name = initialName;

    Object.defineProperties(this, 'name', {
        get: function() { return name; },
        set: function(value) {name = value;}
    });
}

const eu = new Person('Thyago');
console.log(eu.name);
console.log(eu.get());

