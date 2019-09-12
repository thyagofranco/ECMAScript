
const asyncTimer = () => new Promise((resolve, reject) => {        // retorna uma promisse pendente com o valor 12345 após 4s
    setTimeout(()=> {
        resolve('12345');
    }, 4000)
    .then
});

const asyncFetch = async () => {
    const data = await Promise.all(
        [asyncTimer(),                                    //espera o asyncTimer resolver
         fetch('https://reqres.in/api/users/2')
            .then(responseStream => responseStream.json())
        ])
    return data;
    
}

asyncFetch()
    .then(data => {
        console.log(data)
    
    })

