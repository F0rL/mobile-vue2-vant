/*
 * @Author: xiongfang
 * @Date: 2021-12-08 11:48:50
 * @LastEditTime: 2021-12-08 17:00:28
 * @LastEditors: xiongfang
 * @Description:
 * @FilePath: \mobile-vue2-vant\src\api\user.js
 */
import api from '@/utils/request'
export const getUser = () => api.get('/user/getUser')
export const getToken = () => api.get('/user/getToken')
