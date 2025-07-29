function myReduce(arr, callback, initialValue) {
  // 检查数组是否为空
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Reduce of empty array with no initial value')
  }

  // 判断是否有初始值
  let accumulator = initialValue
  let startIndex = 0

  // 如果没有提供初始值，则使用数组的第一个元素作为初始值
  if (accumulator === undefined) {
    accumulator = arr[0]
    startIndex = 1
  }

  // 遍历数组，从startIndex开始
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr)
  }

  return accumulator
}

// 示例用法
const numbers = [1, 2, 3, 4]
const sum = myReduce(numbers, (acc, current) => acc + current, 0)
console.log(sum) // 输出：10
