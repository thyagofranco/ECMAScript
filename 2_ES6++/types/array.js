/*  Arrays são objetos que permitem criar outros objetos,
outros "tipos primitivos", estrutura de dados...

*/

const user = ['Thyago','Martin','Camila'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Thyago',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Martin',
        age: -3,
        gender: gender.MAN
    },
    {
        name: 'Camila',
        age: 29,
        gender: gender.WOMAN
    }
];


//  Retornar a quantidade de itens de um array
console.log(persons.length);

//  Verrificar se é array
console.log(Array.isArray(persons));

//  Iterar item a item do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
})

//  Iterar item a item do array trazendo também o index e o array com um todo
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index:${index}`,arr);
})


//  .filter() Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log(mens);

// .map() Retornar um novo, executando alguma modificação
const personWithCourse = persons.map(person =>{
    person.course = 'Introdução ao Javascript';
    return person;
});

console.log(personWithCourse);

// .reduce()  Transforma o array em outro tipo

const totalAge = persons.reduce((age, person) => {                                                                
    age += person.age;                                            //  para cada idade da pessoa eu somo na variavel age                  
    return age;                                                   // muito importante retornar para que a próxima iteração recebe esse valor 
}, 0);                                                          //  0 é o valor inicial. 

console.log(totalAge);

//Somar a idade das pessoas que tem idade par
const totalEvenAgesSum = persons
    .filter(person => person.age % 2 === 0)
    .reduce((sum, person) =>{
        sum += person.age;
        return sum;
    },0);

console.log(totalEvenAgesSum);



