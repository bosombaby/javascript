const dragDom = document.querySelector("#drag-box");

//时间戳 事件会立即执行，停止触发后没有办法再次执行
// function throttle(fn, delay) {
//     let preTime = 0

//     return function () {
//         let context = this
//         let args = arguments

//         let nowTime = +new Date()
//         if (nowTime - preTime >= delay) {
//             fn.apply(context, args)

//             preTime = nowTime
//         }
//     }
// }

//定时器 delay毫秒后第一次执行，停止触发后由于计时器依然会再执行一次
function throttle(fn, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

dragDom.addEventListener(
  "drag",
  throttle(function () {
    console.log("节流");
  }, 500)
);
