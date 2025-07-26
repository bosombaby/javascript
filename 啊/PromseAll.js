Promise._all = function (promises) {
  let result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    if (!promises || !promises.length) return resolve([]);

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          result[index] = res;
          count++;
          if (count === promises.length) resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const ensure = function (output, expect, message) {
  if (JSON.stringify(output) === JSON.stringify(expect)) {
    console.log(`${message} ok`);
  } else {
    console.log(`${message} error`);
  }
};

const test1 = function () {
  Promise._all([
    Promise.resolve(1),
    Promise.resolve(2),
    3,
    Promise.resolve(4),
  ]).then((l) => {
    let r = [1, 2, 3, 4];
    ensure(l, r, "test 1");
  });
};

const test2 = function () {
  Promise._all([Promise.reject("error 1")]).catch((err) => {
    ensure(err, "error 1", "test 2");
  });
};

const test = function () {
  test1();
  test2();
};

test();
