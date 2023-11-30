function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
  };
}

function myNew(context) {
  let obj = new Object(); //初始化
  obj.__proto__ = context.prototype; //定位原型
  let res = context.apply(obj, [...arguments].slice(1)); //将类的this改为实例的this
  return res === "Object" ? res : obj; //如果类返回对象，默认为类返回的。如果没有，则为我们创建的
}

const p1 = myNew(Person, "111", 23);
const p2 = new Person("222", 22);
console.log(p1);
console.log(p2);
