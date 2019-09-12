// Arrow functions não sofrem hoisting 

log('teste');

function log(value) {
    console.log(value);
}

// arrow functions

//log2('teste');   TypeError: log2 is not a function

var log2 = value => console.log(value);

log2('teste');