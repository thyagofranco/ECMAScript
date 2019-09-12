// Sem arrow

var obj = {
    consoleLog: function consoleLog() {
        this.log('teste');
    },
    log: function log (value) {
        console.log(value);
    }
}

obj.consoleLog();

// Arrow  = TypeError: this.log is not a function
/*
var objArrow = {
    consoleLog: ()=> {
        this.log('teste arrow');
    },
    log: value => console.log(value)
}

objArrow.consoleLog();
*/