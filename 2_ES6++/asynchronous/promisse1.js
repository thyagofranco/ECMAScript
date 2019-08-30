console.log('Synchronous 1');   //  Call Stack

setTimeout(_ => console.log('Timout 2'), 0);    //  Task Queue , execute depois que o call stack está vazio

Promise.resolve().then(_ => console.log('Promise 3'));  //  Microtask Queue , executa depois de todas as ações no Call Stack

console.log('Syncronous 4'); 



