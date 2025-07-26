// 要求编写一个倒计时组件，该组件需要接收三个参数：
// endtime：倒计时结束的时间点
// severtime：当倒计时达到这个时间点时触发的事件
// endcallback：倒计时结束时调用的回调函数
function formatTime() {
  const nowTime = new Date();
  const year = nowTime.getFullYear();
  const month = nowTime.getMonth() + 1;
  const day = nowTime.getDay();

  const hour = nowTime.getHours();
  const millions = nowTime.getMinutes();
  const seconds = nowTime.getSeconds();

  return `${year}:${month}:${day} ${hour}:${millions}:${seconds}`;
}

function mySetTimeout(endtime, servertime, callback1, callback2) {
  let preTime = Date.now();
  let timer = null;
  let diffTime = 0;
  console.log("倒计时组件开始执行", preTime);

  timer = setInterval(() => {
    diffTime = (Date.now() - preTime) / 1000;
    console.log("diffTime", diffTime);

    if (diffTime >= servertime && callback1) {
      callback1();
      callback1 = null;
    }

    if (diffTime >= endtime) {
      callback2();
      clearInterval(timer);
    }
  }, 16);

  return () => {
    clearInterval(timer);
  };
}

// const timer = mySetTimeout(
//   10,
//   5,
//   () => {
//     console.log("中间 任务执行");
//   },
//   () => {
//     console.log("任务执行结束");
//   }
// );

console.log(formatTime());
