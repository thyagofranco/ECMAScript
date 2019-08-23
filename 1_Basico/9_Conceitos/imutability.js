`
No javascript não mudamos um array,objeto... quando adicionamos um item, ou removemos, cria-se um novo.

`
const user = {
    name: 'Thyago',
    lastname: 'Franco'
};
    
/*
trago o usuário e acrescento uma propriedade
...user
Spread operator, espelha o objeto:
Para cada propriedade de user ele coloca no novo objeto.
*/

function getUserWithFullName(user){
    return {
        ...user,  
        fullname:`${user.name} - ${user.lastname}`
    }

}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName, user);

console.log("Exemplo 2 ___________");


const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: '4'
    },
    {
        name: 'Paul',
        grade: 10
    },

];

//Filter retorna uma nova lista.

function getApprovedStudents(StudentsList){
    return StudentsList.filter(student => student.grade >= 7);

}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:')
console.log(students);

// Filter , Map, Reduce retornam um novo array, um novo objeto.