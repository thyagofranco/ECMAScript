/*

fetch retorna uma promisse que acessamos com o .then()


*/

fetch('https://reqres.in/api/users/2')
    .then(responseStream => responseStream.json())
    .then(data => console.log(data));








