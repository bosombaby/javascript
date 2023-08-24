async function test1() { // 进入函数
    console.log('test1 begin'); // 2 
    const result = await test2() // 进入test2函数

    // 异步等待上面执行完成
    console.log('result', result); // 5
    console.log('test1 end'); //6
}

async function test2() {
    console.log('test2'); //3

    return undefined; //函数返回undefined，默认封装promise
}

console.log('script start');// 1 主线程执行同步任务
test1()
console.log('script end'); // 4




