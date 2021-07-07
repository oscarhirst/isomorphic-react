let suiteName = 'The Question List Component';

describe(suiteName, ()=> {
    
    let sum = 0;
    
    beforeEach(()=> {
        sum++;
    });


    it.only('Sums 1 + 1 correctly', ()=> {
        expect(1 + 1).toEqual(2);
    });
    
    it.only('Sums 2 + 2 correctly (and runs this test second)', ()=> {
        expect(sum + sum).toEqual(4);
    });
    
    it('Sums 3 + 4 correctly (and runs this test third)', ()=> {
        expect(sum + 4).toEqual(7);
    });


    afterAll(()=> {
        console.log(`${suiteName} ran ${sum} tests`);
    });
});
