// 基本类型或 null 直接返回
// 特殊类型（函数、正则、日期、Map、Set）用构造函数新建
// 用 WeakMap 解决循环引用
// 判断数组或对象
// 用 map 存储已拷贝对象
// 递归遍历拷贝
function deepClone(target, map = new WeakMap()) {
  if (typeof target !== 'object' || target === null) return target

  if (map.get(target)) return map.get(target)

  const constructor = target.constructor
  if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return new constructor(target)

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
