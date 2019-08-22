//Funções

function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(1,2));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
console.log(setReplace("Vai Japão","Japão","Brasil"));


//Escopo de variavel 
//Utilizando variavel em escopo local

var idade = 18;
var validar = 0;
function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

console.log(idade);
validaIdade(idade);
console.log(validar);

//utilizando variavel escopo global , vaza escopo da função
//transformo o var = validar global quando utilizo ele na função, quando ele sai da função
var validar = 0;
function validaIdade2(idade){
    if (idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
validaIdade2(idade);
console.log(validar);

//Manipulação de elementos do DOM

function clicou(){
    alert("Obrigado por clicar")
}

function clicou2(){
    //document.getElementById("agradecimento").innerHTML = "Obrigado por clicar! ";
    document.getElementById("agradecimento").innerHTML = "<b>Vá para o google. <b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.google.com.br"); //  em uma nova aba
    window.location.href = "https://www.google.com.br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    console.log("---fim de scripts---")
}

function funcaoChange(elemento){
    console.log(elemento.value);

}

//function as first class citizen
function getName() {
    return 'Thyago Franco'
}

function logFn(f) {
    console.log(f());
}

const logFResult = logFn;

const obj = { logFn: logFn };

const arr = [logFn];

logFResult(getName);    

