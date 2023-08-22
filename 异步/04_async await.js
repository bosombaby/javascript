//一、执行async，返回的都是async函数（）

// 返回数值会封装成promise对象
async function test1() {
    return 1;
}

// 返回promise对象不修改
async function test2() {
    return Promise.resolve(1)
}

const result1 = test1()
const result2 = test2()
console.log('result1', result1);
console.log('result2', result2);

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'John', age: 30 };
            resolve(data);
        }, 5000);
    });
}

getData()
    .then(data => {
        console.log(`Name: ${data.name}, Age: ${data.age}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });


