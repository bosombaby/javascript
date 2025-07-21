// 发布-订阅模式实现
class PubSub {
  constructor() {
    // 用于存储事件及其对应的回调函数
    this.events = {}
  }

  /**
   * 订阅事件
   * @param {string} event - 事件名称
   * @param {function} callback - 事件触发时的回调函数
   */
  subscribe(event, callback) {
    if (typeof event !== 'string') {
      throw new Error('Event name must be a string')
    }
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function')
    }
    // 如果事件不存在，则初始化为一个空数组
    if (!this.events[event]) {
      this.events[event] = []
    }
    // 将回调函数添加到事件的回调列表中
    this.events[event].push(callback)
  }

  /**
   * 取消订阅事件
   * @param {string} event - 事件名称
   * @param {function} callback - 要移除的回调函数
   */
  unsubscribe(event, callback) {
    if (typeof event !== 'string') {
      throw new Error('Event name must be a string')
    }
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function')
    }
    // 如果事件不存在，直接返回
    if (!this.events[event]) return
    // 过滤掉要移除的回调函数
    this.events[event] = this.events[event].filter(cb => cb !== callback)
  }

  /**
   * 发布事件
   * @param {string} event - 事件名称
   * @param {*} data - 传递给回调函数的数据
   * @param {boolean} once - 是否只执行一次，默认 false
   */
  publish(event, data, once = false) {
    if (typeof event !== 'string') {
      throw new Error('Event name must be a string')
    }
    // 如果事件不存在，直接返回
    if (!this.events[event]) return
    // 执行所有订阅该事件的回调函数
    this.events[event].forEach(callback => callback(data))
    // 如果 once 为 true，清空该事件的回调列表
    if (once) {
      delete this.events[event]
    }
  }
}

// 创建一个公众号平台
const pubsub = new PubSub()

// 用户 A 订阅公众号
function userA(data) {
  console.log('用户 A 收到通知:', data)
}

// 用户 B 订阅公众号
function userB(data) {
  console.log('用户 B 收到通知:', data)
}

// 用户订阅公众号
pubsub.subscribe('公众号更新', userA)
pubsub.subscribe('公众号更新', userB)

// 公众号发布新文章
pubsub.publish('公众号更新', '新文章《如何学习 JavaScript》已发布！')

// 用户 A 取消订阅
pubsub.unsubscribe('公众号更新', userA)

// 公众号再次发布新文章
pubsub.publish('公众号更新', '新文章《深入理解 Vue 响应式系统》已发布！')
