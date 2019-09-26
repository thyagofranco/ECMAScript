/*
const doSomethingPromisse = new Promise((resolve, reject) => {

    setTimeout(function(){
        // did something
        resolve('First data');
    },1000);

});

const doOtherThingPromisse = new Promise((resolve, reject) => {

    setTimeout(function(){
        // did something
        resolve('Second data');
    },1000);

});



doSomethingPromisse.then(data => console.log(data.split('')));
doOtherThingPromisse.then(data => console.log(data.split('')));
*/

const doSomethingPromisseAsFunction = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        // did something
        resolve('First data');
    },1000);

});

const doOtherThingPromisseAsFunction = () => new Promise((resolve, reject) => {
    
    setTimeout(function(){
        // did something
        resolve('Second data');
    },1000);

});

doSomethingPromisseAsFunction()
    .then(data => { 
        console.log(data.split('')); 
        return doOtherThingPromisseAsFunction()
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));