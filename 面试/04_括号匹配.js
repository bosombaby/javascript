/**
 * map 存储左括号，数组模拟stack，遍历字符串
 * 如果是左括号，直接压入栈，右括号进行匹配
 */
var isValid = function (s) {
  let stack = [],
    top
  if (s.length % 2) return false
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let ch of s) {
    if (map[ch]) {
      stack.push(ch)
    } else {
      top = stack.pop()
      if (map[top] !== ch) return false
    }
  }
  return !stack.length
}
