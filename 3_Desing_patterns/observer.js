/* Observable implementation

class Observable {
    constructor(){
        this.observers = [];
    }

    subscribe(f) {
        this.observers.push(f);
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data) {
        this.observers.forEach(element => this.observers(data));  //    
    }
}

*/

class Observable {
    constructor() { 
        this.observables = [];
    }

    subscribe(fn) {
        this.observables.push(fn);
    }

    notify(data) {
        this.observables.forEach(fn => fn(data));
    }

    unsubscribe(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);
o.notify('notified 2');


class mathObservable {
    constructor() {
        this.mathObservable = [];
    }

    mathSubscribe(fn) {   //  Observable recebe função
        this.mathObservable.push(fn);
    }

    mathNotify(mathData) { //  fn de cada observable recebe data 
        this.mathObservable.forEach(fn => fn(mathData));
    }

    mathUnsubscribe(fn) {   // retira um observable do array
        this.mathObservable.filter(observers => observers !== fn);
    }
}

const calculate = new mathObservable;

const sumPlusTen = data => console.log(data + 10);
const multiplyByTen = data => console.log (data * 10);
const powerByTen = data => console.log(data ** 10);

calculate.mathSubscribe(sumPlusTen);
calculate.mathSubscribe(multiplyByTen);
calculate.mathSubscribe(powerByTen);

calculate.mathNotify(1);
