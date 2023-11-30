let s = "aabccd";
let map = new Map();
for (let i = 0; i < s.length; i++) {
  if (map.get(s[i])) {
    map.set(s[i], map.get(s[i]) + 1);
  } else {
    map.set(s[i], 1);
  }
}

console.log(map);
