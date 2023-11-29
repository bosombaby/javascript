const person = {
  name: "Alice",
  age: 20,
};
const person1 = {
  name: "Alice1",
  age: 20,
};

function sayHello() {
  console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
}

const sayHello2 = sayHello.bind(person1).bind(person);
// sayHello2(); // 输出 "Hello, my name is Alice, I'm 20 years old."
sayHello();

function add(x, y) {
  return x + y;
}

const add5 = add.bind(null, 5);
console.log(add5(3)); // 输出 8
console.log(add5(7)); // 输出 12
