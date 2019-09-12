
const asyncTimer = () => new Promise((resolve, reject) => {        // retorna uma promisse pendente com o valor 12345 após 4s
    setTimeout(()=> {
        resolve('12345');
    }, 4000)
});

const asyncFetch = async () => {
    const data = await asyncTimer();                                    //espera o asyncTimer resolver
    console.log(data);
    const dataJSON = await fetch('https://reqres.in/api/users/2')
        .then(responseStream => responseStream.json())
    return dataJSON;
}

asyncFetch()
    .then(data => {
        console.log(data);.then(data => console.log(data));
    })

