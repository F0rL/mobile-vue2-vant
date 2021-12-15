/*
 * @Author: xiongfang
 * @Date: 2021-12-15 11:37:42
 * @LastEditTime: 2021-12-15 11:43:12
 * @LastEditors: xiongfang
 * @Description: eruda移动端调试
 * @FilePath: \Client\src\plugins\modules\erudaImport.js
 */
import { mobileDebug } from '@/config'

if (mobileDebug) {
  !(function () {
    var script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/eruda'
    document.body.appendChild(script)
    script.onload = function () {
      eruda.init()
    }
  })()
}
