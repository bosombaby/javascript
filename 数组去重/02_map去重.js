const arr = [10, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
const array = []
const map = new Map()
for (let num of arr) {
  if (!map.get(num)) {
    array.push(num)
    map.set(num, 1)
  }
}
console.log(array)
