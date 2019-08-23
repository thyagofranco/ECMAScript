/*

Em ciência da computação e na programação uma clausura é uma função que referencia variáveis livres no contexto léxico. 
Uma clausura ocorre normalmente quando uma função é declarada dentro do corpo de outra, 
e a função interior referencia variáveis locais da função exterior

*/


function init() {
    const exemplo = "Essa variável";

    return function() {
        console.log(` 1 - O valor da variável exemplo é: ${exemplo}.`);

        return function() {
            console.log(` 2 - O valor da variável exemplo é: ${exemplo}.`);    

            return function() {
                console.log(` 3 - O valor da variável exemplo é: ${exemplo}.`);
            }
        }
    }
}


const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();
console.log("____");
init();
console.log("init() não escreve");
console.log("____");
init()();
console.log("____");
init()()();
console.log("____");
init()()()();
console.log("____");