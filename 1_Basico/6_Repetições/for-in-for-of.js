var arr = [3, 5, 7];

//  For in traz os indices 

for (var i in arr){
    console.log(i)
}

//  For of traz os valores

for (var i of arr){
    console.log(i);
}


/**
 * somente propriedades numeradas do array, como array é um objeto 
 * se acrescentarmos uma prop nele, o for fo não mostra
 * 
 *  */ 

 arr.foo = "hello";
 console.log(arr);

for (var i in arr){
    console.log(i)
}

//  For of traz os valores

for (var i of arr){
    console.log(i);
}
//foo não aparece