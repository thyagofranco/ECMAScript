/*
add(1,2 ) // 3

const add = (x, y) => x + y;

*/

/*
curried version
add(1)(2);

const add = (x) => {
    return (y) => {
        return x + y;
    };
};

*/

//const add = (x) => (y) => x + y;
const add = x => y => x + y;
console.log(add(1)(2));


//Real use case
const addFive = add(5);

console.log(addFive);

console.log(addFive(3));

