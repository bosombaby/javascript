// 1.如果是基本数据类型或者null，直接返回
// 2.函数 正则 日期 MAP Set: 执行对应构造题, 返回新的对象，一般的特殊类型，简单的赋值无法得到原型链上面的方法的，所以需要构造函数
// 3.weak map 解决共同引用，循环引用的问题，提高效率
// 4.判断是数组还是对象
// 5.map存储
// 6.循环加递归处理
function deepClone(target, map = new WeakMap()) {
  if (typeof target !== 'object' || target === null) return target

  const constructor = target.constructor
  if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name))
    return new constructor(target)

  if (map.get(target)) return map.get(target)

  const cloneTarget = Array.isArray(target) ? [] : {}
  map.set(target, cloneTarget)

  for (let key of Object.keys(target)) {
    cloneTarget[key] = deepClone(target[key], map)
  }
  return cloneTarget
}

const originObj = { name: 'zs', age: 28, children: { name: 'ls', age: 12 } }
const obj = deepClone(originObj)
obj.children.name = 111
console.log(obj)
console.log(originObj)
