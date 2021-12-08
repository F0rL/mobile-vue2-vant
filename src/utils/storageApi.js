/*
 * @Author: xiongfang
 * @Date: 2021-12-08 15:53:28
 * @LastEditTime: 2021-12-08 15:54:42
 * @LastEditors: xiongfang
 * @Description: 浏览器本地存储api
 * @FilePath: \client\src\utils\storageApi.js
 */
import { clientStorage } from './storage'

const userKey = 'User_Info'

// user
export function saveUser(value) {
  clientStorage.set(userKey, value)
}

export function getUser() {
  return clientStorage.get(userKey)
}

export function removeUser() {
  clientStorage.remove(userKey)
}

export const clearAll = () => {
  clientStorage.clear()
}
