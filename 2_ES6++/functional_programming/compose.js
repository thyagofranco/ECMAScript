const compose = (fn1,fn2) => x => fn1(fn2(x))

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!!!`;

const scream = compose(exclaim, toUpperCase);
console.log(scream("stop"));