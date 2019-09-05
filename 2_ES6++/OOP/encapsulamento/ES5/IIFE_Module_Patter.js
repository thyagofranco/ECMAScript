/* 
IIFE - Immediately Invoked Function Expresion 
Module Patter
var fn = (function()...)();

Convenção de _variavel para indicar private
*/

var counter = (function(){
    var _value =0;
    return {
        add: function() {
            return ++_value;
        },
        reset: function(){
            _value = 0;
        }
    };
})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());
