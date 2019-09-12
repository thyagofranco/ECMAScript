
/*


O fetch só retorna erro de rede na promisse.

*/

//tratando erros de rede
fetch('https://reqres.in:8080/api/users/2')
    .then(responseStream => responseStream.json())
    .then(data => console.log(data))
    .catch(err => console.log('Erro: ', err));
