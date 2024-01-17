// 示例使用

let count = 0
function countCharInObject(obj, target) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      const str = obj[key].toLowerCase()
      if (str.includes(target)) {
        let matches = str.match(new RegExp(target, 'g'))

        count += matches ? matches.length : 0
      }
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      countCharInObject(obj[key], target)
    }
  }

  return count
}

const myObj = {
  a: 'Hello World',
  b: { c: 'Test', d: 'Another test' },
  e: ['This is also', 'a test'],
  f: 'Case insensitive',
}

console.log(countCharInObject(myObj, 't')) // 输出：10
