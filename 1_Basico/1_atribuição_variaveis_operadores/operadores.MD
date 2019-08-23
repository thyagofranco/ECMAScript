Diferença entre operadores
==========================

##Binários

operando1 operador operando2

1 + 2

## Unário

operando1 operador     
operador operando       
   
x++   
++x   

Aritiméticos
==============

### Módulo (%)

Operador binário.     
Retorna o inteiro restante da divisão dos dois operadores.

12 % 5


###  Incremento (++)
++x
x++

// Posfixo    
var x = 3;    
y = x++; // y = 3, x = 4    

// Prefixo    
var a = 2;    
b = ++a; // a = 3, b = 3    

###  Decremento (--)
--x   
x--    

// Posfixo    
var x = 3;    
y = x--; // y = 3, x = 2    

// Prefixo    
var a = 2;    
b = --a; // a = 1, b = 1    

### Negação (-) e Adição (+)

-3
+"3"   //   reotrn 3   //Mesma função de um parseInt();    
+true   //  retorna 1    
+false  //  retorna 0    
-true   //  retorna -1   


### Operador de exponenciação (**) 
2 ** 3  // retorna 8

10 ** -1    // retorna 0.1

### Operador de agrupamento ()
2 * (3 + 2)     // retorna 10


Atribuição
==============

### Atribuições

- x = y
- Atribuição de adição: x = x + y  ou x += y
- Atribuição de subtração: x = x - y ou x -= y
- Atribuição de multiplicação: x = x * y ou x *= y
- Atribuição de divisão: x = x / y ou x /= y
- Atribuição de resto: x = x % y ou x %= y


Comparação
==============

### Igual (==)

Retorna veradeiro caso os operadores sejam iguais.    
3 == 3      //  true    
3 == '3'    //  true   //tipagem fraca     

### Não igual (!=)

Retorna verdadeiro caso os operadores não sejam iguais.    
3 != '3'    //  false  //tipagem fraca      
3 != 4      //  true     

### Estritamente Igual (===) 
É uma boa prática sua utilização, retorna verdadeiro caso os operadores sejam iguais e sejam do mesmo tipo.

3 === '3'   //  false    
3 === 3     //  true   

### Estritamente não igual (!==) 
É uma boa prática sua utilização, retorna verdadeiro caso os operadores não sejam iguais e/ou não seham do mesmo tipo.

3 !== '3'   //  true     
3 !== 4     //  true    
3 !== 3     //  false    

### Maior que (>)
Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.

'3' > 2 // true    
3 > 2   // true    
3 > 4   // false   

### Maior que ou igual(>=)
Retorna verdadeiro caso o operando da esquerda seja maior ou igual que o da direita.

'3' >= 2 // true   
3 >= 3   // true    
3 >= 4   // false    

### Menor que (<)
Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.

'3' < 2 // false    
3 < 2   // talse    
3 < 4   // true    
 
### Menor que ou igual (<=)
Retorna verdadeiro caso o operando da esquerda seja menor que o da direita ou igual.

'3' <= 2 // false   
3 <= 3   // true    
3 <= 4   // true    


Condicional
==============

### Ternário (?)

Dada a condição; caso verdade: valor1 ; caso falso: valor2

condicao ? valor1 : valor 2

true ? 'foo' : 'bar'    //  retorna 'foo'   
false ? 'foo' : 'bar'    //  retorna 'bar'   


Lógicos
==============

### AND lógico (&&)


exp1 && exp2   

comparações booleanas:
var a1 = true   && true;      //  true.   
var a1 = true   && false;     //  false.    
var a1 = false  && true;      //  false.    
var a1 = false  && false;     //  false.    

comparações não booleanas:   
var a1 = "Gato" && "Cão";     //  Cão.    
var a1 = false  && "Gato";    //  false.    
var a1 = "Gato" && false;     //  false.    

?Tip: && tende ao false , somente true && true = true.    

### OU lógico (||)

exp1 || exp2.   

var a1 = true   || true;      //  true.   
var a1 = false  || true;      //  true.    
var a1 = true   || false;     //  true.    
var a1 = false  || false;     //  true.    
var a1 = "Gato" || "Cão";     //  "Gato".    
var a1 = false  || "Gato";    //  "Gato".     
var a1 = "Gato" || false;     //  "Gato".     

?Tip: || tende ao true , somente false && false = false

### NOT lógico (!)

var n1 = !true; //   false    
var n1 = !false; //  true    
var n1 = !"Gato"; //  false     



## O que retorna true ?
"."     // String    
1    
['teste']   //  Array com item     
 

## O que retorna false?

""     // String vazia    
0    
[]   //  Array sem item    


Spread (...)
==============

O operador spread permite que uma expressão seja expandido em locais onde são esperados vários argumentos (para chamadas de função) ou vários elementos (para arrays).

var partes = ['ombro', 'joelhos'];    
var musica = ['cabeca', ...partes, 'e', 'pés'];    

function f(x, y, z) { }    
var args = [0, 1, 2];    
f(...args);   

(in)
==============

something in someiterable

### (in) em Arrays

var arvores = new Array("pau-brasil","loureiro","cedro","carvalho","sicômoro");

// passando o index    
0 in arvores;   //  true    
3 in arvores;   //  true    
6 in arvores;   //  false    
"cedro" in arvores; // false  // devemos passar o indice não o valor    
"length" in arvores;    // retorna true (length é uma propriedade de Arry)   

### (in) em Objetos

## Objetos predefinidos
"PI" in Math;   //  true

var minhaString = new String("coral");    
"length" in minhaString;    true   

## Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};   
"marca" in meucarro;    //  true  
"modelo" in meucarro;    //  true   


(Instaceof)
==============

Objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {   // true   
        // code here   
}


