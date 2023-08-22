function myInstanceof(target, origin) {
    if (typeof target === null || typeof target !== 'object') return false
    if (typeof origin !== 'function')
        throw ('origin must be function')
    let proto = Object.getPrototypeOf(target)

    while (proto) {
        if (proto === origin.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }

    return false
}


class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHello() {
        console.log(`${this.name}`);
    }
}
const p1 = new Person('张三', 14)
console.log(myInstanceof(p1, Person));