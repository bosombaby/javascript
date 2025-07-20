// 名称：数组扁平化（多种方法）
// 描述：
//  - 实现浅度和深度的拍平数组
//  - 输入： [1, [2, 3], [4, [5, 6, [7, 8]]]]
// 考察: 数组操作、递归解析、reduce

console.log("\n --- 一：原生方法 --- \n");
function originFlat(target, depth) {
  return target.flat(depth);
}

console.log(originFlat([1, [2, 3], [4, [5, 6, [7, 8]]]], 5));

console.log("\n --- 二：reduce 叠加 --- \n");
function reduceFlat(target, depth) {
  return target.reduce((acc, cur) => {
    if (Array.isArray(cur) && depth)
      return acc.concat(reduceFlat(cur, depth - 1));
    return acc.concat(cur);
  }, []);
}

console.log(reduceFlat([1, [2, 3], [4, [5, 6, [7, 8]]]], 10));

console.log("\n --- 三：递归实现 --- \n");
function recFlat(target, depth) {
  let result = [];
  target.forEach((item) => {
    if (Array.isArray(item) && depth)
      result = result.concat(recFlat(item, depth - 1));
    else result.push(item);
  });

  return result;
}

console.log(recFlat([1, [2, 3], [4, [5, 6, [7, 8]]]], 10));
