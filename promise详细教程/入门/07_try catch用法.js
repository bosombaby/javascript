// 三、try catch对应Promise.catch
async function test() {
  const promise = Promise.reject('出错') //2
  try {
    console.log('before') //1
    const data = await promise
    console.log('data', data)
  } catch (e) {
    console.error(e) //3
  }
}

test()
