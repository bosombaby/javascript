const person = {
    name: 'Alice',
    age: 20
};

function sayHello() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
}

sayHello.apply(person);
sayHello.call(person);

