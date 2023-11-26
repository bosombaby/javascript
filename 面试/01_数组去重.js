// let array = [1, 2, 3, 4, 4, 5, 6, 61, 1]

// const result = Array.from(new Set(array))
// console.log(result);


let array = [1, 2, 3, 4, 4, 5, 6, 61, 1]
let result = []
for (let i = 0; i < array.length; i++){
    if (result.indexOf(array[i])===-1)
        result.push(array[i])
}
console.log(result);