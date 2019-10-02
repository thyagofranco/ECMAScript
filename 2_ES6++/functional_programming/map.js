const students = [
    {name:"Anna", grade: 6},
    {name:"John", grade: 4},
    {name:"Maria", grade: 9}
    
]

/*
ES5

const studentsByName = []
for (const student of students) {
    studentsByName.push(student.name)
}

*/

const studentsByName = students.map(student => student.name)
console.log(studentsByName);

/*

ou

const byName = object => object.name;
const studentsByName = students.map(byName);



*/