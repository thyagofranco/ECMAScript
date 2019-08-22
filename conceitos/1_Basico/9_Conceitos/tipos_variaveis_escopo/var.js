//escopo global

function test(){
    //escopo de função
    {
        //escopo de bloco    
    } 
}

/*

var não respeita/entende escopo global, vaza escopo 

let/const respeitam (não fazem Hoisting)


*/

//escopo global
var test = 'example';

(() =>{
//escopo de função
    console.log(`Valor dentro de função "${test}"`);

    if (true){
        //escopo de bloco
        var test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após execução do if "${test}"`);
})();

/*

//escopo global
var test = 'example';

(() =>{
    var test; (Hoisting do var, vazando o escopo de bloco)
    console.log(`Valor dentro de função "${test}"`);

    if (true){
        var test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após execução do if "${test}"`);
})();

*/