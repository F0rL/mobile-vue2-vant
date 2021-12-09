/*
 * @Author: xiongfang
 * @Date: 2021-12-08 11:36:45
 * @LastEditTime: 2021-12-08 17:38:21
 * @LastEditors: xiongfang
 * @Description: 导入所有 vuex 模块
 * @FilePath: \mobile-vue2-vant\src\store\index.js
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

// 如果需要，自动加入namespaced:true，用于解决vuex命名冲突
Object.keys(modules).forEach(key => {
  modules[key]['namespaced'] = true
})

export default new Vuex.Store({
  modules
})
