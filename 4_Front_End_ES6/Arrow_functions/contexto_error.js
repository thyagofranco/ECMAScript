// Problema de contexto sem arrow function
var obj = {
    showContext: function showContext() {
        this.log('teste');
        setTimeout(function(){
            this.log('after 1000ms');
        },1000);
    },    
    log: function log (value) {
        console.log(value);
    }
}

obj.showContext();
// o this. no contexto de setTimeout é o Windows Global do Browser
// Funções de timer, de callback de event listners , são invodas no contexto global.

