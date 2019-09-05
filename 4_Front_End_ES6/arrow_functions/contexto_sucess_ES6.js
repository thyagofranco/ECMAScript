// Solucionando o problema de contexto this com ()=>
var obj = {
    showContext: function showContext() {
        this.log('teste');
        setTimeout(() => {
            this.log('after 1000ms');
        },1000);
    },    
    log: function log (value) {
        console.log(value);
    }
}

obj.showContext();
// Onde o contexto vai ser alterado, como no setTimeout, podemos utilizar
// arrow function, por conta de sua propriedade, de mantar o contexto de execução = contexto criação 