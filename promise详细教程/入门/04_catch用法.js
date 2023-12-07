const promise = new Promise((resolve, reject) => {
  reject('出错')
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
    throw Error('第三层出错')
  })
  .catch((err) => {
    console.log('捕获错误', err)
  })
  .finally(() => {
    console.log('最后执行')
  })

console.log(p1)
