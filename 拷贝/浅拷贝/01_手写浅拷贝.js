// 1 判断是否是基本类型，基本类型直接返回
// 2 初始化定义：数组 ？ 对象
// 3 循环遍历key值，基本类型复制值，引用类型复制堆内存引用地址
let clone = (target) => {
    if (typeof target !== 'object' || target === null)
        return target

    const result = Array.isArray(target) ? [] : {}
    Object.keys(target).forEach(key => {
        result[key] = target[key]
    })

    return result
}



const originObj = { name: 1, user: { age: 18 } }
const res = clone(originObj)
