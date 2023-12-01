let s = 'aabccd'
const map = new Map()
for (let ch of s) {
  if (map.get(ch)) {
    map.set(ch, map.get(ch) + 1)
  } else {
    map.set(ch, 1)
  }
}

const set = new Set()
for (let ch of s) {
  set.add(ch)
}

console.log(map)
console.log(set)

const set1 = new Set([1, 1, 1, 3, 4, 52, 3, 4])
console.log(Array.from(set1))
