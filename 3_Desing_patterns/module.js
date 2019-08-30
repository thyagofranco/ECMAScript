/*
ES5

(function($){
    // your plugin here
})(jQuery);
*/

/*
// ES6

class Person{
    constructor(name) {
        this.name = name;
    }
}

export default Person; //   nodejs module.exports = Person;


//  Utilizar Person


ES5 const Person = require('./module')
ES6 import Person from './module';

*/


let name = 'default';

function getName() {
    return name;
}

function setName(newName) {
    name = newName;
}

module.exports = {
    getName,
    setName
}
