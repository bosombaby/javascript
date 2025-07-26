// 题目：多个任务限制执行

const tasks = new Array(10).fill(0).map((_, index) => {
  return () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(index)
      }, 300)
    })
  }
})

class ConcurrencyControl {
  constructor(tasks, limit, callback) {
    this.tasks = tasks.slice()
    this.queue = new Set()
    this.limit = limit
    this.callback = callback
  }

  runTask() {
    if (this.tasks.length === 0 && this.queue.size === 0) {
      return this.callback()
    }

    while (this.queue.size < this.limit) {
      const task = this.tasks.shift()

      if (!task) return

      this.queue.add(task)

      task()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.queue.delete(task)
          this.runTask()
        })
    }
  }

  addTask() {}
}

const control = new ConcurrencyControl(tasks, 3, () => {
  console.log('执行完成')
})
control.runTask()
