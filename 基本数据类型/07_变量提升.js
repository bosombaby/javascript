var fn1
function fn1() {
  console.log('fn1')
}

fn1 = function () {
  console.log('fn2')
}

fn1()
