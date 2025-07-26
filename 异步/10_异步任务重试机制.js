// 模拟异步任务
const task1 = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 10 // 70% 成功率
    setTimeout(() => {
      if (success) {
        console.log('Task1 执行成功')
        resolve('Task1 完成')
      } else {
        console.log('Task1 执行失败')
        reject(new Error('Task1 失败'))
      }
    }, 1000)
  })
}

const task2 = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.4 // 60% 成功率
    setTimeout(() => {
      if (success) {
        console.log('Task2 执行成功')
        resolve('Task2 完成')
      } else {
        console.log('Task2 执行失败')
        reject(new Error('Task2 失败'))
      }
    }, 800)
  })
}

const task3 = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.2 // 80% 成功率
    setTimeout(() => {
      if (success) {
        console.log('Task3 执行成功')
        resolve('Task3 完成')
      } else {
        console.log('Task3 执行失败')
        reject(new Error('Task3 失败'))
      }
    }, 600)
  })
}

// 任务数组
const tasks = [task1, task2, task3]

// 单个任务重试执行函数
async function executeTaskWithRetry(task, taskName, retries) {
  let lastError

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`正在执行 ${taskName}，第 ${attempt} 次尝试`)
      const result = await task()
      console.log(`${taskName} 在第 ${attempt} 次尝试中成功`)
      return result
    } catch (error) {
      lastError = error
      console.log(`${taskName} 第 ${attempt} 次尝试失败: ${error.message}`)

      if (attempt === retries) {
        throw new Error(`${taskName} 在 ${retries} 次尝试后仍然失败: ${error.message}`)
      }

      // 可以添加延迟重试
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }
}

// 主要的 execute 函数
async function execute(tasks, retries) {
  if (!Array.isArray(tasks)) {
    throw new Error('tasks 必须是一个数组')
  }

  if (typeof retries !== 'number' || retries < 1) {
    throw new Error('retries 必须是一个大于 0 的数字')
  }

  const results = []

  try {
    // 串行执行所有任务
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i]
      const taskName = `Task${i + 1}`

      if (typeof task !== 'function') {
        throw new Error(`${taskName} 必须是一个函数`)
      }

      console.log(`\n开始执行 ${taskName}`)
      const result = await executeTaskWithRetry(task, taskName, retries)
      results.push(result)
      console.log(`${taskName} 完成，结果: ${result}`)
    }

    console.log('\n所有任务执行完成!')
    return results
  } catch (error) {
    console.error('\n任务执行失败:', error.message)
    throw error
  }
}

// 使用示例
async function main() {
  try {
    console.log('开始执行任务序列...')
    const results = await execute(tasks, 3) // 最多重试 3 次
    console.log('执行结果:', results)
  } catch (error) {
    console.error('执行失败:', error.message)
  }
}

main()
