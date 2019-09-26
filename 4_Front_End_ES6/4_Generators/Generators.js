// function*    yield;

/*
Feramenta poderosa pra controlar o fluxo da função.

Yield retornar um valor em cada iteração de uma função generator

*/


function hello() {
    console.log('Hello');
    console.log('From');
    console.log('Function');
}

// Podemos pausar a função
function* helloGenerator() {
    console.log('Hello');
    yield;   // Executa até aqui e pausa, aguarda o próximo next();
    console.log('From');
    yield;
    console.log('Function');
    
}

const it = helloGenerator();


console.log(it.next())
console.log(it.next())
console.log(it.next())

// Podemos receber dados de fora da função

function* helloFromOutside() {
    console.log('Hello');
    yield 1;
    console.log('From');
    const value = yield 2;
    console.log(value);
}

const it2 = helloFromOutside();

console.log(it2.next())
console.log(it2.next())
console.log(it2.next('Outside'))


function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const naturais = naturalNumbers();
console.log(naturais.next());
console.log(naturais.next());
console.log(naturais.next());
console.log(naturais.next());
