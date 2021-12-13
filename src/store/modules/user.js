/*
 * @Author: xiongfang
 * @Date: 2021-12-08 16:51:37
 * @LastEditTime: 2021-12-13 10:18:54
 * @LastEditors: xiongfang
 * @Description: 登录、获取用户信息、退出登录、清除accessToken逻辑
 * @FilePath: \mobile-vue2-vant\src\store\modules\user.js
 */

import { getUser, setAccessToken, getAccessToken } from '@/utils/storageApi'
import api from '@/api'

const state = {
  userInfo: getUser(),
  accessToken: getAccessToken()
}

const getters = {
  accessToken: state => state.accessToken
}

const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
    setAccessToken(accessToken)
  }
}

const actions = {
  async getUserInfo({ commit }) {
    const userInfo = await api.getUser()
    commit('setUserInfo', userInfo)
  },
  async login({ dispatch, commit }) {
    const { token } = await api.getToken()
    if (token) {
      commit('setAccessToken', token)
      await dispatch('getUserInfo')
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
