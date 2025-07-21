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
