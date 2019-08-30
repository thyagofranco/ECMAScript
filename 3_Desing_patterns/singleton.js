
// Caso já exista uma instancia da função my app, ela retorna a instancia em execução.

function MyApp() {
    if(!MyApp.instance) {
        MyApp.instance = this;
    }

    return MyApp.instance;
}

function Pessoa() {
    if (!Pessoa.instance) {
       Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Thyago'}); // const p = Pessoa({name: 'Thyago'}); 

const p2 = Pessoa.call({name: 'Custom Name'}); // const p2 = Pessoa({name: 'Custom Name'});
 
constole.log(p); // name: 'Thyago'
constole.log(p2); // name: 'Thyago'

