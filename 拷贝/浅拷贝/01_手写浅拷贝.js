//1.如果是基本数据类型或者null，直接返回
//2.判断是数组还是对象
//3.索引循环直接赋值
function clone(target) {
  if (typeof target !== 'object' || target === null) return target

  const cloneTarget = Array.isArray(target) ? [] : {}
  for (let key of Object.keys(target)) {
    cloneTarget[key] = target[key]
  }

  return cloneTarget
}

// const originObj = { name: 'zs', age: 28, children: { name: 'ls', age: 12 } }
const originObj = [{ name: 'zs', age: 28, children: { name: 'ls', age: 12 } }]
const obj = clone(originObj)
console.log(obj)
