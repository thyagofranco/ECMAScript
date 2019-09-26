//Método com Referencia externa

function sum(a , b) {
    return a + b;
}

var obj = {
    sum
};

console.log(obj.sum(2,5));

//Método com Referencia interna
var obj2 = {
    sum: function sum(a , b) {
        return a + b;
    }
};

console.log(obj2.sum(2,5));


//Método in_line
var obj3 = {
    sum(a, b) {
        return a + b;
    }
}

console.log(obj3.sum(2,5));

