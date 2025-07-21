// 名称：对象扁平化
// 描述：
//  - 将嵌套对象扁平化为一层
//  - 输入：
// const obj = {
//   a: 1,
//   b: [1, 2, { c: true }],
//   c: { e: 2, f: 3 },
//   g: null,
// }
//  - 输出：
/* {
   a: 1,
   'b[0]': 1,
   'b[1]': 2,
   'b[2].c': true,
   'c.e': 2,
   'c.f': 3,
   g: null
*/
// 考察: 递归、对象操作

function flatten(res, obj, keyname = '') {
  const isArray = Array.isArray(obj)
  for (let key in obj) {
    const value = obj[key]
    const newkey = keyname ? (isArray ? `${keyname}[${key}]` : `${keyname}.${key}`) : key
    if (typeof value === 'object' && value !== null) {
      flatten(res, value, newkey)
    } else res[newkey] = value
  }
}

function flattenObj(obj) {
  let res = {}
  flatten(res, obj)
  return res
}

const obj = {
  a: 1,
  b: [1, 2, { c: true }],
  c: { e: 2, f: 3 },
  g: null,
}

console.log(flattenObj(obj))
