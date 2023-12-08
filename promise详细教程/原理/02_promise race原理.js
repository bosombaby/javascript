Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    for (let item of promises) {
      Promise.resolve(item).then(resolve, reject)
    }
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

const p4 = Promise.reject('p4 rejected')
Promise.myRace([p2, p3, p1])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
