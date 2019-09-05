/**
 * Devemos tomar cuidado com o escopo global.
 * Funções pode mudar de comportamento se esquecemos de restringir seu escopo ou não encapsular.
 * 
 */

 var counter = 0;
 var add = function() {return ++counter;}
 console.log(
     add(),
     add(),
     add(),
     counter
 );

 var itens = [];
 // Em algum momento do código, no escopo global, você altera uma função:
 var add = function(item) {
     itens.push(item);
     return itens;
 }

 console.log(add('A'));
 console.log(add('B'));
 console.log(add('C'));

 // E depois ach a que está utilizando o primeiro add() para acrescentar no counter, mas o resultado é outro
 console.log(add());
