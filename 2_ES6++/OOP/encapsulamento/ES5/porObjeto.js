
// Encapsulando com objetos:

var counter ={
    value: 0,
    add: function() {
        return ++this.value;
    }
};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());


var itens = {
    value: [],
    add: function (item) {
        this.value.push(item);
        return this.value;
    }
};

console.log(itens.add('A'));
console.log(itens.add('B'));
console.log(itens.add('C'));

console.log(counter.add());

// O problema é que em javascript não temos modificadores de acesso 
//(privete, public) e corremos o risco de acessar diretamente propriedades de um objeto.

counter.value = undefined;
console.log(counter.add());
