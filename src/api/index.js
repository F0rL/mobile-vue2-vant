/*
 * @Author: xiongfang
 * @Date: 2021-12-08 17:42:16
 * @LastEditTime: 2021-12-08 18:05:10
 * @LastEditors: xiongfang
 * @Description: 自动引入所有api
 * @FilePath: \mobile-vue2-vant\src\api\index.js
 */

const files = require.context('./modules', false, /\.js$/)
const api = {}
files.keys().forEach(key => {
  Object.keys(files(key)).forEach(name => {
    if (api[name] || typeof api[name] === 'function') {
      throw new Error(`不要重复引入-${name}`)
    }
    api[name] = files(key)[name]
  })
})

export { api as default }
