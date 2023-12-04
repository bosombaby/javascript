let obj = {}
Object.defineProperty(obj, 'name', {
  enumerable: true,
  configurable: true,
  get: function () {
    console.log('访问数据，结果为：', this._name)
  },
  set: function (newValue) {
    if (newValue === this._name) return

    this._name = newValue
    console.log('修改数据，结果为', this._name)
  },
})
obj.name = 11
obj.name
