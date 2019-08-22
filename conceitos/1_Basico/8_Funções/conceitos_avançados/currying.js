//Função normal:

function soma_basica(a, b){
    return a + b;
}

console.log(soma_basica(1,1));
console.log(soma_basica(1,2));
console.log(soma_basica(1,3));
console.log(soma_basica(1,4));


//Aplicado cyrring para passar o param (1, _)

function soma(a) {
    return function(b){
        return a + b;
    }
}

const soma1 = soma(1);
console.log("______ com curryings______")
console.log(soma1(1));
console.log(soma1(2));
console.log(soma1(3));
console.log(soma1(4));
