const name = '小王', age = 17

const obj = {
    name: '小张',
    objAge: this.age,
    myFun: function (fm, t) {
        console.log(this.name + '年龄' + this.age)
        console.log(fm + t)
    }
}

const db = {
    name: '小李',
    age: 18
}

obj.myFun.bind(db, '北京', '上海')()
obj.myFun.call(db, '北京', '上海')
obj.myFun.apply(db, ['北京', '上海'])
