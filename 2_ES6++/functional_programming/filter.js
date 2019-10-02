const students = [
    {name:"Anna", grade: 6},
    {name:"John", grade: 4},
    {name:"Maria", grade: 9}
    
]

/*
ES6

const approvedStudents = []
for (const student of students) {
    if (student.grade >= 9) {
        approvedStudents.push(student.name) 
    }
}

*/

const approvedStudents = students.filter(student => student.grade >= 9);
console.log(approvedStudents);

/*
ou

const isApproved = student => student.grade >= 9;
const approvedStudents = students.filter(isApproved);


*/