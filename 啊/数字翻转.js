// 名称：翻转数字
// 描述：
//  - 123——321、-123——-321、210——12
// 考察: 字符串操作
function reverseNum(target) {
  const isNegative = target < 0;
  const result = Math.abs(target).toString().split("").reverse().join("");
  const reversedNum = Number(result);
  return isNegative ? -reversedNum : reversedNum;
}

console.log(reverseNum(-123));
