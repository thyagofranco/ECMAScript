'use strict';

const myText_ = 'Hello prototype!';

myText_.split('') // <<- de onde vem esse .split?


//  O código acima é igual ao abaixo:

const myText = String('Hello prototype');  // String Função construtora

console.log(myText.__proto__.constructor);

console.log(myText.__proto__.split === String.prototype.split); //  true

console.log(myText.constructor === String); //  true


/**
 * __proto__ --> prototype --> constructor  
 * 
 * const myText = 'Hello prototype';
 * 
 * implicitamente estamos dizendo :
 * myText.constructor -> String
 * myText.__proto__    -> String.prototype
 */


function Animal_() {}
console.log(Animal.constructor);

/**
 *  f Animal_.constructor --> f Funciton --> Function.prototype.constructor --> f Object() --> Object.prototype = null;
 *    
 */

/**
 *  new Foo(....);
 * 
 * O que ocorre ?
 * 
 * 1 - Um novo objeto é criado, herdando Foo.prototype
 * 
 * 2 - A função construtora Foo é chamada com os argumentos especificos 
 * e com o .this vinculado ao novo objeto criado.
 * 
 * 3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'.
 * Senão, será retornado o objeto criado no passo1.
 */

function Animal___() {
    this.qtdePatas = 4;
}
const cachorro = new Animal___();

console.log(cachorro.qtdePatas);

console.log(cachorro.__proto__ === Animal.prototype); //   true

console.log(Animal.__proto__ === Function.prototype); //   true

console.log(cachorro instanceof Animal);   //  true

console.log(cachorro instanceof Function);   //  false


/**
 * 
 * Diferente de .call(this, ...), 
 * utilizando prototype ao instanciar Cachorro as funções já estão criados no tipo Cachorro que herdou de Animal
 * e essas funções não serão criadas a cada instancia de Cachorro
 * 
 */

function Animal() {}
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function(){}


function Cachorro(morde) {
    
    this.qtdePatas = 4;
    this.morde = 'morde';
}


Cachorro.prototype = Object.create(Animal); // quando criar prototype de cachorro, derivamos ele de prototype de animal
Cachorro.prototype.latir = function(){console.log('Au! au!')};

const pug = new Cachorro(false);

console.log(pug.morde);
pug.latir();

/**
 * Ao alterar o prototype os objetos instanciados apontam para o prototype e a mudança é automática em todos os objetos instanciados
 * 
 */

Cachorro.prototype.rolar = function(){console.log('rolando')};

pug.rolar();






