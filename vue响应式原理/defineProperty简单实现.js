let obj = {}
Object.defineProperty(obj, 'name', {
  enumerable: true,
  configurable: true,

  get: function () {
    console.log('访问数据', this._name)
  },
  set: function (newValue) {
    this._name = newValue

    console.log('修改数据', this._name)
  },
})

obj.name = 111
