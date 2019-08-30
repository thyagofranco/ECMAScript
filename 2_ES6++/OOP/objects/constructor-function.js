/**
 * 
 * Uma função construtora no javascript é como se fosse um Classe de Java.
 */

function Carro(fabricante, modelo, ano, dono) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;

    this.showModel = function(){console.log(this.modelo);}
}


function Pessoa(nome, idade, sexo){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;

}

const eu = new Pessoa("Thyago",29,"M");
const meucarro = new Carro("Ferrari","F250",1994,eu);

meucarro.showModel();
console.log(meucarro.dono.nome);
console.log(meucarro.dono.idade);

