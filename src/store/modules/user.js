/*
 * @Author: xiongfang
 * @Date: 2021-12-08 16:51:37
 * @LastEditTime: 2021-12-08 17:00:56
 * @LastEditors: xiongfang
 * @Description: 登录、获取用户信息、退出登录、清除accessToken逻辑
 * @FilePath: \mobile-vue2-vant\src\store\modules\user.js
 */

import { getUser } from '@/utils/storageApi'

const state = {
  user: getUser()
}

const getters = {}

const mutations = {}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
