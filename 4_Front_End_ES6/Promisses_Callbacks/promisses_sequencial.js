

const doSomethingPromisse = new Promise((resolve, reject) => {
    
    setTimeout(function(){
        // did something
        resolve('First data');
    },2000);

});

const doOtherThingPromisse = new Promise((resolve, reject) => {

    setTimeout(function(){
        // did something
        resolve('Second data');
    },2000);

});

doSomethingPromisse.then(data => console.log(data));
doOtherThingPromisse.then(data => console.log(data))





