const inputDom = document.querySelector('#input-dom')

//防抖
function debounce(fn, delay, immediate) {
    let timer = null
    return function () {
        let context = this
        let args = arguments

        if (timer)
            clearTimeout(timer)

        if (immediate) {
            let callNow = !timer
            timer = setTimeout(() => {
                timer = null
            }, delay)

            if (callNow)
                fn.apply(context, args)

        } else {
            timer = setTimeout(() => {
                fn.apply(context, args)
            }, delay)
        }

    }
}


inputDom.addEventListener('input', debounce(function () {
    console.log('发送HTTP请求');
}, 500, true))