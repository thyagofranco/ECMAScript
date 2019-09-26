const Math = require('../math')

describe('Math class', () =>  {
    test('Sum two numbers', done =>  {   
        const math = new Math();
        
        math.sum(5, 5, value => {
            expect(value).toEqual(10);
            done();
        });
    }); 
    
    it('Multiply tow numbers', function() {
        const math = new Math();

        expect(math.multiply(5, 5)).toEqual(25);
    
    });

    it('Calls res with sum and index values', function(){
        const req = {};
        const res = {
            load: jest.fn()           
        };
        
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load).toBeCalled();
        expect(res.load.mock.calls[0][0]).toEqual('index');
        expect(res.load.mock.calls[0][1]).toEqual(10);
    });


});

// Para códigos async 
// utilizamos test() no lugar de it() 
// utlizamos done => {}