/*
 * @Author: xiongfang
 * @Date: 2021-12-08 11:36:45
 * @LastEditTime: 2021-12-08 14:39:26
 * @LastEditors: xiongfang
 * @Description: 自动挂载请求方法
 * @FilePath: \client\src\plugins\modules\apiAutoImport.js
 */
const files = require.context('@/api', false, /\.js$/)
const install = Vue => {
  Vue.prototype.$u = {}
  Vue.prototype.$u.api = {}
  files.keys().forEach(key => {
    Object.keys(files(key)).forEach(name => {
      Vue.prototype.$u.api[name] = files(key)[name]
    })
  })
}

export default {
  install
}
