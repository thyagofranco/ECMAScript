Objetos
=======

Objeto em javascript
================
Em javascript objeto é uma coleção dinâmica de chaves e valores de qualquer tipo de dado. Diferente de outras linguagens como java, onde o objeto é uma instancia de uma classe, os objetos são criados dinamicamente.       
É possivel adicionar ou remover propriedades dinamicamente( a qualquer momento ).          
 
Em ES5 não há construtores , classes , nem métodos. somente construção dinámica de chaves e valores, e quando por acaso um desses valores é uma função, podemos até chama-lo de método, mas não existe de forma específica na linguagem. 

Todo objeto herda de outros objetos.



No "right" way
=============

Não existe um jeito correto, um jeito único de OOP em Javascript. 
Javascript deriva de:    
Scheme: Lambda, Clousure, Tipagem fraca.    
Java: Sintaxe e algumas convenções.    primitivo, pegadinhas do JS
Self: herança baseada em protótipos, objetos dinâmicos.   
Perl: expressões regulares.    
javscript é multiparadigma, pode trabalhar orientada a objetos, funcinal, etc.. Por isso são várias as possibilidades que a linguagem traz. Além disso Javascript e seu padrão ECMA atendem especificações que são discutidas por várias empresas como Microsfot , Google , Mozilla , Apple e por isso não segue apenas uma linha de fazer as coisas.

### Formas de criar objetos:   
- Object Literals: var = {key: "value"}
- Factory: function() return this
- new: Função Construtora + new
- Object.create()

## Fabric function vs new 
É uma questão de design, ambas cumprem a mesma função.
- Fabric: mais verbosa, mas não há nada escondido, chama a função, retorna objeto.
- new: Mais elegante, enxuta, mas a função construtora demanda o operador new, que pode não ser compreendido por todos. Pode-se esquecer o operador new na chamada da função.

##Onde utilizar cada uma:
- In_line: Quando a necessidade é a criação de apenas um objeto.
- Factory ou new, quando necessita a criação de vários objetos.




Herança Diferencial
==============

### Delegation over inheritance

Um objeto so pode fazer o que pode fazer, caso não possa, ele pode delegar a outro objeto, e a forma default de delegação é para seu objeto protótipo.  
O objeto criado com referencia a um protótipo, só possui em si, as caracteristicas que o diferenciam do seu objeto protótipo.


No javascript a herança é baseada em prototipos (prototype).   
Prototype é uma variável que armazena as informações do nosso objeto. Ao criar uma variavel no javascript, ela tem a referência __proto__ que aponta para o prototype do TYPE que a variável foi criado. Esse TYPE,chamamos de constructor.    

[Hireritance.js](./hireritance/hireritance.js)



Classes em javascript
=======
Açucar sintático adicionado no ES6, que por baixo dos panos utiliza prototype.   
class, extends, constructor, super, static.    

[Classes](./Classe/)

Prototypes
==========

Todo objeto ao ser criado aponta para um prototype. O prototype padrão é Object.prototype = null.


### Classe vs Prototype
Classe é um molde para um objeto, ao estanciar uma classe, temos um objeto com todas as suas propriedades.    

Prototype é um objeto que é referenciado por outros objetos, os objetos que referenciam o prototype, não dispõe de suas propriedades.     

Portanto, ao tentar acessar uma propriedade que o objeto não tem, esta propriedade será buscada no seu prototype.   

## Trabalhando com protótipos. 
- Criamos um objeto, seja de forma literal ou através de funções.
- Criamos novos objetos que referenciam(herdam) diretamente outros objetos, e conseguimos compor objetos com as propriedades de seu objeto prototípo(referenciado)
- Podemos customizar diretamente os novos objetos

Não é necessário fazer a taxonomia (classificação) antecipada dos objetos, definindo de onde eles herdam, de qual classe eles herdam, o que implementam.
Essa definição antecipada da hierarquia que os sistemas classicos baseados em classes dispõe, causa um acoplamento muito grande.

### Propriedade .prototype
Só existe em funções.   
É um objeto que as funções tem que serve para compartilhar propriedades com os objetos criados por meio daquela função.    
Quando um objeto é criado com new, o operador new faz o link do objeto ao .prototype da função.
A função construtora de um objeto tem uma propriedade chamada .prototype que é um {};
Neste objeto/propriedade .prototype, podemos armazenar propriedades que gostariamos que os objetos criados por essa função através do 
operador new, tivessem links a este prototype.


### Delegation over inheritence 

Modificadores de acesso 
=======================

Não há no momento    

this.# em implementação Stage 3 ESNext



Encapsulamento
===============

Particularidades do Javascript.
------------------------------
Java script não tem linker, e o escopo global é quem faz a resolução de referencias externas. Ele faz uso do escopo global compartilhado para estabelecer os vínculos entre diferentes partes de uma aplicação. 

Então como encapsular?
-----------------------

### Objeto:

Podemos evitar confuzão com o escopo global no javascript, encapsulando funções em objetos.

O problema é que em javascript não temos modificadores de acesso (privete, public) e corremos o risco de acessar diretamente propriedades de um objeto.

### Funções

- factory
- new (função construtora)
- IIFE (Immediately Invoked Function Expresion) Module Patter




Static
=======

Permite acessar atributos e métodos sem instanciar um objeto de uma classe.

