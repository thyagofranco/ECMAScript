var helloWorld = function() {
    return function() {
        return "Hello World";
    };
};

console.log(helloWorld); // [Function]  // Função na variável
console.log(helloWorld()); // [Function] - Retornando função
console.log(helloWorld()()); // "Hello World"  - invocando o retorna do função dentro da função