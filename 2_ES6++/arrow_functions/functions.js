//  Two identical functions, but one is function, other is => arrow function

function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here';    //    O return é implicito se você não passa variavies

const arrowFn2 = () => {
    //  Mais expressões aqui
    return 'Code here';
}


//  Funções também são objetos

fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop); //    não é comum


//  Receber parâmetros
const logValue = value => console.log(value);   //  valores como parâmetros
const logFnResult = fnParam => console.log(fnParam());  //  functions como param

logValue(fn()); 
logFnResult(fn);

//  Receber e retornar funções 

const controlFnExec = fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);    
handleFnExecution(true); // Executará a função fn
handleFnExecution(); // Não executará a função fn
controlFnExec(fn, true); // Também poderia passar diretamente os dois param

// controlFnExec como função 
function controlFnExec2(fnParam){
    return function(allowed){
        if (allowed) {
            fnParam();
        }
    }
}


/*

O Contexto de execução da ()=> é o que diferencia ela das functions{}.
Em ()=> this. sempre referencia ao contexto de criação da ()=>.
Já em function{} o this. referencia ao contexto de sua execução.

*/

(()=>{
    this.name = 'arrow function';
    const getNameArrowfn = () => this.name;

    function getName() {
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowfn,   //  getNameArrowfn: getgetNameArrowfn    mesma coisa
        getName, 
    }

    console.log(user.getNameArrowfn());
    console.log(user.getName());

})();



