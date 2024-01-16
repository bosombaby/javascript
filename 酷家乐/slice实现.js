function mySlice(array, start, end) {
  let result = []

  if (end < 0) end += array.length

  if (!end) end = array.length

  for (let i = start; i < end; i++) {
    result.push(array[i])
  }

  return result
}

const array = [1, 2, 3, 4, 5, 6]
console.log(mySlice(array, 2))
console.log(array.slice(2))
