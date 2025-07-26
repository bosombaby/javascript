const obj = {
  a: 1,
  b: [1, 2, { c: true }],
  c: { e: 2, f: 3 },
  g: null,
};

function flatObj(res, target, prefix = "") {
  if (typeof target !== "object" || target === null) return target;

  for (let key in target) {
    let newPrefix = "";
    const newValue = target[key];
    if (typeof newValue === "object" && newValue !== null) {
      if (prefix)
        newPrefix = Array.isArray(newValue)
          ? prefix[`${key}`]
          : `prefix.${key}`;
      flatObj(res, newValue, newPrefix);
    } else {
      res[key] = newValue;
    }
  }
}

function main() {
  let res = {};
  flatObj(res, obj);
  console.log(res);
}

main();
