//  break  (sai do loop)

console.log('Examplo da utilização de break');

var index = 0;

while(true) {
    index++;

    if ( index > 2) {
        break; // sai do loop
    }

    console.log(index);
}


// continue (pula uma iteração)

var array = [1, 2, 3, 4, 5 , 6];

for (var index = 0; index < array.length; index++) {
    const element = array[index];

    if (element % 2 === 0){
        continue; // Pula uma iteração, mas não sai do loop
    }

    console.log(element)
}