/**
 * 
 * Spread operator, tem a mesma notação que o rest (...) mas faz o inverso.
 * Ele pega o array com os argumentos que rest gera e passa ele como argumentos 
 * 
 */

 const multiply = (...args) => args.reduce((acc, value) => acc * value,1);

 const carregarMultiply = (...args) => {
     return multiply(...args); // spread passa o array [5,5,5,5] do rest como parametro para a função multiply(5,5,5,5)
 };

 console.log(carregarMultiply(5,5,5,5));


 //ES5 .apply() =======================================


 const multiplyOLD = (...args) => args.reduce((acc, value) => acc * value,1);

 const carregarMultiplyOLD = (...args) => {
     return multiplyOLD.apply(undefined, args); // spread passa o array [5,5,5,5] do rest como parametro para a função multiply(5,5,5,5)
 };

 console.log(carregarMultiplyOLD(5,5,5,5));