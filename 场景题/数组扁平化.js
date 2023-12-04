// https://juejin.cn/post/7273693216372916283

console.log('\n --- 一：原生方法 --- \n')
let arr = [1, [2, 3], [4, [5, 6, [7, 8]]]]
console.log(arr.flat()) // 默认解析一层，可以指定参数
console.log(arr.flat(Infinity)) // Infinity完全解析

console.log('\n--- 二、递归解析 ---\n')

function flatten(arr, depth) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result = result.concat(flatten(arr[i], depth - 1))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(flatten(arr, 1))
console.log(flatten(arr, 2))
console.log(flatten(arr, 3))

console.log('\n--- 三、reduce解析 ---\n')
function reduceFlatten(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return acc.concat(reduceFlatten(cur))
    } else {
      return acc.concat(cur)
    }
  }, [])
}

console.log(reduceFlatten(arr))
