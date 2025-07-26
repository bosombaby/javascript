// 实现 executeTasks 函数，接收任务数组 tasks（每个任务返回 Promise）和最大重试次数 retries。
// 要求：
// 返回 Promise 对象。
// 任务串行执行。
// 任务失败时重试，直到成功或达到最大重试次数。
// 超过重试次数仍未成功则抛出异常。

const task1 = () => {
  const isTrue = Math.random() > 0.1;
  return new Promise((resolve, reject) => {
    if (isTrue) {
      resolve("任务一 成功");
    } else {
      reject("任务一 失败");
    }
  });
};

const task2 = () => {
  const isTrue = Math.random() > 0.8;
  return new Promise((resolve, reject) => {
    if (isTrue) {
      resolve("任务二 成功");
    } else {
      reject("任务二 失败");
    }
  });
};

const task3 = () => {
  const isTrue = Math.random() > 0.9;
  return new Promise((resolve, reject) => {
    if (isTrue) {
      resolve("任务三 成功");
    } else {
      reject("任务三 失败");
    }
  });
};

async function execute(task, times) {
  for (let i = 1; i <= times; i++) {
    try {
      const res = await task();
      console.log("任务执行成功", res);
      return res;
    } catch (error) {
      console.log(`第 ${i} 次`, error);
      if (i === times) throw new Error(error);
    }
  }
}

async function executeTasks(tasks, retries) {
  let result = [];
  for (let task of tasks) {
    const res = await execute(task, retries);
    result.push(res);
  }

  return result;
}

executeTasks([task1, task2, task3], 3)
  .then((res) => {
    console.log("任务执行成功", res);
  })
  .catch((err) => {
    console.log("任务执行失败", err);
  });
