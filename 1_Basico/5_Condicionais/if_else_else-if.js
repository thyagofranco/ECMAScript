/*

Condicionais  if

if (condition) {

}

*/

var idade = 20
if (idade >= 18){
    console.log("maior de 18");
}else{
    console.log("menor de 18");

}

/*

if (condition) {

}else(condition){

}

*/

const array = [2, 3, 4, 5, 6, 8, 10];

array.forEach(item => {
    if (item % 2 === 0){
        console.log(`O numero ${item} é par.`);
    }else{
        console.log(`O numero ${item} é impar.`);
    }
});


/*

if (condition) {

}else if(condition){

}else if(condition){

}else if(condition){

}else if(condition){

}

*/

array.forEach(item => {
    if (item % 2 === 0){
        console.log(`O numero ${item} é divisivel por 2.`);
    }else if (item % 3 === 0){
        console.log(`O numero ${item} é divisivel por 3.`);
    }else if (item % 5 === 0){
        console.log(`O numero ${item} é divisivel por 5.`);
    }
});


array.forEach(item => {
    if (item % 2 === 0){
        console.log(`O numero ${item} é divisivel por 2.`);
    }if (item % 3 === 0){
        console.log(`O numero ${item} é divisivel por 3.`);
    }if (item % 5 === 0){
        console.log(`O numero ${item} é divisivel por 5.`);
    }
});


