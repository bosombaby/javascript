Promise.myAllSettled = function (promises) {
  let result = []
  return new Promise((resolve, reject) => {
    const processResult = (index, msg, status) => {
      result[index] = { status, msg }

      if (Object.keys(result).length === promises.length) resolve(result)
    }

    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          processResult(index, res, 'fulfilled')
        })
        .catch((err) => {
          processResult(index, err, 'rejected')
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

Promise.myAllSettled([p4, p6, p2])
  .then((res) => {
    console.log('promise all 成功：', res)
  })
  .catch((err) => {
    console.log('promise all 出错：', err)
  })
