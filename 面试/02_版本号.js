
// compareVersion('1.11.0', '1.9.9')

let compareVersion = (v1, v2) => {
    const res1 = v1.split('.')
    const res2 = v2.split('.')
    
    // 输入判断 ，可优化

    for (let i = 0; i < res1.length; i++){
        if (parseFloat(res1[i]) > parseFloat(res2[i]))
            return 1
        else if(parseFloat(res1[i]) < parseFloat(res2[i]))
            return -1
    }
    return 0
}

console.log(compareVersion('1.10.1', '1.11.0'));
