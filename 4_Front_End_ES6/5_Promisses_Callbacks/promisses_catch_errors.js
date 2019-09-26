

const doSomethingPromisse = new Promise((resolve, reject) => {
    throw new Error('Something went wrong');
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

doSomethingPromisse.then(data => console.log(data)).catch(error => console.log(error));





