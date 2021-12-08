/*
 * @Author: xiongfang
 * @Date: 2021-12-08 15:52:25
 * @LastEditTime: 2021-12-08 15:52:25
 * @LastEditors: xiongfang
 * @Description: 浏览器本地缓存
 * @FilePath: \client\src\utils\storage.js
 */

class Storage {
  constructor(store) {
    this.storage = store
  }
  // 添加
  set(key, val) {
    if (val === undefined || val === '') {
      return this.remove(key)
    }
    this.storage.setItem(key, serialize(val))
    return val
  }
  // 获取
  get(key, def) {
    const val = deserialize(this.storage.getItem(key))
    return val === undefined ? def : val
  }

  has(key) {
    return this.get(key) !== undefined
  }

  remove(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  getAll() {
    const ret = {}
    this.forEach((key, val) => {
      ret[key] = val
    })
    return ret
  }
  forEach(callback) {
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i)
      callback(key, this.get(key))
    }
  }
}

// 对象转换为字符串
function serialize(val) {
  return JSON.stringify(val)
}

// 字符串转化为对象
function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(val)
  } catch (e) {
    return val || undefined
  }
}

const clientStorage = new Storage(window.localStorage)
const sessionStorage = new Storage(window.sessionStorage)

export { clientStorage, sessionStorage }
