const person = {
    name: 'Alice',
    age: 20
};

function sayHello() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
}

const sayHello2 = sayHello.bind(person);
sayHello2(); // 输出 "Hello, my name is Alice, I'm 20 years old."


function add(x, y) {
    return x + y;
}

const add5 = add.bind(null, 5);
console.log(add5(3)); // 输出 8
console.log(add5(7)); // 输出 12