/* 
IIFE - Immediately Invoked Function Expresion 
Revealing Module Patter
var fn = (function()...)();
*/

var counter = (function(){
    var _value =0;
    var _add = function() {
        return ++_value;
    };
    var _reset = function(){
        _value = 0;
    };
    return {
        add: _add,
        reset: _reset
    };
    
})();

console.log(counter.value); // não foi revelado.
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());
