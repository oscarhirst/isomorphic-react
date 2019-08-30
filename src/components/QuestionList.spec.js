let suiteName = 'The Question List Component';

describe(suiteName, ()=> {
    
    let sum = 0;
    
    beforeEach(()=> {
        sum++;
    });

    it('Sums 1 + 1 correctly', ()=> {
        expect(2 + 2).toEqual(4);
    });

    it('Sums 2 + 2 correctly (and runs this test second)', ()=> {
        expect(sum + sum).toEqual(4);
    });

    afterAll(()=> {
        console.log(`${suiteName} ran ${sum} tests`);
    });
});  