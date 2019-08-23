`
Javascript não tem modificar de acesso (public, private)
É utilizado como convensão, como no python _prop e _func para private
A principio symbols foram criardos para implementar atributos private, 
foi mudado muito a especificação e o symbol se tornou um fornecedor de  propriedade única.

`

//synbols são unicos

const symbol1 = Symbol();
const symbol2 = Symbol();
console.log(typeof(symbol1));
console.log(symbol1 === symbol2); //false

//Previne conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');
console.log(nameSymbol1);

const user = {
    [nameSymbol1]: 'Thyago',
    [nameSymbol2]: 'Outro Nome',
    lastName: 'Franco'
};


console.log(user);
console.log(user.nameSymbol1) //undefined


// Symbols criam propriedades "privadas", elas não são enumerables

for (const key in user){
    if (user.hasOwnProperty(key)) {
        console.log(`${key}: ${user[key]}`);
    }
}

//buscando propriedades do objeto, não retorna os symbols
console.log(Object.keys(user));
//buscando o valor das propriedades do objeto, não retorna os valores dos symbols
console.log(Object.values(user));

//  Para buscar as propriedades dos Symbols precisamos utilizar o método Object.getOwnPropertySymbols()
console.log(Object.getOwnPropertySymbols(user));

//  Acessando todas as propriedades de um Objeto que contenha Symbols Reflect.ownKeys
console.log(Reflect.ownKeys(user));

//  Symbol também são utilizados para criar enum.

const directions = {
    UP      : Symbol( 'UP' ),
    DOWN    : Symbol( 'DOWN' ),
    LEFT    : Symbol( 'LEFT' ),
    RIGTH   : Symbol( 'RIGTH' ),
};

