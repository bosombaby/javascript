let weakMap = new WeakMap();

// 只能使用对象作为键值
let objKey1 = { name: "objectKey1" };
let objKey2 = [1, 2, 3, 4, 5];
let obj = objKey1;

weakMap.set(objKey1, "value1");
weakMap.set(objKey2, "value2");

console.log(weakMap.get(objKey2));
// 不可枚举
// weakMap.keys();

objKey1 = null;
// 对象弱引用，如果没有其他地方引用这个变量，它将会被垃圾回收
console.log(weakMap.has(obj));
