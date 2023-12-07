const test1 = async () => {
  Promise.reject(111)

  return 111
}
console.log(test1())
