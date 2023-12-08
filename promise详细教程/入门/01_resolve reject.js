// 不是 promise 实例生成一个新的
const p1 = Promise.resolve(1)
p1.then((res) => {
  console.log(p1, res)
})

const p2 = Promise.reject(2)
p2.then((res) => {
  console.log('error', res)
}).catch((err) => {
  console.log('error', p2, err)
})

const p3 = Promise.resolve(p1)
p3.then((res) => {
  console.log('p3', res)
}).catch((err) => {
  console.log('p3', err)
})
