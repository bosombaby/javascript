// 给你一个字符串 s，最多 可以从中删除一个字符。
// 请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。

// 判断回文数
let validPalindrome = (s) => {
    const result = s.split('').reverse().join('')
    if (result === s)
        return true
    else
        return false
};

// 删除字符
let deleteStr = (s) => {
    if (!s.length)
        return false

    if (validPalindrome(s))
        return true

    let str = s
    for (let i = 0;i<s.length;i++){
        const res1 = str.replace(s[i], '')
        if (validPalindrome(res1))
            return true
    }
    return false
}

console.log(deleteStr('abcba'));

// const result = validPalindrome('abcba')