//escopo global

function test(){
    //escopo de função
    {
        //escopo de bloco    
    } 
}

/**
 * 
 * Java script não tem linker, e o escopo global é quem faz a resolução de 
 * referencias externas. Ele faz uso do escopo global compartilhado para estabelecer
 * os vínculos entre diferentes partes de uma aplicação.
 * Causando problemas como no arquivo escopo_global_problem.js
 */

