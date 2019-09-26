Fetch API
=========
A API Fetch fornece uma interface JavaScript para accessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas.    
Ela também fornece o método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.     

Este tipo de funcionalidade era obtida anteriormente utilizando XMLHttpRequest. Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como Service Workers. Fetch também provê um lugar lógico único para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP.     

Note que a especificação fetch() difere de jQuery.ajax(), principalmente, tendo em mente duas situações:

A Promise retornada do fetch() não rejeitará o status do erro HTTP, mesmo que a resposta seja um HTTP 404 ou 500. Em vez disso, ela irá resolver normalmente (com o status ok definido como falso), e só irá rejeitar se houver falha na rede ou se algo impedir a requisição de ser completada.
Por padrão, o fetch não enviará nem receberá cookies do servidor, resultando em solicitações não autenticadas se o site depende do uso de uma sessão de usuário (para enviar cookies, a opção credentials do  parâmetro init deve ser definida).



Async
==========

A declaração async function define uma função assíncrona, que retorna um objeto AsyncFunction.   

### Sintaxe    

async function nome([param[, param[, ... param]]]) {
   instruções
}

## nome
O nome da função.    

## param    
O nome de um parâmetro a ser passado para a função.   

## instruções    
As instruções que compõem o corpo da função.

# Descrição
Quando uma função assíncrona é chamada, ela retorna uma Promise. Quando a função assíncrona retorna um valor, a Promise será resolvida com o valor retornado. Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado.   

Uma função assíncrona pode conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.    

A proposta das funções async/await é de simplificar o uso de forma síncrona das Promises e executar alguns procedimentos em um grupo de Promises. Assim como Promises são similares a callbacks estruturados, funções async/await são similares à junção de generators com Promises.

Await
======

O operador await é utilizado para esperar por uma Promise. Ele pode ser usado apenas dentro de uma async function.   

# Sintaxe    
[rv] = await expressão;   

## expressão   
Uma Promise ou qualquer valor para esperar uma resolução.
## rv   
Retorna um valor final da promise, ou o próprio valor se ele não for uma Promise.

# Descrição    
A expressão await faz a execução de uma função async pausar, para esperar pelo retorno da Promise, e resume a execução da função async quando o valor da Promise é resolvido. Ele então retorna o valor final da Promise. Se esse valor não for uma Promise, ele é convertido para uma Promise resolvida.

Se a Promise for rejeitada, a expressão await invoca uma Exception com o valor rejeitado.