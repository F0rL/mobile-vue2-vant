/*
 * @Author: xiongfang
 * @Date: 2021-12-15 11:37:42
 * @LastEditTime: 2022-01-06 10:09:15
 * @LastEditors: xiongfang
 * @Description: eruda移动端调试
 * @FilePath: \mobile-vue2-vant\src\plugins\modules\erudaImport.js
 */
import { mobileDebug } from '@/config'
import initEruda from '@/utils/eruda'
if (mobileDebug) {
  initEruda()
}
