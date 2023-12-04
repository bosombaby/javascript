const obj = {
  a: 1,
  b: [1, 2, { c: true }],
  c: { e: 2, f: 3 },
  g: null,
}
function flatten(res, obj, keyname) {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (Array.isArray(obj)) flatten(res, obj[key], `${keyname}[${key}]`)
      else flatten(res, obj[key], `${keyname}.${key}`)
    } else {
      if (Array.isArray(obj)) res[`${keyname}[${key}]`] = obj[key]
      else res[`${keyname}.${key}`] = obj[key]
    }
  }
}

function flattenObj(obj) {
  let res = {}
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null)
      flatten(res, obj[key], key)
    else res[key] = obj[key]
  }

  return res
}

console.log(flattenObj(obj))
