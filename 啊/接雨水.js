function trap(heights) {
  if (!heights.length) return 0

  let left = 0
  let right = heights.length - 1

  let leftMax = 0
  let rightMax = 0
  let waterSum = 0
  while (left < right) {
    leftMax = Math.max(leftMax, heights[left])
    rightMax = Math.max(rightMax, heights[right])

    if (leftMax < rightMax) {
      waterSum += leftMax - heights[left]
      left++
    } else {
      waterSum += rightMax - heights[right]
      right--
    }
  }

  return waterSum
}

// 测试用例
const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log('柱子高度:', heights)
console.log('接雨水量:', trap(heights)) // 输出: 6
