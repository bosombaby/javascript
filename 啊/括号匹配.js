// 名称：括号匹配
// 描述：
//  - 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效
//  - 输入：输入：s = "()[]{}" 输出：trues
// 考察: 栈操作、Map 集合
function isBalanced(s) {
  if (s.length % 2) return false;

  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  let popVale = "";
  for (let ch of s) {
    if (map[ch]) {
      stack.push(ch);
    } else {
      popVale = stack.pop();
      if (map[popVale] !== ch) return false;
    }
  }

  return !stack.length;
}

console.log(isBalanced("()[]{}"));
