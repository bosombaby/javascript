const originObj = {
  name: 'zs',
  age: 28,
  children: { name: 'ls', age: 12 },
  //   symbol: Symbol('xxx'),
  name: undefined,
  date: new Date(),
  //   add: function () {},
}
const obj = structuredClone(originObj)
obj.children.name = 111
console.log(obj)
console.log(originObj)
