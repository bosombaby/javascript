// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]

function twoSum(nums, target) {
  let map = new Map(),
    count
  for (let i = 0; i < nums.length; i++) {
    count = target - nums[i]
    if (map.has(count)) return [map.get(count), i]
    map.set(nums[i], i)
  }
  return []
}
