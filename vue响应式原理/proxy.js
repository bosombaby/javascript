const person = {
  name: '张三',
  age: 18,
  address: {
    country: '中国',
    city: '苏州',
  },
}

const handler = {
  get(target, property, receiver) {
    console.log(`访问属性 ${property}`)

    const value = Reflect.get(target, property, receiver)

    if (typeof value === 'object' && value !== null) {
      return new Proxy(value, handler)
    }

    return value
  },

  set(target, property, newValue, receiver) {
    console.log(`修改属性 ${property}`)

    if (!Object.is(target[property], newValue)) {
      return Reflect.set(target, property, newValue, receiver)
    }
  },
}

const proxy = new Proxy(person, handler)
proxy.name = 111
console.log(proxy.name)

console.log(proxy.address.city)
