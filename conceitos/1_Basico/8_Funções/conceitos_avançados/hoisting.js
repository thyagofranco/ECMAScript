/*
Hoisting: Levantar ou suspender:
Comportamento que existe no javascript, 
na declaração de variáveis e funções;

Hoisting de variáveis:
Ao utilizar uma variável ainda não declarada, a variável declarada é içada no código sem sua atribuição, 
somente sua declaração, não acontece o reference error e sim um undifined. 

Hoisting de funções:
Já no hoisting de função, ao utilizar a função ainda não declarada, ela é içada inteira, e não gera erro.

*/
//Hoisting de variáveis:

function fn() {
    console.log(text);

    var text = 'Example';

    console.log(text);
}

fn();

/*

>>>
undefined
Example 


function fn() {

    var text;   (Isso é o hoinsting, não temos um reference error e sim um undefined, a variável existe pois foi elevada, mas ainda não foi definida)

    console.log(text);

    var text = 'Example';

    console.log(text);
}
*/

//Hoisting de função:
console.log("______________")

function fnfn() {
    log('Hoisting de função');

    function log(value){
        console.log(value);
    }
}

fnfn();

/*

>>>
Hoisting de função

function fnfn() {
    function log(value){
        console.log(value);
    }

    log('Hoisting de função');
   
}

fnfn();

*/


