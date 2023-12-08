Promise.MyAll = function (promises) {
  let result = []
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res
          if (Object.keys(result).length === promises.length) resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  })
}

const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 3000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

const p4 = Promise.reject(4)

Promise.MyAll([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err)) // 2秒后打印 [

const promise = new Promise((resolve, reject) => {})
console.log(promise)
