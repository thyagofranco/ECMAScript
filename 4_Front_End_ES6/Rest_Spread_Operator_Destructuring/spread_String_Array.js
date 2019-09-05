const str = 'Thyago Franco'
const arr = [1,2,3,4,5];

function logArgs(...args) { //rest
    console.log(args);
}

function logArgs2(a, b, c) {
    console.log(a, b, c);
}

logArgs(...str); //spread String
logArgs(...arr); //spread Array
logArgs2(...arr); //spread Array

//================================ Construindo Arrays

const arr2 = arr.concat([6,7,8]);
console.log(arr2);

// Com ...spread

const arr3 = [...arr2, 9, 10];
console.log(arr3);