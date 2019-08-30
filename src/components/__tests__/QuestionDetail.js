import { resolve } from "path";

describe('The Question Detail Component', ()=> {
    it('Sums 1 + 1 correctly', ()=> {
        expect(1 + 1).toEqual(2);
    });

    it.skip('Sums 3 + 4 correctly', ()=> {
        expect(3 + 4).toEqual(7);
    })

    it('Async 1 ', done=>{
        setTimeout(done, 100);
    });

    it('Async 2', ()=>{
        return new Promise (
            resolve => setTimeout(resolve, 100)
        );
    });

    it('Async 3', async ()=> { await delay(100) });
});
