/*
Não existe array de verdade em javascript, array classico com tamanho finito.
Em javascript arrays são um tipo de objetos especiais, que oferecem meios para acessar e manipular
as propriedades por meio de índices. 
Tem performance pior mais são mais faceis de utilizar. 


*/

// Criação e inserção
// vazio []
var carros = [];

// Inserir elemento indice
carros[0] = "Ka";
carros[1] = "Corsa";
carros[3] = "Palio";    // posição 2 será criado empty item
console.log(carros);
// já inicializado
var carros = ["Ka","Corsa","Palio"];
console.log(carros);

//new Array();
var carros = new Array();
console.log(carros);

// inserção in_line
var carros = new Array("Ka","Corsa","Palio");
console.log(carros);

var carros = new Array(10) // Cria um array com 10 campos vazios iniciais, em outras linguagens este seria o tamanho máximo do array, mas em javascript é o inicial, podendo aumentar
console.log(carros);


//======================================================= API do Array =======================================================
var carros = ["Ka","Corsa","Palio"];

console.log(carros.valueOf());

console.log(carros.toString());

console.log(carros.length);

console.log(carros.push("Gol"), carros.toString()); // Funciona como pilha, coloca um da ultima posição

console.log(carros.pop(), carros.toString()); // Funciona como pilha, retira um da ultima posição

console.log(carros.unshift("Gol"), carros.toString()); // Insere na primeira posição , em baixo da pilha

console.log(carros.shift(), carros.toString()); // Retira a primeira posição , em baixo da pilha

console.log(carros.indexOf("Corsa"));

/* Array.splice = Permite que: 
Remova elementos de uma posição.
Adicione elementos em uma posição específica. (empurrar itens para frente, após inserir)
Troque elementos de uma posição.

*/
// Splice para remover splice(posição do item a ser removido, quatidade de itens a serem removidos a partir daquele indice, para remover só o indice utilizar 1)
console.log(carros.splice(carros.indexOf('Corsa'),1),carros.toString());

// Splice para substituir splice(posição a ser substituida, quantidade a ser removida a partir do indece, "string" a ser adicionada)
console.log(carros.splice(carros.indexOf('Palio'),1,"Corsa"),carros.toString());

// Splice para inserir 
console.log(carros.splice(carros.length,0,"Palio"),carros.toString());


// Iterando em um Array
carros.forEach((elemento)=> console.log(elemento));

for(var i=0; i< carros.length; i++) {
    console.log(carros[i]);
}

// Filter - retornar apenas carros da marca Ford
var carros = [];
carros[0] = {marca: "Ford", modelo:"Ka"};
carros[1] = {marca: "Chevrolet", modelo:"Corsa"};
carros[2] = {marca: "Fiat", modelo:"Palio"};


var carFord = carros.filter((elemento) => {
        return elemento.marca ==="Ford";
    });
console.log(carFord);

//every  Testar se todos são da marca ford

var everyCar = carros.every((elemento) => {
        return elemento.marca ==="Ford";
        });
console.log(everyCar);

//some Testar se alguns são da marca ford

var someCar = carros.some((elemento) => {
        return elemento.marca ==="Ford";
    });
console.log(someCar);

//map - utilizado para retornar um novo array modificado
var marcasCarros = carros.map((elemento) => {
        return elemento.marca;
    });
console.log(marcasCarros);

var marcasLength = carros.map((elemento) => {
    return elemento.marca.length;
});
console.log(marcasLength);

// Adicionando preço nos carros

carrosPreço = carros.filter((elemento)=> {
    elemento.preço = parseInt((Math.random()* 100000).toFixed(0));
    return elemento;
});

console.log(carrosPreço);

// Reduce - utilizado para retornar um novo array processando com acumulação
// Recebe principalmente dois parametros, (function(valor atual, valor atual do elemento recebido){}, valor inicial);

carrosPreçoTotal = carros.reduce((acumulador, elemento )=> {
    return acumulador + elemento.preço;
},0);
console.log(carrosPreçoTotal);


// Concact 
var motos = ["Honda", "Yamarra"];
var carros = ["Ka","Corsa","Palio"];

var veiculos = carros.concat(motos);
console.log(veiculos);

//Slice (começando e incluindo a posição, posição -1)
var carros = ["Ka","Corsa","Palio","Gol"];
console.log(carros.slice(0,2));
console.log(carros.slice(1,3));
console.log(carros.slice(2)); // 2 em diante

//Reverse - Altera o Array original, inverte a ordem

console.log(carros.reverse());
console.log(carros.reverse());

//sort - string
console.log(carros.sort());


var carros = [];
carros[0] = {marca: "Ford", modelo:"Ka", preço: 50000};
carros[1] = {marca: "Chevrolet", modelo:"Corsa", preço: 30000};
carros[2] = {marca: "Fiat", modelo:"Palio", preço: 40000};

/* 

A Função sort também pode receber dois parâmetros sort(a, b) 
Com esses dois parâmetros fazemos uma comparação que deve retornar: 
se o retorno for um número negativo = a atraz, b na frente
se o retorno for 0 = mantem posições
se o retorno for positivo = b atraz, a na frente

*/

var carrosMenorPreco = carros.sort((a,b) => {
    return a.preço - b.preço;
}) 
console.log(carros)


//Join, juntar elementos de um array , separados por um separador definido, retornando uma string

var carros = ["Ka","Corsa","Palio"];
console.log(carros.join(";"));
