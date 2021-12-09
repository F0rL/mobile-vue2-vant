/*
 * @Author: xiongfang
 * @Date: 2021-12-08 11:50:54
 * @LastEditTime: 2021-12-09 15:43:23
 * @LastEditors: xiongfang
 * @Description: axios封装
 * @FilePath: \mobile-vue2-vant\src\utils\request.js
 */

import axios from 'axios'
import { baseURL, tokenName } from '@/config/index'
import store from '@/store'
// import { getToken } from './storageApi'
// import { Toast } from 'vant'

const request = axios.create({
  baseURL,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// request interceptor
request.interceptors.request.use(
  config => {
    if (store.getters['user/accessToken']) {
      config.headers[tokenName] = store.getters['user/accessToken']
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    // return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res = response.data
    const errorCode = Number(res.errorCode)
    if (errorCode === 0) {
      return res.data
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    console.log('error')
    console.dir(error)
    // if (error.status === 500) {
    //   Toast('网络繁忙！')
    // }
    // 断网 或者 请求超时 状态
    return Promise.reject(error)
  }
)

class ApiClient {
  /**
   * get 请求
   * @param url
   * @param data
   * @private
   */
  get(url = '', data) {
    return request.request({ url, method: 'GET', params: data })
  }
  /**
   * post 请求
   * @param url
   * @param data
   * @private
   */
  post(url = '', data, config) {
    return request.request({ url, method: 'POST', data, ...config })
  }
  /**
   * put 请求
   * @param url
   * @param data
   * @private
   */
  put(url = '', data) {
    return request.request({ url, method: 'PUT', data })
  }
  /**
   * delete 请求
   * @param url
   * @param data
   * @private
   */
  delete(url = '', data) {
    return request.request({ url, method: 'DELETE', data })
  }
}

const api = new ApiClient()
export default api
