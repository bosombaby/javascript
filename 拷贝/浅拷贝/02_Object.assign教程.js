const user1 = {
  name: '张三',
  info: {
    sex: '男',
    age: 18,
  },
}

const user2 = {
  name: '张三11',
  info: {
    sex: '女',
    age: 22,
  },
  job: {
    location: '北京',
    price: [100, 200, 300],
  },
}

const res = Object.assign({}, user1, user2)
console.log(res)
