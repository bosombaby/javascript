let str = 'aabccd'
const map = new Map()
for (let s of str) {
  map.set(s, (map.get(s) || 0) + 1)
}
console.log(map)
