/**
 * 
 * Usando Call para encadear construtores para um objeto
 * 
 * Você pode usar call para encadear construtores para um objeto, similar ao Java. No seguinte exemplo, o construtor
 * do objeto Product é definido com dois parâmetros, name e price. Outras duas funções Food e Toy executam Product passando this, name e price.
 * O Produto inicializa as propriedades name e prace, ambos definem o category.
 * 
 */

function Product(name, price) {
this.name = name;
this.price = price;

if (price < 0) {
    throw RangeError('Cannot create product ' +
                    this.name + ' with a negative price');
}

return this;
}

function Food(name, price) {
Product.call(this, name, price);
this.category = 'food';
}

// Food.prototype = Object.create(Product.prototype);

function Toy(name, price) {
Product.call(this, name, price);
this.category = 'toy';
}

// Toy.prototype = Object.create(Product.prototype);

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

