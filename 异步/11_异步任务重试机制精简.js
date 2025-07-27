const task1 = () => {
  const isTrue = Math.random() > 0.1
  return new Promise((resolve, reject) => {
    if (isTrue) {
      resolve('任务一 成功')
    } else {
      reject('任务一 失败')
    }
  })
}

const task2 = () => {
  const isTrue = Math.random() > -1
  return new Promise((resolve, reject) => {
    if (isTrue) {
      resolve('任务二 成功')
    } else {
      reject('任务二 失败')
    }
  })
}

const task3 = () => {
  const isTrue = Math.random() > 0
  return new Promise((resolve, reject) => {
    if (isTrue) {
      resolve('任务三 成功')
    } else {
      reject('任务三 失败')
    }
  })
}

function executeTasks(tasks, retries) {
  let result = []

  const exec = (task, times) => {
    return task().catch(err => {
      console.log(err, `任务重试次数 ${times}`)
      if (times <= 1) throw new Error(err)
      return exec(task, times - 1)
    })
  }

  return tasks
    .reduce((promise, task) => {
      return promise.then(() => {
        return exec(task, retries).then(res => {
          result.push(res)
        })
      })
    }, Promise.resolve())
    .then(() => result)
}

executeTasks([task1, task2, task3], 3)
  .then(res => {
    console.log('任务已完成', res)
  })
  .catch(err => {
    console.log('任务已失败', err)
  })
