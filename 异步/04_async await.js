//一、执行async，返回的都是promise

// 返回数值会封装成promise对象
async function test1() {
  return 1;
}

// 返回promise对象不修改
async function test2() {
  return Promise.resolve(1);
}

const result1 = test1();
const result2 = test2();
console.log("result1", result1);
console.log("result2", result2);

// 二、await 对应Promise.then()
async function test3() {
  const p3 = Promise.resolve(3);

  // 下面两种等价
  p3.then((data3) => {
    console.log("data3", data3);
  });

  const data3 = await p3;
  console.log("data3", data3);
}

test3();

async function test4() {
  const data4 = await 4; //等价于Promise.resolve(4)
  console.log("data4", data4);
}

test4();

// await后面跟随异步函数
async function test5() {
  const data5 = await test1();
  console.log("data5", data5);
}
test5();

// 三、try catch对应Promise.catch
async function test6() {
  const p6 = Promise.reject(6);
  try {
    const data6 = await p6;
    console.log("data6", data6);
  } catch (e) {
    console.error(e);
  }
}

test6();
