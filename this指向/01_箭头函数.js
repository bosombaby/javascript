const obj = {
    fun1: function () {
        console.log(this);
    },
    fun2: () => {
        console.log(this);
    }
}

obj.fun1(); // obj
obj.fun2(); // window