//escopo global

{
//escopo de bloco    
}

function test(){
//escopo de função 
}

//let test = 'valor no escopo global';
//Nao se pode declarar ela no escopo global e em outro escopo: SyntaxError: Identifier 'test' has already been declared

(() => {
    let test = 'valor função';
    console.log(`Valor dentro da função: "${test}"`);

    if(true) {
        let test = 'valor dentro do bloco if';
        console.log(`Valor dentro do if "${test}"`);

    }

    console.log(`Valor após a execução do if "${test}"`);

})();