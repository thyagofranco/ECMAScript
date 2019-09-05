
// Função Construtora, não é Factory
function FakeUser() {
    this.name: 'Thyago';
    this.lastName: 'Franco';
}
const user = new FakeUser();
// não é Factory

//é Factory
function Pessoa(name){
    return {
        name, // igual a name: name,
        lastName: 'Franco'
    }
}
const p = Pessoa('Thyago');
console.log(p);

function Pessoa2(customProperties){
    return {
        name: 'Thyago',
        lastname: 'Franco',
        ...customProperties
    }
}
const p = Pessoa2({name:'Custom Name',age:29});
console.log(p);
//é Factory

