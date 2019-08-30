/**
 * static permite acessar atributos sem instanciar uma classe
 * 
 * */

 'use strict'

 function PersonEs5() {}

 PersonEs5.walk = function() {console.log('walking...');}

 PersonEs5.walk();

 // ===========================  ES6 +
 
 class Person {
     static walk() {
         console.log('walking.....more');
     }
 }

 Person.walk();