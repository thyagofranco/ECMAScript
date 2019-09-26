

fetch('https://reqres.in/api/users/22222')
    .then(responseStream => {
        if(responseStream.status === 200){
            responseStream.json()
        }else throw new Error ('Request error')
    })
    .then(data => console.log(data));