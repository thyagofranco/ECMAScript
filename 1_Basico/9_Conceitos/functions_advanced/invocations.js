
var soma = function (a, b) {
    return a + b;
};

// Invocando diretamente em escopo global. 

soma(2,2); // 4 

// Passagem de função como parâmetro

var produto = {nome:'Sapato', preco: 150};

var formulaImpostoA = function(preco) {return preco * 0.10;};
var formulaImpostoB = function(preco) {return preco * 0.20;};
var calculaPreco = function(produto, formulaImposto) {
    return produto.preco + formulaImposto(produto.preco);
}

calculaPreco(produto, formulaImpostoA); // 165
calculaPreco(produto, formulaImpostoB); // 180


