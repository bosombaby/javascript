const arr = [10, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
const result = Array.from(new Set(arr))
console.log(result);

const obj = [{ obj: 1 }, { obj: 1 }]
console.log(new Set(obj));
