import delay from 'redux-saga';

test('Async test 1', done=> {
    setTimeout(done, 35);
});

test('Async test 2', ()=> {
    return new Promise (resolve => setTimeout(resolve, 1500));
});

// delay returns a promise
// redux saga interacts with jest and shortens the specified delay
test('Async test 3', async ()=> await delay(1700));
