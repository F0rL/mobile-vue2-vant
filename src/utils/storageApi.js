/*
 * @Author: xiongfang
 * @Date: 2021-12-08 15:53:28
 * @LastEditTime: 2021-12-09 15:19:04
 * @LastEditors: xiongfang
 * @Description: 浏览器本地存储api
 * @FilePath: \mobile-vue2-vant\src\utils\storageApi.js
 */
import { clientStorage } from './storage'

const userKey = 'user_info'
const accessTokenKey = 'access_token_key'

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

// accessToken
export function setAccessToken(value) {
  clientStorage.set(accessTokenKey, value)
}

export function getAccessToken() {
  return clientStorage.get(accessTokenKey)
}

export function removeAccessToken() {
  clientStorage.remove(accessTokenKey)
}

export const clearAll = () => {
  clientStorage.clear()
}
