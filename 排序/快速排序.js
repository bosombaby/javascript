// O(nlogn); O(logn) 不稳地 较复杂，但高效，进阶的双指针和交换算法
function quickSort(left, right, arr) {
  if (left < right) {
    const mid = sort(left, right, arr);
    quickSort(left, mid - 1, arr);
    quickSort(mid + 1, right, arr);
  }
}

function sort(left, right, arr) {
  const base = arr[left];

  while (left !== right) {
    while (arr[right] >= base && right > left) {
      right--;
    }
    arr[left] = arr[right];

    while (arr[left] <= base && right > left) {
      left++;
    }
    arr[right] = arr[left];
  }

  arr[left] = base;
  return left;
}

const nums = [19, 2, 1, 5, 78, 44, 22];
quickSort(0, nums.length - 1, nums);
console.log(nums);
