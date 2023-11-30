const inputDom = document.querySelector("#input-dom");

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

function debounce(fn, delay) {
  let timer = null;

  return function () {
    const context = this;
    const args = arguments;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function getHttpData() {
  console.log(this, arguments);
  console.log("发送HTTP请求");
}

inputDom.addEventListener("input", debounce(getHttpData, 500));
