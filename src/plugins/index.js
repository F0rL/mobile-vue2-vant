/*
 * @Author: xiongfang
 * @Date: 2021-12-01 15:49:28
 * @LastEditTime: 2022-01-06 10:01:38
 * @LastEditors: xiongfang
 * @Description: 引入所有插件
 * @FilePath: \mobile-vue2-vant\src\plugins\index.js
 */
import Vue from 'vue'
import './modules/vantCom'

import commonCom from './modules/commonCom'
Vue.use(commonCom)

// 自动引入svg图标
import './modules/iconAutoImport'

// 自动引入api
import api from './modules/apiAutoImport'
Vue.use(api)

// 移动端调试工具eruda
import './modules/erudaImport'
