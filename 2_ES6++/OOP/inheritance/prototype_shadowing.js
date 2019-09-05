var homem = {
    sexo: "masculino"
}

var thyago = Object.create(homem);
thyago.name = 'Thyago';
thyago.idade = 20;

console.log(thyago);
console.log(thyago.sexo)

/* Ao criar a propriedade sexo em thyago, seu valor sempre será retornado
pois já não é mais preciso buscar no protótipo esta propriedade. Ela faz
sombra (se sobrepõe) a propriedade do protótipo.
*/

thyago.sexo = "feminino";
console.log(thyago);

//Ao deletar a propriedade de thyago, ele volta a referenciar o prototipo
delete thyago.sexo;
console.log(thyago.sexo);

// Mostrando as propriedades apenas do objeto
console.log(Object.keys(thyago));

for (var property in thyago) {
    if(!thyago.hasOwnProperty(property)) continue;
    console.log(property);
}


// Mostrando as propriedades do objeto e propriedades herdadas de seus protótipos
for (var property in thyago) {
    console.log(property);
}

