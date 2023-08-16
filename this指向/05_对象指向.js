function func() {
    console.log(this.x)
}

obj = { x: 1 }
obj.func = func
obj.func() // 1