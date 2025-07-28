const person = {
  name: '张三',
  age: 18,
}

const vm = {}

Object.defineProperty(vm, 'name', {
  get() {
    console.log('访问变量 name')
    return person.name
  },

  set(newValue) {
    if (newValue !== person.name) {
      console.log('修改变量 name')
      person.name = newValue
    }
  },

  enumerable: true,
  configurable: true,
})

console.log(person, vm)
vm.name = '李四'
console.log(vm.name)
