Desing Patterns
==================

Desing Patterns ou padrões de projeto, são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trada 
de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado.    
Surgio no livro "A Pattern Language, 1978.   

### Formatos de um pattern
Deve ter um nome, um exemplo de aplicação, o contexto ao qual pode ser aplicado, o problema que ele resolve e a forma com que ele resolve.

### Biografia

- 1987 em uma palestra " Using Pattern Languages for Object-Oriented Programs",  KENT BECK = Extreme Programing (XP) and TDD.     

- 1994 Desing Patterns: Elements of Reusable Object-Oriented Software, Gang of four (Eric Gamma, Richard Helm, Ralph Johson e John Vlissides).    

### Tipos de Desing Patterns
Criação, Estruturais, Comportamentais.

## Criação
Os padrões de criação são aqueles que abstraem e/ou adiam o processo de criação de objetos. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.

#Padrões de criação
- Abstract Factory
- Builder
- Factory Method
- Prototype 
- Singleton

## Estruturais
Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores.

#Padrões estruturais
- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Bussines Delegate
- Flyweigth
- Proxy

## Comportamentais
Os padrões comportamentais se concentram nos algoritimos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de objetos ou de classe, mas também os padrões de comunicação entre os objetos.

# Padrões comportamentais
- Chain of Responsibility.
- Command
- Interpreter
- Iterator
- Mediator
- Observer
- State
- Strategy
- Tamplate Method
- Visitor


Patterns mais utilizados no Javascript
======================================
- Factory
- Singleton
- Decorator
- Observer
- Module

### Factory
Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são consideradas funções Factory;

[Factory](factory.js)

### Singleton

O Objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la.   
Ex: jQuery:  https://jquery.com   

[Singleton](singleton.js)


### Decorator

Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.   

Disponível somente em Typescript e em estágio 2 no TC39 do Javascript.   

[Decorator](decorator.js)

### Observer

É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica
todos eles quando ocorrem mudanças no estado.

EX: RxJs (Angular)

[Observer](observer.js)

### Module

É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais.

[Module](module.js)