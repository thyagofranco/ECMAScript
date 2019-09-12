/*

Promise.all()

*/

const doSomethingPromisseAsFunction = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        // did something
        resolve('First data');
    },2000);

});

const doOtherThingPromisseAsFunction = () => new Promise((resolve, reject) => {
    
    setTimeout(function(){
        // did something
        resolve('Second data');
    },1500);

});

// Executamos em paralelo ao invez de sequencial.
Promise.all([doSomethingPromisseAsFunction(), doOtherThingPromisseAsFunction()]).then((data) => {
    console.log(data);
});

// A que resolver primeiro é retornada
Promise.race([doSomethingPromisseAsFunction(), doOtherThingPromisseAsFunction()]).then((data) => {
    console.log(data);
});