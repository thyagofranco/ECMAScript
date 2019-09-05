
var Counter = function() {
    var value = 0;
    this.add = function() {
        return ++value;
    },
    this.getValue = function(){
        return value;
    }
};

var contador = new Counter();
//console.log(contador.value());
console.log(contador.add());
console.log(contador.add());
console.log(contador.add());
console.log(contador.getValue());
