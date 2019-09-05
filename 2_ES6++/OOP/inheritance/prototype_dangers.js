/**
 * 
 * Temos que tomar cuidado com prototype pois podemos modificar métodos de tipos primitivos
 * 
 */

const teste = 'Teste do Split';

console.log(teste.split(''));

String.prototype.split(console.log('Ixi, Modificou um Tipo Primitivo'));

teste.split();

 