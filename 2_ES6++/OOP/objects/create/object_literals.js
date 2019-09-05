
var pessoa = {}
console.log(typeOf(pessoa)); // Object

var pessoa1 = {
    nome: "João",
    idade: 20,
    telefone: null,
    endereço:{
        logradouro: "Av. Brasil",
        numero: 70,
        bairro: "Centro"
    }
}

pessoa1.nome = "Thyago"  ;
pessoa1['nome'] = "Thyago Franco";
pessoa1.endereço['bairro']; // acessando objeto dento de objeto

delete pessoa1.idade; // apaga a propriedade inteira 

console.log(pessoa1)