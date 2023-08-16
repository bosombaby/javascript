function createCounter() {
    let count = 0

    return function () {
        count++
        console.log(count);
    }
}

const counter = createCounter()
counter() //输出1
counter() //输出2