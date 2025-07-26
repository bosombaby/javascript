// 名称：合并区间
// 考察: 数组、边界条件

// 解题思路：排序 => 边界条件 => 滑动窗口
function merge(intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  let left = 1;
  let right = intervals.length;
  let [min, max] = intervals[0];

  while (left < right) {
    while (left < right && intervals[left][0] <= max) {
      max = Math.max(max, intervals[left][1]);
      left++;
    }

    result.push([min, max]);

    if (left < right) [min, max] = intervals[left];
  }

  return result;
}

const intervals = [
  [2, 6],
  [8, 10],
  [1, 3],
  [15, 18],
];
console.log(merge(intervals));
