const inputDom = document.querySelector("#input-dom");

// //防抖
// function debounce(fn, delay) {
//   let timer = null;
//   return function () {
//     let context = this;
//     let args = arguments;
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// }

// inputDom.addEventListener(
//   "input",
//   debounce(function () {
//     console.log("发送HTTP请求");
//   }, 500)
// );

function debounce(fn, delay) {
  let timer = null;

  return function () {
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function getHttpData() {
  console.log("发送HTTP请求");
}

inputDom.addEventListener("input", debounce(getHttpData, 500));
