let arr = new Array(3)
console.log(Array.isArray(arr));
console.log(Object.prototype.toString.call(arr));
console.log(arr instanceof Array);
console.log(arr.__proto__ === Array.prototype);