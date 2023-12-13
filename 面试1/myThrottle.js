// function throttle(fn, delay) {
//   let preTime = 0

//   return function () {
//     const context = this
//     const args = arguments

//     const nowTime = Date.now()
//     if (nowTime - preTime >= delay) {
//       fn.apply(context, args)
//       preTime = nowTime
//     }
//   }
// }
