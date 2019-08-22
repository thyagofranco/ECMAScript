// Utiliza-se const para objetos pois let e var pode ser reatribuido

let letObject = {
    name: 'Thyago'
};
letObject = 2;

var varObject = {
    name: 'Thyago'
};
varObject = 2;

const constObject = {
    name: 'Thyago'
};

//  constObject = 2;  --> TypeError: Assignment to constant variable.

const user = {
    name: 'Thyago'
};
console.log(user);

// Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user)

user['name'] = 'Outro nome 2';
console.log(user)

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user)

//  Criando uma propriedade
user.lastName = 'Franco';
console.log(user)
// Deletando uma propriedade
delete user.name;
console.log(user)

const usuario = {
    name: 'Thyago',
    lastName: 'Franco'
};

// ----------------------- ------------------
//  Recupera as chaves do objeto
console.log(Object.keys(usuario));

//  Recupera os valores das chaves do objeto
console.log(Object.values(usuario));

//  Retorna um array de arrays com as keys e values em string--> [[nome_prop, valor_prop]]
console.log(Object.entries(usuario));

// Mergear propriedades de objetos

// Adiciona uma nova propriedade ao objeto, Não é recomendado pensando na imutabilidade
Object.assign(usuario, {fullName: `${usuario.name} ${usuario.lastName}`});
console.log(usuario);

//  Retorna um novo objeto mergeando dois ou mais objetos. BOA PRATICA
//  console.log(Object.assign({},usuario,{age: 29}));
novoUser = Object.assign({}, usuario,{age: 29});
console.log(novoUser)


//  Object.freeze Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);
delete newObj.foo;  // não faz por conta do freeze
newObj.bar = 'foo'; // não faz por conta do freeze

console.log(newObj);

//Permite apenas a alteração de propriedades existentes em um  objeto
const person = {name: 'Guilherme'};
Object.seal(person);

person.name = 'Thyago';  //permite a alteração
delete person.name;      //não permite deletar a propriedade   
person.age = 26;        //não permite criar a propriedade

console.log(person)