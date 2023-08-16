obj = {
    func() {
        const arrowFunc = () => {
            console.log(this._name)
        }

        return arrowFunc
    },

    _name: "obj",
}

obj.func()()

func = obj.func
func()()

obj.func.bind({ _name: "newObj" })()()

obj.func.bind()()()

obj.func.bind({ _name: "bindObj" }).apply({ _name: "applyObj" })()
