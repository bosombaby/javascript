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
function debounce(task, callNow = false) {
  taskQueue.push(task)

  if (callNow) sendTasks()
  else {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      sendTasks()
    }, 100)
  }
}

export function triggerRequest(task, callNow) {
  debounce(task, callNow)
}

// 使用暴露的方法
for (let i = 0; i < 10; i++) {
  triggerRequest(i, true)
}

setTimeout(() => {
  for (let i = 10; i < 100; i++) {
    triggerRequest(i)
  }
}, 100)
