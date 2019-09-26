//Função normal

var sumNormal = function(a, b) {
    return a + b;
};

// Arrow function

var sumArrow = (a, b) => a + b;    //  = sumArrow = (a, b) => return a + b;   ou sumArrow = (a, b) => { return a + b };

// Arrow function com statemens {}

var sumArrowStatment = (a, b) => {
    /*
    var = alguma variavel
    if (true) ...
    
    */
    return a + b;
}

console.log(sumNormal(2, 3));
console.log(sumArrow(2, 3));
console.log(sumArrowStatment(2, 3));

// Arrow function 1 argumento
var plusOne = x => x+1;                 // pordemos omitir () quando há apenas um argumento.
console.log(plusOne(10));


// Arrow function retornando objetos literais , necessita dos parenteses , caso contrário não retorna objeto, e sim undefined

var createObj = () => {teste: 'oi'};     
console.log(createObj());

var createObj = () => ({teste: 'oi'});     
console.log(createObj());


// Arrows não podem ser funções construtoras :
var Car = function() {
    return this.foo = 'bar';
}

console.log(new Car());

/*
var Car = () => {
    return this.foo = 'bar';
}

console.log(new Car());

TypeError: Car is not a constructor

*/

