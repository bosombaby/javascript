// (function () { })()
// 使用立即执行函数表达式可以创建一个独立的作用域，避免变量污染和命名冲突。

const module = (function () {
    let count = 0;
    function increment() {
        count++;
        console.log(count);
    }
    function decrement() {
        count--;
        console.log(count);
    }
    return {
        increment,
        decrement
    };
})();



module.increment(); // 输出 1
module.increment(); // 输出 2
module.decrement(); // 输出 1