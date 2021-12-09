/*
 * @Author: xiongfang
 * @Date: 2021-12-08 14:31:27
 * @LastEditTime: 2021-12-08 17:59:40
 * @LastEditors: xiongfang
 * @Description:
 * @FilePath: \mobile-vue2-vant\src\api\modules\system.js
 */
import api from '@/utils/request'
export const getMenu = () => api.get('/getMenu')
