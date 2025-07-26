function redEvent() {
  console.log("red");
}
function greenEvent() {
  console.log("green");
}
function yellowEvent() {
  console.log("yellow");
}

const lightEvent = {
  red: redEvent,
  green: greenEvent,
  yellow: yellowEvent,
};

let timer = null;
function task(key, delay) {
  if (timer) clearTimeout(timer);
  return new Promise((resolve, reject) => {
    timer = setTimeout(() => {
      resolve(lightEvent[key]());
    }, delay);
  });
}

async function taskRunner() {
  await task("red", 3000);
  await task("green", 2000);
  await task("yellow", 1000);

  taskRunner();
}

taskRunner();
