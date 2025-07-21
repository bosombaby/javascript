// 1. 原型链继承
function Parent1() {
  this.name = 'parent1'
}
Parent1.prototype.say = function () {
  console.log('hello 原型链')
}
function Child1() {}
Child1.prototype = new Parent1()
const c1 = new Child1()
console.log('原型链继承:', c1)

// 2. 构造函数继承
function Parent2() {
  this.name = 'parent2'
}
function Child2() {
  Parent2.call(this)
}
const c2 = new Child2()
console.log('构造函数继承:', c2)

// 3. 组合继承
function Parent3() {
  this.name = 'parent3'
}
Parent3.prototype.say = function () {
  console.log('hello 组合')
}
function Child3() {
  Parent3.call(this)
}
Child3.prototype = new Parent3()
Child3.prototype.constructor = Child3
const c3 = new Child3()
console.log('组合继承:', c3)

// 4. 寄生组合继承

function Parent4() {
  this.name = 'Parent4'
}

Parent4.prototype.say = function () {
  console.log('寄生组合')
}

function Child4() {
  Parent4.call(this)
}

Child4.prototype = Object.create(Parent4.prototype)
Child4.prototype.constructor = Child4
const c4 = new Child4()
console.log('寄生组合继承', c4)

// 5. ES6 class继承
class Parent5 {
  constructor() {
    this.name = 'parent5'
  }
  say() {
    console.log('hello class')
  }
}
class Child5 extends Parent5 {
  constructor() {
    super()
  }
}
const c5 = new Child5()
console.log('ES6 class继承:', c5) // parent5
