// 输入：1->2->3->4->5->NULL
// 输出：5->4->3->2->1->NULL

function traverseStr(str) {
  const array = str.split('->').slice(0, -1)
  return array.reverse().join('->') + '->NULL'
}

const target = '1->2->3->4->5->NULL'
const result = traverseStr(target)
console.log(result)
