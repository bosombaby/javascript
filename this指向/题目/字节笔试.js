var a = 0
var b = 0
var c = 0
function fn(a) {
  console.log(a++, c) //1 undefined

  function fn2(b) {
    console.log(a, b, c) // 2 2 4
  }

  var c = 4
  fn = fn2
}
fn(1)
fn(2)

var num = 0
function logA() {
  console.log(num)
}

logA()
