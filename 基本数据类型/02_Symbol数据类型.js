//一、对象属性
let a = Symbol('hello')
let obj = {}
obj[a] = 'hello symbol'
console.log(obj);


//二、降低代码耦合
const judge = {
    rectangle: Symbol("rectangle"),
    triangle: Symbol("triangle")
}
function getArea(model, size) {
    switch (model) {
        case judge.rectangle:
            return size.width * size.height
        case judge.triangle:
            return size.width * size.height / 2
    }
}
let area = getArea(judge.rectangle, { width: 100, height: 200 })
console.log(area)


//三、全局共享Symbol
let s1 = Symbol("a")
console.log(Symbol.keyFor(s1));

//Symbol.for在全局注册表中寻找同样使用这样方式创建的symbol对象
let s2 = Symbol.for("a")
console.log(s1 === s2);
