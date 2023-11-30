let targetProxy = ["111"];
let objProxy = new Proxy(targetProxy, {
  get(target, key) {
    console.log(`对象属性:${key}访问Proxy的get！`);
    return target[key];
  },
  set(target, key, newVal) {
    if (target[key] === newVal) {
      return;
    }
    console.log(`对象属性:${key}访问Proxy的set！`);
    target[key] = newVal;
    return target[key];
  },
});

objProxy[0];
