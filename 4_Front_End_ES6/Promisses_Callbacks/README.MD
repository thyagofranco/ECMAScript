Promisses
==========

Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

### Sintexe

new Promise((resolve, reject) => {...}); 
 
new Promise(/* executor */ function(resolve, reject) { ... });

### executor
executor(resolve, reject)     
Uma função que recebe dois argumentos resolve e reject. Esta função é executada imediatamente pela implementação do Promise, passando as funções resolve e reject. O executor é chamado antes que o construtor de Promise retorne o objeto criado.  

### resolve e reject
As funções resolve e reject, quando chamadas, resolvem (em caso de sucesso) ou rejeitam (quando ocorre um erro) a promessa, respectivamente. O executor começa o trabalho assíncrono que, quando concluído, chama uma das funções resolve ou reject para definir o estado da promessa.

### Descrição
Um Promise representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.

Um Promise está em um destes estados: 

pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
fulfilled (realizada): sucesso na operação.
rejected (rejeitado):  falha na operação.
settled (estabelecida): Que foi realizada ou rejeitada.
Uma promessa pendente pode se tornar realizada com um valor ou rejeitada por um motivo (erro). Quando um desses estados ocorre, o método then do Promise é chamado, e ele chama o método de tratamento associado ao estado (rejected ou resolved).  (Se a promessa foi realizada ou rejeitada quando o método de tratamento correspondente for associado, o método será chamado, deste forma não há uma condição de competição entre uma operação assíncrona e seus manipuladores que estão sendo associados.)

### MétodosSeção
Promise.all(lista):         
Retorna uma promise que é resolvida quando todas as promises no argumento lista forem resolvidas ou rejeitada assim que uma das promises da lista for rejeitada. Se a promise retornada for resolvida, ela é resolvida com um array dos valores das promises resolvidas da lista. Se a promise for rejeitada, ela é rejeitada com o motivo da primeira promise que foi rejeitada na lista. Este método pode ser útil para agregar resultados de múltiplas promises.

Promise.race(lista):    
Retorna uma promise que resolve ou rejeita assim que uma das promises do argumento lista resolve ou rejeita, com um valor ou o motivo daquela promise.

Promise.reject(motivo)
Retorna um objeto Promise que foi rejeitado por um dado motivo.    

Promise.resolve(valor)    
Retorna um objeto Promise que foi resolvido com um dado valor. Se o valor é thenable (possui um método then), a promise retornada "seguirá" este método, adotando esse estado eventual; caso contrário a promise retornada será realizada com o valor. Geralmente, se você quer saber se um valor é uma promise ou não, utilize 

Promise.resolve(valor) e trabalhe com a valor de retorno que é sempre uma promise.   