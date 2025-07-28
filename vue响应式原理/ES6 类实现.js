class Person {
  constructor(name, age) {
    this._name = name // 使用 _value 属性存储实际值
    this.age = age
  }

  get name() {
    console.log('访问变量 name')
    return this._name
  }

  set name(newValue) {
    if (newValue !== this._name) {
      console.log('修改变量 name')
      this._name = newValue
    }
  }
}

const person = new Person('张三', 18)

console.log(person)

person.name = '李四' // 触发 set 方法
console.log(person.name) // 触发 get 方法，输出：李四
