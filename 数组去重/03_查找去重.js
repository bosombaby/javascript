const arr = [10, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
const array = []
for (let num of arr) {
  if (array.indexOf(num) === -1) array.push(num)
}
console.log(array)
