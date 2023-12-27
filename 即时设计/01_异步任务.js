setTimeout(function () {
  console.log(1)
}, 0)

new Promise(function (resolve, reject) {
  console.log(2)

  for (var i = 0; i < 10000; i++) {
    if (i === 10) console.log(10)
    i == 9999 && resolve()
  }

  console.log(3)
}).then(function () {
  console.log(4)
})

console.log(5)

//2 10 3 5 4 1
