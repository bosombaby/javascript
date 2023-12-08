Promise.myAny = function (promises) {
  let result = []
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.reject(item)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          result[index] = { status: 'rejected', msg: err }
          if (Object.keys(result).length === promises.length) reject(result)
        })
    })
  })
}

const p1 = Promise.resolve('p1')

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

const p4 = Promise.reject('p4 rejected')

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected 延时1.5秒')
  }, 1500)
})

const p6 = Promise.reject('p6 rejected')

Promise.myAny([p4, p1])
  .then((res) => {
    console.log('promise any 成功：', res)
  })
  .catch((err) => {
    console.log('promise any 出错：', err)
  })
