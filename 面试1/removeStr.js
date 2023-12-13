const target = 'aaabbbcceeff' //ababa
function removeStr(target) {
  let map = new Map()
  let array = []
  let minCount = 99999
  for (let ch of target) map.set(ch, (map.get(ch) || 0) + 1)

  for (let item of map) {
    minCount = Math.min(minCount, item[1])
  }

  for (let item of map) {
    if (item[1] === minCount) {
      array.push(item[0])
    }
  }

  let result = target.split('')
  for (let ch of array) {
    result = result.filter((item) => item != ch)
  }

  return result.join('')
}

const result = removeStr(target)
console.log(result)
