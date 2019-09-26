const assert = require('assert');
const Math = require('../math');
const expect = require ('chai').expect;
const sinon = require('sinon');


let testValue = 0;

describe('Math class', function() {

    //hookit (para evitar repetição)

    this.beforeEach(function() {
        testValue = 5;
    })


    it('Sum two numbers', function(done) {   
        const math = new Math();
        
        math.sum(testValue, testValue, value => {
            expect(value).to.equal(10); // valida se os dois valores passados são iguais.
            done();                  // done , parametro do it() para checar codigo async
        });  
    }); 


    it('Raises a number to the power of 2 ');
    // fica como pending e podemos utilizar como uma alerta da necessidade de escrever um teste.

    
    
    
    
    it('Multiply tow numbers', function() {
        const math = new Math();

        expect(math.multiply(5, 5)).to.equal(25);
    
    });


    // uso do sinon para crair espiões de funções
    it('Calls res with sum and index values', function(){
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index');
        expect(res.load.args[0][1]).to.equal(10);
    });

});

// moca insentiva o uso de function() e não => para controlar o escopo e utilizar .this
//it.only só testa esse código e descarta os outros.
//it.skip , ignora o teste
// chai, acrescenta expect 

