/*


Async 

Adicionado no ES7 , vindo de outras linguagens, açucar sintático para simplificar o uso de promisses promisses.
Lidar de maneira sequencial com código assíncrono.

Async cria promisses e seu return são promisses resolvidas.

Para tornar uma function assíncrona basta colocar a palavra reservada assync functio() { } 

Await

Aguarda que outras promisses sejam resolvidas.

*/

const simpleFunc = async () => {                                       //Retorna uma promisse resolvida
    
    return 12345;

};


console.log(simpleFunc())


simpleFunc().then(data => console.log(data));                          //Tratamos como uma Promisse





const asyncTimer = () => new Promise((resolve, reject) => {        // retorna uma promisse pendente com o valor 12345 após 4s
    setTimeout(()=> {
        resolve('12345');
    }, 4000)
});



const simpleAsyncAwait = async () => {                            // Retorna data após asyncTimer() resolver.
    
    const data = await asyncTimer();
    return data; 

};

simpleAsyncAwait().then(data => console.log(data));