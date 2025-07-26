function officeReduce(target) {
  return target.reduce((acc, cur) => acc + cur, 0)
}

Array.prototype.customReduce = () => {}

console.log(officeReduce([1, 2, 3, 4, 5]))
