let taskQueue = []
let timer = null
function sendTasks() {
  if (taskQueue.length) {
    // console.log是发送请求的操作
    console.log('Sending tasks:', taskQueue)
    taskQueue = []
  }
}

// 缓存优化，promise异步
export function debounce(task, callNow = false) {
  taskQueue.push(task)

  if (callNow) sendTasks()
  else {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      sendTasks()
    }, 100)
  }
}

for (let i = 0; i < 10; i++) {
  debounce(i, true)
}

setTimeout(() => {
  for (let i = 10; i < 100; i++) {
    debounce(i)
  }
}, 100)
