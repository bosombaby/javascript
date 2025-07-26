const tasks = new Array(10).fill(0).map((_, key) => {
  return () => {
    return new Promise((reolve) => {
      setTimeout(() => {
        reolve(key);
      }, 100 * key);
    });
  };
});

class ConcurrencryControl {
  constructor(tasks, limit, callback) {
    this.tasks = tasks.slice();
    this.queue = new Set();
    this.limit = limit;
    this.callback = callback;
  }

  runTask() {
    if (this.tasks.length === 0 && this.queue.size === 0)
      return this.callback();

    while (this.queue.size < this.limit) {
      const task = this.tasks.shift();
      if (!task) break;

      this.queue.add(task);

      task()
        .then((res) => {
          console.log(`current task ${res}`);
        })
        .finally(() => {
          this.queue.delete(task);
          this.runTask();
        });
    }
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

const control = new ConcurrencryControl(tasks, 3, () => {
  console.log("任务结束");
});
control.runTask();

const newTask = () => {
  return new Promise((resolve) => {
    resolve("111");
  });
};

control.addTask(newTask);
