
const doSomethingPromisseAsFunction = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        // did something
        resolve('First data');
    },1000);

});

const doOtherThingPromisseAsFunction = () => new Promise((resolve, reject) => {
    //throw new Error('Somethin wrong');
    setTimeout(function(){
        // did something
        resolve('Second data');
    },1000);

});

doSomethingPromisseAsFunction().then(data => console.log(data));
doOtherThingPromisseAsFunction().then(data => console.log(data));