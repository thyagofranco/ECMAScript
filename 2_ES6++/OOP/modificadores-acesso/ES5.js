'use strict'

function Person(initialName) {
    let name = initialName;

    this.getName = function(){
        return name;
    }

    this.setName = function(newName){
        name = newName;
    }
}

const p = new Person('Thyago');
console.log(p.name);    
console.log(p.getName());

p.setName('Thyago Franco')



