Javascript
============

Lançado em 1995 na versão beta do navegador Netscape, inicialmente com o nome de  Mocha → Livescript → Javascript (dezembro de 1995 por motivos de marketing, junto com a SUN, Netscape implementou Java no navegador (Applets).
Criador Brendan Eich : Netscape → Mozilla.

ECMAScript 
-----------
Padronização do Javascript pela ECMA, surgindo o ECMAScript, especificação ECMA262. TC39 comitê responsável pelo desenvolvimento e evolução do ECMAScript, integrantes são os donos dos Browsers.

#### ECMAScript e suas versões
- ECMAScript 1 / ES1 (1997) – Primeira versão criada do Javascript.

- ECMAScript 2 / ES2 (1998) – Apenas mudanças editoriais.

- ECMAScript 3 / ES3 (1999) – Adicionado expressões regulares e também o Try/Catch.

- ECMAScript 4 / ES4 – Nunca foi lançado/liberado.

- ECMAScript 5 / ES5 (2009) – Adicionado Strict Mode, suporte ao JSON, trim(), isArray(), também foi adicionado métodos para interação em Array. Mais detalhes das atualizações dessa versão: ECMAScript 5

- ECMAScript 5.1 (2011) – Apenas mudanças editoriais.

- ECMAScript 2015 / ES2015 ou ECMAScript 6 / ES6 –  Adicionado let e const, Array.find(), Array.findIndex(), suporte ao arrow function, também agora podemos passar um argumento com um valor por default dentro de um método. Mais detalhes das atualizações dessa versão: ECMAScript 2015/ECMAScript 6

- ECMAScript 2016 / ES2016 ou ECMASCript 7 / ES7 – Foi adicionado operador exponencial e também prototype.includes.

- ECMAScript 2017 / ES2017 ou ECMAScript 8 / ES8 – Adicionado funções assíncronas, compartilhamento de memória (Shared memory), String Padding.

- ECMAScript 2018 / ES2018 ou ECMAScript 9 / ES9 – Adicionando as propriedades rest e spread, interações assíncronas, promisse.finaly(), addtitions para RegExp.

Conceitos da linguagem
---------------------

É uma linguagem interpretada: não gera código de máquina, não é compilada e sim executada(interpretada) em tempo real. 

#### OOP
Orientada a objetos baseada em protótipos, não possuindo classes. (<ES5). Objetos herdam de outros objetos. Isso até 2015, ES6 adicionou classes, módulos entre outras melhorias.



Funções e Arrays são objetos em Javascript (por baixo dos panos).

#### Tipagem
- Tipagem fraca: Você pode fazer operações entre tipos de variável diferentes
( 1 + ‘1’ → ‘11’)   (1 + ‘Meu texto’ → “1Meu texto”)
(a = 1, b = true, a + b → 4) 

- Tipagem dinâmica: Não precisamos explicitar o tipo da variável no momento de sua criação, o interpretador no momento da execução fará isso automaticamente e uma variável pode trocar de tipo sem problema.
(a = 3 → typeof(a) → number) 
b = 30 //number
b = ‘Texto’ //String
console.log(b) → Texto


Typescript
----------
Superset do javascript, transpila o seu código para código javascript. O Typescript adciona funcionalidades ao javascript como:
Tipos, Classes (<ES5),Interface, Enuns, Generic, 


DOM
----
Document Object Model
Documento que o navegador gera quando ele carrega a página. Modelo de objeto em árvore, que possibilita o javascript alterar/interagir com qualquer elemento <tag-elemeto> da página. 
