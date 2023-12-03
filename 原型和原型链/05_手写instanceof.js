// 能否在向上查找的原型链中，找到和目标匹配的显示原型

function myInstanceof(target, origin) {
  if ((typeof target !== 'object') | (target === null)) return false
  if (typeof origin !== 'function') throw error('origin must be function')

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
    console.log(`${this.name}`)
  }
}
const p1 = new Person('张三', 14)
console.log(myInstanceof(p1, Object))
