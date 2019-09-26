Testes automatizados
===================

### Teste unitário
- testar de pequenas unidades do software , compartamento de um método de uma classe, de uma função, de um componente...

### Teste integrados
- testa a integração entre as pequenas unidades do software que testamos nos testes unitários. Testar o comportamento da interação de dois componentes, de duas classes, de duas funções...

### Teste funcionais , teste de integração E2E, teste Black BOX
Integração de seu sistema com outro sitema, testa o sistema E2E (End to End, de ponta a ponta). Testa uma funcionalidade de negócio do inicio ao fim.    
Testa como um usuário ou consumidor do serviço irá utilzar sem se preocupar com o que está rodando ali por baixo.


# Piramide da qualidade de software

            TestesFuncionais     
     TestesIntegradosTestesIntegrados     
TestesUnitáriosTestesUnitáriosTestesUnitários    

Devemos garantir uma ampla cobertura do software com teste unitários, completamos com teste integrados, e depois disso os testes funcionais e manuais, que são os mais custosos.    



Testes manuais e automatizados
============================

### Teste de usabilidade
### Teste de aceitação do usuário
### Protótipos
### Testes funcionais
### Exemplos
### Alpha e beta
### Mais...

Ferramentas de teste
====================

### Teste de carga e performance
### Teste de segurança
### Mais...

TDD (Test Driven Development) Kent Beck
============================= 

É um dos pilares do Extreme Programming, consiste em testar e regatorar em pequenos ciclos, onde você escreve o teste antes do código, faz o mesmo passar e refatora o código.

Escrita do teste -> Escritado do código -> Refatoração.     

- 1 - Escrever um teste para descrever o comportamento que a unidade terá. Como o código deste unidade ainda não existe, o teste vai falhar. 

- 2 - Escreve o código que será testado. com o único objetivo de fazer o teste passar. 

- 3 - Refatorar o código. Tornar ele melhor.

Este ciclo se repete ao londo do desenvolvimento. 

## Vantagens:

- Feedback rápido, garantindo que todas as pequenas partes estão sendo testadas.
- Maior segurança em alterações e novas funcionalidades
- Código mais limpo
- Produtividade (maior parte do tempo de um desenvolverdor é corrigindo bugs, então com TDD temos produtividade, pelo impacto na redução da busca de bugs)



BDD (Behavior Driven Development)
============================= 

Técnica de desenvolvimento ágil que visa integrar regras de negócio com linguagem de programação. Utilizar palávras comuns entre resposáveis de negócio e resposáveis de desenvolvimento.

### Pilares
- Testes, TDD se aplica, Podemos ao descrever nos testes as regras de negócio, o comportamento esperado, praticamente documenta o comportamento dos componentes refletindo o negócio nos testes.

- Documentação, que descreve o comportamento das suas unidades, inclusive através de exemplo.

- Exemplos

### Vantagens
- Compartilhamento de conhecimento
- Documentação dinâmica
- Visão do todo: ao termos um idioma compartilhado entre negócios e desenvolvimento, e temos as descrições do comportamento das unidades do software, todos começam a ter uma visão do todo do projeto. 


Ferramentas para testes
=======================

Mocha, Chai, jest, karma.     
Mocha = Node, Browser.

npm init 
npm i --save-dev mocha
