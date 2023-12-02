const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})
const promise4 = Promise.reject('这里出错了')
const promise5 = Promise.resolve('开始执行任务')
const promises = [promise1, promise2, promise3, promise4]
// const promise = Promise.all(promises)
//   .then((results) => {
//     console.log(results)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
const promise = Promise.allSettled(promises)
  .then((results) => {
    console.log(results)
  })
  .catch((error) => {
    console.log(error)
  })

promise.then((promise) => {
  console.log('开始执行')
})
