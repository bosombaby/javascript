// immediate=true：采用时间戳方案，事件会立即执行，停止触发后不会再执行
// immediate=false：采用定时器方案，事件会延迟执行，停止触发后会再执行一次

const dragDom = document.querySelector('#drag-box')
function throttle(fn, delay, immediate = false) {
  let timer = null
  let preTime = 0

  return function () {
    const context = this
    const args = arguments

    if (immediate) {
      const nowTime = Date.now()

      if (nowTime - preTime >= delay) {
        fn.apply(context, args)
        preTime = nowTime
      }
    } else {
      if (!timer) {
        timer = setTimeout(() => {
          fn.apply(context, args)
          timer = null
        }, delay)
      }
    }
  }
}

dragDom.addEventListener(
  'drag',
  throttle(function () {
    console.log('节流')
  }, 500)
)
