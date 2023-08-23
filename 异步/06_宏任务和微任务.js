const dom = document.createElement('div');
dom.innerHTML = 'Hello, Promise!';
document.body.appendChild(dom)


console.log(1);
setTimeout(() => {
    console.log('宏任务 2');
    alert('setTimeout')
})


Promise.resolve().then(() => {
    console.log('微任务 3');
    alert('promise')
})

console.log(4);