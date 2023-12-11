// promise.all

Promise._all = function (promises) {
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

const ensure = function (output, expect, message) {
  if (JSON.stringify(output) === JSON.stringify(expect)) {
    console.log(`${message} ok`)
  } else {
    console.log(`${message} error`)
  }
}

const test1 = function () {
  Promise._all([
    Promise.resolve(1),
    Promise.resolve(2),
    3,
    Promise.resolve(4),
  ]).then((l) => {
    let r = [1, 2, 3, 4]
    ensure(l, r, 'test 1')
  })
}

const test2 = function () {
  Promise._all([Promise.reject('error 1')]).catch((err) => {
    ensure(err, 'error 1', 'test 2')
  })
}

const test = function () {
  test1()
  test2()
}

test()
