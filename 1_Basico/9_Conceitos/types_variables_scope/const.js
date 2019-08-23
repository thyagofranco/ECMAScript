//Const não permite troca de valor quando é atribuido a um tipo primitivo.

const name = 'Thyago';

//Não podemos alterar o valor
//name = 'Thyago2';  --> TypeError: Assignment to constant variable.


//  Conseguimos alterar as propriedades de um objeto criado em const:

const user = {
    name: 'Thyago'
};

//Trocando propriedades OK
user.name = 'Outro nome'

/*
    Não conseguimos trocar o apontamento do objeto 
    user = 'Thyago'  
    >>>
    TypeError: Assignment to constant variable.
    ou
    user = {
        name: 'Thyago'
    };
    >>>
    TypeError: Assignment to constant variable.

*/

// O mesmo para Arrays
const persons = ['Thyago','Pedro','Camila'];

//  Podemos adicionar novos itens
persons.push('João');

// Podemos remover algum item
persons.shift(); //Tira o primeiro item do array

// Podemos alterar diretamente um item
persons[1] = 'James';

console.log('\nArray após as alterações',persons);

// Não consigo mudar o apontamento de persons para outro Array  persons = []