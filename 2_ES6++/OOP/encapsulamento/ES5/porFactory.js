var counter = function() {
    var value = 0;
    var add = function () {
        return ++value;
    }
}

console.log(counter.value); //  undefined
//counter.add();  TypeError ... Não é possivel fazer

var createCounter = function() {
    var value = 0;
    return {
        add: function() {
            return ++value;
        }
    };
};

var counter = createCounter();

console.log(counter.value); // undefined , não podemos acessar
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
