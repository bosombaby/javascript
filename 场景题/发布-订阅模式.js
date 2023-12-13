class PubSub {
  constructor() {
    this.events = {}
  }

  subscribe(event, callback) {
    if (!this.events[event]) this.events[event] = []

    this.events[event].push(callback)
  }
  unSunscribe(event, callback) {
    if (!this.events[event]) return

    this.events[event] = this.events[event].filter((cb) => cb !== callback)
  }
  publish(event, data) {
    if (!this.events[event]) return

    for (let item of this.events[event]) item(data)
  }
}

const pubsub = new PubSub()
function callback1(data) {
  console.log('触发订阅事件 1', data)
}

function callback2(data) {
  console.log('触发订阅事件 2', data)
}

pubsub.subscribe('myEvent', callback1)
pubsub.subscribe('myEvent', callback2)

pubsub.publish('myEvent', '11111')
