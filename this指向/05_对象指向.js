let x = 10
let fn2 = () => {
    console.log(this.x);
}

const obj = {
    x: 1,
    fn1(){
        console.log(this.x);
    },
    fn2
}

obj.fn1()
obj.fn2()