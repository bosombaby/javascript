function format(n) {
  let str = n.toString()
  let num = str
  let decimal = ''
  if (str.includes('.')) {
    num = str.split('.')[0]
    decimal = '.' + str.split('.')[1]
  }
  let len = num.length
  const remainder = len % 3
  if (remainder > 0) {
    return (
      num.slice(0, remainder) +
      ',' +
      num.slice(remainder, len).match(/\d{3}/g).join(',') +
      decimal
    )
  } else {
    return num.slice(0, len).match(/\d{3}/g).join(',') + decimal
  }
}

let result = format(1234567289.123456)
console.log(result)
