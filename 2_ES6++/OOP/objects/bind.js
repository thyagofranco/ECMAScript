
let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound)
    }
}

dog.talk() // "woof"
let talkFunction = dog.talk
talkFunction()  // undefined

/**
 * Problema com o contexto, talkFunction não tem o .this
 * 
 * let talkFunction = dog.talk igual a:
 * 
 * let talkFunction = function() {
 *       console.log(this.sound)
 *   }
 */

let boundFunction = talkFunction.bind(dog);
boundFunction();

/**
 * 
 * Resolvemos este problema com .bind()
 * 
 */