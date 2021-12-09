/*
 * @Author: xiongfang
 * @Date: 2021-12-08 16:51:37
 * @LastEditTime: 2021-12-09 15:41:33
 * @LastEditors: xiongfang
 * @Description: 登录、获取用户信息、退出登录、清除accessToken逻辑
 * @FilePath: \mobile-vue2-vant\src\store\modules\user.js
 */

import { getUser, setAccessToken, getAccessToken } from '@/utils/storageApi'
import api from '@/api'

const state = {
  user: getUser(),
  accessToken: getAccessToken()
}

const getters = {
  accessToken: state => state.accessToken
}

const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
    setAccessToken(accessToken)
  }
}

const actions = {
  async login({ commit }) {
    const { token } = await api.getToken()
    if (token) {
      commit('setAccessToken', token)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
