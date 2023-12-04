let taskQueue = []
let timer = null
const delayTime = 100

function sendTasks() {
  if (taskQueue.length) {
    console.log('发送合并请求', taskQueue)
    taskQueue = []
  }
}

//后续可以缓存优化、promise异步、事件筛选
function debounce(task, callNow) {
  if (!taskQueue.includes(task)) taskQueue.push(task)
  if (callNow) sendTasks()
  else {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      sendTasks()
    }, delayTime)
  }
}

export default function triggerRequest(task, callNow = false) {
  debounce(task, callNow)
}

for (let i = 0; i < 10; i++) {
  triggerRequest(i, true)
}

setTimeout(() => {
  for (let i = 100; i < 200; i++) {
    triggerRequest(i)
  }
}, 1000)
