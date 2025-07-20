// 名称：两数之和
// 描述：
//  - 输入：nums = [2,7,11,15], target = 9
//  - 输出：[0,1]
// 考察: 数组操作、Map 操作
function twoSum(nums, target) {
  const len = nums.length;
  let map = new Map();
  for (let i = 0; i < len; i++) {
    const secondValue = target - nums[i];
    if (map.has(secondValue)) return [i, map.get(secondValue)];
    map.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
