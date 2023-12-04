function redEvent() {
  console.log('red')
}
function greenEvent() {
  console.log('green')
}
function yellowEvent() {
  console.log('yellow')
}

const lightEvent = {
  red: redEvent,
  green: greenEvent,
  yellow: yellowEvent,
}

let timer = null
let task = (lightType, delay) => {
  if (timer) clearTimeout(timer)

  return new Promise((resolve, reject) => {
    timer = setTimeout(() => {
      lightEvent[lightType]()
      resolve()
    }, delay)
  })
}

let taskRunner = async () => {
  await task('red', 3000),
    await task('green', 2000),
    await task('yellow', 1000),
    taskRunner()
}

taskRunner()
