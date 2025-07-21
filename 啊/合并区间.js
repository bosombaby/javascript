// 名称：合并区间
// 描述：
/*
[
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
*/
// 考察: 数组、边界条件

function merge(intervals) {
  if (intervals.length < 2) return intervals

  intervals.sort((a, b) => a[0] - b[0])

  let tail = 1
  let len = intervals.length
  let [min, max] = intervals[0]
  let result = []

  while (tail < len) {
    while (tail < len && intervals[tail][0] <= max) {
      max = Math.max(max, intervals[tail][1])
      tail++
    }

    result.push([min, max])

    if (tail < len) [min, max] = intervals[tail]
  }

  return result
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
console.log(merge(intervals))
