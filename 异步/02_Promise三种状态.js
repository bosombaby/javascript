// const promise1 = new Promise((resolve, reject) => {

// })
// console.log(promise1);

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('promise2 resolve 调用前', promise2);
//         resolve()
//         console.log('promise2 resolve 调用后', promise2);
//     })
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('promise3 resolve 调用前', promise2);
//         reject()
//         console.log('promise3 resolve 调用后', promise2);
//     })
// })

const promise4 = Promise.resolve('调用成功')
promise4
  .then((data) => {
    console.log(data, promise4)
  })
  .catch((error) => {
    console.log(error)
  })

const promise5 = Promise.reject('调用失败')
promise5
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error, promise5)
  })
