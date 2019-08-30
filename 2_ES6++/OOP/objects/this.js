/**
 * this sempre é definido no momento de sua execução execução.
 * 
 * this no Browser é o Objeto Windows{}
 * 
 */


let eat = function () {
    console.log(`Eating ${this.fruitName}`);
}

let fruit = {
    fruitName: 'Orange',
    eat
}

fruit.eat();
eat();


