/*
MDN

Uma função callback é uma função passada a outra função como argumento, 
que é então invocado dentro da função externa para 
COMPLETAR ALGUM TIPO DE ROTINA OU AÇÃO.


------------------


*/
//Greeting é a função callback
function greeting(name) {
    console.log('Hello ' + name);
  }
  
function InputName(callback) {
callback('Thyago Franco');
}
  
InputName(greeting);

/*

A função greting imprime Hello + um nome recebido como parâmetro,
A função inputName, recebe a função greeting, que em algum momento, dentro dela, greeting() será invocada.
A função inputName, gera uma variável name.
A função inputName, invoca a função greeting, passando como parâmetro, sua variável name.


*/