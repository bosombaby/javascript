// 名称：数组去重
// 描述：
//  - 输入：[1, 2, 3, 4, 4, 5, 6, 61, 1]
//  - 输出：
// 考察: 数组操作、Set 属性、Map 操作
function handleUniqueArray(target) {
  // 1. 双重 for 循环

  // 2. Set 去重集合操作
  //   return Array.from(new Set(target));

  // 3. Map 集合操作
  const map = new Map();
  let result = [];
  target.forEach((item) => {
    if (!map.has(item)) {
      result.push(item);
      map.set(item, 1);
    }
  });

  return result;
}

console.log(handleUniqueArray([1, 2, 3, 4, 4, 5, 6, 61, 1]));
