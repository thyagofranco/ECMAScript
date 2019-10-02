const students = [
    {name:"Anna", grade: 6},
    {name:"John", grade: 4},
    {name:"Maria", grade: 9}
    
]

/*
ES5

let sum = 0
for (let student of students) {
    sum += student.grade
}

*/

const sum = students.reduce((acc, current) => {
    return acc += current.grade;
},0)

console.log(sum)

/*
const sum = students.reduce((acc, current) => acc += current.grade,0)

*/