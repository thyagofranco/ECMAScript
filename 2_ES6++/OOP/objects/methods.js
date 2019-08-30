/**
 * 
 * Em javascrip métodos são propriedades que tem um function()
 * 
 */

function Apresentador(nome, discurso){
    this.nome = nome;
    this.discurso = discurso;

    this.falar = function() {
        console.log (`Apresentador: ${this.nome} fala: ${this.discurso} `);
    }
    
}

const apresentador1 = new Apresentador("Thyago", "Use protetor solar...")

apresentador1.falar();

// Recebendo Objeto

function Apresentador_({nome,discurso}){
    this.nome = nome;
    this.discurso = discurso;

    this.falar = function() {
        console.log (`Apresentador: ${this.nome} fala: ${this.discurso} `);
    }

}

const apresentador2 = new Apresentador_({nome: "Thyago Franco", discurso: "Use protetor solar..."});
apresentador2.falar();



