/**
 
for ([expressaoInicial]; [condição]; [incremento]) {
    declaracao
}
  
 */

for(count = 1;count <=5; count++){
    console.log(count);
}

const array = ['one', 'two', 'three' ];

for (let index = 0; index < array.length; index++){
    const element = array[index];
    console.log(`Element #${index}: ${element}.`);
}

// Em casos de uso com arrays é mais utilizado o método de Array.forEach

array.forEach((element, index) => console.log(`Element #${index}: ${element}.`));
