var twoSum = function (nums, target) {
  let map = new Map(),
    count
  for (let i = 0; i < nums.length; i++) {
    count = target - nums[i]
    if (map.has(count)) return [map.get(count), i]
    else map.set(nums[i], i)
  }
  return []
}
