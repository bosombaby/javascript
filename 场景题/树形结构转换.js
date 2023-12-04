// https://www.nowcoder.com/discuss/536579274455764992?sourceSSR=users
let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 },
]

function convert(list) {
  let result = []
  let map = {}

  list.forEach((item) => {
    map[item.id] = { ...item, children: [] }
  })

  list.forEach((item) => {
    const parent = map[item.parentId]
    if (parent) {
      parent.children.push(map[item.id])
    } else {
      result.push(map[item.id])
    }
  })

  return result
}

let result = []
function reverseConvert(list) {
  list.forEach((item) => {
    if (item.children.length) reverseConvert(item.children)
    const { id, name, parentId } = item
    result.push({ id, name, parentId })
  })
}

const result1 = convert(list)
console.log(result1)
reverseConvert(result1)
console.log(result.sort((a, b) => a.id - b.id))
