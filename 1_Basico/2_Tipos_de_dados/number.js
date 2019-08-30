/**
 * 
 * Em javascript só temos Number para os digitos numéricos
 * IEEE-754 (Standard for Floating-Point)
 * binary64 ou Double Precision 8bytes
 * 
 * Em outras linguagens temos o number segmentado:
 * byte : 1 byte
 * short : 2 bytes
 * int :  4 bytes
 * long:  8 bytes 
 * float: 4 bytes
 * double: 8 bytes
 * 
 * Uso racional de memória, pela limitação de memória no passado
 */

 var nota = 10;

 nota.toExponential(2); // 100
 nota.toFixed(2); // 10.00
 nota.toPrecision(1); // 1e+1
 nota.toString(); // "10"
 nota.valueOf(); //10

/**
 * 
 * Exeções
 * 
 * Soma de numeros binários com frações, deixam resíduos
 * 
 * 0.1 + 0.2 =  0.30000000000000004
 * 
 * 3/0 = Infinity
 * 
 * "AgileCode" * 10 = NaN  //NaN = Not a Number
 * 
 */

 /**
  *  Math Api
  * 
  * abs - Valor absoluto do número
  * floor - valor inteiro do número
  * log - Logarítimo natural do número (base E)
  * min - Retorno o menor número
  * max - Retorna o maior número
  * pow - Potência do número
  * random - Gera um número randômico
  * round - Arredonda o número para o inteiro mais próximo
  * sin - Seno do número
  * sqrt - Raíz quadrada do número
  * tan - Tangente do número
  * 
  *  */
 