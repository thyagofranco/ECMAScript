/*

Arrow functions não acessam arguments 
Então utilizamos rest (...)

*/

const sum = () => {
    console.log(arguments);
}
console.log(sum(5,5,5,5));


const sum2 = (...args) => {
    console.log(args);
    return args.reduce((acc, value) => acc += value ,0)
}
console.log(sum2(5,5,5,5));
