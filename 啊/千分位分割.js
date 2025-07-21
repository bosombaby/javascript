// 名称：千分位分割
// 描述：
//  - 输入：11235456728.456
//  - 输出：11,235,456,728.456
// 考察: 正则表达式、数组拆分

// 小数判断 => 是3的倍数？=> 正则匹配 /\d{3}/g
function format(target) {
  let decimal = ''
  let numStr = target.toString()

  if (numStr.includes('.')) {
    ;[numStr, decimal] = numStr.split('.')
    decimal = '.' + decimal
  }

  const len = numStr.length
  const remainder = len % 3

  if (remainder) {
    return numStr.slice(0, remainder) + ',' + numStr.slice(remainder, len).match(/\d{3}/g).join(',') + decimal
  } else {
    return numStr.match(/\d{3}/g).join(',') + decimal
  }
}

let result = format(11235456728.456)
console.log(result)
