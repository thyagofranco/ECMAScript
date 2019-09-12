
let myPost = {
    method: 'post',
    body: {
      "name": "morpheus",
      "job": "leader"
      }   
  }

fetch('https://reqres.in/api/users', myPost)
    .then(response => response.json())
    .then(data => console.log(data));