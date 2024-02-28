const inputDom = document.querySelector('#input-dom')
const btnDom = document.querySelector('#click-btn')

//防抖
function debounce(fn, delay, immediate) {
  let timer = null
  return function () {
    let context = this
    let args = arguments

    if (timer) clearTimeout(timer)

    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, delay)

      if (callNow) fn.apply(context, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, delay)
    }
  }
}

inputDom.addEventListener(
  'input',
  debounce(
    function () {
      console.log('发送HTTP请求')
    },
    500,
    true
  )
)

btnDom.addEventListener('click', debounce(searchMsg, 500))

function searchMsg() {
  console.log('搜索数据')
}
