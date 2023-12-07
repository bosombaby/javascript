const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1500)
})

async function test() {
  console.log('before')
  const data = await promise
  console.log('data', data)
  console.log('after')
}

//上面代码等价于
async function test1() {
  console.log('before')
  promise.then((data) => {
    console.log('data', data)
    console.log('after')
  })
}

test1()
