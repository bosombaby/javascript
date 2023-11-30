let map = new Map();

// 可以用基础类型作为键值
map.set("key1", "value1");
map.set(2, "value2");
map.set(true, "value3");

// 对象作为键值
let objKey = { name: "objKey" };
map.set(objKey, "value4");

// Map 可以枚举，keys(), values(), entries(), 和 forEach()
for (let key of map.keys()) {
  console.log(key);
}

// 强引用
objKey = null;

console.log(map);
