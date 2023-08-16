// class Person {} 和 function Person(name, age) 都可以用来定义一个对象的构造函数，但它们有一些区别。

// 语法：class 是 ES6 中新增的语法，用于定义类和构造函数，而 function 是 JavaScript 中早期就存在的语法，用于定义函数和构造函数。

// 继承：class 支持更加简洁和灵活的继承方式，可以使用 extends 关键字来继承其他类，而 function 只能使用原型链来实现继承。

// 方法定义：在 class 中，方法可以直接定义在类的内部，而在 function 中，方法需要定义在构造函数的原型对象上。

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(this);
    }
}

const p1 = new Person('张三', 18);
p1.print()