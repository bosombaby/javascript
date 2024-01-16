const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//全排列数组状态 => 去除顺序数组 => 给定已经输出数组权重 => 优先输出权重低的数组序列
function mySortArray(array) {
  let result = [],
    len = array.length
  let min = array[0],
    max = array[len - 1]
  while (result.length < len) {
    const num = parseInt(Math.random() * max + min)

    if (array.includes(num) && !result.includes(num)) result.push(num)
  }

  if (result.join('') === array.join('')) mySortArray(array)
  return result
}

function mySortArray2(array) {
  let result = [],
    len = array.length
  let min = 0,
    max = len - 1

  while (result.length < len) {
    const index = parseInt(Math.random() * max + min)
    const num = array[index]
    if (array.includes(num) && !result.includes(num)) result.push(num)
  }

  if (result.join('') === array.join('')) mySortArray(array)
  return result
}

console.log(mySortArray2(array))
