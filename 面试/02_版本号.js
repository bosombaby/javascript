function compareVersion(v1, v2) {
  const array1 = v1.split('.').map((x) => parseFloat(x))
  const array2 = v2.split('.').map((x) => parseFloat(x))

  console.log(array1, array2)
  for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
    if (array1[i] > array2[i]) return 1
    else if (array1[i] < array2[i]) return -1
  }
  return 0
}

console.log(compareVersion('1.11.0', '1.9.9'))
