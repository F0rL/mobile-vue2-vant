/*
 * @Author: xiongfang
 * @Date: 2021-12-08 11:36:45
 * @LastEditTime: 2021-12-08 17:54:51
 * @LastEditors: xiongfang
 * @Description: 自动挂载请求方法
 * @FilePath: \mobile-vue2-vant\src\plugins\modules\apiAutoImport.js
 */
import api from '@/api'
const install = Vue => {
  Vue.prototype.$api = api
  // Vue.prototype.$u = {}
  // Vue.prototype.$u.api = {}
  // files.keys().forEach(key => {
  //   Object.keys(files(key)).forEach(name => {
  //     Vue.prototype.$u.api[name] = files(key)[name]
  //   })
  // })
}

export default {
  install
}
