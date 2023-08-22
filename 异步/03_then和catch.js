const p1 = Promise.resolve('p1')
console.log('p1', p1);

const p1Then = p1.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

const p1Error = p1Then.then(() => {
    throw new Error('p1Error')
})

const p1ErrorCatch = p1Error.then(() => {
    console.log('p1Error Then');
}).catch(() => {
    console.log('p1Error Catch');
})