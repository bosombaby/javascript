function uniqueArray(arr) {
  if (arr.length === 1) return arr
  arr.sort((a, b) => a - b)
  const array = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) array.push(arr[i])
  }

  console.log(array)
}

const arr = [10, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
uniqueArray(arr)
