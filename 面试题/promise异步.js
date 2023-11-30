console.log("start"); //1
async function async1() {
  await async2();
  console.log("async1 end"); //4
}
async function async2() {
  console.log("async2 end"); //3
}
async1();
setTimeout(function () {
  console.log("setTimeout"); //8
});
new Promise((resolve) => {
  console.log("Promise"); //5
  resolve();
})
  .then(() => {
    console.log("promise1"); //6
  })
  .then(() => {
    console.log("promise2"); //7
  });
console.log("script end"); //2
