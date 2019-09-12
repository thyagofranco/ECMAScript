// Problema de contexto sem arrow function
// Solução com var _that
var obj = {
    
    showContext: function showContext() {
        var _that = this;
        _that.log('teste');
        setTimeout(function(){
            console.log(this);  // this aponta para o global.
            _that.log('after 1000ms');
        },1000);
    },    
    log: function log (value) {
        console.log(value);
    }
}

obj.showContext();

