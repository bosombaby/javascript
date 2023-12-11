/**
 * 实现浅度和深度的拍平数组，并通过下面两个测试用例
 */

// 拍平数组 浅度 只拍平 第一层
const flat = function (array) {
  let result = []
  for (let num of array) {
    if (Array.isArray(num)) result.push(...num)
    else result.push(num)
  }
  return result
}

// 拍平数组 深度
const flatDeep = function (array) {
  return array.reduce((acc, cur) => {
    if (Array.isArray(cur)) return acc.concat(flatDeep(cur))
    else return acc.concat(cur)
  }, [])
}

const ensure = function (output, expect, message) {
  if (JSON.stringify(output) === JSON.stringify(expect)) {
    console.log(`${message} ok`)
  } else {
    console.log(`${message} fail`)
  }
}

// 输出 test1 ok 代表测试成功
const test1 = function () {
  const input = [1, 2, [3, 4, [5, 6, [7, 8, 9]]]]
  const expect = [1, 2, 3, 4, [5, 6, [7, 8, 9]]]
  const output = flat(input)
  ensure(output, expect, 'test 1')
}

// 输出 test2 ok 代表测试成功
const test2 = function () {
  const input = [1, 2, [3, 4, [5, 6, [7, 8, 9]]]]
  const expect = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const output = flatDeep(input)
  ensure(output, expect, 'test 2')
}

const test = function () {
  test1()
  test2()
}

test()
