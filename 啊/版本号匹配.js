// 名称：版本号匹配
// 描述：
//  - 比较两个版本号的大小
//  - 相同返回 0，第一个大 返回 1 第二个大 返回 -1
// 考察: 字符串处理、数组操作
function compareVersion(v1, v2) {
  const array1 = v1.split(".").map(Number);
  const array2 = v2.split(".").map(Number);
  const len = Math.max(array1.length, array2.length);

  for (let i = 0; i < len; i++) {
    const num1 = array1[i] || 0;
    const num2 = array2[i] || 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}

const array = [1, 2];

console.log(compareVersion("1.19.9", "1.19.5"));
