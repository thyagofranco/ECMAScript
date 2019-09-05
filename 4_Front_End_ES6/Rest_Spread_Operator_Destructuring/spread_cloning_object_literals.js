/**
 * 
 * Em javascrip ao efetuar obj1 = obj2 , não criamos um novo obj2, e sim referenciamos o mesmo objeto 
 * 
 */

const obj1 = {
    teste: 123
};

const obj2 = obj1;

obj2.teste = '456'

console.log(obj1);

//================= Clonando objetos com spread 

const obj3 = {
    ...obj1
};

obj3.teste = '789';

console.log(obj1);
console.log(obj3);

//======== Cuidado, o spread faz um shalow cloning, clone raso, não copia nested objects, objeto dentro de objeto.

const nestedObj = {
    teste: 123,
    subObj: {
        teste: 123
    }
};

const obj4 = {...nestedObj};

obj4.subObj.teste = 456;

console.log(nestedObj);


