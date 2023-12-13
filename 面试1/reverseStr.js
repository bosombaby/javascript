const target = '1->2->3->4->5->NULL'
const result = '5->4->3->2->1->NULL'

function reverse(target) {
  let result = target.split('->')
  let str = result
    .splice(0, result.length - 1)
    .reverse()
    .join('->')

  return str + '->NULL'
}

const res1 = reverse(target)
console.log(res1 === result)
