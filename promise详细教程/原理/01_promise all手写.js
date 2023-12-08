Promise.MyPromiseAll = function (promises) {
  let result = []
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = item
          if (Object.keys(result) === promises.length) resolve(result)
        })
        .catch((err) => {
          console.log(err)
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
const p = Promise.resolve(p4)
p.then((res) => {
  console.log('成功', p)
}).catch((err) => {
  console.log(err)
})

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected 延时1.5秒')
  }, 1500)
})
