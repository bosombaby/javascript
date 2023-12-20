const telphone = '13300009999'
const res1 = telphone.substring(0, 4) + '****' + telphone.substring(8)
console.log(res1)

const array = telphone.split('')
array.splice(4, 4, '****')
console.log(array.join(''))
