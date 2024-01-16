const array = [1, 3, 6, 8, 12, 15, 23, , 26, 31, 35]

function binarySearch(nums, target) {
  let i = 0,
    j = nums.length,
    m

  while (i <= j) {
    m = parseInt(i + (j - i) / 2)

    if (nums[m] < target) i = m + 1
    else if (nums[m] > target) j = m - 1
    else return m
  }

  return -1
}

const result = binarySearch(array, 15)
console.log(result)
