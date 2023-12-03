let obj1 = { name: 'a' }
let obj2 = { name: 'b' }
function Child(name) {
  this.name = name
}
Child.prototype = {
  constructor: Child,
  showName: function () {
    console.log(this.name)
  },
}
var name = 'd'
var child = new Child('c')
child.showName() // c
child.showName.call(obj1) //a
child.showName.apply(obj2) //b
let bind = child.showName.bind(obj1)
bind() //a
