// 写一个函数翻转数字，如123——321、-123——-321、210——12
//让数字变为数组/字符串，然后处理
function reverseNum(num) {
  const str = Math.abs(num).toString()
  const result = str.split('').reverse().join('')

  return Number(result)
}

console.log(reverseNum(200100))
