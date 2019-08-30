/**

//prototype based
 
function Animal() {}
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function(){}


function Cachorro(morde) {
    
    this.qtdePatas = 4;
    this.morde = 'morde';
}


Cachorro.prototype = Object.create(Animal); // quando criar prototype de cachorro, derivamos ele de prototype de animal
Cachorro.prototype.latir = function(){console.log('Au! au!')};


*/

class Animal{
    constructor(){
        this.qtdePatas = 0;
    }

    movimentar() {}
}

class Cachorro extends Animal{
    constructor(morde){
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }
    /*
    latir(){
        console.log('Au! au1');
    }
    */
}

const pug = new Cachorro(false);

Cachorro.prototype.latir = function(){console.log('Au! au!')};  // Mostrando que realmente por baixo dos panos prototype é utilizado.

pug.latir();
