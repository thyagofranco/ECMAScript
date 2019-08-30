// ES5

let loggedIn = false;

function callIfAuthenticated(fn) {
    return !!loggedIn && fn();
}

function sum(a, b){
    return a + b;
}

console.log(callIfAuthenticated(() => sum(2,3)));
loggedIn = true;
console.log(callIfAuthenticated(() =>sum(2,3)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum(2,3)));

//ES5


/**  
// ES6 Stage 2
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Job {
    @readonly
    title() {return 'CEO'} 
}


// ES6 Stage 2

*/

/*

// Typescript Angular

@Component({
    selector: 'app-reactive-favorite-color',
    template:`Favorite Color: <input type="text" [formControl]="favoriteColorControl">`
})

export class FavoriteColorControl {
    favoriteCorlorControl = new FormControl('');
}



// Typescript Angular

*/


