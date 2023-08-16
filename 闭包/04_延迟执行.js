function delay(fn, timeout) {
    return function () {
        setTimeout(fn, timeout)
    }
}


function hello() {
    console.log('hello');
}

const fn = delay(hello, 2000)
fn()