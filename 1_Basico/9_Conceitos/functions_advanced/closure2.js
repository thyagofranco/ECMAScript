var helloWorld = function() {
    var message = "Hello World!";
    return function(){
        return message;
    };
};

console.log(
helloWorld, // [Function: helloWorld]    // function da linha1
helloWorld(), //[Function]  // function da linha 3
helloWorld()() // "Hello World" //  return message
);

// Usando a closure.
// A importancia da closure é mantar a referencia externa a função, neste caso o var message.
var falarHelloWorld = helloWorld();
console.log(falarHelloWorld());