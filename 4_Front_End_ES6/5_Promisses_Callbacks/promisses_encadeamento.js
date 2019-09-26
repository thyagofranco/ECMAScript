/*

() => new Promisse()

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
        console.log(data); 
        return doOtherThingPromisseAsFunction()
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error));


