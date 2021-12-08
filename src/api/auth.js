/*
 * @Author: xiongfang
 * @Date: 2021-12-08 11:48:50
 * @LastEditTime: 2021-12-08 15:02:31
 * @LastEditors: xiongfang
 * @Description:
 * @FilePath: \client\src\api\auth.js
 */
import api from '@/utils/request'
export const getUser = () => api.get('/auth/getUser')
export const getToken = () => api.get('/auth/getToken')
