const promise = new Promise((resolve, reject) => {
  resolve(1)
})

const p1 = promise
  .then((num) => {
    console.log('第一层 then', num)
    return num + 1
  })
  .then((num) => {
    console.log('第二层 then', num)
    return num + 1
  })
  .then((num) => {
    console.log('第三层 then', num)
    throw Error('出错')
  })
  .catch((err) => {
    console.log('捕获错误', err)
  })

console.log(p1)
