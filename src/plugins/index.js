/*
 * @Author: xiongfang
 * @Date: 2021-12-01 15:49:28
 * @LastEditTime: 2021-12-08 14:13:49
 * @LastEditors: xiongfang
 * @Description: 引入所有插件
 * @FilePath: \client\src\plugins\index.js
 */
import Vue from 'vue'
import './modules/vantCom'
import 'vant/lib/index.css'

import commonCom from './modules/commonCom'
Vue.use(commonCom)

// 自动引入svg图标
import './modules/iconAutoImport'

// 自动引入api
import api from './modules/apiAutoImport'
Vue.use(api)
