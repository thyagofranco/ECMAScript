/**
 * No ES6 foi acrescentado um açucar sintático class , extends , constructor, super
 * 
 *
 * 
 */

 'use strict'

 class Animal {
     constructor(qtdePatas){
         this.qtdePatas = 4;
     }
 }

 class Cachorro extends Animal {
     constructor(morde){
         super(4); // construtor da classe pai
         this.morde = 4;
     }
 }

const pug = new Cachorro(false);
console.log(pug)


//================================================
class Pessoa {
    constructor(name) {
        this.name = name;
    }
}

class PessoaFisica extends Pessoa {
    constructor(name, cpf) {
        super(name);
        this.cpf = cpf;
    }
}

const Thyago = new PessoaFisica('Thyago', '07328158948');
console.log(Thyago.cpf);


//============================================

