/*

switch (expressão) {
    case valor1:
        ...
        break;
    case valor2:
        ...
        break;
    case valor3:
        ...
        break;
}


*/


const fruit = 'mamão';

switch (fruit) {

    case 'banana':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 19,00 / kg');
        break;
    default:
        console.log('Produto não existe no estoque. ');
        break;

}