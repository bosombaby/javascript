const target = 'aaabbbcceeff'
function removeStr(target) {
  let map = new Map(),
    result = []
  for (let ch of target) map.set(ch, (map.get(ch) || 0) + 1)

  let minCount = Math.min(...map.values())

  for (let ch of target) {
    if (map.get(ch) !== minCount) result.push(ch)
  }
  return result.join('')
}

const result = removeStr(target)
console.log(result)
