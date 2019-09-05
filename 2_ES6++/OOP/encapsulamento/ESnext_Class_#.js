'use strict'

class Person{
    #name = '';

    constructor(initialName){
        this.#name = initialName;
    }

    setName(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}

const thyago = new Person();

thyago.setName('Thyago');
console.log(thyago.getName());
