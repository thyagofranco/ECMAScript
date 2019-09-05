// Problema de contexto sem arrow function
//Solução com .bind()
var obj = {
    showContext: function showContext() {
        this.log('teste');
        setTimeout(function(){
            console.log(this);  // this aponta para o global.
            this.log('after 1000ms');
        }.bind(this),1000);
    },    
    log: function log (value) {
        console.log(value);
    }
}

obj.showContext();

// O problema com essa solução é que podemos esquecer o .bind e é muito berboso.