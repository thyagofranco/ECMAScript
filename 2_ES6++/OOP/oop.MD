Herança
=======
No javascript a herança é baseada em prototipos (prototype).   
Prototype é uma variável que armazena as informações do nosso objeto. Ao criar uma variavel no javascript, ela tem a referência __proto__ que aponta para o prototype do TYPE que a variável foi criado. Esse TYPE,chamamos de constructor.    

[Hireritance.js](./hireritance/hireritance.js)



Classes
=======
Açucar sintático adicionado no ES6, que por baixo dos panos utiliza prototype.   
class, extends, constructor, super, static.    

[Classes](./Classe/)

Prototypes
==========

Prototypes não criam cópias de um objeto como classes, mas são referenciados por outros objetos e estes objetos não tem uma cópia do que há no prototype, apenas um link a esse prototype.


Analogia.   
Classes no mundo real seriam "blueprints" , projetos, diagrama.

Prototype no mundo real seria delegar a outra entidade realizar as tarefas (function) ou mostrar dados (proprieties) que você não tem e mostrar os resultados como se fossem seus, mas você não os tem.

Se a propriedade que você procura não está no objeto e ele tem um prototype, o javascript irá procurar esta propriedade (que pode ser um método, outro objeto ou um valor) no prototype.


Modificadores de acesso 
=======================

Não há no momento    

this.# em implementação Stage 3 ESNext



Encapsulamento
===============

Em implementação no Javascrit por conta dos modificadores de acesso


Static
=======

Permite acessar atributos e métodos sem instanciar um objeto de uma classe.

