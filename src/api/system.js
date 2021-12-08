/*
 * @Author: xiongfang
 * @Date: 2021-12-08 14:31:27
 * @LastEditTime: 2021-12-08 14:34:59
 * @LastEditors: xiongfang
 * @Description:
 * @FilePath: \client\src\api\system.js
 */
import api from '@/utils/request'
export const getMenu = () => api.get('/getMenu')
